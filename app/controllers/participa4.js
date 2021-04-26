
var Participa4 = require('../models/participa4');
var Tipo = require('../models/tipopreuni');
var Bitacora = require('../models/bitacora');

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

exports.getParticipa4 = function(req, res, next){
    if(req.params.id2)
    {   
      
        if(req.params.id2=='materia')
        {
            Tipo.find({},function(err, todos) {
                if (err){ res.send(err); }
             
                if(todos.length>0)   { 
                    
                    var myData = [];
                    for(var i = 0; i < todos.length;i++){
                       
                            myData.push(todos[i].materia );
    
                        
                            
                    }

                    var unique =   myData.filter( onlyUnique ); // r
               
                    var myData2 = [];
                    for(var i = 0; i < unique.length;i++){
                        myData2.push({nombre:unique[i] });
                    }
    
                     res.json(myData2);
                    
                  }
               
                
            });

        }
        else
        {
            if(req.params.id2=='horario')
            { console.log(req.params.id2)
                Tipo.find({materia:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   console.log(todos)
                    if(todos.length>0)   {   
                    
                    
                var myData = [];
                myData.push({horario:'No Asignar'} );


                for(var i = 0; i < todos.length;i++){
                    if(todos[i].capacidad>todos[i].asignados)
                    {
                        
                        myData.push({horario:todos[i].horario} );

                    }
                        
                }
                res.json(myData); 

                    }
                   
                    
                });
    
            }
            else
            {
             
                if(req.params.id2=='todos')
                {
                    Tipo.find({},function(err, todos) {
                        if (err){ res.send(err); }
                     
                        res.json(todos);
                       
                        
                    });
        
                }
                else
                {

                    Participa4.find({},function(err, todos) {
                        if (err){ res.send(err); }
                       
                        if(todos.length>0)   {    res.json(todos);   }
                        else
                        {  res.status(500).send('NO EXISTE REGISTRO');      }
                        
                    });
                }
               
                
            }

        }
        
       
    }
    else
    { Participa4.find({idevento:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteParticipa4 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa4 '});
    Participa4.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa42s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
    Participa4.findById({ _id: req.body._id}, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            var d = new Date();

            todo.idtipoevento=todo.idtipoevento || todo.idtipoevento;

            todo.idarea= todo.idarea || todo.idarea;
            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.otros 	=	req.body.otros 	||	todo.otros 	;
            todo.cuenta 	=	Number(req.body.cuenta)+1 	||	Number(todo.cuenta)+1 	;
            todo.fecha 	=	d.toISOString()	;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Participa4.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
       
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.apellido 	=	req.body.apellido	||	todo.apellido 	;
                todo.genero 	=	req.body.genero	||	todo.genero 	;
                todo.edad 	=	req.body.edad	||	todo.edad 	;
                todo.correo 	=	req.body.correo	||	todo.correo 	;
                todo.telefono    	=	req.body.telefono    	||	todo.telefono    	;
                todo.unidad   	=	req.body.unidad    	||	todo.unidad   	;
                todo.otros   	=	req.body.otros    	||	todo.otros   	;
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

       Tipo.find({ }).lean().exec({}, function(err,myasigcupo) {
            if (err) res.send(err);
              //    var asigno=0
              //    asigno=myasigcupo.length;
              //    asigno=asigno+1;

        Participa4.find({  
            correo    	: req.body.correo   	
         },function(err, todos) {
            if (err){ res.send(err); }
          
         

                    var  tlen=0
                    var  tbio=0
                    var  tqui=0
                    var  tmat=0
                    var  tfis=0
                    var  tlen2=0
                    var  tbio2=0
                    var  tqui2=0
                    var  tmat2=0
                    var  tfis2=0

                    var  tlen2c=0
                    var  tbio2c=0
                    var  tqui2c=0
                    var  tmat2c=0
                    var  tfis2c=0
                    
                    var id1=''
                    var id2=''
                    var id3=''
                    var id4=''
                    var id5=''
                    var tcuantos=0; 
                    if(req.body.hlenguaje!='No Asignar')   {tlen=1;tcuantos=tcuantos+1             }
                    if(req.body.hbiologia!='No Asignar')   {tbio=1;tcuantos=tcuantos+1              }
                    if(req.body.hquimica!='No Asignar')   {tqui=1;tcuantos=tcuantos+1              }
                    if(req.body.hmate!='No Asignar')   {tmat=1;tcuantos=tcuantos+1              }
                    if(req.body.hfisica!='No Asignar')   {tfis=1;tcuantos=tcuantos+1              }




                    for(var i = 0; i < myasigcupo.length;i++){
                        if(tlen==1)
                        {
                            if(myasigcupo[i].materia=='Lenguaje' && myasigcupo[i].horario==req.body.hlenguaje )
                            {
                                if(myasigcupo[i].capacidad>myasigcupo[i].asignados)
                                {
                                    tlen2=1;
                                    tlen2c=myasigcupo[i].asignados+1;
                                    id1=myasigcupo[i]._id
                                }
                            }
                        }

                        if(tbio==1)
                        {
                            if(myasigcupo[i].materia=='Biología' && myasigcupo[i].horario==req.body.hbiologia )
                            {
                                if(myasigcupo[i].capacidad>myasigcupo[i].asignados)
                                {
                                    tbio2=1;
                                    tbio2c=myasigcupo[i].asignados+1;
                                    id2=myasigcupo[i]._id
                                }
                            }
                        }

                        if(tfis==1)
                        {
                            if(myasigcupo[i].materia=='Física' && myasigcupo[i].horario==req.body.hfisica )
                            {
                                if(myasigcupo[i].capacidad>myasigcupo[i].asignados)
                                {
                                    tfis2=1;
                                    tfis2c=myasigcupo[i].asignados+1;
                                    id5=myasigcupo[i]._id
                                }
                            }
                        }


                        if(tqui==1)
                        {

                            if(myasigcupo[i].materia=='Química' && myasigcupo[i].horario==req.body.hquimica )
                            {
                                if(myasigcupo[i].capacidad>myasigcupo[i].asignados)
                                {
                                    tqui2=1;
                                    tqui2c=myasigcupo[i].asignados+1;
                                    id3=myasigcupo[i]._id
                                }
                            }
                        }
                        if(tmat==1)
                        {
                            if(myasigcupo[i].materia=='Matematíca' && myasigcupo[i].horario==req.body.hmate )
                            {
                                if(myasigcupo[i].capacidad>myasigcupo[i].asignados)
                                {
                                    tmat2=1;
                                    tmat2c=myasigcupo[i].asignados+1;
                                    id4=myasigcupo[i]._id
                                }
                            }

                        }
                        
                     }

                     if(tlen!=tlen2)
                     {
                        res.status(500).send('En Lenguaje ya no hay cupo, por favor seleccione otra materia ');
                     }
                     else
                     {

                        if(tbio!=tbio2)
                        {
                           res.status(500).send('En Biología ya no hay cupo, por favor seleccione otra materia ');
                        }
                        else
                        {
                            if(tqui!=tqui2)
                            {
                               res.status(500).send('En Química ya no hay cupo, por favor seleccione otra materia ');
                            }
                            else
                            {
                                if(tmat!=tmat2)
                                {
                                   res.status(500).send('En Matematíca ya no hay cupo, por favor seleccione otra materia ');
                                }
                                else
                                {
                                    if(tfis!=tfis2)
                                    {
                                       res.status(500).send('En Fisica ya no hay cupo, por favor seleccione otra materia ');
                                    }
                                    else
                                    {
               

                                    Bitacora.create(req.body.bitacora);


                                    Participa4.create({  
                                    
                                        nombre        	: req.body.nombre        	,
                                        apellido    	: req.body.apellido    	,
                                        genero    	: req.body.genero    	,
                                        edad   	: req.body.edad 	,
                                        correo    	: req.body.correo   	,
                                        telefono 	: req.body.telefono 	,
                                        hlenguaje:  req.body.hlenguaje ,
                                        hbiologia: req.body.hbiologia ,
                                        hquimica: req.body.hquimica ,
                                        hmate: req.body.hmate ,
                                        hfisica: req.body.hfisica ,
                                        
                    
                                        estado 	: req.body.estado 	,
                                        usuarionew:req.body.bitacora.email
                                       
                                       
                                    }, function(err, todo) {
                                        if (err){   res.status(500).send(err.message)    }
                                       //revisar y poner asignaod=1
                                       
                                      if(tlen==1)
                                      { 
                                            Tipo.findById({ _id:id1 }, function (err, todo)  {
                                                if (err) {  res.send(err);  }
                                                else
                                                { 
                                                    todo.asignados        	=		tlen2c     	;
                                                    todo.save(function (err, todo){
                                                        if (err)     {  console.log(err.message)   }
                                                    
                                                    });
                                                }
                                            });
                                    }

                                    
                                    if(tbio==1)
                                    { 
                                          Tipo.findById({ _id:id2 }, function (err, todo)  {
                                              if (err) {  res.send(err);  }
                                              else
                                              { 
                                                  todo.asignados        	=		tbio2c     	;
                                                  todo.save(function (err, todo){
                                                      if (err)     {  console.log(err.message)   }
                                                  
                                                  });
                                              }
                                          });
                                  }

                                  if(tqui==1)
                                  { 
                                        Tipo.findById({ _id:id3 }, function (err, todo)  {
                                            if (err) {  res.send(err);  }
                                            else
                                            { 
                                                todo.asignados        	=		tqui2c     	;
                                                todo.save(function (err, todo){
                                                    if (err)     {  console.log(err.message)   }
                                                
                                                });
                                            }
                                        });
                                }

                                if(tfis==1)
                                { 
                                      Tipo.findById({ _id:id5 }, function (err, todo)  {
                                          if (err) {  res.send(err);  }
                                          else
                                          { 
                                              todo.asignados        	=		tfis2c     	;
                                              todo.save(function (err, todo){
                                                  if (err)     {  console.log(err.message)   }
                                              
                                              });
                                          }
                                      });
                              }


                                if(tmat==1)
                                { 
                                      Tipo.findById({ _id:id4 }, function (err, todo)  {
                                          if (err) {  res.send(err);  }
                                          else
                                          { 
                                              todo.asignados        	=		tmat2c     	;
                                              todo.save(function (err, todo){
                                                  if (err)     {  console.log(err.message)   }
                                              
                                              });
                                          }
                                      });
                              }




                                        res.json(todo);
                    
                                    
                                        
                    
                                    });
                                }
                                }
       
                            }
       
    
   
                        }
   

                     }
             
        
            
        });
    });
}
}

}





