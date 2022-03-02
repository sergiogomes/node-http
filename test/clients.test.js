const clientsController = require('../controllers/clients')
const expect = require('chai').expect
const sinon = require('sinon')

describe('clients controller', () => {
  describe('list', () => {
    it('should return all clients', () => {
      let res = {
        send: function(){}
      }
      let mock = sinon.mock(res)
      mock.expects('send').once().withArgs('Clients list')
      clientsController.list({}, res)
    })
  })

  describe('create', () => {
    it('should create a new client', () => {
      let res = {
        send: function(){}
      }
      let mock = sinon.mock(res)
      mock.expects('send').once().withArgs('New client')
      clientsController.create({}, res)
    })
  })
})
