
const express = require('express')
const app = express()
const path = require('path')

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/buy/:name', function(req, res){
    const name = req.params.name
    const wantedObj = store.find(s => s.name === name)
    wantedObj.inventory--
    res.send(wantedObj)
})

app.get('/priceCheck/:name', function(req, res){
    const name = req.params.name
    const wantedObj = store.find(s => s.name === name)
    res.send(wantedObj)
})

const port = 3000
app.listen(port, function () {
    console.log('Server is up and running smoothly')
})