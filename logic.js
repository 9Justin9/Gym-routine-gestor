// Classes
class Exercise {
    constructor(name, sets, reps, weight) {
        this.name = name
        this.sets = sets
        this.reps = reps
        this.weight = weight
    }
    volume () {
        console.log(`If you do ${this.sets} sets of ${this.reps} reps with ${this.weight} kg,
you would have done a volume of ${this.sets * this.reps * this.weight} kg.`)
    }
};

class Day {
    constructor(name, ...ejercicios) {
        this.name = name
        this.ejercicios = ejercicios
    }
    addExercise (Exercise) {
        this.ejercicios.push(Exercise)
        console.log(`You have successfully added the exercise: ${Exercise.name}`)
    }
    deleteExercise (Exercise) {
        this.ejercicios.pop(Exercise)
        console.log(`You have successfully added the exercise: ${Exercise.name}`)
    }
    info () {
        const names = this.ejercicios.map(exercise => exercise.name).join(", ") // AI supported
        console.log(`The day ${this.name} contains the next exercises: ${names}.`)
    }
};

// Exercises
const benchPress = new Exercise("Bench Press", 3, 8, 85);
benchPress.volume();

const weightedPullUps = new Exercise("Weighted Pull-up's", 3, 8, 17.5);
weightedPullUps.volume();

const hackSquat = new Exercise("Hack Squat", 3, 15, 50);
hackSquat.volume();

// Days
const monday = new Day("Monday", benchPress, weightedPullUps);
monday.addExercise(hackSquat);
monday.deleteExercise(hackSquat);
monday.deleteExercise(weightedPullUps);
monday.info();

const tuesday = new Day("Tuesday", weightedPullUps);
tuesday.info();

const wensday = new Day("Wensday", hackSquat);
wensday.info();