// Import nosql model
const db = require("../models");

// Define API routes
module.exports = (app) => {
    // Get Latest workout
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        })
            .catch((err) => {
                res.json(err);
            });
    });

}

    // Get All workouts 

    // Insert new doc with current date as obejctID

    // Update exercise subdoc array with new exercise