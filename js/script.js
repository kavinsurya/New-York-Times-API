var navbar = document.createElement("nav");
navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark";

var headerName = document.createElement("a");
headerName.className = "navbar-brand";
headerName.innerText = "New York Times";

var button = document.createElement("button");
button.className = "navbar-toggler";
button.type = "button";
button.setAttribute("data-toggle", "collapse");
button.setAttribute("data-target", "#navbarNav");
button.setAttribute("aria-controls", "navbarNav");
button.setAttribute("aria-expanded", "false");
button.setAttribute("aria-label", "Toggle navigation");

var buttonSpan = document.createElement("span");
buttonSpan.className = "navbar-toggler-icon";
button.append(buttonSpan);

var navbarDiv = document.createElement("div");
navbarDiv.className = "collapse navbar-collapse";
navbarDiv.id = "navbarNav";

var ul = document.createElement("ul");
ul.className = "navbar-nav";

var li1 = document.createElement("li");
li1.className = "nav-item";

var a1 = document.createElement("a");
a1.className = "nav-link";

a1.id = "";
a1.innerText = "HOME";
li1.setAttribute("onclick", 'getStarted("science")');
li1.append(a1);

var li2 = document.createElement("li");
li2.className = "nav-item";

var a2 = document.createElement("a");
a2.className = "nav-link";
a2.id = "";
a2.innerText = "WORLD";

li2.append(a2);

var li3 = document.createElement("li");
li3.className = "nav-item";

var a3 = document.createElement("a");
a3.className = "nav-link";
a3.id = "";
a3.innerText = "POLITICS";
li3.append(a3);

var li4 = document.createElement("li");
li4.className = "nav-item";

var a4 = document.createElement("a");
a4.className = "nav-link";
a4.id = "";
a4.innerText = "MAGAZINE";

li4.append(a4);

var li5 = document.createElement("li");
li5.className = "nav-item";

var a5 = document.createElement("a");
a5.className = "nav-link";
a5.id = "";
a5.innerText = "TECHNOLOGY";
li5.append(a5);

var li6 = document.createElement("li");
li6.className = "nav-item";

var a6 = document.createElement("a");
a6.className = "nav-link";
a6.id = "";
a6.innerText = "SCIENCE";

li6.append(a6);

var li7 = document.createElement("li");
li7.className = "nav-item";

var a7 = document.createElement("a");
a7.className = "nav-link";
a7.id = "";
a7.innerText = "HEALTH";
li7.append(a7);

var li8 = document.createElement("li");
li8.className = "nav-item";

var a8 = document.createElement("a");
a8.className = "nav-link";
a8.id = "";
a8.innerText = "SPORTS";

li8.append(a8);

var li9 = document.createElement("li");
li9.className = "nav-item";

var a9 = document.createElement("a");
a9.className = "nav-link";
a9.id = "";
a9.innerText = "ARTS";

li9.append(a9);

var li10 = document.createElement("li");
li10.className = "nav-item";

var a10 = document.createElement("a");
a10.className = "nav-link";
a10.id = "";
a10.innerText = "FASHION";
li10.append(a10);

var li11 = document.createElement("li");
li11.className = "nav-item";

var a11 = document.createElement("a");
a11.className = "nav-link";
a11.id = "";
a11.innerText = "FOOD";

li11.append(a11);

var li12 = document.createElement("li");
li12.className = "nav-item";

var a12 = document.createElement("a");
a12.className = "nav-link";
a12.id = "";
a12.innerText = "TRAVEL";

li12.append(a12);

ul.append(li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12);
navbarDiv.append(ul);
navbar.append(headerName, button, navbarDiv);
document.body.append(navbar);
