const express = require("express")
const jasonData = require("./data")
const data1 = require("./add")

const app = express();
app.get("/", function(req,res){
    console.log(data1.data(22,11));
    res.send("Works Fine");
})

app.get("/getUsers1",function (req,res){
    res.json(jasonData.users);
//     res.end();
});

app.get("/getUsers2",function (req,res){
    // res.json(jasonData.users);
    res.send("This is IT")
});

app.listen(8000);