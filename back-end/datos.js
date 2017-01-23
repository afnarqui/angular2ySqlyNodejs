var sql = require('mssql')

var datos = {}

var config = {
        sql :{
            user: 'sa',
            password: 'opa123.',
            database: 'pruebas',
            server: 'popa8\\sql2016'
    }
}

datos.get = function( req, res, params) {
    sql.connect(config.sql).then( function( conn ) {
        let sqlParm = new sql.Request( conn )

        for ( var i in params ) {
            slqParm.input( i, params[i])
        }
            sqlParm.query('select * from datos').then( function( response) {
                conn.close()
                res.send(response)
            }).catch( function( error ) {
                res.send( error )
            })

    }).catch( function( error ) {
        res.send( error )
    })
}

datos.post = function(req, res, params) {
    sql.connect(config.sql).then(function(conn){
    var sqlParm = new sql.Request(conn)

    for(var i in params) {
      sqlParm.input(i,params[i])
    }

    sqlParm.execute('guardardatos').then(function(respuesta){
      res.send(respuesta)
    }).catch(function(err){
      res.send(err)
    })

  }).catch(function(err){
    res.send(err)
  })
}

datos.put = function( req, res, params) {
  sql.connect(config.sql).then( function( conn) {
        var sqlParm = new sql.Request( conn )

        for ( var i in params ) {
            sqlParm.input( i , params[i])
        }

        sqlParm.execute('updatedatos').then( function( response) {
            conn.close()
            res.send(response)
        }).catch( function( error ) {
            res.send( error )
        })
    }).catch( function( error ) {
        res.send( error )
    })
}

datos.delete = function( req, res, params) {
    sql.connect(config.sql).then(function(conn){
        var sqlParm = new sql.Request(conn)

        for ( var i in params) {
            sqlParm.input(i, params[i])
        }

        sqlParm.execute('deletedatos').then(function(response){
            res.send(response)
        }).catch(function(err){
            res.send(err)
        })
    }).catch(function(err){
        res.send(err)
    })
}
module.exports = datos 
