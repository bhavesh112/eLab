const express = require("express");
const bodyParser =require("body-parser");

const app = express();

app.use(express.static('public'));
app.get("/",function (req ,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/branches/ ", function(req ,res){
res.sendFile(__dirname+"/branches/biotechnology.html");
});
app.listen(3000 ,function(){
    console.log("Server is running at PORT : 3000");
    });