const list = (req, res) => {
  res.render('clients',
    { message: 'Clients list' }
  )
}

const create = (req, res) => {
  res.render('clients',
    { message: 'New client' }
  )
}

module.exports = {
  create,
  list
}
