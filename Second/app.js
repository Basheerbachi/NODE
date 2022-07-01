const express = require("express")
const jasonData = require("./data")
const data1 = require("./add")

const app = express();
app.get("/api/main/html", function(req,res){
    console.log(data1.data(22,11));
    res.send("<h1>Works Fine</h1>");
})

app.get("/api/main/json",function (req,res){
    res.json(jasonData.users);

});

app.get("/api/main/normal",function (req,res){
    // res.json(jasonData.users);
    res.send("Express is a node js web application framework that provides broad features for building web and mobile applications.")
});

app.listen(8000);