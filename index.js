const express = require("express");
const bodyParser =require("body-parser");

const app = express();

app.use(express.static('public'));

app.get("/",function (req ,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/biotechnology", function(req ,res){
res.sendFile(__dirname+"/branches/biotechnology.html");
});
app.get("/TechBiochem1",function (req,res) {
res.sendFile(__dirname+"/branches/TechBiochem1.html");
} );

app.get("/index", function(req, res){
    res.redirect("/");
});
app.listen(3000 ,function(){
    console.log("Server is running at PORT : 3000");
    });