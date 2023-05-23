//
//
//

// btn.addEventListener("click", function () {
//   const randomNumber = getRandom();
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });
// function getRandom() {
//   return Math.round(Math.random() * colors.length);
// }
const colors = ["red", "blue", "orange", "black", "yellow"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const rondomNumber = getRandom();
  document.body.style.backgroundColor = colors[rondomNumber];
  color.textContent = colors[rondomNumber];
});
function getRandom() {
  return Math.round(Math.random() * colors.length);
}
