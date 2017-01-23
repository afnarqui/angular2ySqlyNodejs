var express = require('express')
var router = express.Router()
var datos = require('./datos')

router.get('/datos/', function(req, res) {
    datos.get( req, res, req.body)
})

router.post('/datos/', function(req,res) {
  datos.post(req, res, req.body)
})

router.put('/datos/', function(req,res) {
  datos.put(req, res, req.body)
})

router.delete('/datos', function( req,res) {
    datos.delete(req,res,req.body)
})

module.exports = router