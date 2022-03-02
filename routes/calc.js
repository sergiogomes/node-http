const express = require('express')
const router = express.Router()
const calcController = require('../controllers/calc')

router.get('/', (req, res) => {
  res.send('Calculator operations: /sum')
})

router.get('/sum', calcController.sum)
router.get('/even/:num', calcController.even)

module.exports = router
