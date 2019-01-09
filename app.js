var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var Promise = require('promise');

var getScrappedLinks= function(input, file) {
  return new Promise(function(resolve,reject) {
   request(input, function(error, response, body) {
      if(error) {
        reject({"error":error});
        console.log(error);
        return;
      }
      else{
       var $ = cheerio.load(body);
      $('img').each(function( index ) {
        var image = $(this).attr('src');
        fs.appendFileSync(`${file}.txt`, image + '\n');
      });
    
      $('a').each(function( index ) {
        var link = $(this).attr('href');
        fs.appendFileSync(`${file}.txt`, link + '\n');
      });
      resolve();
    }
    });
  });
};

module.exports = getScrappedLinks;