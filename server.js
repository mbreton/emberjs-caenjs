var express = require('express');
var request = require('request');


var app = express();

BEER_TOKEN = "feffbbabf08971e749c7f9dd585e95fb6f754f88d15b6ed5b354eec41ad8e19f";

app.get('/beers/:page',function(req, res){
    var page = req.params.page || 0;

    request.get({url:"http://api.openbeerdatabase.com/v1/beers.json?per_page=10&page="+page+"&token="+BEER_TOKEN, json:true}, function(err, resp, data){
        res.send(data.beers);
    });
});

app.get('/beer/:id',function(req, res){
    var id = +req.params.id;
    request.get({url:"http://api.openbeerdatabase.com/v1/beers/" +id+ ".json?token="+BEER_TOKEN, json:true}, function(err, resp, data){
        res.send(data);
    });
});

app.use(express.static(__dirname));

app.listen(3000);
console.log('Listening on port 3000...');