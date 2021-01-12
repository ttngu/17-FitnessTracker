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

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

// Setup Mongo connection
const URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});


// App Listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});