
var Bitacora = require('../models/bitacora');
var Nuevosalon = require('../models/nuevosalon');
var Facplan = require('../models/unidadplan2');
var mailt = require('../controllers/mail');
var Asignaest = require('../models/asignaestudiantepap');
var Asignapap = require('../models/asignapap');


   



exports.getAsignaestudiantepap = function(req, res, next){

        
        Asignaest.find({idasigna:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    
}



function getNextSequenceValue2(myData3,myData3cc,req,res,i,todo){
    //  console.log('asignado antes:')
     // console.log(myData3cc);
       Asignaest.find({idtipounidad        	: myData3[i].idtipounidad        	,
           idunidadacademica        	:myData3[i].idunidadacademica  , 
           idperiodo        	:myData3[i].idperiodo      	,
           idedificio:myData3[i].idedificio,
           idsalon:myData3[i].idsalon,
           idhorario:myData3[i].idhorario,
           idmateria:myData3[i].idmateria,
           idjornada:myData3[i].idjornada
                 }).lean().exec({}, function(err,myasigcupo) {
           if (err) res.send(err);
                 var asigno=0
                 asigno=myasigcupo.length;
                 asigno=asigno+1;
                 console.log('jjjjjjjjjjjjjjjjjj')
                 console.log(asigno)
  
                           Asignaest.create({ 
                               idasigna:todo[0]._id,
                               idtipounidad        	: myData3[i].idtipounidad        	,
                               idunidadacademica        	:myData3[i].idunidadacademica  , 
                               idperiodo        	:myData3[i].idperiodo      	,
                               idedificio:myData3cc.idedificio,
                               idsalon:myData3cc.idsalon,
                               idjornada        	:myData3[i].idjornada  , 
                           
                               no_orientacion        	: todo[0].cui        	,
                           
                               nombre 	: todo[0].nombre, 	
                               idestudiante 	: todo[0].userId, 	
                               idhorario:myData3cc.idhorario,
                               idmateria:myData3cc.idmateria,
                               fexamen:'',
                               aprobado:'',
                               nota:'',
                               ingreso:'0',
                               noasignado:asigno,
                               codfac:myData3cc.codfac,
                               usuarionew:'mario.morales@mcloude.com'
                           });
       
  
                           Facplan.findById({ _id:myData3cc._id }, function (err, todo)  {
                               if (err) {  res.send(err);  }
                               else
                               { 
                                    todo.asignados        	=		asigno     	;
                                   
                                   todo.save(function (err, todo){
                                       if (err)     {  console.log(err.message)   }
                                       //console.log(todo);
                                   });
                               }
                           });
       });
  }
  
  function getNextSequenceValue(myData3,myData3aa,req,res,todo){

  
          if(myData3aa.length>0)
          { 
              Nuevosalon.create({ 
                  nombre:'Solicitando salon para Unidad academica: ' + myData3aa[0].idunidadacademica.nombre + ', Materia: '+  myData3aa[0].idmateria +', Edificio: '+  myData3aa[0].idedificio.nombre +' y Salon: '+  myData3aa[0].idsalon.nombre ,
                  estado        	: 'Solicitando' ,
                  correo:''       	
              });
  
              
  
  
              const mailO = {
                  destino: 'mario.morales@mcloude.com', // list of receivers
                  subject: 'Solicitud de nuevo salon PAP', // Subject line
                  html: 'Solicitando salon para Unidad academica PAP: ' + myData3aa[0].idunidadacademica.nombre + ', Materia: '+  myData3aa[0].idmateria +', Edificio: '+  myData3aa[0].idedificio.nombre +' y Salon: '+  myData3aa[0].idsalon.nombre ,// plain text body
                  actualiza: 0// plain text body
                };
              
  
              mailt.getMail2(mailO,res);
  //            console.log('No existe cupo para asignarse esta materia: '+  myData3aa[0].idmateria +' para el edificio: '+  myData3aa[0].idedificio.nombre +' salon: '+  myData3aa[0].idsalon.nombre +' , realize la asignacion mas tarde')
              res.status(500).send('No existe disponibilidad para asignarse , Inténtelo más tarde')    
          }
          else
          {
  
                 
                                      
                                      for(var i = 0; i < myData3.length;i++){
                                         var myData3cc=myData3[i] 
                                        
                                        
                                         getNextSequenceValue2(myData3,myData3cc,req,res,i,todo);
  
                                      }
                              
                                      res.json({op:'Generacion realizada con exito'});
  
               
          }
   }

   /*
   12345,2,1122,123,PAP,10

noboleta,codigofactultad,monto,cui,jornada,TIPOUNIDAD,CODIGOUNIDAD
   */


exports.creaAsignaestudiantepap2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
    if(req.params.recordID=='crea')
    { 

            
    //noboleta,codigofactultad,monto,cui,tipo,codigotipo
    //id,id2,id3,id4,id5,id6
    
        Asignapap.find({'idunidadacademica.codigo':req.body.id2,idjornada:req.body.id5,
            cui        	: req.body.id4  ,noboleta:   	         req.body.id
                 },function(err, todos) {
            if (err){  if(err) return next(err);// res.status(500).send(err); 
            return;}
          
            if(todos.length==0)   {    res.status(500).send('No existe Asignación en sistema'); }
            else
            { 
      //agregar periodo que se esta trabajando*************************************************************
      var myData0 = [];
                
      
      //MATERIA QUE TENGO QUE LLEVAR     
      if(todos[0].lenguaje==true){ myData0.push({idmateria:'Lenguaje'});      }
      if(todos[0].fisica==true){ myData0.push({idmateria:'Fisica'});      }
      if(todos[0].matematica==true){ myData0.push({idmateria:'Matematica'});      }
      if(todos[0].quimica==true){ myData0.push({idmateria:'Quimica'});      }
      if(todos[0].biologia==true){ myData0.push({idmateria:'Biologia'});      }
    
    
    Facplan.find({'idtipounidad.nombre'        	: req.body.id6           	,
        'idunidadacademica.codigo'        	: req.body.id7     
     //,   asignados:{$lt:capacidad}    	
             }).lean().exec({}, function(err,myData) {
        if (err) res.send(err);
    
        
        if(myData.length==0)
        {
         res.status(500).send(' No existe  configurado salones para esta unidad academica')    
         return;
    
        }
    
        var myData3 = [];
        var myData3aa = [];
        var myData0a =  myData0;
    
        var cii=0;
        //las materias qye tengo que ganar
    
      for(var i = 0; i < myData0a.length;i++){
          //todo lo que esta planificado en el plan    
          for(var ii = 0; ii < myData.length;ii++){
                  if(myData0a[i].idmateria==myData[ii].idmateria && req.body.id5 ==myData[ii].idjornada )
                  {
                          if( myData[ii].capacidad!=(myData[ii].asignados))
                          {//si hay cupo lo hago
                              
                              cii=0;
                           //   console.log('encontre cupo para ' + myData[ii].idmateria )
                              myData3.push({_id:myData[ii]._id,idedificio:myData[ii].idedificio,idsalon:myData[ii].idsalon
                                ,idtipounidad:myData[ii].idtipounidad,
                                idjornada:myData[ii].idjornada,
                                idunidadacademica: myData[ii].idunidadacademica,
                                idperiodo:myData[ii].idperiodo,
                                  idhorario:myData[ii].idhorario,idmateria:myData[ii].idmateria
                                  ,capacidad:myData[ii].capacidad,asignados:'0',fexamen:'',codfac:myData[ii].codfac});
    
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
                  ,idtipounidad:myData[ii].idtipounidad,
                  idjornada:myData[ii].idjornada,
                  idunidadacademica: myData[ii].idunidadacademica,
                  idperiodo:myData[ii].idperiodo
                  ,capacidad:myData[cii].capacidad,asignados:'0',fexamen:'',codfac:myData[cii].codfac});
    
          }
    
    
      }
    
    
          getNextSequenceValue(myData3,myData3aa,req,res,todos);
     
                           
    
    
            
    
           
           
         });
     
    
        }
            
    });
        
    
       
    
    
    
    
    
    
    
        
        
    }
};