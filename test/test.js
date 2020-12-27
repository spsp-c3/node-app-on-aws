var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with Hello World! from EC2', function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get('/').expect('Hello World! from EC2', done);
 });
});