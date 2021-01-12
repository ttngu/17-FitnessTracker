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
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://fitness-admin:<harrypotter>@cluster0.ftenn.mongodb.net/Workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("connected");
});


// App Listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});