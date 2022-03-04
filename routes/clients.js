const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clients')

router.get('/', (req, res) => {
  res.render('clients',
    { message: 'Client pages:' }
  )
})

router.get('/list', clientsController.list)
router.get('/create', clientsController.create)

module.exports = router
