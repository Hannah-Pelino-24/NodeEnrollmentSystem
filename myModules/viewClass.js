// this module will load the html file with the data table 
var fs = require('fs');
exports.viewClassList = function (res, string) {
    // it will render the html table file , this file will send an ajax request whenever it is loaded
    fs.readFile('classList.html', function (err, htmlData) {
        var data =""+ htmlData

        data = data.replace("_HANNAH", string)
        res.end(data);
    });
}
