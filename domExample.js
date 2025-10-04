const paragraph = document.getElementById("demo");
const button = document.getElementById("myBtn");
const resultDiv = document.getElementById("result");

console.log("paragraph 1", paragraph);
console.log("button 1", button);

// Change the text of the paragraph

button.addEventListener("click", function(){
    resultDiv.innerText = "Button was clicked!";
    // we can change the style too
    resultDiv.style.color = "blue";
    resultDiv.style.fontWeight = "bold";
});

paragraph.innerText = "this is the new message";

function hello() {
console.log("Hello, World!");
bye();
}

function bye() {
console.log("Goodbye, World!");
init();
}

function init() {
console.log("Page loaded");
}

window.onload = hello; 
// wait for the page to load before running init
// new message
// button was clicked!