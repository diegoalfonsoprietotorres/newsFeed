
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 3000

app.use(express.static("dist" + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)
