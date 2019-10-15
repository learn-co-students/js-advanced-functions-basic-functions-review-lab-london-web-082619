// Your code here
const saturdayFun = (activity="roller-skate") => `This Saturday, I want to ${activity}!`

const mondayWork = (work = "go to the office") => `This Monday, I will ${work}.`

const wrapAdjective = (style="*") => (adjective="special") => `You are ${style}${adjective}${style}!`

const Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
}

let actionApplyer = function(start, array) {
    let a = start
    array.forEach(newArray => newArray(a))
    return a
  }