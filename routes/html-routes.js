// Import Dependency
const path = require("path");

//Handle HTML Requests
module.exports = (app) => {
    // Get Route for Index
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    })

    // Get Route for Exercise | Add exercise to a workout page
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/exercise.html"));
    })

    // Get Route for Stats Page
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "../public/stats.html"));
    })
};

