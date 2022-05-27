// ! Setup Variables
const color = document.getElementById("color");
const changeBtn = document.querySelector(".btn");

const MyDiv = document.querySelector(".MyDiv");
let Colors = ["magenta", "yellow", "blue", "green", "orangered", "brown"];


// ! Example [1]  change div color with each click 
// let i = 0;
// const changeColor = () => {
//   if (i == Colors.length - 1) {
//     i = 0;
//   }
//   MyDiv.style.backgroundColor = `${Colors[i]}`;
//   i++;
// };
// changeBtn.addEventListener("click", changeColor);

// ! Example [2]  change div color with the chosen color
// for each loop
Colors.forEach((el) => {
  let option = document.createElement("option");
  option.value = el;
  option.append(el);
  color.append(option);

 });

const changeColor = () => {
  MyDiv.style.backgroundColor = color.value;
  
}
changeBtn.addEventListener('click', changeColor);

// color.onchange = function() {
//   MyDiv.style.backgroundColor = this.value;
// }


