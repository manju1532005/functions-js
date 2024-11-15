//1
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber(77);   
checkNumber(-8); 
checkNumber(0);   

//2
const numbers = [10, 5, 100, 3, -5, 50];

const max = Math.max(...numbers);  
const min = Math.min(...numbers); 

console.log('Max:', max); 
console.log('Min:', min);  



//3

const now=new Date();
console.log(now);

//4
function addSevenDays(date) {
    const newDate = new Date(date); 
    newDate.setDate(newDate.getDate() + 7);  
    return newDate;
}

const currentDate = new Date();  
console.log("Current Date:", currentDate);

const newDate = addSevenDays(currentDate);
console.log("New Date (7 days later):", newDate);

//5
function isPositive(number) {
    if (number > 0) {
        console.log(`a positive number.`);
        return true;
    } else {
        console.log(` not a positive number.`);
        return false;
    }
}

isPositive(15);  
isPositive(-7);  
isPositive(0);   
      