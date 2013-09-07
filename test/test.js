var chai = require('chai')
chai.should()
var expect = chai.expect

describe('unitary', function () {
  var unitary = require('../')
  
  it('exports a pseudo constructor', function () {

    var cents = unitary('cents')
    cents.should.be.a('function')

    expect(function () {
      new unitary('foo')
    })

  })

  describe('unit', function () {
    it('is valueof its value', function () {
      var cents = unitary('cents')
      var c25 = cents(25)
      c25.valueOf().should.equal(25)
      expect(5 * c25).to.equal(125)
    })
    it('.unit', function () {
      var cents = unitary('cents')
      var c25 = cents(25)
      c25.unit.should.equal('cents')
    })
    it('.is matches constructor', function () {
      var cents = unitary('cents')
      var c25 = cents(25)
      c25.is(cents).should.equal(true)
    })
    it('.is matches string', function () {
      var cents = unitary('cents')
      var c25 = cents(25)
      c25.is('cents').should.equal(true)
    })
  })

})
