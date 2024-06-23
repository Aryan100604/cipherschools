let heading = document.querySelectorAll("h2");
const firstHeading = heading[0];

console.log(firstHeading);
const secondHeading = heading[1];
console.log(secondHeading);

const orange = document.querySelector(".orange").innerHTML;
console.log(orange);
const appleList = document.querySelector(".apple-list").appendChild(listchil);
// console.log(appleList)
// console.log(appleList[0])
// console.log(appleList)
//console.log(appleList.children)
//console.log(appleList.childNodes)

console.log(appleList.lastChild);

console.log(appleList.firstChild);

const listchil = document.createElement("li");
listchil.innerText = "masumi";

console.log(appleList.parentNode);
console.log(appleList.parentElement);

const btn1 = document.querySelector(".btn-1");
console.log(btn.closest("main"));

const apple = document.querySelector(".orange").previousElementSibling;
console.log(apple);

const avacado = document.querySelector(".orange").nextElementSibling;
console.log(avacado);
