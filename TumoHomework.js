var express = require("express");

var app = express();

app.get("/name/:name", function (req, res, search) {

    var name = req.params.name;

    search = res.redirect('https://google.com/search?q=' +  name);

});

app.listen(3000, function () {

    console.log("Example is running on port 3000");

});



// Task 24; slide 24



var obj = {

     "first_name": "Vardan",
     "last_name": "Hovsepyan",
     "age": 13,
     "tumo_stedent": true

}

 myJSON = JSON.stringify(obj);
