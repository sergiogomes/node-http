const indexController = require('../controllers/index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
  it('should return home', () => {
    let res = {
      send: function(){}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Home')
    indexController.home({}, res)
  })
})
