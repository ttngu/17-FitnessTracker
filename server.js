// Add dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

// Express logging and routing

// Setup Mongo connection