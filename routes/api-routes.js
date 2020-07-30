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

    // create workout
    app.post("/api/workouts", ({ body }, res) => {
        Workout
            .create(body)
            .then(dbWorkout => res.json(dbWorkout))
            .catch(err => res.status(400).json(err));
    });

    // update workout
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout
            .findByIdAndUpdate(
                { _id: params.id },            
                { $push: { exercises: body } }
            )
            .then(dbWorkout => res.json(dbWorkout))
            .catch(err => res.status(400).json(err))
    });

}