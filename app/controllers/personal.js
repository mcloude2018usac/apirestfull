
var Personal = require('../models/user');

var Personalsaldo = require('../models/suscriptorsaldo');
var Bitacora = require('../models/bitacora');

exports.getPersonal = function(req, res, next){

    if(req.params.page)
    {

        var pagex=    Number(req.params.page);
        var limitx=    Number(req.params.limit);
        
        Personal.paginate({},{populate: ['unidad','tiposuscriptor'],lean:     false,page:pagex, limit:  limitx}).then(function(err, todos) {
            if (err){  res.send(err);  }
                res.end(todos);
                res.end();
              //  next();
            });
    }
    else
    {
    if(req.params.id2)
    {
        if(req.params.id2=='persona')
        {

            Personal.find({cui:req.params.email}).populate('unidad').populate('tiposuscriptor')
            .exec(function(err, todos) {
                if (err){ res.send(err); }
            
                if(todos.length>0)   {    res.json(todos);    }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });

          
        }
        else
        {
            if(req.params.id2=='personadisp')
            {
    
                Personal.find({cui:req.params.email}).populate('unidad').populate('tiposuscriptor')
                .exec(function(err, todos) {
                    if (err){ res.send(err); }
                
                    if(todos.length>0)   {   

                        Personalsaldo.find({'idsuscriptor.id':todos[0]._id},function(err, todos4) {
                            if (err){ res.send(err); }
                            var myData = [];
                                    if(todos4.length>0)   {  
                                        myData.push({_id:todos[0]._id,email:todos[0].email,estado:todos[0].estado,cui:todos[0].cui,direccion:todos[0].direccion,nombre:todos[0].nombre,foto:todos[0].foto,telefono:todos[0].telefono,sexo:todos[0].sexo,fechanac:todos[0].fechanac
                                        ,tiposuscriptor:todos[0].tiposuscriptor.nombre,unidad:todos[0].unidad.nombre
                                        ,saldo:todos4[0].saldoactual,codigo1:todos4[0].codigo1,dispositivo1:todos4[0].dispositivo1
                                        ,codigo2:todos4[0].codigo2,dispositivo2:todos4[0].dispositivo2
                                        ,codigo3:todos4[0].codigo3,dispositivo3:todos4[0].dispositivo3
                                        ,codigo4:todos4[0].codigo4,dispositivo4:todos4[0].dispositivo4
                                        ,codigo5:todos4[0].codigo5,dispositivo5:todos4[0].dispositivo5,encuentra:'si'});
    

                                    }
                                    else
                                    {

                                        myData.push({_id:todos[0]._id,email:todos[0].email,estado:todos[0].estado,cui:todos[0].cui,direccion:todos[0].direccion,nombre:todos[0].nombre,foto:todos[0].foto,telefono:todos[0].telefono,sexo:todos[0].sexo,fechanac:todos[0].fechanac
                                            ,tiposuscriptor:todos[0].tiposuscriptor.nombre,unidad:todos[0].unidad.nombre
                                            ,saldo:'0',codigo1:'',dispositivo1:''
                                            ,codigo2:'',dispositivo2:''
                                            ,codigo3:'',dispositivo3:''
                                            ,codigo4:'',dispositivo4:''
                                            ,codigo5:'',dispositivo5:'',encuentra:'no'});

                                    }

                                    res.json(myData);
                                });


                      }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
    
              
            }
            else
            {
          
                if(req.params.id2=='tarjetadisp')
                {
        
                    Personalsaldo.find({  $or : [
                        { $and : [ { codigo1 : req.params.email }] },
                        { $and : [ { codigo2 : req.params.email }] },
                        { $and : [ { codigo3 : req.params.email }] },
                        { $and : [ { codigo4 : req.params.email }] },
                        { $and : [ {codigo5 : req.params.email } ] }]
                }).populate('idsuscriptor.id').exec(function(err, todos) {
                        if (err){ res.send(err); }
                        var myData = [];
                        if(todos.length>0)   {  
                            myData.push({nombre:todos[0].idsuscriptor.id.nombre,cui:todos[0].idsuscriptor.id.cui});

                             res.json(myData);
                        
                        }
                        else
                        {  res.status(500).send('NO EXISTE REGISTRO');      }
                        
                    });
        
                  
                }
                else
                {
                        Personal.find({unidad:req.params.id2},function(err, todos) {
                            if (err){  res.send(err);  }
                                res.json(todos);
                            });
          }  }}
    }
    else
    {
        
            if(req.params.email)
            {  
                
                Personal.find({email:req.params.email}).populate('unidad').populate('tiposuscriptor')
                .then(todos => {
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                })
                .catch(err => {
                    res.status(500).send(err.message);  
                })
                
             
            }
            else
            {

               

                        Personal.find(function(err, todos) {
                            if (err){  res.send(err);  }
                                res.json(todos);
                            });
                   
               
              
            }
}}
}
exports.deletePersonal = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Usuario '});
    Personal.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}

exports.creaPersonal2s = function(req, res, next){
  
 
    Bitacora.create(req.body.bitacora);

if(req.params.recordID)
{
    Personal.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.email        	=	req.body.email        	||	todo.email        	;
            todo.role        	=	req.body.role       	||	todo.role        	;
             todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.cui 	=	req.body.cui 	||	todo.cui 	;
            todo.direccion   	=	req.body.direccion   	||	todo.direccion   	;
            todo.telefono    	=	req.body.telefono    	||	todo.telefono    	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.lenguaje    	=	req.body.lenguaje    	||	todo.lenguaje    	;
            todo.sexo    	=	req.body.sexo    	||	todo.sexo    	;
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.nov    	=	req.body.nov    	||	todo.nov    	;
            todo.unidad    	=	req.body.unidad    	||	todo.unidad    	;
            todo.interno    	=	req.body.interno    	||	todo.interno    	;
            todo.estadoemail=req.body.estadoemail  || todo.estadoemail;
            todo.codpersonal    	=	req.body.codpersonal    	||	todo.codpersonal    	;
            todo.fechanac    	=	req.body.fechanac    	||	todo.fechanac    	;
            todo.usuarioup=req.body.bitacora.email;
            todo.tiposuscriptor    	=	req.body.tiposuscriptor    	||	todo.tiposuscriptor    	;
            

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err)  
                 }
             
                res.json({ records: todo });
            });
        }
    });

}





}





