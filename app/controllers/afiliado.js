var mysql = require('mysql'),

connection = mysql.createConnection(
 { 
 host: '190.143.151.236', 
 user: 'tico4',  
 password: 'ocitocit', 
 database: 'mymcloude'
 }
);

exports.getAfiliado = function(req, res, next){
    if (connection) 
    {   var sql='';
        if(req.params.id2)  
        {   sql = "SELECT * FROM Afiliado WHERE idempresa = " + connection.escape(req.params.id)  + " and nit= "+ connection.escape(req.params.id2)
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
            });
        }
        else
        {   sql="SELECT * FROM Afiliado  where idempresa= "+ connection.escape(req.params.id);
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
            });

        }
    }
    else
    {
        res.status(500).send('No conexion con db');
    }

    
}

exports.creaAfiliados = function(req, res, next){
    var afiliadoData = {
        idempresa: req.body.idempresa,
        dpi : req.body.dpi,
        nombre : req.body.nombre,
        apellido: req.body.apellido,
        direccion : req.body.direccion,
        email : req.body.email,
        telefono : req.body.telefono
        };
    if (connection) 
    {   var sql='';
        
        if(req.params.id=='crea')
        {
            sql = 'SELECT * FROM Afiliado WHERE idempresa = ' + connection.escape( req.body.idempresa) +' and dpi = ' + connection.escape( req.body.dpi);
          
            connection.query(sql, function(err, row) 
            {
                        if (err){ 
                            res.status(500).send(error.sqlMessage);
                        }
                        
                        if(row.length>0)
                        {
                            res.status(500).send('YA EXISTE REGISTRO');
                           
                        }
                        else
                        {

                            sql = "INSERT INTO Afiliado SET ?" ;
                            connection.query(sql,  afiliadoData,function(error, rows) {
                                if (error){ 
                                    res.status(500).send(error.sqlMessage);
                                 }
                                 res.json(afiliadoData);
                            });

                        }
            });

           
        }
        else
        {
            sql = 'UPDATE Afiliado SET nombre = ' + connection.escape(afiliadoData.nombre) + ',' +  
                    'apellido = ' + connection.escape(afiliadoData.apellido) +',' +  
                    'direccion = ' + connection.escape(afiliadoData.direccion) +',' +  
                    'email = ' + connection.escape(afiliadoData.email) +',' +  
                    'telefono = ' + connection.escape(afiliadoData.telefono) +
                    ' WHERE dpi = ' + connection.escape( afiliadoData.dpi) + ' and idempresa='
                    + connection.escape( afiliadoData.idempresa) ;
 
                  
                    connection.query(sql, function(error, rows) {
                        if (error){ 
                            res.status(500).send(error.sqlMessage);
                         }
                         res.json(afiliadoData);
                    });
        
        }

    }
    else
    {
        res.status(500).send('No conexion con db');
    }
  

}
exports.deleteAfiliado = function(req, res, next){
    if (connection) 
    {   var sql='';
    
         sql = 'DELETE FROM Afiliado WHERE  idempresa = ' + connection.escape(req.params.id2) +' and dpi = ' + connection.escape(req.params.id);

         connection.query(sql, function(error, rows) {
            if (error){ 
                res.status(500).send(error.sqlMessage);
             }
             res.json({"msg":"deleted"});
        });
    }
    else
    {
        res.status(500).send('No conexion con db');
    }

    
}
