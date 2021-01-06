const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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