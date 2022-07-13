const express = require("express");

const port = 9000;


const app = express();

// middlewares creations

const middleware1 = (req, res, next) => {
    console.log("middleware1");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("middleware2");
    next();
}

app.use(middleware1); // this middleware si avaible to all 4 routes

// Route Creation

app.get("/", (req, res) => {
    res.send("<h1>I am root page</h1>")
})

app.get("/home", middleware2, (req, res) => { // this route has middleware2 also applicable
    res.send("<h1>I am home page</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>I am about page</h1>")
})

app.get("/contact", middleware2, (req, res) => { // this route has middleware2 also applicable
    res.send("<h1>I am contact page</h1>")
})


app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})