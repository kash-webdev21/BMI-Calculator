const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", function(req,res){

res.sendFile(__dirname+"/index.html");


});

app.post("/", function(req, res) {

    // console.log(req.body);

    var weight= Number(req.body.Weight);

    var height= Number(req.body.Height)

    var bmi = (Math.round((weight)/(height*height)*10))/10;

    


    res.write("<h1 style='text-align: center; font-family: cursive; font-size: 150px; margin-top: 15rem; background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));'> Your Bmi is : "+ bmi+"</h1>");

    if (bmi<=18.50){

        res.write("<h1 style='text-align: center; background-color:powderblue; font-size: 66px;'> Sukdapan </h1>");
    };


    if (bmi>30){

        res.write("<h1 style='text-align: center; background-color:powderblue; font-size: 66px; '> Ghenda </h1>");
    };


    if (bmi>25 && bmi<=30){

        res.write("<h1 style='text-align: center; background-color:powderblue; font-size: 66px; '> Mota </h1>");
    };



    if (bmi>18.50 && bmi<=25){

        res.write("<h1 style='text-align: center; background-color:powderblue; font-size: 66px; '> Jhakas </h1>");
    };



    res.send();









})












app.listen(3000, function (req,res){

    console.log("Server has started");
});


