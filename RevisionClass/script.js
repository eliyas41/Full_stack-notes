// function arrayFunction() { };

// const arrayFunction = () => { };

// const x = function () { };

// const result = 85;

// if (result > 90) {
//   console.log("you get grade A");
// } else if (result > 80 || result < 90) {
//   console.log("you get grade B");
// } else if (result > 70 || result < 80) {
//   console.log("you get grade C");
// } else {
//   console.log("You get grade D");
// }

// console.log("Hello world");   //i == 1
// console.log("Hello world");   //i == 2
// console.log("Hello world");   //i == 3
// console.log("Hello world");   //i == 4
// console.log("Hello world");   //i == 5
// console.log("Hello world");   //i == 6
// console.log("Hello world");   //i == 7
// console.log("Hello world");   //i == 8
// console.log("Hello world");   //i == 9
// console.log("Hello world");   //i == 10

// function arrayFunction() {
//   for (i == 1; i <= 10; i++) {
//     console.log("Hello world");
//   }
// };

//Hello world //i == 1
//Hello world //i == 2
//Hello world //i == 3
//Hello world //i == 4
//Hello world //i == 5
//Hello world //i == 6
//Hello world //i == 7
//Hello world //i == 8
//Hello world //i == 9
//Hello world //i == 10



const person = [
  {
    name: "eleni shibru",
    bach: "Apr 1st - 2024",
    group: 3,
  },
  {
    name: "Habte Bedane",
    bach: "Apr 1st - 2024",
    group: 2,
  },
  {
    name: "John",
    bach: "apr 30",
    group: 3,
  },
  {
    name: "test",
    bach: "apr 30",
    group: 3,
  },
  {
    name: "Habte Bedane",
    bach: "Apr 1st - 2024",
    group: 2,
  },
  {
    name: "John",
    bach: "apr 30",
    group: 3,
  },
  {
    name: "test",
    bach: "apr 30",
    group: 3,
  },
  {
    name: "Habte Bedane",
    bach: "Apr 1st - 2024",
    group: 2,
  },
  {
    name: "John",
    bach: "apr 30",
    group: 3,
  },
  {
    name: "test",
    bach: "apr 30",
    group: 3,
  },
  {
    name: "Habte Bedane",
    bach: "Apr 1st - 2024",
    group: 2,
  },
  {
    name: "John",
    bach: "apr 30",
    group: 3,
  },
  {
    name: "test",
    bach: "apr 30",
    group: 3,
  }
]

function arrayFunction(arr) {
  for (let i = 0; i <= 12; i++) {
    console.log(`name: ${arr[i].name}`);
    console.log(`bach: ${arr[i].bach}`);
    console.log(`group: ${arr[i].group}`);
  }
};
arrayFunction(person);