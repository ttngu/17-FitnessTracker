// Add dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

// Express logging and routing
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes");
require("./routes/html-routes");

// Setup Mongo connection

// App Listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});