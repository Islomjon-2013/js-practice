// const colors = ["red", "blue", "orange", "black", "yellow"];
// let btn = document.getElementById("btn");
// let color = document.querySelector(".color");
// btn.addEventListener("click", function () {
//   const rondomNumber = getRandom();
//   document.body.style.backgroundColor = colors[rondomNumber];
//   color.textContent = colors[rondomNumber];
// });
// function getRandom() {
//   return Math.round(Math.random() * colors.length);
// }
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandom()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function getRandom() {
  return Math.floor(Math.random() * hex.length);
}
