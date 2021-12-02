// function upFirst(name){
//
//     return (`${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`)
//
// }
//
// console.log(upFirst('GTNHJD'))


// function truncate(str, maxlength){
//     if (str.length > maxlength){
//         return (srt = str.slice(0, +maxlength + 1) + "...")
//     }
// }
// console.log(truncate('gfhljkhlk', 5))


// function getShortName(fullName){
//     let arr = ['иванов', 'сергей', 'петрович'];
//     return (`${arr[0].slice(0,1).toUpperCase()}${arr[0].slice(1).toLowerCase()} ${arr[1].slice(0,1).toUpperCase()}.${arr[2].slice(0,1).toUpperCase()}.`)
//
// }
//
// console.log(getShortName())


//     let arr = [
//         {
//             name: 'Pieter',
//             age: 23,
//             username: 'Pen'
//
//         },
//         {
//
//             age: 28,
//             username: 'John'
//
//         },
//         {
//             name: 'Mary',
//             age: 18
//
//
//         },
//     ]
// let getName= arr.map(function (item, index, array) {
//     return item ? item.name: -1;
//
// });
//
// console.log(getName)


// let arr0 = ['Pieter', 'john'];
// let arr1 = ['Pen', 'Mary'];
// const arr3 = [...arr0, ...arr1]
// console.log(arr3)


// let arr = ['Pieter', 'john', 'Patrik', 'Pen', 'Pieter'];
// let arr1 = ['Pen', 'Mary'];
// function removeDuplicates(arr, arr1) {
//     let arr2 = [];
//     const fullArray = arr.concat(arr1);
//     for (let item of fullArray) {
//         if (!arr2.includes(item)) {
//             arr2.push(item);
//         }
//     }
//     return arr2;
//
// }
//
// console.log(removeDuplicates(arr, arr1));

// const snakeToCamel = str =>
//     str.toLowerCase().replace(/([-_][a-z])/g, group =>
//         group
//             .toUpperCase()
//             .replace('-', '')
//             .replace('_', '')
//     );
// console.log(snakeToCamel('to_camel_kjhvg'))


// function getSum(num1, oper, num2){
//     if (num1 == "" || num2 == "" || isNaN(num1) || isNaN(num2)){
//         return false
//     }else if (oper == '+'){
//         return +num1 + +num2
//     }
//     else if (oper == '-'){
//         return num1 - num2
//     }else if (oper == '*'){
//         return num1 * num2
//     }else if (oper == '/'){
//         return num1 / num2
//     }
// }
//
// console.log(getSum(5,'/',4))


// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'Marry',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25
//     },
//
// ]
// let getUsers = users.map(function (item, index, array) {
//     return item ? item.name : -1;
// });
//
//     console.log(getUsers)




// let arr = [6, 13, 'hammer', 18, 'ford'];
// let getArr = arr.map(function (item) {
//     if (!isNaN(item))
//     return item * 2;
//     else
//        for (let char of item)
//            return char
// })
//
// console.log(getArr)



