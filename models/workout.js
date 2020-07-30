const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter excercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter excercise name"
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },  
        }
    ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;