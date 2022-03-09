const indexController = require('../controllers/index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
  it('should return home', () => {
    const res = {
      render: function(){}
    }
    const mock = sinon.mock(res)
    mock.expects('render').once().withArgs('Home', { time: new Date().getTime() })
    indexController.home({}, res)
  })
})
