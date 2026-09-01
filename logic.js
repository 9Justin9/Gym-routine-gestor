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

// Exercises
const benchPress = new Exercise("Bench Press", 3, 8, 85);
console.log(benchPress);
benchPress.volume();

const weightedPullUps = new Exercise("Weighted Pull-up's", 3, 8, 17.5);
console.log(weightedPullUps);
weightedPullUps.volume();
