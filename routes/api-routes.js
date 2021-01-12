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
    // Get All workouts 
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        })
            .catch((err) => {
                res.json(err);
            });
    });

    // Insert new doc with current date as obejctID
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then((dbWorkout) => {
          // console.log(dbWorkout);
          res.json(dbWorkout);
        });
    });

    // Update exercise subdoc array with new exercise
    app.put("/api/workouts/:id", (req, res) => {
        // console.log(req.params, req.body);
        db.Workout.findByIdAndUpdate(req.params.id,
          { $push: { exercises: req.body } }, { runValidators: true }).then((dbWorkout) => {
          res.json(dbWorkout);
        })
          .catch((err) => {
            res.json(err);
          });
    });
};


