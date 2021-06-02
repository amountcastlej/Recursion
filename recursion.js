// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
// var a = 0;
// function recSigma(num) {
//     if(num > 0) {
//         a += num
//         console.log(a)
//         return recSigma(num-1);
//     }
//     return a
// }
// console.log(recSigma(10))

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
// var a = 0
// function recFact(num) {
//     if(num > 1) {
//         return recFact(num-1) * num;
//     }
//     return 1
// }

// console.log(recFact(6))

// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true;

// function recBinarySearch(arr, value) {
//     var middle = Math.floor(arr.length/2);
//     if(arr[middle] == value) {
//         return true;
//     }
//     else if(value < arr[middle] && arr.length > 1) {
//         return recBinarySearch(arr.slice(0, middle), value);
//     }
//     else if(value > arr[middle] && arr.length > 1) {
//         return recBinarySearch(arr.slice(mid, arr.length), value)
//     } else {
//         return false
//     }
// }

// console.log(recBinarySearch([1, 3, 5, 6], 4));
// console.log(recBinarySearch([4, 5, 6, 8, 12], 5));



// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

// function recGCF(num1, num2) {
//     if (param1 == pnum) {
//         return param1;
//     }
//     if (num1 > pnum) {
//         return recGCF(num1-num2, num2);
//     }
//     if (num1 < num2) {
//         return recGCF(num1, num2-num1);
//     }
// }

// console.log(recGCF(6, 30));   
// console.log(recGCF(18, 27)); 
// console.log(recGCF(49, 14)); 

// function GCF(num1, num2) {
//     if (num1 == num2) {
//         return num1;
//     }
//     if (num1 > num2) {
//         if ((num1/num2) % 1 === 0) {
//             return num2;
//         } else {
//             return GCF(num1-num2, num2);
//         }
//     }
//     if (num1 < param2) {
//         if ((num1/param2) % 1 === 0) {
//             return param2;
//         } else {
//             return GCF(num1, num2-num1);
//         }
//     }
// }
// console.log(GCF(123456, 987654));

    // Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true;

// function recBinarySearch(arr, value) {
//     var middle = Math.floor(arr.length/2);
//     if(arr[middle] == value) {
//         return true;
//     }
//     else if(value < arr[middle] && arr.length > 1) {
//         return recBinarySearch(arr.slice(0, middle), value);
//     }
//     else if(value > arr[middle] && arr.length > 1) {
//         return recBinarySearch(arr.slice(mid, arr.length), value)
//     } else {
//         return false
//     }
// }

// console.log(recBinarySearch([1, 3, 5, 6], 4));
// console.log(recBinarySearch([4, 5, 6, 8, 12], 5));



// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

// function recGCF(num1, num2) {
//     if (param1 == pnum) {
//         return param1;
//     }
//     if (num1 > pnum) {
//         return recGCF(num1-num2, num2);
//     }
//     if (num1 < num2) {
//         return recGCF(num1, num2-num1);
//     }
// }

// console.log(recGCF(6, 30));   
// console.log(recGCF(18, 27)); 
// console.log(recGCF(49, 14)); 

// function GCF(num1, num2) {
//     if (num1 == num2) {
//         return num1;
//     }
//     if (num1 > num2) {
//         if ((num1/num2) % 1 === 0) {
//             return num2;
//         } else {
//             return GCF(num1-num2, num2);
//         }
//     }
//     if (num1 < param2) {
//         if ((num1/param2) % 1 === 0) {
//             return param2;
//         } else {
//             return GCF(num1, num2-num1);
//         }
//     }
// }
// console.log(GCF(123456, 987654));
