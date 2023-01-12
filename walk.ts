// * weird walk

// * 1 -> 15, 300 -> 10
// * 15mins and 3000 steps is the limit

function walk(stepsPerMin: number){
    const mins = 15
    const maxSteps = 3000
    if (stepsPerMin * mins < maxSteps){
        return stepsPerMin * mins
    } else {
        return parseInt((( maxSteps / stepsPerMin) + maxSteps % stepsPerMin ).toString())
    }
}
// console.log(walk(305))

console.log(3000 % 305)