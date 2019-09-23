// Storing dependencies into a variable
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//Storing port number and our full apple
var port = 3000;
var app = express();

// STEP 1: Setting up the boilerplate and routing
app.get('/', function(req, res) {

// Storing url

  var url = 'https://en.wikipedia.org/wiki/Phyllotaxis';

// Making HTTP request
  request(url, function(error, response, html) {

    if(!error) {

        // res.send(html);
        // scrape specific data
        var $ = cheerio.load(html);
        var data = {
          articleTitle : '',
          articleImg : '',
          articleParagraph: '',
          newStuff: ''
        };

        $('#content').filter(function(){

          data.articleTitle = $(this).find('#firstHeading').text();
          data.articleImg = $(this).find('img').first().attr('src');
          data.articleParagraph = $(this).find('p').first().text();
          data.newStuff = $(this).find('h2').first().text();

        });

        res.send(data);

    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
  });
});

app.listen(port);
console.log('Magic happens on' + port);

exports = module.exports = app;
