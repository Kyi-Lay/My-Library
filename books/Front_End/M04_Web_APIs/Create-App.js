var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods





// Set background color and padding for ordered list
listEl.setAttribute("style", "background-color: #333333; padding: 20px;");

// Set styles for list items
li1.textContent = "Pizza 🍕";
li1.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #4CAF50;");
li2.textContent = "Sushi 🍣";
li2.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #FF9800;");
li3.textContent = "Ice Cream 🍦";
li3.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #2196F3;");
li4.textContent = "Tacos 🌮";
li4.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #FF5722;");

// Append list items to the ordered list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
