const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;
console.log(`Server started on port ${port}`);

http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    var n = parseInt(queryObject.n, 10);
    loops= isNaN(n) ? 0 : n;
    //console.log(loops);
    var result = 0;
    for (let i = 0; i < loops; i++) { result += Math.random() * Math.random();}

    res.writeHead(200, { "Content-Type": "text/plain" });
    text="The result of this run is :  " + result;
    //make payload size constant
    res.end(text.substring(44,0));
}).listen(port);


