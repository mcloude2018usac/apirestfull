
var Nuevosalon = require('../models/nuevosalon');
var Facplan = require('../models/unidadplan');
var Facmat = require('../models/facultadmateria');
var mailt = require('../controllers/mail');
var Asignaest = require('../models/asignaestudiante');
var Asignapcb = require('../models/asignapcb');
var Bitacora = require('../models/bitacora');

exports.getAsignapcb = function(req, res, next){
    if(req.params.id3)
    { 
        
        Asignapcb.find({no_orientacion:req.params.id3},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    {
    if(req.params.id)
    { 
        Asignapcb.find({tipo:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
  
    }
    else
    {
        if(req.params.id)
        {  
           
                Asignapcb.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Asignapcb.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }}
 
}
exports.deleteAsignapcb = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Asignapcb '});


    Asignaest.remove({idasigna: req.params.recordID  }, function(err, todo) {
//console.log(todo);
        Asignapcb.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

            // Asignaest
     
     
             res.json(todo);
         });
    });


  
}


function getNextSequenceValue2(myData3,myData3cc,req,res,i,todo){
  //  console.log('asignado antes:')
   // console.log(myData3cc);
     Asignaest.find({idtipounidad        	: req.body.tipounidad        	,
         idunidadacademica        	: req.body.unidadacademica  , 
         idperiodo        	: req.body.periodo      	,
         idedificio:myData3[i].idedificio,
         idsalon:myData3[i].idsalon,
         idhorario:myData3[i].idhorario,
         idmateria:myData3[i].idmateria
               }).lean().exec({}, function(err,myasigcupo) {
         if (err) res.send(err);
               var asigno=0
               asigno=myasigcupo.length;
               asigno=asigno+1;
           //    console.log('calcula el asignado')
            //   console.log('asignado :')
              //  console.log(myData3cc);
                         Asignaest.create({ 
                             idasigna:todo._id,
                             idtipounidad        	: req.body.tipounidad        	,
                             idunidadacademica        	: req.body.unidadacademica        	,
                             idperiodo        	: req.body.periodo        	,
                             idedificio:myData3cc.idedificio,
                             idsalon:myData3cc.idsalon,
                         
                             no_orientacion        	: req.body.no_orientacion        	,
                         
                             nombre 	: req.body.nombre, 	
                             idestudiante 	: req.body.idestudiante, 	
                             idhorario:myData3cc.idhorario,
                             idmateria:myData3cc.idmateria,
                             fexamen:myData3cc.fexamen,
                             aprobado:'',
                             nota:'',
                             ingreso:'0',
                             noasignado:asigno,
                             codfac:myData3cc.codfac,
                             usuarionew:req.body.bitacora.email
                         });
     

                         Facplan.findById({ _id:myData3cc._id }, function (err, todo)  {
                             if (err) {  res.send(err);  }
                             else
                             { // console.log('asignados')
                             //console.log(Number(todo.asignados))
                                  todo.asignados        	=		asigno     	;
                                 
                                 todo.save(function (err, todo){
                                     if (err)     {  console.log(err.message)   }
                                     //console.log(todo);
                                 });
                             }
                         });
     });
}

function getNextSequenceValue(myData3,myData3aa,req,res){
//mydata=todo lo que tengo que ganar
//mydata0=las materias que tengo que pasar
 //myData2= las que ya gane como estudiante
 //myData0a= las materia que tengo que ganar
 //myData3aa = si hay registros no hay vcupo
 //myData3 = lo que me puedo asignar

        if(myData3aa.length>0)
        { 
            Nuevosalon.create({ 
                nombre:'Solicitando salon para Unidad academica: ' + req.body.unidadacademica.nombre + ', Materia: '+  myData3aa[0].idmateria +', Edificio: '+  myData3aa[0].idedificio.nombre +' y Salon: '+  myData3aa[0].idsalon.nombre ,
                estado        	: 'Solicitando' ,
                correo:''       	
            });

            


            const mailO = {
                destino: 'ambrosioaleman07@gmail.com;mario.morales@mcloude.com', // list of receivers
                subject: 'Solicitud de nuevo salon', // Subject line
                html: 'Solicitando salon para Unidad academica: ' + req.body.unidadacademica.nombre + ', Materia: '+  myData3aa[0].idmateria +', Edificio: '+  myData3aa[0].idedificio.nombre +' y Salon: '+  myData3aa[0].idsalon.nombre ,// plain text body
                actualiza: 0// plain text body
              };
            

            mailt.getMail2(mailO,res);
//            console.log('No existe cupo para asignarse esta materia: '+  myData3aa[0].idmateria +' para el edificio: '+  myData3aa[0].idedificio.nombre +' salon: '+  myData3aa[0].idsalon.nombre +' , realize la asignacion mas tarde')
            res.status(500).send('No existe disponibilidad para asignarse , Inténtelo más tarde')    
        }
        else
        {

      
                        Asignapcb.create({ idtipounidad        	: req.body.tipounidad        	,
                            idunidadacademica        	: req.body.unidadacademica        	,
                            no_orientacion        	: req.body.no_orientacion        	,
                            idperiodo        	: req.body.periodo        	,
                            nombre 	: req.body.nombre, 	
                            idestudiante 	: req.body.idestudiante, 	
                            idinterno 	: req.body.idinterno,
                            usuarionew:req.body.bitacora.email
                        }
                            , function(err, todo) {
                            if (err){ 
                            
                                res.status(500).send(err.message)  
                                return;
                              }
                                        //crea todas las asignaciones nuevas que tiene que sacar
                                     
                                    
                                    for(var i = 0; i < myData3.length;i++){
                                       var myData3cc=myData3[i] 
                                       getNextSequenceValue2(myData3,myData3cc,req,res,i,todo);

                                    }
                            
                                    res.json(todo);

                      
                });
        }
 }

exports.creaAsignapcb2s = function(req, res, next){
   
  //  res.status(500).send(' espere un momento ')    
   //  return;

    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Asignapcb.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.idtipounidad        	={id:req.body.idtipounidad.id,nombre:req.body.idtipounidad.nombre   }   	;
            todo.idunidadacademica        	={id:req.body.idunidadacademica.id,nombre:req.body.idunidadacademica.nombre,codigo:req.body.idunidadacademica.codigo   }   	;
            todo.idperiodo        	=	{id:req.body.idperiodo.id,nombre:req.body.idperiodo.nombre   }   	;
            todo.no_orientacion        	=	req.body.no_orientacion        	||	todo.no_orientacion        	;
            todo.nombre    	=	req.body.nombre    	||	todo.nombre    	;
            todo.idestudiante    	=	req.body.idestudiante    	||	todo.idestudiante    	;
            todo.idinterno        	=	req.body.idinterno       	||	todo.idinterno        	;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{



console.log({   no_orientacion        	: req.body.no_orientacion        	,
    'idperiodo.nombre'        	: req.body.periodo.nombre        
       });

    Asignapcb.find({
        no_orientacion        	: req.body.no_orientacion        	,
        'idperiodo.nombre'        	: req.body.periodo.nombre        
        	 },function(err, todos) {
        if (err){  if(err) return next(err);// res.status(500).send(err); 
        return;}
      
        if(todos.length>0)   {    res.status(500).send('Ya existe una Asignación para este periodo'); }
        else
        { 
  //agregar periodo que se esta trabajando*************************************************************
  console.log('facplan');
  
  console.log({idtipounidad        	: req.body.tipounidad        	,
    idunidadacademica        	: req.body.unidadacademica  
 //,   asignados:{$lt:capacidad}    	
         });
Facplan.find({idtipounidad        	: req.body.tipounidad        	,
    idunidadacademica        	: req.body.unidadacademica  
 //,   asignados:{$lt:capacidad}    	
         }).lean().exec({}, function(err,myData) {
    if (err) res.send(err);

    
    if(myData.length==0)
    {
     res.status(500).send(' No existe  configurado salones para esta unidad academica')    
     return;

    }

    console.log('facmat');
    console.log({idtipounidad        	: req.body.tipounidad.id        	,
        idunidadacademica        	: req.body.unidadacademica.id 	
             });
    Facmat.find({idtipounidad        	: req.body.tipounidad.id        	,
        idunidadacademica        	: req.body.unidadacademica.id 	
             }).lean().exec({}, function(err,myData0t) {
     
        if (err) res.send(err);

        if(myData0t.length==0)
    {
     res.status(500).send(' No existe  configurado materias en unidad academica')    
     return;

    }

      //  console.log('facmat')
      //  console.log(myData0t)
        var myData0 = [];
            
       
           if(myData0t[0].lenguaje==true){ myData0.push({idmateria:'Lenguaje'});      }
           if(myData0t[0].fisica==true){ myData0.push({idmateria:'Fisica'});      }
           if(myData0t[0].matematica==true){ myData0.push({idmateria:'Matematica'});      }
           if(myData0t[0].quimica==true){ myData0.push({idmateria:'Quimica'});      }
           if(myData0t[0].biologia==true){ myData0.push({idmateria:'Biologia'});      }
   

           if(myData0.length==0)
           {
       //     res.status(500).send(' No existen materias configuradas para esta unidad academica')    
         //   return;

           }
           console.log('asignaest');
           console.log({idtipounidad        	: req.body.tipounidad        	,
            idunidadacademica        	: req.body.unidadacademica        	,
            no_orientacion        	: req.body.no_orientacion        	,
            idestudiante:req.body.idestudiante,aprobado:'Aprobado',
            idperiodo        	: req.body.periodo        });
       
           Asignaest.find({idtipounidad        	: req.body.tipounidad        	,
            idunidadacademica        	: req.body.unidadacademica        	,
            no_orientacion        	: req.body.no_orientacion        	,
            idestudiante:req.body.idestudiante,aprobado:'Aprobado',
            idperiodo        	: req.body.periodo        }).lean().exec({}, function(err,myData2) {
            if (err) res.send(err);
             var myData0a = [];
             
             //las materias que tengo que ganar
        //     console.log('ya gano')
          //   console.log(req.body.resultadopcb)
             if(myData2.length==0 && req.body.resultadopcb.length==0)
             {//NO TENGO NADA GANADO
                myData0a=myData0   //tengo que ganar todas 

            //    console.log('tiene que ganar')
              //  console.log(myData0a)
               
             }
             else
             {
              //las materias que tengo que ganar
              
             for(var i = 0; i < myData0.length;i++){
                var gane=0;
                //REVISAR LA MATERIA QUE TENGO QUE GANAR CON LAS QUE YA GANE PARA DESCARTARLA
                 for(var ii = 0; ii < myData2.length;ii++){
                  
                         if(myData0[i].idmateria==myData2[ii].idmateria)
                         {   gane=1;   break;                     }
                         else{gane=0;}
                 }
                 if(gane==0)
                 {//no la e ganado ENTONCES LA INSERTO PERO LA COMPARO CON LAS OTRA
                    if(req.body.resultadopcb.length>0)
                    {//HAGO LA MISMA VALIDACION LAS QUE YA GANE AQUI EN ESTA PRUEBA DEL SISTEMA
                        gane=0;    
                        for(var iii = 0; iii < req.body.resultadopcb.length;iii++){
                  
                            if(myData0[i].idmateria==req.body.resultadopcb[iii].idmateria)
                            {   gane=1;   break;                     }
                            else{gane=0;}
                         }

                         if(gane==0)
                            {//NO LA E GANADO TAMPO LA INSERTO
                                myData0a.push({idmateria:myData0[i].idmateria});
                            }

                    }
                    else
                    {//SI YA NO HAY NADA QUE COMPARAR Y NO LA E GANADO LA INSERTO
                        myData0a.push({idmateria:myData0[i].idmateria});

                    }
                   
                    
                 }

             }

            }

      
                          var myData3 = [];
                          var myData3aa = [];
                          
                          var cii=0;
                          //las materias qye tengo que ganar
                         // console.log(myData);
                        for(var i = 0; i < myData0a.length;i++){
                            //todo lo que esta planificado en el plan    
                            for(var ii = 0; ii < myData.length;ii++){
                                    if(myData0a[i].idmateria==myData[ii].idmateria )
                                    {
                                            if( myData[ii].capacidad!=(myData[ii].asignados))
                                            {//si hay cupo lo hago
                                                
                                                cii=0;
                                             //   console.log('encontre cupo para ' + myData[ii].idmateria )
                                                myData3.push({_id:myData[ii]._id,idedificio:myData[ii].idedificio,idsalon:myData[ii].idsalon
                                                    ,idhorario:myData[ii].idhorario,idmateria:myData[ii].idmateria
                                                    ,capacidad:myData[ii].capacidad,asignados:'0',fexamen:myData[ii].fexamen,codfac:myData[ii].codfac});
                
                                                break;

                                            }
                                            else
                                            { 
                                                cii=ii;
                                               // break;

                                            }
                                        
                                    }
                            }

                            //////////////////
                            if(cii>0)
                            {  //  console.log(' NOOOO encontre cupo para ' + myData[cii].idmateria )
                                myData3aa.push({_id:myData[cii]._id,idedificio:myData[cii].idedificio,idsalon:myData[cii].idsalon
                                    ,idhorario:myData[cii].idhorario,idmateria:myData[cii].idmateria
                                    ,capacidad:myData[cii].capacidad,asignados:'0',fexamen:myData[cii].fexamen,codfac:myData[cii].codfac});

                            }


                        }

//console.log('le tengo que asignar esto' )
//console.log(myData3)
if(myData0a.length==0)
{   var matganada=''
    for(var iii = 0; iii < req.body.resultadopcb.length;iii++){
       matganada=  matganada + '-' +req.body.resultadopcb[iii].idmateria + ' ' 
    }
    res.status(500).send(' Prueba ya a sido ganada satisfactoriamente, no se puede volver asignar , Materias ganadas: '+ matganada)    
    

}
else
{
    getNextSequenceValue(myData3,myData3aa,req,res);

}

                       


           
         });
        });

       
       
     });
 

    }
        
});
    

   






 
}

}



