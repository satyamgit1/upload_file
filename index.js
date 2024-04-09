const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();
const PORT = 8000;

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://sa:sa@cluster0.cynglbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB Atlas");
});

// Define a schema for storing file data
const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
});

const File = mongoose.model("File", fileSchema);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.render("homepage");
});

app.post("/upload", upload.single("profileImage"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    // Create a new instance of File model
    const newFile = new File({
        filename: req.file.originalname,
        path: req.file.path,
    });

    // Save the file data to MongoDB
    try {
        await newFile.save();
        console.log("File data saved to MongoDB");
    } catch (error) {
        console.error("Error saving file data to MongoDB:", error);
        return res.status(500).send("Error saving file data to MongoDB");
    }

    return res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
});
