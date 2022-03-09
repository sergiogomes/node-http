const clientsController = require('../controllers/clients')
const expect = require('chai').expect
const sinon = require('sinon')

describe('clients controller', () => {
  describe('list', () => {
    it('should return all clients', () => {
      const args = {
        message: 'Client list:',
        clientList: [
          {id: 1, name: 'Sergio', type: 'A'},
          {id: 2, name: 'Paulo', type: 'A'},
          {id: 3, name: 'Nicolas', type: 'B'},
          {id: 4, name: 'Cindy', type: 'C'},
        ],
      }
      const res = {
        render: function(){}
      }
      const mock = sinon.mock(res)
      mock.expects('render').once().withArgs('clientList', args)
      clientsController.list({}, res)
    })
  })

  describe('create', () => {
    it('should create a new client', () => {
      const args = {
        message: 'New client'
      }
      const res = {
        render: function(){}
      }
      const mock = sinon.mock(res)
      mock.expects('render').once().withArgs('clients', args)
      clientsController.create({}, res)
    })
  })
})
