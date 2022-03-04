const sum = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query
    const result = parseFloat(num1) + parseFloat(num2)
    res.render('sum', { result })
  } else {
    res.render('calc', {
      message: 'Please, provide num1 and num2'
    })
  }
}

const even = (req, res) => {
  if (!Object.hasOwnProperty.call(req, 'params')) {
    res.render('calc', {
      message: 'Please, provide the param num'
    })
  }
  
  if ((req.params.num % 2) === 0) {
    res.render('even', {
      message: `Number ${req.params.num} is even`
    })
  } else {
    res.render('even', {
      message: `Number ${req.params.num} is odd`
    })
  }
}

module.exports = {
  sum,
  even
}
