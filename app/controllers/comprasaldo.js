var mysql = require('mysql'),

connection = mysql.createConnection(
 { 
 host: '190.143.151.236', 
 user: 'tico4',  
 password: 'ocitocit', 
 database: 'mymcloude'
 }
);

exports.getComprasaldo = function(req, res, next){
    if (connection) 
    {   var sql='';
        if(req.params.id2)  
        {   sql = "SELECT idcomprasaldo,idsuscriptor,DATE_FORMAT(fecha, '%d/%m/%Y')  fecha2,fecha nombre,monto,evento,formapago,nodoc FROM Comprasaldo WHERE idsuscriptor = " + connection.escape(req.params.id)  + " and idcomprasaldo= "+ connection.escape(req.params.id2)
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
                next();
            });
        }
        else
        {   sql="SELECT idcomprasaldo,idsuscriptor,DATE_FORMAT(fecha, '%d/%m/%Y')  fecha2,fecha nombre,monto,evento,formapago,nodoc FROM Comprasaldo  where idsuscriptor= "+ connection.escape(req.params.id);
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

exports.creaComprasaldos = function(req, res, next){
    var ComprasaldoData;
    if(req.params.id=='crea')
        {
            ComprasaldoData = {
               
                idsuscriptor : req.body.idsuscriptor,
                fecha : req.body.fecha,
                monto: req.body.monto,
                evento : req.body.evento,
                formapago : req.body.formapago,
                nodoc : req.body.nodoc
                };
        }
        else
        {
            ComprasaldoData = {
                idcomprasaldo: req.body.idcomprasaldo,
                idsuscriptor : req.body.idsuscriptor,
                fecha : req.body.fecha,
                monto: req.body.monto,
                evento : req.body.evento,
                formapago : req.body.formapago,
                nodoc : req.body.nodoc
                };

        }    
     
    if (connection) 
    {   var sql='';
        
        if(req.params.id=='crea')
        {
           
         
                  
                            sql = "INSERT INTO comprasaldo set fecha = STR_TO_DATE("+connection.escape(ComprasaldoData.fecha)+", '%Y-%m-%d')" +  
                            ',idsuscriptor = ' + connection.escape(ComprasaldoData.idsuscriptor) +
                            ',monto = ' + connection.escape(ComprasaldoData.monto) +
                            ',evento = ' + connection.escape(ComprasaldoData.evento) +
                            ',formapago = ' + connection.escape(ComprasaldoData.formapago) +
                            ',nodoc = ' + connection.escape(ComprasaldoData.nodoc) 
                       
                            connection.query(sql,  ComprasaldoData,function(error, results,fields) {
                                if (error){ 
                                    res.status(500).send(error.sqlMessage);
                                 }



                                 res.json({idcomprasaldo:results.insertId, idsuscriptor: ComprasaldoData.idsuscriptor,  nombre: ComprasaldoData.fecha, monto: ComprasaldoData.monto, evento: ComprasaldoData.evento, formapago: ComprasaldoData.formapago, nodoc: ComprasaldoData.nodoc });
                            });

                        
        

           
        }
        else
        {
                    sql = "update comprasaldo set fecha = STR_TO_DATE("+connection.escape(ComprasaldoData.fecha)+", '%Y-%m-%d')" +  
                    ',monto = ' + connection.escape(ComprasaldoData.monto) +
                    ',evento = ' + connection.escape(ComprasaldoData.evento) +
                    ',formapago = ' + connection.escape(ComprasaldoData.formapago) +
                    ' WHERE idsuscriptor = ' + connection.escape( ComprasaldoData.idsuscriptor) + ' and idcomprasaldo='
                    + req.params.id ;
 
                
                    connection.query(sql, function(error, rows) {
                        if (error){ 
                            res.status(500).send(error.sqlMessage);
                         }
                         res.json({ idcomprasaldo: req.body.idcomprasaldo,
                            idsuscriptor : req.body.idsuscriptor,
                            nombre : req.body.fecha,
                            fecha2 : req.body.fecha,
                            monto: req.body.monto,
                            evento : req.body.evento,
                            formapago : req.body.formapago,
                            nodoc : req.body.nodoc});
                    });
        
        }

    }
    else
    {
        res.status(500).send('No conexion con db');
    }
  

}
exports.deleteComprasaldo = function(req, res, next){
    if (connection) 
    {   var sql='';
    
         sql = 'DELETE FROM Comprasaldo WHERE  idsuscriptor = ' + connection.escape(req.params.id) +' and idcomprasaldo = ' + connection.escape(req.params.id2);

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
