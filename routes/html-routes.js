// Import Dependency
const router = require("express").Router();
const path = require("path");


// Get Route for Index
router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
})

// Get Route for Exercise | Add exercise to a workout page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
})

// Get Route for Stats Page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
})

module.exports = router;
