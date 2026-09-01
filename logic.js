// Classes
class Exercise {
    constructor(name, sets, reps, weight) {
        this.name = name
        this.sets = sets
        this.reps = reps
        this.weight = weight
    }
    volume () {
        return(this.sets * this.reps * this.weight + " kg")
    }
};

// Exercises
const benchPress = new Exercise("Bench Press", 3, 8, 85);
console.log(benchPress.volume());
console.log(benchPress);