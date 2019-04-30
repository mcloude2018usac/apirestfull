

var Galeriaimg = require('../models/galeriaimg');
var Bitacora = require('../models/bitacora');

exports.getGaleriaimg = function(req, res, next){
       if(req.params.id2)
        {  
            if(req.params.id2=='todos')
            {
                Galeriaimg.find({idempresa :req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                     res.json(todos);   
                    
                });
            }
           
            if(req.params.id2=='imagen')
            {
                Galeriaimg.find({_id :req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                                if(todos.length>0)
                                {
                                    console.log(todos)
                    const dataUrl = todos[0].imagen;
                                        res.send(`<img src=${dataUrl}>`);
        
                                }
                else{

                    res.json(todos);   
                }


                    
                });
            }
                
             
           
        }
        else
        { 
            
      
        }

 
}
exports.deleteGaleriaimg = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Galeria img '});
    Galeriaimg.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaGaleriaimg2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Galeriaimg.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

   
            todo.categoria      	=	req.body.categoria        	||	todo.categoria        	;
             todo.nombre        	=	req.body.nombre || todo.nombre       	      	;
            todo.imagen       	=	req.body.imagen || todo.imagen       	      	;
            todo.url        	=	req.body.url || todo.url       	      	;
            todo.estado        	=	req.body.estado || todo.estado       	      	;
            todo.usuarioup=req.body.bitacora.email;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  

            Galeriaimg.create({
            idempresa        	: req.body.idempresa        	,
            categoria        	: req.body.categoria        	,
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            url: req.body.url,
            estado        	: req.body.estado        	,
            usuarionew:req.body.bitacora.email
        
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
           
   
 
}

}






/*
var mysql = require('mysql'),

connection = mysql.createConnection(
 { 
 host: '190.143.151.236', 
 user: 'tico4',  
 password: 'ocitocit', 
 database: 'mymcloude'
 }
);

exports.getGaleriaimg = function(req, res, next){
    if (connection) 
    {   var sql='';
        if(req.params.id3)  
        {   sql = "SELECT idtarifa,idruta,idempresa,idafiliado,codigo,noplaca as nombre,estado FROM Galeriaimg WHERE idempresa = " + connection.escape(req.params.id)+ " and idafiliado= "+ connection.escape(req.params.id2)+ " and codigo= "+ connection.escape(req.params.id3)
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
            });
        }
        else
        {   sql="SELECT idtarifa,idruta,idempresa,idafiliado,codigo,noplaca as nombre,estado FROM Galeriaimg  where idempresa= "+ connection.escape(req.params.id)+ " and idafiliado= "+ connection.escape(req.params.id2)
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

exports.creaGaleriaimgs = function(req, res, next){
    var busData = {
        idempresa: req.body.idempresa,
        idafiliado : req.body.idafiliado,
        codigo : req.body.codigo,
        noplaca: req.body.noplaca,
        estado : req.body.estado,
        idtarifa : req.body.idtarifa,
        idruta : req.body.idruta
      
        };
    if (connection) 
    {   var sql='';
        
        if(req.params.id=='crea')
        {
            sql = 'SELECT * FROM Galeriaimg WHERE idempresa = ' + connection.escape( req.body.idempresa) +' and idafiliado = ' + connection.escape( req.body.idafiliado) +' and codigo = ' + connection.escape( req.body.codigo);
          
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

                            sql = "INSERT INTO Galeriaimg SET ?" ;
                            connection.query(sql,  busData,function(error, rows) {
                                if (error){ 
                                    res.status(500).send(error.sqlMessage);
                                 }
                                 res.json(busData);
                            });

                        }
            });

           
        }
        else
        {
            sql = 'UPDATE Galeriaimg SET noplaca = ' + connection.escape(busData.noplaca) +  
            ',idtarifa = ' + connection.escape(busData.idtarifa) +
            ',idruta = ' + connection.escape(busData.idruta) +    
                    ' WHERE idafiliado = ' + connection.escape( busData.idafiliado) + ' and idempresa='
                    + connection.escape( busData.idempresa) 
                    + ' and codigo=' + connection.escape( busData.codigo) ;
 
                  
                    connection.query(sql, function(error, rows) {
                        if (error){ 
                            res.status(500).send(error.sqlMessage);
                         }
                         res.json(busData);
                    });
        
        }

    }
    else
    {
        res.status(500).send('No conexion con db');
    }
  

}
exports.deleteGaleriaimg = function(req, res, next){
    if (connection) 
    {   var sql='';
    
         sql = 'DELETE FROM Galeriaimg WHERE  idempresa = ' + connection.escape(req.params.id2) +' and idafiliado = ' + connection.escape(req.params.id)+' and codigo = ' + connection.escape(req.params.id3);

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
*/