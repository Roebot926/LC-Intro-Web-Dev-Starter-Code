let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let superChimpTwo = {
    name: "Brad", 
    species: "Chimpanzee",
    mass: 11, 
    age: 6
}

let Tardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1
}

let  Dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5
}

let crew = []
let ID = 1
// After you have created the other object literals, add the astronautID property to each one.
Tardigrade["astronautID"] = ID++
superChimpTwo["astronautID"] = ID++
salamander["astronautID"] = ID++
superChimpOne["astronautID"] = ID++
Dog["astronautID"] = ID++

superChimpOne["move"] = Math.round(Math.random()*11);

salamander["move"] = Math.round(Math.random()*11);

superChimpTwo["move"] = Math.round(Math.random()*11);

Dog["move"] = Math.round(Math.random()*11);

Tardigrade["move"] = Math.round(Math.random()*11);

// Create an array to hold the animal objects.

let animalArr = [Tardigrade, superChimpOne, superChimpTwo, Dog, salamander];

// Print out the relevant information about each animal.

console.log(animalArr);

// Start an animal race!

function fitnessTest(candidates){
    let results = [], numSteps, turns;
    for (let i = 0; i < candidates.length; i++){
        numSteps = 0;
        turns = 0;
        while(numSteps < 20){
        numSteps += candidates[i].move();
        turns++;
        }
        results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
    }
    return results;
   }