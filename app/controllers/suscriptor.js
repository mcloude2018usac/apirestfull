var mysql = require('mysql'),

connection = mysql.createConnection(
 { 
 host: '190.143.151.236', 
 user: 'tico4',  
 password: 'ocitocit', 
 database: 'mymcloude'
 }
);

exports.getSuscriptor = function(req, res, next){
    if (connection) 
    {   var sql='';
        if(req.params.nodpi)  
        {   sql = "SELECT *  FROM Suscriptor WHERE nodpi = " + connection.escape(req.params.nodpi) ;
        
        connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
                next();
            });
        }
        else
        {   sql="SELECT *  FROM Suscriptor";
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

exports.creaSuscriptors = function(req, res, next){
    var suscriptorData = {
        nodpi : req.body.nodpi,
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        direccion : req.body.direccion,
        fecha_nac : req.body.fecha_nac,
        sexo : req.body.sexo,
        saldoactual : req.body.saldoactual,
        telefono : req.body.telefono,
        estado : req.body.estado,
        usuario : req.body.usuario,
        codigo1: req.body.codigo1,
        codigo2: req.body.codigo2,
        codigo3: req.body.codigo3,
        codigo4: req.body.codigo4,
        codigo5: req.body.codigo5,
        dispositivo1: req.body.dispositivo1,
        dispositivo2: req.body.dispositivo2,
        dispositivo3: req.body.dispositivo3,
        dispositivo4: req.body.dispositivo4,
        dispositivo5: req.body.dispositivo5,
        saldo1: req.body.saldo1,
        saldo2: req.body.saldo2,
        saldo3: req.body.saldo3,
        saldo4: req.body.saldo4,
        saldo5: req.body.saldo5
        };
    if (connection) 
    {   var sql='';

        if(req.params.nodpi=='crea')
        {
        
            var sql = 'SELECT * FROM suscriptor WHERE nodpi = ' + connection.escape(req.body.nodpi);
          
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

                            sql = "INSERT INTO suscriptor set fecha_nac = STR_TO_DATE("+connection.escape(suscriptorData.fecha_nac)+", '%Y-%m-%d')" +  
                            ',nombre = ' + connection.escape(suscriptorData.nombre) +
                            ',apellido = ' + connection.escape(suscriptorData.apellido) +
                            ',direccion = ' + connection.escape(suscriptorData.direccion) +
                            ', sexo= ' + connection.escape(suscriptorData.sexo) +
                            ', saldoactual= ' + connection.escape(suscriptorData.saldoactual) +
                            ', telefono= ' + connection.escape(suscriptorData.telefono) +
                            ', estado= ' + connection.escape(suscriptorData.estado) +
                            ', nodpi= ' + connection.escape(suscriptorData.nodpi) +
                            ', codigo1= ' + connection.escape(suscriptorData.codigo1) +
                            ', codigo2= ' + connection.escape(suscriptorData.codigo2) +
                            ', codigo3= ' + connection.escape(suscriptorData.codigo3) +
                            ', codigo4= ' + connection.escape(suscriptorData.codigo4) +
                            ', codigo5= ' + connection.escape(suscriptorData.codigo5) +
                            ', dispositivo1= ' + connection.escape(suscriptorData.dispositivo1) +
                            ', dispositivo2= ' + connection.escape(suscriptorData.dispositivo2) +
                            ', dispositivo3= ' + connection.escape(suscriptorData.dispositivo3) +
                            ', dispositivo4= ' + connection.escape(suscriptorData.dispositivo4) +
                            ', dispositivo5= ' + connection.escape(suscriptorData.dispositivo5) +
                            ', saldo1= ' + connection.escape(suscriptorData.saldo1) +
                            ', saldo2= ' + connection.escape(suscriptorData.saldo2) +
                            ', saldo3= ' + connection.escape(suscriptorData.saldo3) +
                            ', saldo4= ' + connection.escape(suscriptorData.saldo4) +
                            ', saldo5= ' + connection.escape(suscriptorData.saldo5) 

                                connection.query(sql,  function(error, rows) {
                                if (error){ 
                                    res.status(500).send(error.sqlMessage);
                                 }
                                 res.json(suscriptorData);
                            });

                        }
            });

           
        }
        else
        {
            sql = "update  suscriptor set fecha_nac = STR_TO_DATE("+connection.escape(suscriptorData.fecha_nac)+", '%Y-%m-%d')" +
            ',nombre = ' + connection.escape(suscriptorData.nombre) +
            ',apellido = ' + connection.escape(suscriptorData.apellido) +
            ',direccion = ' + connection.escape(suscriptorData.direccion) +
            ', sexo= ' + connection.escape(suscriptorData.sexo) +
            ', saldoactual= ' + connection.escape(suscriptorData.saldoactual) +
            ', telefono= ' + connection.escape(suscriptorData.telefono) +
            ', estado= ' + connection.escape(suscriptorData.estado) +
            ', codigo1= ' + connection.escape(suscriptorData.codigo1) +
            ', codigo2= ' + connection.escape(suscriptorData.codigo2) +
            ', codigo3= ' + connection.escape(suscriptorData.codigo3) +
            ', codigo4= ' + connection.escape(suscriptorData.codigo4) +
            ', codigo5= ' + connection.escape(suscriptorData.codigo5) +
            ', dispositivo1= ' + connection.escape(suscriptorData.dispositivo1) +
            ', dispositivo2= ' + connection.escape(suscriptorData.dispositivo2) +
            ', dispositivo3= ' + connection.escape(suscriptorData.dispositivo3) +
            ', dispositivo4= ' + connection.escape(suscriptorData.dispositivo4) +
            ', dispositivo5= ' + connection.escape(suscriptorData.dispositivo5) +
            ', saldo1= ' + connection.escape(suscriptorData.saldo1) +
            ', saldo2= ' + connection.escape(suscriptorData.saldo2) +
            ', saldo3= ' + connection.escape(suscriptorData.saldo3) +
            ', saldo4= ' + connection.escape(suscriptorData.saldo4) +
            ', saldo5= ' + connection.escape(suscriptorData.saldo5) +
            ' WHERE nodpi = ' + connection.escape(suscriptorData.nodpi);
 
           
                    connection.query(sql, function(error, rows) {
                        if (error){ 
                            res.status(500).send(error.sqlMessage);
                         }
                         res.json(suscriptorData);
                    });
        
        }

    }
    else
    {
        res.status(500).send('No conexion con db');
    }
  

}
exports.deleteSuscriptor = function(req, res, next){
    if (connection) 
    {   var sql='';
         var id = req.params.nodpi;
         sql = 'DELETE FROM Suscriptor WHERE nodpi = ' + connection.escape(id);

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
