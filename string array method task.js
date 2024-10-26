// 1. SPLIT():

let w = "mango,Orange,Grapes,Banana"
console.log(w.split(","));

// 2.REPLACE():

let name ="hello world";
console.log(name.replace("manju","hello"));

// 3.SUBSTRING():

let str = "manju m";
console.log(str.substring(7));

// 4.MAP():

let arr1= [1,2,3,4,5];
let newArr = arr1.map(x => x * 2);
console.log(newArr);

// 5.FILTER():

let arr2 = [0,1,2,3,4,5,6,7,8,9];
let evenArr = arr2.filter(x => x % 2 === 0);
console.log(evenArr);

// 6.REDUCE():

let new1 = [1,2,3,4,5];
let sum = new1.reduce((total, num) => total + num, 0);
console.log(sum);