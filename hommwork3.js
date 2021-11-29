// function examinatioNum(num1) {
//     if (!isNaN(+num1) || num1 != '') {
//         return true
//     }
//     return false
// }
//


// function outputsMean(num1, num2, num3) {
//
//     if (num1 == "" || num2 == "" || num3 == "" || isNaN(+num1)|| isNaN(+num2) || isNaN(+num3) ) {
//         return false
//     }if (num3 > num2 && num2 > num1) {
//         return num2
//     } if (num1 > num2 && num2 > num3) {
//         return num2
//     } else if (num2 > num3 && num3 > num1) {
//         return num3
//     } else if (num1 > num3 && num3 > num2) {
//         return num3
//     } else if (num3 > num1 && num1 > num2) {
//         return num1
//     } else if (num2 > num1 && num1 > num3) {
//         return num1
//     }
//
// }




// function examinationName() {
//     let obj = {
//         name: "john",
//         age: 33
//     }
//     alert('name' in obj)
//
// }


// let obj = {
//     name: 'Pieter',
//     username: 'Snaps'
// }
//
// function outputsUsername(obj) {
//
//
//     return `${obj.name} ${obj.username}`
// }
//         console.log(outputsUsername(obj))

//
// console.log(outputsUsername())
let sum = {name1: 200, name2: 500, name3: 400}
function getSum(obj){
   let qwe = 0;
   for ( let key in obj){
       qwe += obj[key]
   }
   return qwe
}
console.log(getSum(sum))
