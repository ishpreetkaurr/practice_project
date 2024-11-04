const express = require('express');
const connectDb = require("./config/dbConnection.js");
const errorHandler = require("./middlewares/errorHandler.js");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");

dotenv.config();

connectDb(); // Connect to the database
const app = express();
const PORT = process.env.PORT || 3001; // Change port to 3001

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // Ensure this points to the right directory

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Working');
});

// Register Handlebars partials
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Register route
app.use("/api/register", require("./routes/userRoutes"));
app.use("/api/doctor", require("./routes/doctorDetails")); // Ensure this route is registered

// Error handling middleware
app.use(errorHandler); // Use your error handler middleware

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});