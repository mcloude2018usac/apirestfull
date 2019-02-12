
var Empresa = require('../models/empresa');
var Bitacora = require('../models/bitacora');

exports.getEmpresa = function(req, res, next){
    if(req.params.id)
    { 
        if(req.params.id=='activo')
        {
            Empresa.find({estado:'Activo'},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });
        }
        else
        {

            if(req.params.id=='1' || req.params.id=='2')
        {
        }
        else
        {
            Empresa.find({_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }

        }   
       
    }
    else
    { Empresa.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteEmpresa = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina empresa'});
    Empresa.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaEmpresa2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
    console.log(req.params.recordID);
if(req.params.recordID!=='crea')
{ 
    Empresa.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) { 
         
            res.send(err);  }
        else
        {   todo.nit 	=	req.body.nit	||	todo.nit 	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.razon 	=	req.body.razon	||	todo.razon 	;
            todo.direccion    	=	req.body.direccion    	||	todo.direccion    	;
            todo.email   	=	req.body.email    	||	todo.email   	;
            todo.telefonos 	=	req.body.telefonos 	||	todo.telefonos 	;
            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.usuarioup=req.body.bitacora.email;
            
           
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   
    Empresa.create({ nit        	: req.body.nit        	,
        nombre        	: req.body.nombre        	,
        razon 	: req.body.razon 	,
        direccion    	: req.body.direccion    	,
        email    	: req.body.email    	,
        telefonos   	: req.body.telefonos  	,
        estado    	: req.body.estado   	,
        usuarionew:req.body.bitacora.email,
        date 			: Date.now() }
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
*/