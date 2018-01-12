var assert = require('assert');
var express = require('express');
var app = express();
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('fail test', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(3, [1,2,3,4].indexOf(4));
    });  	
  })
});

const baseUrl = `http://localhost:${process.env.PORT}`;
//const baseUrl = 'http://127.0.0.1:3000';

const request = require('request');
const expect = require('chai').expect;
const pg = require('pg');
const parse = require( 'utils-json-parse' );

describe('server', function() {
 it('should return the content of index.html', function(done) {
   request(`${baseUrl}/`, function(err, res, body) {
       expect(res.statusCode).to.equal(200);
       done();
   })
 });

 it('should send back parsable stringified JSON when search by category', function(done) {
   request('http://127.0.0.1:3000/restaurant/category/burger', function(err, res, body) {
       expect(parse.bind(this, body)).to.not.throw();
       done();
   })
 });

 it('should send back an array when searchy by category', function(done) {
   request('http://127.0.0.1:3000/restaurant/category/burger', function(error, response, body) {
     var parseBody = parse(body);
     expect(parseBody).to.be.an('array');
     done();
   });
 });

 it('should send back parsable stringified JSON when search by name', function(done) {
   request('http://127.0.0.1:3000/restaurant/name/san', function(err, res, body) {
       expect(parse.bind(this, body)).to.not.throw();
       done();
   })
 });

 it('should send back an array when search by name', function(done) {
   request('http://127.0.0.1:3000/restaurant/name/san', function(error, response, body) {
     var parsedBody = parse(body);
     expect(parsedBody).to.be.an('array');
     done();
   });
 });

 it('Should 404 when asked for a nonexistent endpoint', function(done) {
   request('http://127.0.0.1:3000/arglebargle', function(error, response, body) {
     expect(response.statusCode).to.equal(404);
     done();
   });
 });
 

});
