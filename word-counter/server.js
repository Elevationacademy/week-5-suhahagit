
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/router/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)

const port = 3000
app.listen(port, function(){
    console.log("server running")
})