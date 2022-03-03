const express = require('express')
const router = express.Router()
const clientsController = require('../controllers/clients')

router.get('/', (req, res) => {
  res.render('clients',
    { message: 'Clients home' }
  )
})

router.get('/list', clientsController.list)
router.get('/create', clientsController.create)

module.exports = router
