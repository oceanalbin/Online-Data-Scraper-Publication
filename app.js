// Storing dependencies into a variable
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//Storing port number and our full apple
var port = 3000;
var app = express();

// STEP 1: Setting up the boilerplate and routing
app.get('/wikipedia', function(req, res) {

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

        fs.writeFile('wiki-output.js', 'var wiki_output = ' + JSON.stringify(data, null, 4), function(error){
          console.log('File written on hard drive!');
        });

    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
  });
});


// 2ND WIKIPEDIA

// STEP 1: Setting up the boilerplate and routing
app.get('/wikipedia2', function(req, res) {

// Storing url

  var url = 'https://en.wikipedia.org/wiki/Lists_of_earthquakes';

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

        fs.writeFile('wiki-output-list.js', 'var wiki_output-list = ' + JSON.stringify(data, null, 4), function(error){
          console.log('File written on hard drive!');
        });

    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
  });
});

// 3RD WIKIPEDIA

// STEP 1: Setting up the boilerplate and routing
app.get('/wikipedia3', function(req, res) {

// Storing url

  var url = 'https://en.wikipedia.org/wiki/Sense';

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

        fs.writeFile('wiki-output-sense.js', 'var wiki_output-sense = ' + JSON.stringify(data, null, 4), function(error){
          console.log('File written on hard drive!');
        });

    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
  });
});

// 4TH WIKIPEDIA

// STEP 1: Setting up the boilerplate and routing
app.get('/wikipedia4', function(req, res) {

// Storing url

  var url = 'https://en.wikipedia.org/wiki/Economy';

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

        fs.writeFile('wiki-output-economy.js', 'var wiki_output-economy = ' + JSON.stringify(data, null, 4), function(error){
          console.log('File written on hard drive!');
        });

    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
  });
});

// 5TH WIKIPEDIA

// STEP 1: Setting up the boilerplate and routing
app.get('/wikipedia5', function(req, res) {

// Storing url

  var url = 'https://en.wikipedia.org/wiki/Earth';

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

        fs.writeFile('wiki-output-earth.js', 'var wiki_output-earth = ' + JSON.stringify(data, null, 4), function(error){
          console.log('File written on hard drive!');
        });

    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
  });
});

app.get('/guardian', function(req, res) {
 var url = "https://www.nytimes.com/search?query=police";
 // let's make the http request to the url above using the 'request' dependency
 request(url, function(error, response, html) {
   // only execute if there's no error
   if( !error ){
     // we can use the dependency 'cheerio' to traverse the DOM and use jQuery-like selectors and functions
     var $ = cheerio.load(html);
     // let's create a javascript object to save our data in
     var guardian_data = {
       title: '',
       img: '',
       paragraph: ''
     };
     // all the content we are looking for are inside a div with the id 'content', let's filter so that the data we are working with is without unnecessary data
     // $('.css-1wa7u5r').filter(function(){
     //
     //   // we can access the properties of our javascript object by writing the name of the object 'dot' and then the name of the property
     //   guardian_data.title = $(this).find('h4').text();
     //   guardian_data.img = $(this).find('img').attr('src');
     //
     // });
     var item_output = [];
     $('li[data-testid="search-bodega-result"]').filter(function(){
           // we can access the properties of our javascript object by writing the name of the object 'dot' and then the name of the property
           item_output.push( { title: $(this).find('h4').text(),
                               img: $(this).find('img').attr('src') } )
         });
     // send the data we've stored in our object back to the browser
     res.send(item_output);
     fs.writeFile('guardian_output.js', "var guardian_output = " + JSON.stringify(guardian_data), function(error){
       console.log("File is written successfully!");
     });
   }
 });
});


app.get('/imdb', function(req, res) {

// Storing url

  var url = 'https://www.imdb.com/chart/top';

// Making HTTP request
  request(url, function(error, response, html) {

    if(!error) {

        // res.send(html);
        // scrape specific data
        var $ = cheerio.load(html);
        var data = [];

        $('.lister-list').filter(function(){
          $(this).find('tr').each(function(i, elem){
            data[i] = "'" + $(this).find('.posterColumn').find('img').attr('src') + "'";
          });
        });

        res.send(data);

        fs.writeFile('imdb-output.js', 'var imdb_list = [' + data + ']', function(error){
          console.log('File written on hard drive!');
        });

    }
    //All the web scraping magic will happen here
    // res.send('Hello World')
  });
});

app.listen(port);
console.log('Magic happens on' + port);

exports = module.exports = app;
