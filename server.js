var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      name: "yoda",
      phonenumber: "Yoda",
      email: "Jedi Master",
      uniqueid: 900,
    },
    {
        name: "yoda",
        phonenumber: "Yoda",
        email: "Jedi Master",
        uniqueid: 900,
    },
    {
        name: "yoda",
        phonenumber: "Yoda",
        email: "Jedi Master",
        uniqueid: 900,
    }
  ];



  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "res.html"));
  });

  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  // Displays all characters
  app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });

  app.get("/api/reservations/:reservation", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
      }
    }
  
    return res.json(false);
  });

 // Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newreservation);
  
    characters.push(newCharacter);
  
    res.json(newCharacter);
  }); 

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });