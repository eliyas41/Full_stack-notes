// console.log(x);
// var x = 20;

const pi = 3.14


// let x = 10
// console.log(x);


// function checkDifference() {
//   if (true) {
//     var x = 10;
//     console.log(x);
//   }
//   console.log(x);
// }

// checkDifference()

// var ===> can be redeclare
// let ===> can't be redeclare
// const ===> can't be redeclare

// var ===> can't be block
// let ===> can be block
// const ===> can be block

// console.log(5 % 2 === 0);



// var x = 10;

// var x += x;

// console.log(sum);

// if (!password || !email) {
//   console.log("Please fill in all fields");
// }

// let sum = true

// false ? console.log("true") : console.log("false");


// if (4 % 2 === 1) {
//   console.log("true");
// } else {
//   console.log("false");
// }



// if (condition) {

// } else if (condition) {

// } else {

// }

console("Hello world");

console.log("Hello world");
console.log(57 + 14);

const os = require('os')

console.log(os.release());

// Assembly Language
// section .data
//     hello db 'Hello, World!', 0    ; Define the string with a null terminator

// section .text
//     global _start                  ; Make the entry point visible to the linker

// _start:
//     ; Write "Hello, World!" to stdout (system call number 4)
//     mov eax, 4                     ; System call for sys_write
//     mov ebx, 1                     ; File descriptor 1 (stdout)
//     mov ecx, hello                 ; Message to write
//     mov edx, 13                    ; Number of bytes (length of the message)
//     int 0x80                       ; Interrupt to make the system call

//     ; Exit the program (system call number 1)
//     mov eax, 1                     ; System call for sys_exit
//     xor ebx, ebx                   ; Exit code 0
//     int 0x80                       ; Interrupt to make the system call



// Machine Code
// b8 04 00 00 00 bb 01 00 00 00 b9 00 00 00 00 ba 0d 00 00 00 cd 80 b8 01 00 00 00 bb 00 00 00 00 cd 80