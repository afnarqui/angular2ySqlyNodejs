var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var router = require('./router')
var app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())

app.use('/',router)

app.listen(8000,function() {
    console.log('servidor corriendo puerto 8000')
})
