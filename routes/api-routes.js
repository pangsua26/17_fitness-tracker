const Workout = require("../models/workout.js");

module.exports = function(app) {
    //get last workout
    app.get("/api/workouts", (req, res) => {
        console.log("success")
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err)
            });
    });

    // get workouts in range
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .sort({ day: -1 })
            .limit(7)
            .then(dbWorkouts => {
                res.json(dbWorkouts)
            })
            .catch(err => {
                res.status(400).json(err)
            });
    });
}