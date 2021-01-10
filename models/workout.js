const mongoose = require("mongoose");
const { workout } = require(".");
const Schema = mongoose.Schema;

// Define workout and exercise details
const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,
            enum: ["cardio", "resistance"],
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        duration: {
            type: Number,
            min: 1,
            required: true,
        },
        distance: {
            type: Number,
            min: 1,
        },
        weight: {
            type: Number,
            min: 1,
        },
        reps: {
            type: Number,
            min: 1,
        },

    }]
}, 
    // Return virtual fiels as JSON response
    {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

// Export
module.exports = workout;