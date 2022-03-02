const sum = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const result = parseFloat(num1) + parseFloat(num2)
    res.send('The result is: ' + result)
  } else {
    res.send('Please, provide num1 and num2')
  }
}

const even = (req, res) => {
  if ((req.params.num % 2) === 0) {
    res.send('Number is even')
  } else {
    res.send('Number is odd')
  }
}

module.exports = {
  sum,
  even
}
