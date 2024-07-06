// JAVASCRIPT PRACTICE PROBLEMS

// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare

var number = +prompt("enter your number")
for (var i = 1; i <= 10; i++) {
  console.log(number + " * " + i + " = " + number * i);
}

// 2. print the sum of array elements
// DESCRIPTION:
// 1. Take 5 numbers from user And one by one take these numbers into array
// 2. And then find the sum of array elements and print it

var arr = [];
for (var i = 0; i < 5; i++) {
    var number = +prompt("enter your number");
    arr.push(number);
  }
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);

    // 3. print big number of array
// DESCRIPTION:
// 1. Take 5 numbers from user And one by one take these numbers into array
// 2. And then find the biggest element of an array and print it
var arr = [];
for (var i = 0; i < 5; i++) {
  var number = +prompt("enter your number");
  arr.push(number);
}
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

// 4. take string from user and print it
// DESCRIPTION:
// 1. take any input from user
// 2. and print it reverse

var str = prompt("enter your name")
var rev = str.split("").reverse().join("");
console.log(rev);

// 5. FACTORIAL
// DESCRIPTION:
// 1. Take any number from user
// 2. And find a factorial of that number and print it
var number = +prompt("enter your number");
var factorial = 1;
for (var i = 1; i <= number; i++) {
    factorial = factorial * i;
    }
    console.log(factorial);
