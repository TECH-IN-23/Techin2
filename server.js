const express = require('express') //
const bodyParser = require('body-parser')
const { request } = require('express')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/produtoRoutes')

routes(app)

app.route('/')
  .get((req, res) => {
    res.send('API TEC_CHIN FUNCOINANDO!')
  })

const port = process.env.PORT || 3000

app.listen(port)

console.log('SERVIDOR ATIVO!, PORTA:', port)
