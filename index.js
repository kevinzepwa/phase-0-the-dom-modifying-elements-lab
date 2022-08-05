// Write your code here!
const main = document.getElementById("main");
main.remove("main");

const newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.innerHTML = "Kevin is the champion";
document.body.append(newHeader);

//...Assign a html content to an element with id "main"
// document.getElementById("main").innerHTML ="<h1></h1>"

//...create an element (here I created a "div" element, next is a "ul" with a for loop then append it).
// const element = document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }
// element.append(ul);


//setting a html as innerHTML for my element with id "main"
// document.getElementById("main").innerHTML =
//     "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

//changing content in element with id "main"
// main.textContent = "You've changed what's on the screen!";

//changing style in the element wit id "main"
// const main = document.getElementById("main");
// main.style.height = "300px";
// main.style.backgroundColor = "#27647B";

// main.style.fontSize = "24px";
// main.style.marginLeft = "30px";
// main.style.lineHeight = 2;

//modifying the className for the element with id "main"
// main.className = "pet-listing dog";
// main.classList.remove("dog");
// main.classList.add("cat", "sale");

//accessing and changing content nested (2nd li item) in the element with tag "ul"
// // const ul = document.getElementsByTagName("ul")[0];
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);