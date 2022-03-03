const express = require('express')
const path = require('path')
const app = express()

const port = 3000

const indexRouter = require('./routes/index')
const calcRouter = require('./routes/calc')
const clientsRouter = require('./routes/clients')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use((req, res, next) => {
  console.log('requested route', req.originalUrl)
  next()
})

app.use('/', indexRouter)
app.use('/calc', calcRouter)
app.use('/clients', clientsRouter)

app.listen(port, () => console.log('Listening on the port:', port))
