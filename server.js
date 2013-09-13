var express = require('express');
var request = require('request');
var _ = require('lodash');


var app = express();

BEER_TOKEN = "feffbbabf08971e749c7f9dd585e95fb6f754f88d15b6ed5b354eec41ad8e19f";

app.get('/beers/:page', function (req, res) {
    var page = +req.params.page || 1;

    request.get({url: "http://api.openbeerdatabase.com/v1/beers.json?per_page=20&page=" + page + "&token=" + BEER_TOKEN, json: true}, function (err, resp, data) {
        var result = "";

        if (data) {
            result = _.map(data.beers, function (beer) {
                beer.brewery = beer.brewery.name;
                delete beer.updated_at;
                delete beer.created_at;
                beer.description = beer.description.substring(0, 60) + "..."
                return beer
            });
        }
        res.send(result);
    });
});

app.get('/beer/:id', function (req, res) {
    var id = +req.params.id;
    request.get({url: "http://api.openbeerdatabase.com/v1/beers/" + id + ".json?token=" + BEER_TOKEN, json: true}, function (err, resp, beer) {

        if (beer) {
            beer.brewery = beer.brewery.name;

            var searchForImage = 'https://ajax.googleapis.com/ajax/services/search/images?q=' + beer.name + '%20beer%20&v=1.0&safe=moderate&imgtype=photo&imgcolor=brown';
            console.log(searchForImage);

            request.get({url: searchForImage, json: true}, function (err, resp, response) {
                if (response.responseData){
                    beer.imageUrl = response.responseData.results[0].url;
                }

                res.send(beer);
            });

        } else {
            res.send("");
        }
    });
});

app.use(express.static(__dirname));

app.listen(3000);
console.log('Listening on port 3000...');