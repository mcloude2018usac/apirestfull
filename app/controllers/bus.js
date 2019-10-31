

var Bus = require('../models/bus');
var Bitacora = require('../models/bitacora');

exports.getBus = function(req, res, next){
       if(req.params.id4)
        {  
           
            Bus.find({idempresa :req.params.id2,idafiliado:req.params.id3,idempresa0:req.params.id4})
        .populate('idtarifa.id')
        .populate('idruta.id')
        .exec(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}
exports.deleteBus = function(req, res, next){
   
    Bitacora.create({idempresa:req.params.idempresa,idafiliado:req.params.idafiliado,email: req.params.userID ,permiso:'Elimina',accion:'Elimina Bus '});
    Bus.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaBus2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{
    Bus.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  

   
            todo.idempresa        	=	req.body.idempresa        	||	todo.idempresa        	;
            todo.idafiliado        	=	req.body.idafiliado        	||	todo.idafiliado        	;
            todo.codigo        	=	req.body.codigo || todo.codigo       	      	;
            todo.nombre        	=	req.body.nombre || todo.nombre       	      	;
            todo.noplaca        	=	req.body.noplaca || todo.noplaca       	      	;
            todo.estado        	=	req.body.estado || todo.estado       	      	;
            todo.idtarifa=	{id:req.body.idtarifa.id,nombre:req.body.idtarifa.nombre   }   	;
            todo.idruta=	{id:req.body.idruta.id,nombre:req.body.idruta.nombre   }   	;
            todo.usuarioup=req.body.bitacora.email;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

  
    
    
    Bus.find({idempresa        	: req.body.idempresa        	,
        idafiliado: req.body.idafiliado, codigo: req.body.codigo,placa: req.body.placa
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un Edificio con este nombre'); }
        else
        {   

            Bus.create({
                idempresa0        	: req.body.idempresa0        	,
            idempresa        	: req.body.idempresa        	,
            idafiliado: req.body.idafiliado,
            codigo: req.body.codigo,
            noplaca: req.body.noplaca,
            estado: req.body.estado,
            nombre: req.body.nombre,
            idtarifa: req.body.idtarifa,
            idruta: req.body.idruta,
            usuarionew:req.body.bitacora.email
        
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
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

exports.getBus = function(req, res, next){
    if (connection) 
    {   var sql='';
        if(req.params.id3)  
        {   sql = "SELECT idtarifa,idruta,idempresa,idafiliado,codigo,noplaca as nombre,estado FROM Bus WHERE idempresa = " + connection.escape(req.params.id)+ " and idafiliado= "+ connection.escape(req.params.id2)+ " and codigo= "+ connection.escape(req.params.id3)
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
            });
        }
        else
        {   sql="SELECT idtarifa,idruta,idempresa,idafiliado,codigo,noplaca as nombre,estado FROM Bus  where idempresa= "+ connection.escape(req.params.id)+ " and idafiliado= "+ connection.escape(req.params.id2)
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

exports.creaBuss = function(req, res, next){
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
            sql = 'SELECT * FROM Bus WHERE idempresa = ' + connection.escape( req.body.idempresa) +' and idafiliado = ' + connection.escape( req.body.idafiliado) +' and codigo = ' + connection.escape( req.body.codigo);
          
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

                            sql = "INSERT INTO Bus SET ?" ;
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
            sql = 'UPDATE Bus SET noplaca = ' + connection.escape(busData.noplaca) +  
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
exports.deleteBus = function(req, res, next){
    if (connection) 
    {   var sql='';
    
         sql = 'DELETE FROM Bus WHERE  idempresa = ' + connection.escape(req.params.id2) +' and idafiliado = ' + connection.escape(req.params.id)+' and codigo = ' + connection.escape(req.params.id3);

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