var frmactor = require('../../models/asociadoventa/frmactor');
var frmmovil = require('../../models/frmmovil');

var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var frmactorgrupo = require('../../models/asociadoventa/frmactorgrupo');
var functool = require('../../controllers/funcionesnode');
var frmactorgrupo = require('../../models/asociadoventa/frmactorgrupo');


function creactores(req,res,idactor,todos2,nombreactor ){

        
    frmactor.create({ 
        idempresa     	: req.body.idempresa    	,
        idpapa     	: req.body.idpapa    	,
        nombre     	: nombreactor 	,
      
        estado     	: 'Activo'   	,
                      usuarionew:req.body.bitacora.email,
                    }
                      , function(err, todo) {
                      if (err){ 
                          res.status(500).send(err.message)    }
                     // res.json(todo);
                     console.log(idactor)
                  
                     for(var ii = 0; ii < todos2.length;ii++){
                         if(idactor===todos2[ii].idpapa)
                         {

                            frmactorgrupo.create({ 
                                idempresa     	: req.body.idempresa    	,
                                idpapa     	: todo._id    	,
                                idclona     	: todos2[ii]._id    	,
                                idpapa0     	: req.body.idpapa    	,
                                nombre     	: todos2[ii].nombre    	,
                                usuarios     	: todos2[ii].usuarios    	,
                                nombreusuarios	: todos2[ii].nombreusuarios	,
                                correousuarios	: todos2[ii].correousuarios	,
                                estado     	: 'Activo'    	,
                                              usuarionew:req.body.bitacora.email,
                                                                                                 
                                          });
                     
                     
                     
                     
                        

                         }

                     }
                    });


}
exports.getfrmactor = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                frmactorgrupo.find({idempresa:req.params.id3,idpapa0:req.params.id4}).sort({'_id': -1}).exec(function(err, todosaa) {
                    if (err){  res.send(err);  }
                      
                frmactor.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    


                    
                    var duplicates = [];
                    for(var i = 0; i < todos.length;i++){
                        var cuantos=0;
                        var cadhtm='<ul>';
                        
                        for(var ii = 0; ii < todosaa.length;ii++){

                            
                            if(String(todos[i]._id)===String(todosaa[ii].idpapa))
                            {
                                cuantos=cuantos+1
                               cadhtm=cadhtm +  '<li>' +  todosaa[ii].nombre + '</li>'
                              //  cadhtm=cadhtm + cuantos + '.' +  todosaa[ii].nombre + '<br>'
                            }
                           

                        }
                        cadhtm=cadhtm + '</ul>'
                                    duplicates.push({ 
                                        
     




                                        idempresa:todos[i].idempresa,
                                        idpapa:todos[i].idpapa,
                                        _id:todos[i]._id,
                                      
                                        idpapa0:todos[i].idpapa0,
                                        nombre:todos[i].nombre,

                                        usuarios:todos[i].usuarios,
                                        nombreusuarios:todos[i].nombreusuarios,
                                        correousuarios:todos[i].correousuarios,
                                        idpapa:todos[i].idpapa,

                                        estado	:todos[i].estado,	
                                        usuarionew:todos[i].usuarionew,	
                                        acciones:cadhtm,
                                     
                                    cuantos:cuantos});
                    }
                    
                       
                   
                    res.json(duplicates);


                 });


                 });

              
            }
            else
            {

                if(req.params.id2=='todosgrupo')
            { 
                frmmovil.find({idempresa:req.params.id3, tipo:'proceso'}).sort({'_id': 1}).exec(function(err, todos10) {
                    if (err){  res.send(err);  }

                frmactor.find({idempresa:req.params.id3, estado:'Activo'}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }

                    var myData=[]
                    for(var i = 0; i < todos.length;i++){
                        for(var ii = 0; ii < todos10.length;ii++){
                         
                        if(String(todos10[ii]._id)===todos[i].idpapa)
                        {
                            myData.push({_id:todos[i]._id,nombre:todos[i].nombre + ' (' + todos10[ii].nombre + ')'})
                            break;
                        }    
                        
                    
                        }    
                    }

                     res.json(myData);
                 });
                });
            }
            else
            {
                frmactor.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}
    }
    else
    {
        frmactor.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletefrmactor = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina frmactor '});
    frmactor.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creafrmactor2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
    if(req.body.operacion==='creaactores')
{ 
   var actorees= req.body.actores.split(';')
   var vector1= [];
   for(var i = 0; i < actorees.length;i++){    
     vector1.push(  actorees[i])
   }

   vector1 = vector1.filter(function(e){return e});
            
   var mongoose = require("mongoose");
   let objectIdArray = vector1.map(s => mongoose.Types.ObjectId(s));


                             
   frmactor.find({idempresa: req.body.idempresa  , _id:{ $in :objectIdArray}}).exec(function(err, todos) {
    if (err){  res.send(err);  }

   

   frmactorgrupo.find({idempresa: req.body.idempresa  , idpapa:{ $in :vector1}}).exec(function(err, todos2) {
    if (err){  res.send(err);  }
console.log(vector1)

    if(todos.length>0)
    {

        for(var i = 0; i < todos.length;i++){

            creactores(req, res,'' + todos[i]._id,todos2,todos[i].nombre);
           
        

                          

                     
    
        }
        res.json(todos);
    
    }
    else
    { res.json(todos);}

    

   

    });
});
 




}
else{
if(req.params.recordID!=='crea')
{ 
    frmactor.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa       	=	req.body.idpapa        	||	todo.idpapa;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.descripciong	= req.body.descripciong	,
 todo.actores       	=	req.body.actores        	||	todo.actores;   
 todo.estado       	=	req.body.estado        	||	todo.estado;   
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{
    frmactor.find({nombre        	: req.body.nombre  , idempresa     	: req.body.idempresa  , idpapa     	: req.body.idpapa    	  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un frmactor en plataforma'); }
        else
        {   
            frmactor.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  nombre     	: req.body.nombre    	,
  descripciong	: req.body.descripciong	,
  actores     	: req.body.actores    	,
  estado     	: req.body.estado    	,
                usuarionew:req.body.bitacora.email,
              }
                , function(err, todo) {
                if (err){ 
                    res.status(500).send(err.message)    }
                res.json(todo);
            });
             }
    });
}}
}
