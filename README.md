# Where's Waldo Photo Tagging App

This project is a full-stack application that implements a game similar to Where's Waldo, allowing users to find characters (such as Waldo, Odlaw, and Wizard) in an image. The app consists of a front-end developed in React with Typescript and a back-end API built with Node.js, Express, and MongoDB.

![home-page](image.png)

## Features

- Users can view an image and search for characters.
- Users can tag the characters they find in the image.
- The application stores tag locations and character information in a MongoDB database.
- The Game is responsive and adapts to different screen sizes.

## Technologies Used

- React: Front-end library for building user interfaces.
- Node.js: JavaScript runtime for server-side development.
- Express: Web application framework for Node.js.
- MongoDB: NoSQL database to store character information and tag locations.
- TypeScript: Typed superset of JavaScript for improved code quality and scalability.

## Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running.

### Backend Setup

1. Navigate to the `server` directory.
2. Install dependencies: `npm install`.
3. Start the server: `npm run serverstart`.
4. The backend server should now be running on http://localhost:3000.

### Frontend Setup

1. Navigate to the `client` directory.
2. Install dependencies: `npm install`.
3. Start the React app: `npm run dev`.
4. The frontend development server should run.

## Backend API Endpoints

- `POST /position`: Add a tag location for a character.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was inspired by the Where's Waldo game.
- It is part of my participation of The Odin Project.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.
