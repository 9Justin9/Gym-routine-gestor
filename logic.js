// Classes
class Exercise {
    constructor(name, sets, reps, weight) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
    }
    volume () {
        console.log(`If you do ${this.sets} sets of ${this.reps} reps with ${this.weight} kg,
you would have done a volume of ${this.sets * this.reps * this.weight} kg.`);
    }
}

class Day {
    constructor(name, ...ejercicios) {
        this.name = name;
        this.ejercicios = ejercicios;
    }
    addExercise (Exercise) {
        this.ejercicios.push(Exercise);
        console.log(`You have successfully added the exercise: ${Exercise.name}`);
    }
    deleteExercise (Exercise) {
        const index = this.ejercicios.indexOf(Exercise);
        if (index != -1) { // AI advice: Add conditional to the function, else, it would delete any
            this.ejercicios.splice(index, 1); // element of the array if the input doesn't exist.
            console.log(`You have successfully deleted the exercise: ${Exercise.name}.`);
        } else {
            console.log(`The exercise "${Exercise.name}" does not belong to ${this.name}.`);
        }
    }
    info () {
        const names = this.ejercicios.map(exercise => exercise.name).join(", "); // AI supported
        console.log(`The day ${this.name} contains the next exercises: ${names}.`);
    }
}

class Routine {
    constructor (name, ...days) {
        this.name = name;
        this.days = days;
    }
    daysOfTheRoutine () {
        const nameDays = this.days.map(day => day.name).join(", ");
        console.log(`The routine "${this.name}" contains this days: ${nameDays}.`);
    }
    addDay (Day) {
        this.days.push(Day);
        console.log(`You have successfully added the day ${Day.name} to the routine ${this.name}.`);
    }
    info () {
        const names = this.ejercicios.map(exercise => exercise.name).join(", "); // AI supported
        console.log(`The routine ${this.name} contains the next days: ${names}.`);
    }
}

// Exercises
const benchPress = new Exercise("Bench Press", 3, 8, 85);
benchPress.volume();

const weightedPullUps = new Exercise("Weighted Pull-up's", 3, 8, 17.5);
weightedPullUps.volume();

const hackSquat = new Exercise("Hack Squat", 3, 15, 50);
hackSquat.volume();

// Days
const push = new Day("Push", benchPress, weightedPullUps);
push.addExercise(hackSquat);
push.deleteExercise(hackSquat);
push.deleteExercise(weightedPullUps);
push.info();

const pull = new Day("Pull", weightedPullUps);
pull.info();

const legs = new Day("Legs", hackSquat);
legs.info();

// Routine
const pushPullLegs = new Routine("Push Pull Legs", push);
pushPullLegs.addDay(pull);
pushPullLegs.addDay(legs);
pushPullLegs.daysOfTheRoutine();