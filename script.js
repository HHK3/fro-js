"use strict";

// Declare variables
const studentName = "Joël Lakhai";
const studentGroup = "MD2B";
const year = main.year;

// Init
init();

// Functions

function init() {
  // Set content based on variables
  document.getElementById("studentName").innerText = studentName;

  var studentGroup1 = (document.querySelectorAll(
    ".studentGroup"
  )[0].innerHTML = studentGroup);
  var studentGroup2 = (document.querySelectorAll(
    ".studentGroup"
  )[1].innerHTML = studentGroup);

  var studentName1 = (document.querySelectorAll(
    ".studentName"
  )[0].innerHTML = studentName);

  var year1 = (document.querySelectorAll(".pageYear")[0].innerHTML = year);
  var year2 = (document.querySelectorAll(".pageYear")[1].innerHTML = year);

  // Add navigation link to the navigation panel on the left of the page
  main.addContenItem("Inleiding", intro);
  main.addContenItem("Variabelen", variables);
  main.addContenItem("Object", object);
  main.addContenItem("Array", array);

  // Activate the first navigation link
  intro();
}

function intro() {
  let description =
    "Je bent in dienst van energiemaatschappij Energy Solutions en" +
    " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen." +
    " De data wordt via een webAPI beschikbaar gesteld. " +
    " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren." +
    "<p>Succes!!!</p>";
  main.updateContent("Inleiding", description);

  // Set link to the element in the DOM
  var element = document.getElementById("contentPlaceholder");

  // Create the image and set some properties
  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  // Create the label
  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  // Create the paragraph and add the image and label to it
  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);

  // Add the paragraph to the DOM
  element.appendChild(p);
}

//Variabelen
function variables() {
  var variables = {
    postcode: "1234AB",
    huisnummer: 99,
    datum: new Date("2018-01-01").toISOString().split("T")[0],
    gas: 300,
    water: 30,
    electriciteit: [1001, 1002],
    slimmeMeter: true
  };

  let description =
    "Voor postcode " +
    variables.postcode +
    " en huisnummer " +
    variables.huisnummer +
    " zijn op " +
    variables.datum +
    " metingen gedaan en dit zijn de resultaten: gas=" +
    variables.gas +
    ", water=" +
    variables.water +
    ", electriciteit Hoog=" +
    variables.electriciteit[0] +
    " en electriciteitLaag=" +
    variables.electriciteit[1] +
    ". Dit is gedaan met een slimme meter.";

  var descriptionStats = {
    lengte: description.length,
    woorden: description.trim().split(" ").length,
    eerst: description.split(" ")[0],
    laatst: description.split(" ")[28],
    reverse: description
      .split("")
      .reverse()
      .join("")
  };

  let result =
    "" +
    "<h4>Verslag van de meting </h4>" +
    description +
    "" +
    "<h4>Nog wat eigenschappen</h4>" +
    "Het verslag heeft " +
    descriptionStats.lengte +
    " tekens, " +
    descriptionStats.woorden +
    "" +
    " woorden, het eerste woord is " +
    descriptionStats.eerst +
    " en het laatste woord is " +
    descriptionStats.laatst +
    "<h4>-> BONUS <-: Draai je het verslag van de meting om dan krijg je</h4>" +
    descriptionStats.reverse;
  main.updateContent("Variabelen", result);

  // Set link to the element in the DOM
  var element = document.getElementById("contentPlaceholder");

  // Create the image and set some properties
  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  // Create the label
  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  // Create the paragraph and add the image and label to it
  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);

  // Add the paragraph to the DOM
  element.appendChild(p);
}

//Object
function object() {
  var variables = {
    postcode: "1234AB",
    huisnummer: 99,
    datum: new Date("2018-01-01"),
    gas: 300,
    water: 30,
    electriciteit: [1001, 1002],
    slimmeMeter: true
  };

  let description =
    "<h4>Verslag van de meting </h4>" +
    "Voor postcode " +
    variables.postcode +
    " en huisnummer " +
    variables.huisnummer +
    " zijn op " +
    variables.datum +
    " metingen gedaan en dit zijn de resultaten:<br><br>" +
    //Table
    "<table>" +
    "<tr>" +
    "<td>Gas:</td>" +
    "<td>" +
    variables.gas +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Water:</td>" +
    "<td>" +
    variables.water +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Electriciteit Hoog:</td>" +
    "<td>" +
    variables.electriciteit[0] +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Electriciteit Hoog:</td>" +
    "<td>" +
    variables.electriciteit[1] +
    "</td>" +
    "</tr>" +
    "</table><br>" +
    "Dit is gedaan met een slimme meter.";
  main.updateContent("Object", description);

  // Set link to the element in the DOM
  var element = document.getElementById("contentPlaceholder");

  // Create the image and set some properties
  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  // Create the label
  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  // Create the paragraph and add the image and label to it
  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);

  // Add the paragraph to the DOM
  element.appendChild(p);
}

//Array
function array() {
  var variables = {
    huis1: {
      postcode: "1234AB",
      huisnummer: 99,
      datum: new Date("2018-01-01").toISOString().split("T")[0],
      gas: 300,
      water: 30,
      electriciteit: [1001, 1002],
      slimmeMeter: true
    },
    huis2: {
      postcode: "1234AB",
      huisnummer: 45,
      datum: new Date("2018-01-01").toISOString().split("T")[0],
      gas: 1300,
      water: 130,
      electriciteit: [11001, 11002],
      slimmeMeter: false
    }
  };

  let description =
    "<h4>Overzicht van de metingen voor postcode 1234AB</h4>" +
    //Table
    "<table>" +
    "<tr>" +
    "<th>postcode</th>" +
    "<th>huisnummer</th>" +
    "<th>datum</th>" +
    "<th>gas</th>" +
    "<th>water</th>" +
    "<th>electriciteit</th>" +
    "<th>slimmeMeter</th>" +
    "</td>" +
    "</tr>" +
    //Huis 1
    "<tr>" +
    "<td>" +
    variables.huis1.postcode +
    "</td>" +
    "<td>" +
    variables.huis1.huisnummer +
    "</td>" +
    "<td>" +
    variables.huis1.datum +
    "</td>" +
    "<td>" +
    variables.huis1.gas +
    "</td>" +
    "<td>" +
    variables.huis1.water +
    "</td>" +
    "<td>" +
    variables.huis1.electriciteit[0] +
    "," +
    variables.huis1.electriciteit[1] +
    "</td>" +
    "<td>" +
    variables.huis1.slimmeMeter +
    "</td>" +
    "</tr>" +
    //Einde Huis 1
    //Huis 2
    "<tr>" +
    "<td>" +
    variables.huis2.postcode +
    "</td>" +
    "<td>" +
    variables.huis2.huisnummer +
    "</td>" +
    "<td>" +
    variables.huis2.datum +
    "</td>" +
    "<td>" +
    variables.huis2.gas +
    "</td>" +
    "<td>" +
    variables.huis2.water +
    "</td>" +
    "<td>" +
    variables.huis2.electriciteit[0] +
    "," +
    variables.huis2.electriciteit[1] +
    "</td>" +
    "<td>" +
    variables.huis2.slimmeMeter +
    "</td>" +
    "</tr>" +
    "</table>";
  main.updateContent("Array", description);

  // Set link to the element in the DOM
  var element = document.getElementById("contentPlaceholder");

  // Create the image and set some properties
  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "100px";

  // Create the label
  var label = document.createElement("label");
  label.classList.add("studentName");
  label.innerHTML = studentName;

  // Create the paragraph and add the image and label to it
  var p = document.createElement("p");
  p.appendChild(img);
  p.appendChild(document.createElement("br"));
  p.appendChild(label);

  // Add the paragraph to the DOM
  element.appendChild(p);
}
