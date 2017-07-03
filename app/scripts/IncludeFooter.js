var lastcreated;
var header = document.getElementById("header");
var navbar = header.appendChild(document.createElement("div"));
navbar.className = "navbar";

lastcreated = navbar.appendChild(document.createElement("a"));
lastcreated.href = "home.html";
lastcreated.innerHTML = "UberKultur";
navbar.innerHTML += " | ";

lastcreated = navbar.appendChild(document.createElement("a"));
lastcreated.href = "about.html";
lastcreated.innerHTML = "About";
navbar.innerHTML += " | ";

lastcreated = navbar.appendChild(document.createElement("a"));
lastcreated.href = "conspiracy.html";
lastcreated.innerHTML = "Project Wisconsin";
navbar.innerHTML += " | ";

lastcreated = navbar.appendChild(document.createElement("a"));
lastcreated.href = "conspiracy2.html";
lastcreated.innerHTML = "Project Subterranean Pigfarm";
navbar.innerHTML += " | ";

lastcreated = navbar.appendChild(document.createElement("a"));
lastcreated.href = "mockup.html";
lastcreated.innerHTML = "Scriptorium";
navbar.innerHTML += " | ";

lastcreated = navbar.appendChild(document.createElement("a"));
lastcreated.href = "forum.html";
lastcreated.innerHTML = "Forum";
navbar.innerHTML += " | ";

lastcreated = navbar.appendChild(document.createElement("a"));
lastcreated.href = "courses.html";
lastcreated.innerHTML = "Courses";
//navbar.innerHTML += " | ";
