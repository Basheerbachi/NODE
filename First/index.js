const http = require("http")

const server = http.createServer(function (req,res){
    res.write("This is our first server");
    res.write(JSON.stringify({topic:"Node",about:'HI EVERYONE'}))
    res.end();
})
server.listen(8000);