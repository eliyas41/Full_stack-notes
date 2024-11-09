String
const password = 'abebe 48'
// console.log(password.length);

// if (password.length < 8) {
//   console.log('Password must be greater than eight');
// } else {
//   console.log('Password is valid');
// }

const firstName = "John"
const lastName = " Doe"

// console.log(firstName + lastName);

// console.log('My name is ' + firstName + lastName);
// console.log(`My name is ${firstName}${lastName} from Ethiopia.`);

const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Engineer',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  },
  namePrinter: () => {
    console.log(this.name);
  }
};

console.log(person.name);
console.log(person.occupation);
console.log(person.address);

function adder(x, y) {
  console.log(x + y);
}

// // 1. push()
// let arr = [1, 2, 3];
// arr.push(4); // [1, 2, 3, 4]

// 2. pop()
// let last = arr.pop(); // last = 3, arr = [1, 2]

// // 3. shift()
// let first = arr.shift(); // first = 1, arr = [2, 3]

// // 4. unshift()
// arr.unshift(8); // [8, 1, 2, 3]
// console.log(arr);

// // 5. concat()
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = arr1.concat(arr2); // result = [1, 2, 3, 4]

// // 6. join()
// arr = ['Hello', 1, 'world'];
// let str = arr.join(' '); // str = 'Hello world'
// console.log(str);

// // 7. slice()
// arr = [1, 2, 3, 4];
// let sliced = arr.slice(1, 3); // sliced = [2, 3]

// // 8. splice()
// arr = [1, 2, 3, 4];
// arr.splice(1, 2, 'a', 'b'); // arr = [1, 'a', 'b', 4]

// // 9. indexOf()
// arr = [1, 2, 3, 2];
// let index = arr.indexOf(2); // index = 1

// // 10. lastIndexOf()
// let lastIndex = arr.lastIndexOf(2); // lastIndex = 3

// // 11. forEach()
// arr = [1, 2, 3];
// arr.forEach(index => console.log(index)); // 1 2 3

// // 12. map()
// let squared = arr.map(num => num ** 2); // squared = [1, 4, 9]

// // 13. filter()
// arr = [1, 2, 3, 4];
// let even = arr.filter(num => num % 2 === 0); // even = [2, 4]

// // 14. reduce()
// let sum = arr.reduce((total, num) => total + num, 0); // sum = 6

// // 15. reduceRight()
// let resultRight = arr.reduceRight((total, num) => total + num, 0); // result = 6

// // 16. some()
// let hasEven = arr.some(num => num % 2 === 0); // hasEven = true

// // 17. every()
// let allPositive = arr.every(num => num > 0); // allPositive = true

// // 18. find()
// let found = arr.find(num => num > 2); // found = 3

// // 19. findIndex()
// let foundIndex = arr.findIndex(num => num > 2); // foundIndex = 2

// // 20. includes()
// let hasTwo = arr.includes(2); // hasTwo = true

// // 21. sort()
// arr = [3, 1, 2];
// arr.sort(); // arr = [1, 2, 3]

// // 22. reverse()
// arr.reverse(); // arr = [3, 2, 1]

// // 23. flat()
// arr = [1, [2, [3, 4]]];
// let flattened = arr.flat(2); // flattened = [1, 2, 3, 4]

// // 24. flatMap()
// arr = [1, 2, 3];
// let doubled = arr.flatMap(num => [num, num * 2]); // doubled = [1, 2, 2, 4, 3, 6]

// // 25. fill()
// arr = [1, 2, 3, 4];
// arr.fill(0, 1, 3); // arr = [1, 0, 0, 4]

// // 26. copyWithin()
// arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3, 5); // arr = [4, 5, 3, 4, 5]

// // 27. Array.from()
// let strArr = Array.from('hello'); // strArr = ['h', 'e', 'l', 'l', 'o']

// // 28. Array.isArray()
// let isArray = Array.isArray(arr); // isArray = true

// // 29. Array.of()
// let arrOf = Array.of(1, 2, 3); // arrOf = [1, 2, 3]

// // 30. toString()
// str = arr.toString(); // str = '4,5,3,4,5'

// // 31. toLocaleString()
// arr = [12345.6789];
// str = arr.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // str = '$12,345.68'
