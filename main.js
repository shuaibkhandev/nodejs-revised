// Load environment variables from .env file
require("dotenv").config();

// Import Express
const express = require("express");
const app = express();

// Import DB connection function
const DB_Conn = require("./config/db");

// Import middlewares
const { logReqRes } = require("./middlewares"); 

// Import routes
const UsersRoute = require("./routes/users");

// Define server port
const port = process.env.PORT || 8000;

// Connect to database
DB_Conn(`${process.env.DB}/learning_db`);

// Register built-in middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Register custom middleware for logging
app.use(logReqRes("log.txt"));

// Register routes
app.use("/api/users", UsersRoute);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
