const list = (req, res) => {
  res.render('clientList', {
    message: 'Client list:',
    clientList: [
      {id: 1, name: 'Sergio', type: 'A'},
      {id: 2, name: 'Paulo', type: 'A'},
      {id: 3, name: 'Nicolas', type: 'B'},
      {id: 4, name: 'Cindy', type: 'C'},
    ],
  })
}

const create = (req, res) => {
  res.render('clients', {
    message: 'New client'
  })
}

module.exports = {
  create,
  list
}
