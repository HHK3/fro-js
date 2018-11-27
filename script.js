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
  main.addContenItem("AJAX - Tabel", tabel);

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

//AJAX - Tabel
function tabel() {
  var url = "http://gert-rikkers.nl/api/meterstanden";
  var description = "<h4>Overzicht van de metingen voor postcode 1234AB</h4>";

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  console.log(url);

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var dataJSON = xhttp.responseText;

      var dataJSON2 = JSON.parse(xhttp.responseText);
      console.log(dataJSON2);

      description +=
        "<br>" +
        //Table
        "<table>" +
        "<tr>" +
        "<th>postcode</th>" +
        "<th>huisnummer</th>" +
        "<th>datum</th>" +
        "<th>gas</th>" +
        "<th>water</th>" +
        "<th>slimmeMeter</th>" +
        "<th>elektriciteitHoog</th>" +
        "<th>elektriciteitLaag</th>" +
        "<th>maand</th>" +
        "<th>gasVerbruik</th>" +
        "</td>" +
        "</tr>";

      for (var i = 0; i < dataJSON2.length; i++) {
        var result1 = {
          postcode: dataJSON2[i].postcode,
          huisnummer: dataJSON2[i].huisnummer,
          datum: dataJSON2[i].datum,
          gas: dataJSON2[i].gas,
          gasVolgende: function() {
            for (var j = 0; j < result1.gas; j++) {
              return dataJSON2[j].gas;
            }
          },
          water: dataJSON2[i].water,
          slimmeMeter: dataJSON2[i].slimmeMeter,
          elektriciteit: [
            dataJSON2[i].elektriciteit[0],
            dataJSON2[i].elektriciteit[1]
          ],
          maand: function() {
            var months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mei",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Dec"
            ];
            var datumm = new Date(dataJSON2[i].datum);
            return months[datumm.getMonth()];
          },
          gasVerbruik: function() {
            switch (dataJSON2[i].gas) {
              case dataJSON2[0].gas:
                return dataJSON2[1].gas - dataJSON2[0].gas;
                break;
              case dataJSON2[1].gas:
                return dataJSON2[2].gas - dataJSON2[1].gas;
                break;
              case dataJSON2[2].gas:
                return dataJSON2[3].gas - dataJSON2[2].gas;
                break;
              case dataJSON2[3].gas:
                return dataJSON2[4].gas - dataJSON2[3].gas;
                break;
              case dataJSON2[4].gas:
                return dataJSON2[5].gas - dataJSON2[4].gas;
                break;
              case dataJSON2[5].gas:
                return dataJSON2[6].gas - dataJSON2[5].gas;
                break;
              case dataJSON2[6].gas:
                return dataJSON2[7].gas - dataJSON2[6].gas;
                break;
              case dataJSON2[7].gas:
                return dataJSON2[8].gas - dataJSON2[7].gas;
                break;
              case dataJSON2[8].gas:
                return dataJSON2[9].gas - dataJSON2[8].gas;
                break;
              case dataJSON2[9].gas:
                return dataJSON2[10].gas - dataJSON2[9].gas;
                break;
              case dataJSON2[10].gas:
                return dataJSON2[11].gas - dataJSON2[10].gas;
                break;
              case dataJSON2[11].gas:
                return dataJSON2[12].gas - dataJSON2[11].gas;
                break;
              default:
                return "-";
            }
          }
        };

        description +=
          "<tr>" +
          "<td>" +
          result1.postcode +
          "</td>" +
          "<td>" +
          result1.huisnummer +
          "</td>" +
          "<td>" +
          result1.datum +
          "</td>" +
          "<td>" +
          result1.gas +
          "</td>" +
          "<td>" +
          result1.water +
          "</td>" +
          "<td>";

        if (result1.slimmeMeter == true) {
          description += "+";
        } else {
          description += "";
        }

        description +=
          "</td>" +
          "<td>" +
          result1.elektriciteit[0] +
          "</td>" +
          "<td>" +
          result1.elektriciteit[1] +
          "</td>" +
          "<td>" +
          result1.maand() +
          "</td>" +
          "<td>" +
          result1.gasVerbruik() +
          "</td>" +
          "</tr>";
      }

      description += "</table>";

      // description += "<h4>Mooi lijstje</h4>";
      // description += "<ul>";

      // for (var i = 0; i < dataJSON2.people.length; i++) {
      //   result += "<li>" + dataJSON2.people[i].name + "</li>";
      // }

      // updateContent("Opdracht 14 - Publieke WebAPI gebruiken", description);
      main.updateContent("AJAX - Tabel", description);
    }
  };

  xhttp.send();

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
