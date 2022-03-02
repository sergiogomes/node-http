const calcController = require('../controllers/calc')
const expect = require('chai').expect
const sinon = require('sinon')

describe('calc controller', () => {
  describe('sum', () => {
    it('no args should return an error message', () => {
      let res = {
        send: function(){}
      }
      let req = { query: {} }
      let mock = sinon.mock(res)
      mock.expects('send').once().withArgs('Please, provide num1 and num2')
      calcController.sum(req, res)
    })

    it('2 + 3 should result 5', () => {
      let res = {
        send: function(){}
      }
      let req = {
        query: {
          num1: '2',
          num2: '3',
        }
      }
      let mock = sinon.mock(res)
      mock.expects('send').once().withArgs('The result is: 5')
      calcController.sum(req, res)
    })
  })

  describe('even', () => {
    it('2 should be even', () => {
      let res = {
        send: function(){}
      }
      let req = {
        params: {
          num: '2'
        }
      }
      let mock = sinon.mock(res)
      mock.expects('send').once().withArgs('Number is even')
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
