// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
// let wrapAdjective = function(style="*") {
//     return function(adjective="special") {
//       return `You are ${style}${adjective}${style}!`
//     }
//   }
let wrapAdjective = (param1 = "*", param1_2= "!") => {
    return function (param2= "special"){
        return `You are ${param1}${param2}${param1}${param1_2}`
    }
}

const Calculator = {
    add: function(num1, num2){
        return num1 + num2
    },
    subtract: function(num1, num2){
        return num1 - num2
    },
    multiply: function(num1, num2){
        return num1 * num2
    },
    divide: function(num1, num2){
        return num1 / num2
    }
}
function actionApplyer(strt, arrayOfFunction){
    let result = strt
    for(let i = 0; i < arrayOfFunction.length; i++){
        result = arrayOfFunction[i](result)
    }
    return result
}