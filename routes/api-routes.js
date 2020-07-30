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

}