const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function () {
  suite('Integration tests with chai-http', function () {
    // #1
    test('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello Guest');
          done();
        });
    });
    // #2
    test('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello xy_z');
          done();
        });
    });
    // #3
    test('Send {surname: "Colombo"} in a PUT request', function (done) {
      chai
        .request(server)
        .keepOpen()
        .put('/travellers')
        
        .end(function (err, res) {
          assert.fail();

          done();
        });
    });
    // #4
    test('Send {surname: "da Verrazzano"} in a PUT request', function (done) {
      assert.fail();

      done();
    });
  });
});

const Browser = require('zombie');

suite('Functional Tests with Zombie.js', function () {
  test('Headless browser navigation to the homepage', function (done) {
    assert.fail();

    done();
  });

  suite('Famous Italian Explorers', function () {
    // #5
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      assert.fail();

      done();
    });
    // #6
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      assert.fail();

      done();
    });
  });
});