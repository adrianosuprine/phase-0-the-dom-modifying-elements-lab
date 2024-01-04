// Write your code here!
// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
//   li.textContent = "Hi there!";
// // => <li>Hi there!</li>
// console.log(li.textContent);
// // => "Hi there!"
// }

// element.append(ul);

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;
// element.remove();
main.remove();
// var newHeader = document.createElement("h1");
// document.body.append(newHeader);
// newHeader.id = "victory";
const newHeader = document.querySelector("body");
newHeader.innerHTML = 
"<h1 id='victory'> Adriano is the champion </h1>";
newHeader = document.createElement("h1");
// document.body.append(newHeader);
// newHeader.id = "victory";

// const victory= document.querySelector("h1");

// const elementa = document.getElementById("victory");


// elementa.textContent = " Adriano is the champion ";

