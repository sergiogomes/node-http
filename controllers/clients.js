const list = (req, res) => {
  res.send('Clients list')
}

const create = (req, res) => {
  res.send('New client')
}

module.exports = {
  create,
  list
}
