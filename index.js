
// 1
alert("Hello world");


//2
console.log("Hello world");


//3
document.write("Hello world with document write");

//4
document.getElementById("demo").innerHTML = "Hello World, with get element by ID!";

//5
document.body.onload = addElement;
function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hello world with add element");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
      // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}



//6
const another= document.querySelectorAll("div");
another[1].textContent = "Hello world with query selector all";



//7
document.querySelector("div").textContent = "Hello world with query selector ";

//8
const btn = document.querySelector('button');

//Change button text on click
btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Hello World';
});


//9




//10