
var Participa3 = require('../models/participa3');
var Participa33 = require('../models/participa33');
var Bitacora = require('../models/bitacora');

var Denunciaunidad = require('../models/denunciaunidad');


exports.getParticipa3 = function(req, res, next){
    if(req.params.id4)
    {  
        Denunciaunidad.find({'jefeop':req.params.id2}).exec(function(err, todos) {
            if (err){  res.send(err);  }
            var myData3 = [];
            for(var i = 0; i <  todos.length;i++){
                var cat=todos[i].categoria
                for(var i2 = 0; i2 <  cat.length;i2++){
                    myData3.push(cat[i2]._id)
                }

               
            }

            Participa3.find({tipo:{$in:myData3},estado:req.params.id3,idusuario:req.params.id2}).populate('tipo').select({ "createdAt":1,"cui": 1,"nombre": 1,"tipo": 1,"correo": 1,"motivo": 1,
            "motivo3":1,"f3":1,"estado": 1,"notamedio": 1,"xpos": 1, "f1":1,"ypos": 1,        "_id": 1}).sort([['createdAt', -1]]).exec(function(err, todos2) {
               if (err){  res.send(err);  }

               var myData31 = [];
               for(var i = 0; i <  todos2.length;i++){
                myData31.push({motivo3:todos2[i].motivo3, createdAt:todos2[i].createdAt,_id:todos2[i]._id,cui:todos2[i].cui,nombre2:todos2[i].nombre,nombre:todos2[i].tipo.nombre + ' ' +todos2[i].motivo ,correo:todos2[i].correo,motivo:todos2[i].motivo,motivo2:(todos2[i].motivo).substr(0,250),motivo33:(todos2[i].motivo3).substr(0,200),
                 estado:todos2[i].estado,notamedio:todos2[i].notamedio,tipo:todos2[i].tipo.nombre,tipoid:todos2[i].tipo._id,xpos:todos2[i].xpos,ypos:todos2[i].ypos,f3:todos2[i].f3})
            }

                   res.json(myData31);    
            });
         });

    }
    else{
    if(req.params.id3)
    {  
        Denunciaunidad.find({'jefeop':req.params.id2}).exec(function(err, todos) {
            if (err){  res.send(err);  }
            var myData3 = [];
            for(var i = 0; i <  todos.length;i++){
                var cat=todos[i].categoria
                for(var i2 = 0; i2 <  cat.length;i2++){
                    myData3.push(cat[i2]._id)
                }

               
            }

            Participa3.find({tipo:{$in:myData3},estado:req.params.id3}).populate('tipo').select({ "createdAt":1,"cui": 1,"nombre": 1,"tipo": 1,"correo": 1,"motivo": 1,
            "f3":1,"estado": 1,"notamedio": 1,"xpos": 1, "f1":1,"ypos": 1,        "_id": 1}).sort([['createdAt', -1]]).exec(function(err, todos2) {
               if (err){  res.send(err);  }

               var myData31 = [];
               for(var i = 0; i <  todos2.length;i++){
                myData31.push({createdAt:todos2[i].createdAt,_id:todos2[i]._id,cui:todos2[i].cui,nombre2:todos2[i].nombre,nombre:todos2[i].tipo.nombre + ' ' +todos2[i].motivo ,correo:todos2[i].correo,motivo:todos2[i].motivo,motivo2:(todos2[i].motivo).substr(0,250),
                 estado:todos2[i].estado,notamedio:todos2[i].notamedio,tipo:todos2[i].tipo.nombre,tipoid:todos2[i].tipo._id,xpos:todos2[i].xpos,ypos:todos2[i].ypos,f3:todos2[i].f3})
            }

                   res.json(myData31);    
            });
         });

    }
    else{
    if(req.params.id2)
    {  
        if(req.params.id2=='video')
        { 
            Participa3.find({_id:req.params.id},function(err, todos) {
                if (err){ res.send(err); }
                if(todos.length>0)   {    res.json([{f3:todos[0].f3}]);   }
                else{
                    res.json([{f3:''}]);
                }
            });
        }
        else{
            if(req.params.id2=='fotos')
            { 
                Participa3.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                    if(todos.length>0)   {    res.json([{f1:todos[0].f1,f2:todos[0].f2}]);   }
                    else{
                        res.json([{f1:'',f2:''}]);
                    }
                });
            }
            else{

                if(req.params.id2=='denuncia')
                { 
                    Participa3.find({_id:req.params.id}).populate('tipo').exec(function(err, todos) {
                        if (err){ res.send(err); }
                    res.json(todos);
                          
                    });
                }
                else
                {
                    if(req.params.id=='todos')
                    { 

                        Denunciaunidad.find({'jefeop':req.params.id2}).exec(function(err, todos) {
                            if (err){  res.send(err);  }
                            var myData3 = [];
                            for(var i = 0; i <  todos.length;i++){
                                var cat=todos[i].categoria
                                for(var i2 = 0; i2 <  cat.length;i2++){
                                    myData3.push(cat[i2]._id)
                                }

                               
                            }

                            Participa3.find({tipo:{$in:myData3}}).populate('tipo').select({ "createdAt":1,"cui": 1,"nombre": 1,"tipo": 1,"correo": 1,"motivo": 1,
                            "f3":1,"estado": 1,"notamedio": 1,"xpos": 1, "f1":1,"ypos": 1,        "_id": 1}).sort([['createdAt', 1]]).exec(function(err, todos2) {
                               if (err){  res.send(err);  }

                               var myData31 = [];
                               for(var i = 0; i <  todos2.length;i++){
                                myData31.push({createdAt:todos2[i].createdAt,_id:todos2[i]._id,cui:todos2[i].cui,nombre2:todos2[i].nombre,nombre:todos2[i].tipo.nombre + ' ' +todos2[i].motivo ,correo:todos2[i].correo,motivo:todos2[i].motivo,motivo2:(todos2[i].motivo).substr(0,250),
                                 estado:todos2[i].estado,notamedio:todos2[i].notamedio,tipo:todos2[i].tipo.nombre,tipoid:todos2[i].tipo._id,xpos:todos2[i].xpos,ypos:todos2[i].ypos,f3:todos2[i].f3})
                            }

                                   res.json(myData31);    
                            });
                         });




                     
                    
                    }

                }

            }
        }
    }}
}

}
exports.deleteParticipa3 = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa3 '});
    Participa3.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa32s = function(req, res, next){
    if(req.params.id=='actualizacierre')
    { 
    
        Participa3.findById({ _id: req.body.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.estado       	=	req.body.estado  	; 
               
            
               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                  
                    Participa33.find({iddenuncia: req.body.id   }, function (err, todo22)  {
                        if (err) {  res.send(err);  }
                        
                        Participa33.findById({_id: todo22[0]._id  }, function (err, todo2)  {
                            if (err) {  res.send(err);  }
                            else
                            {  
                                todo2.estado       	=	req.body.estado    	;         
                             
                
                               todo2.save(function (err, todo2){
                                    if (err)     {  res.status(500).send(err.message)   }
                                    res.json(todo2);
                                });
                            }
                        });
                       
                    });
    
    
                  
    
    
    
                });
            }
        });
    
    
    }
    else{
  if(req.params.id=='actualiza')
{ 

    Participa3.findById({ _id: req.body.id}, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.estado       	=	req.body.estado  	; 
            todo.motivo3       	=	req.body.motivo3  	; 
        
           todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
              
                Participa33.find({iddenuncia: req.body.id   }, function (err, todo22)  {
                    if (err) {  res.send(err);  }
                    
                    Participa33.findById({_id: todo22[0]._id  }, function (err, todo2)  {
                        if (err) {  res.send(err);  }
                        else
                        {  
                            todo2.estado       	=	req.body.estado    	;    
                            todo2.motivo3       	=	req.body.motivo3  	;      
                         
            
                           todo2.save(function (err, todo2){
                                if (err)     {  res.status(500).send(err.message)   }
                                res.json(todo2);
                            });
                        }
                    });
                   
                });


              



            });
        }
    });


}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Participa3.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.estado       	=	req.body.estado        	||	todo.estado        	;         
               todo.notamedio        	=	req.body.notamedio        	||	todo.notamedio        	;
               todo.notafin        	=	req.body.notafin        	||	todo.notafin        	;
               todo.tipo        	=	req.body.tipo        	||	todo.tipo        	;

               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

    

                    Bitacora.create(req.body.bitacora);
                 

var aaa=req.body.f3.split(',')


Participa3.create({  
               
    cui       	: req.body.cui       	,
    nombre        	: req.body.nombre        	,
    apellido    	: req.body.apellido    	,
    telefono 	: req.body.telefono 	,
    correo    	: req.body.correo   	,
    tipo 	: req.body.tipo 	, 
   
    unidad 	: req.body.unidad 	,
    motivo 	: req.body.motivo	,
    f1 	: req.body.f1 	,
    f2 	: req.body.f2 	,
    f3 	: req.body.f3 	,
    estado:'Pendiente',
    notamedio:'',
    notafin:''     ,
    motivo3:'',
    xpos 	: req.body.xpos 	,
    ypos 	: req.body.ypos	      

}
    , function(err, todo) {
    if (err){   res.status(500).send(err.message)  
    console.log(err.message)  }

    res.json(todo);

});    

  /*
zlib.constants.Z_BEST_COMPRESSION=9
  zlib.deflate(aaa[1], (err, buffer2) => {
    if (!err) {
      console.log(buffer2.toString('utf8').length);

      var otro='data:video/mp4;base64,'+ buffer2.toString('utf8');
    
        


      const buffer = Buffer.from(buffer2, 'base64');
      zlib.unzip(buffer, (err, buffer) => {
        if (!err) {
    
        } else {
          // handle error
        }
      });


    } else {
      // handle error
    }
  });
*/

      
}}
}

}





