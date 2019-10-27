// Your code here
function saturdayFun(activity = 'roller-skate') {
 return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}


let wrapAdjective = function(flair = "*"){
    return function innerFunction(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

// const Calculator = {
//     add: function(num1, num2){
//         return num1 + num2;
//     },

//     subtract: function (num1, num2) {
//         return num1 - num2;
//     },

//     multiply: function (num1, num2) {
//         return num1 * num2;
//     },

//     divide: function (num1, num2) {
//         return num1 / num2;
//     }
// }


const Calculator = {
    add,
    subtract,
    multiply,
    divide
};

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

let actionApplyer = function (start, ray) {
    let a = start

    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }

    return a
}