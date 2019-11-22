
var Indicadore = require('../../models/segeplan/indicadores');
var Bitacora = require('../../models/bitacora');
var oracledb = require('oracledb');


var connAttrs = {
          "user": "dbprocessges",
    "password": "S1t13n3$",
    "connectString": "181.174.122.180/xe"
}

function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }



exports.getIndicadores = function(req, res, next){
    if(req.params.id3)
    { 

        Indicadore.find({idempresa:req.params.id,usuarionew:req.params.id2}).exec(function(err, todos) {
            if (err){  res.send(err);  }
           
var tindicador=''
             for(var ii = 0; ii < todos.length;ii++){
                tindicador=tindicador+ todos[ii].idindicador + ','
             }
             
if(tindicador==''){ res.json(todos);}
else{
  tindicador=tindicador.substr(0,tindicador.length-1)
             "use strict";
             oracledb.getConnection(connAttrs, function (err, connection) {
               if (err) {
                   // Error connecting to DB
                   res.set('Content-Type', 'application/json');
                   res.status(500).send(JSON.stringify({
                       status: 500,
                       message: "Error connecting to DB",
                       detailed_message: err.message
                   }));
                   return;
               }

               var qry=' select *  from indicador where id_indicador in('  +  tindicador +')'

               
                    console.log(qry)

                        connection.execute(qry, {},  {
                        outFormat: oracledb.OBJECT // Return the result as Object
                        }, function (err, result) {
                        if (err || result.rows.length < 1) {
                            res.set('Content-Type', 'application/json');
                            var status = err ? 500 : 404;

                            res.status(500).send('No existe informacion')  

                            
                        } else {

                            var myData = [];
                            for(var i = 0; i < result.rows.length;i++){
                                myData.push({codigo:result.rows[i].ID_INDICADOR,nombre:result.rows[i].NOMBRE})
                            }
                            res.json(myData);

                        }

                        });


         });

        }

        });
     
    }
  

}
exports.deleteIndicadores = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Indicadore '});

    Indicadore.find({idindicador:req.params.recordID ,usuarionew:req.params.userID}).exec(function(err, todos) {
        if (err){  res.send(err);  }
if(todos.length==0)
{
        res.json(todos);
    

}
else{
    Indicadore.findByIdAndRemove({ _id:todos[0]._id  }, function(err, todo) {
        res.json(todo);
    });

}
        

    });

  
}


exports.creaIndicadores2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Indicadore.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
            todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
          
            todo.idindicador    	=	req.body.idindicador   	||	todo.idindicador    	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   
    Indicadore.create({
        idempresa      	: req.body.idempresa     	,
        nombre        	: req.body.nombre        	,
        idindicador        	: req.body.idindicador        	,
        usuarionew:req.body.bitacora.email
     }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });
}

}



