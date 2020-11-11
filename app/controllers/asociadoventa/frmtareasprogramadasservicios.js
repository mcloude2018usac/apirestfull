var frmtareasprogramadasservicios = require('../../models/asociadoventa/frmtareasprogramadasservicios');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
exports.getfrmtareasprogramadasservicios = function(req, res, next){
    if(req.params.id4)
    {   
            if(req.params.id2=='todos')
            { 
                frmtareasprogramadasservicios.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                if(req.params.id==='todos')
                {
                    frmtareasprogramadasservicios.find({idempresa:req.params.id3,estado:req.params.id2,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
    
                     
                        var  mydata=[]
                        for(var i = 0; i <todos.length; i++) {
                            var ff3=new Date()
                            var ff4=todos[i].createdAt 
                            console.log( ff3 + '     ' +   ff4)
                
                            var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
                            var diffhoras = parseInt((ff3 - ff4) / (1000 * 60 * 60 )); //gives day difference
                            var diffminutos = parseInt((ff3 - ff4) / (1000 * 60 )); //gives day difference
                            var diffseg = parseInt((ff3 - ff4) / (1000  )); //gives day difference
                        mydata.push(    {
                                "_id" : todos[i]._id,
                                "idempresa" : todos[i].idempresa,
                                "idpapa" : todos[i].idpapa,
                                "tipo" : todos[i].tipo,
                                "nombre" : todos[i].nombre,
                                "descripcion" : todos[i].descripcion,
                                "foto" : todos[i].foto,
                                "tipomulta" : todos[i].tipomulta,
                                "tiempo" : todos[i].tiempo,
                                "idmulta" : todos[i].idmulta,
                                "monto" : todos[i].monto,
                                "geoposicion" : todos[i].geoposicion,
                                "estado" : todos[i].estado,
                                "createdAt" : todos[i].createdAt,
                                "updatedAt" : todos[i].updatedAt,
                                dias:diffDays,horas: diffhoras,minutos:diffminutos,segundos:diffseg,
                                faltante:(Number(todos[i].tiempo) - Number(diffminutos))
                            });
                        }
                        
    
                         res.json(mydata);
                     });
                }
                else
                {
                    frmtareasprogramadasservicios.find({idempresa:req.params.id3,estado:req.params.id2,idempresita:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
    
                     
                        var  mydata=[]
                        for(var i = 0; i <todos.length; i++) {
                            var ff3=new Date()
                            var ff4=todos[i].createdAt 
                            console.log( ff3 + '     ' +   ff4)
                
                            var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
                            var diffhoras = parseInt((ff3 - ff4) / (1000 * 60 * 60 )); //gives day difference
                            var diffminutos = parseInt((ff3 - ff4) / (1000 * 60 )); //gives day difference
                            var diffseg = parseInt((ff3 - ff4) / (1000  )); //gives day difference
                        mydata.push(    {
                                "_id" : todos[i]._id,
                                "idempresa" : todos[i].idempresa,
                                "idpapa" : todos[i].idpapa,
                                "tipo" : todos[i].tipo,
                                "nombre" : todos[i].nombre,
                                "descripcion" : todos[i].descripcion,
                                "foto" : todos[i].foto,
                                "tipomulta" : todos[i].tipomulta,
                                "tiempo" : todos[i].tiempo,
                                "idmulta" : todos[i].idmulta,
                                "monto" : todos[i].monto,
                                "proyectotxt" : todos[i].proyectotxt,
                                "correos" : todos[i].correos,
                                "geoposicion" : todos[i].geoposicion,
                                "estado" : todos[i].estado,
                                "createdAt" : todos[i].createdAt,
                                "updatedAt" : todos[i].updatedAt,
                                dias:diffDays,horas: diffhoras,minutos:diffminutos,segundos:diffseg,
                                faltante:(Number(todos[i].tiempo) - Number(diffminutos))
                            });
                        }
                        
    
                         res.json(mydata);
                     });

                }
              
            }
    }
    else
    {
        frmtareasprogramadasservicios.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletefrmtareasprogramadasservicios = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina frmtareasprogramadasservicios '});
    frmtareasprogramadasservicios.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creafrmtareasprogramadasservicios2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);

    if(req.body.operacion ==='actualizaot')
    {

        frmtareasprogramadasservicios.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   

     todo.empresatxt	=	req.body.empresatxt        	||	todo.empresatxt;  
     todo.empresatxttiempo	=	req.body.empresatxttiempo        	||	todo.empresatxttiempo;  
     todo.estado       	=	req.body.estado        	||	todo.estado   
                todo.usuarioup=req.body.bitacora.email;
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                   
    
                   
                        res.json(todo);
                  
    
    
                });
            }
        });

    }
    else
    {

    
if(req.params.recordID!=='crea')
{ 
    frmtareasprogramadasservicios.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 
 todo.tipo       	=	req.body.tipo        	||	todo.tipo;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.descripcion       	=	req.body.descripcion        	||	todo.descripcion;   
 todo.foto       	=	req.body.foto        	||	todo.foto;   
 todo.monto       	=	req.body.monto        	||	todo.monto;   
 todo.tiempo       	=	req.body.tiempo        	||	todo.tiempo;   
 todo.idmulta	=	req.body.idmulta        	||	todo.idmulta;   
 todo.tipomulta       	=	req.body.tipomulta        	||	todo.tipomulta;   
 todo.estado       	=	req.body.estado        	||	todo.estado   
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
               

                if(req.body.supervisor===1)
                {
                    //crear multa segun proyecto
                    console.log(req.body.datareg)
                    res.json(todo);
                }
                else
                {
                    res.json(todo);
                }    


            });
        }
    });
}
else{
    frmtareasprogramadasservicios.find({nombre        	: req.body.nombre  },function(err, todos) {
        if (err){ res.send(err); }
        if(todos.length>0)   {    res.status(500).send('Ya existe un frmtareasprogramadasservicios en plataforma'); }
        else
        {   
            frmtareasprogramadasservicios.create({ 
  idempresa     	: req.body.idempresa    	,
  idpapa     	: req.body.idpapa    	,
  tipo     	: req.body.tipo    	,
  nombre     	: req.body.nombre    	,
  descripcion     	: req.body.descripcion    	,
  foto     	: req.body.foto    	,
  tipomulta     	: req.body.tipomulta    	,
  tiempo	: req.body.tiempo    	,
  idempresita:req.body.idempresita,
  proyectotxt	: req.body.proyectotxt	,
  empresatxt	: req.body.empresatxt	,
  idmulta	: req.body.idmulta	,
  monto     	: req.body.monto    	,
  correos	: req.body.correos    	,
  geoposicion:req.body.geoposicion	,
 estado    	: req.body.estado    	,
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
