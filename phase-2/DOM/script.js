function someFunction() {
  alert('The button is clicked!');
}

console.log(document);

// dom selector
// select by Id
// select by class name
// select by tag name
// select by query selector

// select by query selector all

const btn = document.getElementById("button");
console.log(btn);

// select by class name
const paragraph = document.getElementsByClassName("lorem_par");
// console.log(paragraph[0]);
const bg = paragraph[1].style.color = "red"
const bg1 = paragraph[1].style.backgroundColor = "purple"
console.log(bg);

const text = document.querySelector('.lorem_par').innerHTML = "This is the first paragraph"
console.log(text);

const text1 = document.querySelectorAll('.lorem_par')
console.log(text1);