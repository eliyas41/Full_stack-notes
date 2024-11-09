// function checkAge() {
//   let age = prompt("Please enter your age:"); // Get user input
//   age = Number(age); // Convert the input to a number

//   if (isNaN(age)) {
//     console.log("Please enter a valid number.");
//   } else if (age < 18) {
//     console.log("Too young to buy alcohol.");
//   } else {
//     console.log("The user is old enough to buy alcohol.");
//   }
// }

// // Call the function to execute
// checkAge();


// if (new Date().getDay() < 18) {
//   console.log("Good day");
// }

// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }


// Switch statement
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// console.log(day);

// function checkAge() {
//   let age = prompt("Please enter your age:"); // Get user input
//   age = Number(age); // Convert the input to a number

//   if (isNaN(age)) {
//     console.log("Please enter a valid number.");
//   } else if (age < 18) {
//     console.log("Too young to buy alcohol.");
//   } else if (age > 18) {
//     console.log("The user is old enough to buy alcohol.");
//   } else {
//     console.log("The user is 18 years old.");
//   }
// }

// // Call the function to execute
// checkAge();

// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");


function infinityPrintText() {
  // for (let i = 1; i > 0; i++) {
  //   console.log("Hello world");
  // }
}

infinityPrintText();

// Add ten integer numbers from 1 to 100
// 1 + 2 + 3 + 4 +...+ 100

function addIntegers() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  console.log(sum);
}

addIntegers();


function isEqual(num1, num2) {
  return num1 === num2;
}


function isDivisibleBy100(num) {
  return num % 100 === 0;
}


function evenOrOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}

function getGrade(score) {
  if (score > 100 || score < 0) {
    return "Invalid score";
  } else if (score >= 90 && score <= 100) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}

// Question 11
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.
function printBolean(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

printBolean(10, 10)

// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.
function checkDevisibility(num) {
  if (200 % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

checkDevisibility(200)

// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

checkEvenOdd(50)

// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

// step-1 create declear a function
// step-2 check if the grade is above 100 or negative

function gradingSystem(grade) {
  if (grade > 100 || grade < 0) {
    return "Invalid score"
  } else if (grade > 90) {
    return "Grade A";
  } else if (grade > 80 || grade < 89) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}