// Storing dependencies into a variable
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//Storing port number and our full apple
var port = 3000;
var app = express();

// STEP 1: Setting up the boilerplate and routing
app.get('/', function(req, res)

// Storing url

  var url = 'https://nl.wikipedia.org/wiki/Fyllotaxis'

// Making HTTP request
  request(url, options: function(error, response, html))
    if(!error) {
        res.send(html)
    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
});

app.listen(port);
console.log('Magic happens on' + port);

exports = module.exports = app;
