const calcController = require('../controllers/calc')
const expect = require('chai').expect
const sinon = require('sinon')

describe('calc controller', () => {
  describe('sum', () => {
    it('no args should return an error message', () => {
      const args = { message: 'Please, provide num1 and num2' }
      const res = {
        render: function(){}
      }
      const req = { query: {} }
      const mock = sinon.mock(res)
      mock.expects('render').once().withArgs('calc', args)
      calcController.sum(req, res)
    })

    it('2 + 3 should result 5', () => {
      const args = { result: 5 }
      const res = {
        render: function(){}
      }
      const req = {
        query: {
          num1: '2',
          num2: '3',
        }
      }
      const mock = sinon.mock(res)
      mock.expects('render').once().withArgs('sum', args)
      calcController.sum(req, res)
    })
  })

  describe('even', () => {
    it('2 should be even', () => {
      const args = { message: 'Number 2 is even' }
      const res = {
        render: function(){}
      }
      const req = {
        params: {
          num: '2'
        }
      }
      const mock = sinon.mock(res)
      mock.expects('render').once().withArgs('even', args)
      calcController.even(req, res)
    })

    it('3 should be odd', () => {
      let res = {
        send: function(){}
      }
      let req = {
        params: {
          num: '3'
        }
      }
      let mock = sinon.mock(res)
      mock.expects('send').once().withArgs('Number is odd')
      calcController.even(req, res)
    })
  })
})
