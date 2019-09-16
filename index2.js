var express = require('express')
var app = express()
var api = require('./myModules/enroll')
var ajaxResponse = require("./myModules/ajaxResponse")
var returnClass = require("./myModules/returnClass")

// respond with the html form when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
}); 
app.post('/enroll', function (req) {
    if (api.enroll(req) == true) {
      res.end("1");
    }
});
app.get('/class/:subject', function (req,res) {
    returnClass.returnClass(res, req.params.subject + ".csv");
});
 app.listen(1224, function () {
    console.log('Listening on port 1224.');
});