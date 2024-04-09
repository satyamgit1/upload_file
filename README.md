# File Upload with Node.js and MongoDB

This is a simple file upload application built with Node.js, Express, Multer, and MongoDB. It allows users to upload files, which are then stored in MongoDB Atlas.

## Features

- Upload files: Users can upload files using a simple web form.
- Store file data: File data, including the filename and path, is stored in MongoDB Atlas.
- View uploaded files: Users can view a list of uploaded files on the homepage.

## Technologies Used

- Node.js
- Express.js
- Multer (for file upload handling)
- MongoDB (for storing file data)
- EJS (for server-side rendering)

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Set up a MongoDB Atlas cluster and obtain a connection string.
4. Replace the MongoDB connection string in `app.js` with your own connection string.
5. Create a directory named `uploads` in the root of the project.
6. Start the server by running `npm start`.
7. Open your web browser and navigate to `http://localhost:8000`.

## Usage

1. Access the homepage by navigating to `http://localhost:8000`.
2. Use the file upload form to select a file and upload it.
3. View the list of uploaded files on the homepage.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by a tutorial on file uploading with Node.js and MongoDB.
- Special thanks to [Multer](https://www.npmjs.com/package/multer) and [MongoDB](https://www.mongodb.com/) for their powerful features.

