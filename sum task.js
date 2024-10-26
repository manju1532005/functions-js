

// 1. SUM:

function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));

// 2. REVERSE

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // Swap elements
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4])); 

// 3.SUM OF EVEN:

function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6,]));