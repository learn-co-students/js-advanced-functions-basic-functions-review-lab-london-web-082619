// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(flair="*"){

    return function innerFunction(param="special"){
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add,
    subtract,
    multiply, 
    divide
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

function actionApplyer(startingInt, arrayOfTransforms){
    let a = startingInt;
    arrayOfTransforms.forEach(newArray => newArray(a))
    return a;
}
