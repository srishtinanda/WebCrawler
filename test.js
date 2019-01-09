const expect = require('chai').expect;
const fs = require('fs');
const getScrappedLinks = require('./app');


describe('Get the site map links from URL', () => {

  it('Should fetch all the image and links within the domain', (done) => {
  var response;
  var expectedResponse;
  var promise = getScrappedLinks('https://reactjs.org', 'react');
  promise.then(function(data){
    response = fs.readFileSync('react.txt');
    expectedResponse = fs.readFileSync('responseData.txt');
    expect(response).to.deep.equals(expectedResponse);
      done();
  }).catch(function(err){
    expect.fail(err)
    done();
  })
  
    });

  it('Should throw an error for invalid uri', (done) => {
    var prom = getScrappedLinks('https://ractjs.org', 'react');
    prom.catch(function(data){
      if(data.error) done();
  })
});
});
