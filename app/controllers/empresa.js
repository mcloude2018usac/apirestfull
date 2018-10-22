var mysql = require('mysql'),

connection = mysql.createConnection(
 { 
 host: '190.143.151.236', 
 user: 'tico4',  
 password: 'ocitocit', 
 database: 'mymcloude'
 }
);

exports.getEmpresa = function(req, res, next){
    if (connection) 
    {   var sql='';
        if(req.params.nit)  
        {   sql = "SELECT * FROM empresa WHERE nit = '" + connection.escape(req.params.nit) + "'";
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
                next();
            });
        }
        else
        {   sql="SELECT * FROM empresa";
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
                next();
            });

        }
    }
    else
    {
        res.status(500).send('No conexion con db');
        next();
    }

    
}

exports.creaEmpresas = function(req, res, next){
    var empresaData = {
        nit : req.body.nit,
        nombre : req.body.nombre,
        razon : req.body.razon,
        direccion : req.body.direccion,
        email : req.body.email,
        telefonos : req.body.telefono
        };
    if (connection) 
    {   var sql='';
        
        if(req.params.nit=='crea')
        {
            sql = 'SELECT * FROM empresa WHERE nit = ' + connection.escape( req.body.nit);
          
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

                            sql = "INSERT INTO empresa SET ?" ;
                            connection.query(sql,  empresaData,function(error, rows) {
                                if (error){ 
                                    res.status(500).send(error.sqlMessage);
                                 }
                                 res.json(empresaData);
                            });

                        }
            });

           
        }
        else
        {
            sql = 'UPDATE empresa SET nombre = ' + connection.escape(empresaData.nombre) + ',' +  
                    'razon = ' + connection.escape(empresaData.razon) +',' +  
                    'direccion = ' + connection.escape(empresaData.direccion) +',' +  
                    'email = ' + connection.escape(empresaData.email) +',' +  
                    'telefonos = ' + connection.escape(empresaData.telefonos) +
                    ' WHERE nit = ' + connection.escape( empresaData.nit);// + empresaData.nit;
 
                  
                    connection.query(sql, function(error, rows) {
                        if (error){ 
                            res.status(500).send(error.sqlMessage);
                         }
                         res.json(empresaData);
                    });
        
        }

    }
    else
    {
        res.status(500).send('No conexion con db');
    }
  

}
exports.deleteEmpresa = function(req, res, next){
    if (connection) 
    {   var sql='';
         var id = req.params.nit;
         sql = 'DELETE FROM empresa WHERE nit = ' + connection.escape(id);

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
