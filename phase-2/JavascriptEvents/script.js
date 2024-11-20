const btn = document.getElementById('btn');
const title = document.getElementsByClassName("title");

console.log(btn);
console.log(title);

btn.addEventListener("mousedown", function () {
  console.log("down");
});

btn.addEventListener("mouseup", function () {
  console.log("up");
});

btn.addEventListener("click", function () {
  const style = title[0].style.color = "red"
  console.log("Button clicked");
});
