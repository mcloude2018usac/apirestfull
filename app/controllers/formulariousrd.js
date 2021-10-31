var formulariousrd = require('../models/formulariousrd');
var Bitacora = require('../models/bitacora');
var Image = require('../models/image2');
var functool = require('../controllers/funcionesnode');
exports.getformulariousrd = function(req, res, next){
    if(req.params.id5)
    {   
        if(req.params.id2=='permisos')
        { 
         
            formulariousrd.find({idempresa:req.params.id3,idformulario:req.params.id4,idusuario:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
        if(req.params.id2=='orden')
        { 

            formulariousrd.find({idempresa:req.params.id3,idpapa:req.params.id4,tipo:req.params.id5}).sort([['orden', -1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                
                if(todos.length>0)   {    res.json({orden:todos[0].orden+10});   }
                else
                {
                    res.json({orden:'10'});
                }
             });

        
        }
        else
        {
            if(req.params.id2=='todos')
            { 
                formulariousrd.find({idempresa:req.params.id3,idpapa:req.params.id4,tipo:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                formulariousrd.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4,tipo:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }}}
    }
    else
    {
        formulariousrd.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deleteformulariousrd = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulariousrd '});
    formulariousrd.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creaformulariousrd2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    formulariousrd.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   

 todo.nombre       	=	 req.body.nombre        	||	todo.nombre;   
 todo.orden       	=	req.body.orden        	||	todo.orden;  
 todo.tipo       	=	req.body.tipo        	||	todo.tipo;    
 todo.verregistros	=	req.body.verregistros        	||	todo.verregistros;  
 
  todo.formulario     	= req.body.formulario    	||	todo.formulario;   
 todo.idformulario       	=	req.body.idformulario        	||	todo.idformulario;   
 todo.consulta       	=	req.body.consulta        	;   
 todo.eliminacion       	=	req.body.eliminacion        	;   
 todo.creacion       	=	req.body.creacion        	;   
 todo.actualizacion       	=	req.body.actualizacion       ;   
 todo.filtro       	=	req.body.filtro        ;   

 todo.reporteencabezado	=	req.body.reporteencabezado        ;   
 


 todo.reporte       	=	req.body.reporte        ; 
 todo.camposreporte	=	req.body.camposreporte        	||	todo.camposreporte;   
 todo.reporte2       	=	req.body.reporte2        ;   

 todo.comandos       	=	req.body.comandos        	;  
 todo.correocomandos	=	req.body.correocomandos; 
 todo.nombrecomandos	=	req.body.nombrecomandos;  


 todo.cancelarorden	= req.body.cancelarorden	;   
 todo.reasignarorden	= req.body.reasignarorden	;   
 todo.bitacoraorden	= req.body.bitacoraorden	;   
 todo.papaorden	= req.body.papaorden	;   

 todo.filtrocampo	= req.body.filtrocampo	;   
 todo.dashboard	= req.body.dashboard	;   

 todo.generareporte		= req.body.generareporte	;   
 todo.imprimeorden		= req.body.imprimeorden	;   
 todo.imprimeorden2		= req.body.imprimeorden2	;   
 todo.finalizaorden  	= req.body.finalizaorden	;   
 todo.eliminaorden   	= req.body.eliminaorden	;   
 todo.trayectoriaorden 	= req.body.trayectoriaorden	;   
 todo.documentacionorden 	= req.body.documentacionorden	;   
 todo.pausarorden 	= req.body.pausarorden;
 todo.anularorden 	= req.body.anularorden;   
 todo.fotosorden	= req.body.fotosorden	;   
 todo.comentariosorden	= req.body.comentariosorden	;   
 todo.documentosorden 	= req.body.documentosorden;   
 todo.tareasorden  	= req.body.tareasorden;   

 todo.activas  	= req.body.activas;
 todo.cerradas  	= req.body.cerradas;  
 todo.ejecutadas  	= req.body.ejecutadas;    
 todo.filtrarorden  	= req.body.filtrarorden;  
 todo.filtrarordentipo  	= req.body.filtrarordentipo;  

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
    formulariousrd.find({idempresa     	: req.body.idempresa  ,  idpapa     	: req.body.idpapa    	 ,idformulario     	: req.body.idformulario    },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe formulario asoviado a usuario'); }
        else
        {   
            console.log(req.body)
            formulariousrd.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  idusuario     	: req.body.idusuario    	,
  nombre     	: req.body.nombre    	,
  orden     	: req.body.orden    	,
  tipo     	: req.body.tipo    	,
 camposreporte	:	req.body.camposreporte  ,


 reporteencabezado	:	req.body.reporteencabezado  ,

 
  idformulario     	: req.body.idformulario    	,
  formulario     	: req.body.formulario    	,
  consulta     	: req.body.consulta    	,
  eliminacion     	: req.body.eliminacion    	,
  creacion     	: req.body.creacion    	,
  actualizacion     	: req.body.actualizacion    	,
  filtro     	: req.body.filtro    	,
  reporte     	: req.body.reporte    	,
  reporte2     	: req.body.reporte2    	,
  estado     	: req.body.estado    	,
  verregistros	: req.body.verregistros	,
  generareporte:req.body.generareporte	,

  cancelarorden:req.body.cancelarorden	,
  reasignarorden:req.body.reasignarorden	,
  bitacoraorden:req.body.bitacoraorden	,
  papaorden:req.body.papaorden	,

  filtrocampo:req.body.filtrocampo	,
  dashboard:req.body.dashboard	,

   

  comandos     	: req.body.comandos    	,
  nombrecomandos	: req.body.nombrecomandos	,
  correocomandos	: req.body.correocomandos	,
 


 imprimeorden	: req.body.imprimeorden	,
 imprimeorden2	: req.body.imprimeorden2	,
 finalizaorden  	: req.body.finalizaorden	,
 eliminaorden   	: req.body.eliminaorden	,
 trayectoriaorden 	: req.body.trayectoriaorden	,
 documentacionorden 	: req.body.documentacionorden	,
 pausarorden 	: req.body.pausarorden	,
 anularorden 	: req.body.anularorden	,
 fotosorden	: req.body.fotosorden	,
 comentariosorden	: req.body.comentariosorden	,
 documentosorden 	: req.body.documentosorden	,
 tareasorden  	: req.body.tareasorden	,
 acciones  	: req.body.acciones	,

 activas  	: req.body.activas	,
 cerradas  	: req.body.cerradas	,
 ejecutadas  	: req.body.ejecutadas	,
 filtrarorden  	: req.body.filtrarorden	,
 filtrarordentipo  	: req.body.filtrarordentipo	,

                usuarionew:req.body.bitacora.email,
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
