const express = require('express');


const app = express();

// GET "/":   sends text "Welcome to my server, make a request to '/info' to learn more! "
app.get('/', (req, res)=> {
res.send("Welcome to my server, make a request to '/info' to learn more!");
});


// - GET "/info": sends text  "This server will send you data about the creator of this server if you make a GET request to '/data'  "
app.get('/info', (req,res) => {
    res.send("This server will send you data about the creator of this server if you make a GET request to'/data'");
});

// - GET "/data": sends an object that describes you.
app.get('/data', (req,res)=> {
    const personalInfo = {
        name: "Joe Chang",
        height: "5'9",
        weight: "200lbs",
        ethnicity: "Taiwanese",
        CityBornIn: "Wichita, KS",
        Education: "Western Washington University",
    };
    res.json(personalInfo);
});

app.listen(3000, () => {
    console.log("listening on port ", 3000);
});