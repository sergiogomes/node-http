const home = (req, res) => {
  res.render('Home', {
    time: new Date().getTime()
  })
}

module.exports = {
  home
}
