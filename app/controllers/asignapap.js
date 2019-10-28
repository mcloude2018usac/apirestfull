var Asignapap = require('../models/asignapap');
var Bitacora = require('../models/bitacora');
var Userperfil = require('../models/userperfil2');

var Nuevosalon = require('../models/nuevosalon');
var Facplan = require('../models/unidadplan2');
var mailt = require('../controllers/mail');
var Asignaest = require('../models/asignaestudiantepap');
var Asignapap = require('../models/asignapap');
var cuentacorr= require('../models/asignapapccorriente');



exports.getAsignaestudiantepap = function(req, res, next){

        
    Asignaest.find({idasigna:req.params.id},function(err, todos) {
       if (err){  res.send(err);  }
        res.json(todos);
    });

}



function getNextSequenceValue2(myData3,myData3cc,req,res,i,todo){

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
            

                       Asignaest.create({ 
                           idasigna:todo._id,
                           idtipounidad        	: myData3[i].idtipounidad        	,
                           idunidadacademica        	:myData3[i].idunidadacademica  , 
                           idperiodo        	:myData3[i].idperiodo      	,
                           idedificio:myData3cc.idedificio,
                           idsalon:myData3cc.idsalon,
                           idjornada        	:myData3[i].idjornada  , 
                       
                           no_orientacion        	: todo.cui        	,
                       
                           nombre 	: todo.nombre, 	
                           idestudiante 	: todo.userId, 	
                           idhorario:myData3cc.idhorario,
                           idmateria:myData3cc.idmateria,
                          
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
                                 
                               });
                           }
                       });
   });
}

function getNextSequenceValue(myData3,myData3aa,req,res,todo){


    

             
                                  
                                  for(var i = 0; i < myData3.length;i++){
                                     var myData3cc=myData3[i] 
                                    
                                    
                                     getNextSequenceValue2(myData3,myData3cc,req,res,i,todo);

                                  }
                          
                                

           
      
}

/*
12345,2,1122,123,PAP,10

noboleta,codigofactultad,monto,cui,jornada,TIPOUNIDAD,CODIGOUNIDAD
*/



function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getAsignapap = function(req, res, next){

    if(req.params.id3)
    { 
        cuentacorr.find({"userId":req.params.id2,"periodo":req.params.id3}).exec(function(err, todos) {
            if (err){ res.send(err); }

            
            res.json(todos);
        });
    }
    else{
    if(req.params.id2)
    { 

        if(req.params.id=='noboleta')
        {
           
            Asignapap.find({"noboleta":req.params.id2}).exec(function(err, todos) {
                if (err){ res.send(err); }

                
                res.json(todos);
            });
        }
        else
        {


            if(req.params.id=='cuentacorriente')
            {
               
                cuentacorr.find({"userId":req.params.id2}).exec(function(err, todos) {
                    if (err){ res.send(err); }
    
                    
                    res.json(todos);
                });
            }
            else
            {
                if(req.params.id=='cuentacorriente2')
                {
                   
                    cuentacorr.find({"userId":req.params.id2}).exec(function(err, todos) {
                        if (err){ res.send(err); }
        
                        
                        res.json(todos);
                    });
                }


            }

        }
    }
    else
    {
        if(req.params.id)
        {  
           
                Asignapap.find({userId:req.params.id}).exec(function(err, todos) {
                    if (err){ res.send(err); }

                    
                    res.json(todos);
                });
             
           
        }
        else
        { Asignapap.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }
    }}
    
 
}
exports.deleteAsignapap = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina solicitud de carne'});
    Asignapap.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}

           
     

exports.creaAsignapap2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Asignapap.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {    
            todo.estado	=req.body.estado;
            todo.usuarioup=req.body.bitacora.email;
            



            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Userperfil.find(  { userId:req.body.userId
    }).exec(function(err, todosa10) {
            if (err){ res.send(err); }
 
            if(todosa10.length==0)   {    res.status(500).send('No existe'); }
            else
            { 
                var carr= (todosa10[0].facultadins).split(',')
      
                var l1 = false;
                var f1 = false;
                var m1 = false;
                var q1 = false;
                var b1 = false;
                var montot=0;
                var cursostt=''
               var tt2=1;
                if(todosa10[0].lenguaje2==true){tt2=0; l1=true; montot=1000  ;cursostt='Lenguaje'  }
                if(todosa10[0].fisica==true){tt2=0; f1=true;   montot=montot+1000 ; cursostt=cursostt + ' ,Fisica'  }
                if(todosa10[0].matematica==true){tt2=0; m1=true; montot=montot+1000    ; cursostt=cursostt + ' ,Matematica' }
                if(todosa10[0].quimica==true){tt2=0; q1=true; montot=montot+1000 ; cursostt=cursostt + ' ,Quimica'   }
                if(todosa10[0].biologia==true){tt2=0; b1=true; montot=montot+1000  ; cursostt=cursostt + ' ,Biologia'   }

                if(tt2==1)
                {
                 
                  res.status(500).send('No existe ninguna materia asignada'); 
            return;
  
                }
                else{
               
              

           Asignapap.create({  
            userId :req.body.userId ,
            idunidadacademica  :{id:carr[0],nombre:carr[1],codigo:carr[2]}	,
            idperiodo   		:req.body.idperiodo ,
            noboleta:todosa10[0].noboleta ,
            monto:todosa10[0].montoboleta ,
            cui:todosa10[0].cui ,
            nombre:todosa10[0].nombre1+ ' ' + todosa10[0].nombre2 + ' ' + todosa10[0].nombre3 + ' ' + todosa10[0].nombre4  ,
            montodeuda:montot,
            cursosaplica:cursostt,
            idjornada:todosa10[0].idjornada ,
            idjornada2:todosa10[0].idjornada2,
            idjornada3:todosa10[0].idjornada3,
            idjornada4:todosa10[0].idjornada4,
            idjornada5:todosa10[0].idjornada5,
            idhorario:todosa10[0].idhorario,
            idhorario2:todosa10[0].idhorario2,
            idhorario3:todosa10[0].idhorario3,
            idhorario4:todosa10[0].idhorario4,
            idhorario5:todosa10[0].idhorario5,
            correo:todosa10[0].correo +';'+todosa10[0].usuarionew+';mario.morales@mcloude.com' ,
            lenguaje:l1,
            matematica:	m1 ,
            fisica	:f1 ,
            biologia:	b1 ,
            quimica	:q1,
            nota	:req.body.nota,
            estado	:req.body.estado,
            unidad 	:todosa10[0].unidad,
            codunidad	:todosa10[0].codunidad,
            codcarrera	:todosa10[0].codcarrera,
            usuarionew:req.body.bitacora.email
            
          }
            , function(err, todos) {
            if (err){ res.status(500).send(err.message)    }

  
            //noboleta,codigofactultad,monto,cui,tipo,codigotipo
            //id,id2,id3,id4,id5,id6
           
            
          if(!todos)
          {
            res.status(500).send('No existe Asignación en sistema'); 
            return;
          }
                    if(todos.length==0)   {  
                        res.status(500).send('No existe Asignación en sistema'); 
                       // return next(err)
                    return;
                 }
                    else
                    { 

                    
              //agregar periodo que se esta trabajando*************************************************************
              var myData0 = [];
                        
              
              //MATERIA QUE TENGO QUE LLEVAR   
              var tt=1;  
              if(todos.lenguaje==true){ tt=0;myData0.push({idmateria:'Lenguaje', idjornada:todos.idjornada,idhorario:todos.idhorario});      }
              if(todos.matematica==true){tt=0; myData0.push({idmateria:'Matematica', idjornada:todos.idjornada2,idhorario:todos.idhorario2});      }
              if(todos.fisica==true){tt=0; myData0.push({idmateria:'Fisica', idjornada:todos.idjornada3,idhorario:todos.idhorario3});      }
              if(todos.biologia==true){tt=0; myData0.push({idmateria:'Biologia', idjornada:todos.idjornada4,idhorario:todos.idhorario4});      }
              if(todos.quimica==true){tt=0; myData0.push({idmateria:'Quimica', idjornada:todos.idjornada5,idhorario:todos.idhorario5});      }
            
              if(tt==1)
              {
              
                res.status(500).send('No existe ninguna materia asignada'); 
            return; 

              }
            
            Facplan.find({'idtipounidad.nombre'        	: todos.unidad       	,
                'idunidadacademica.codigo'        	: todos.codunidad
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
                          if(myData0a[i].idmateria==myData[ii].idmateria && myData0a[i].idjornada==myData[ii].idjornada && myData0a[i].idhorario==myData[ii].idhorario)
                          {
                                  if( myData[ii].capacidad!=(myData[ii].asignados))
                                  {//si hay cupo lo hago
                                      cii=0;
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
                                
                                  }
                              
                          }
                  }
            
                  //////////////////
                  if(cii>0)
                  {  
                      myData3aa.push({_id:myData[cii]._id,idedificio:myData[cii].idedificio,idsalon:myData[cii].idsalon
                          ,idhorario:myData[cii].idhorario,idmateria:myData[cii].idmateria
                          ,idtipounidad:myData[cii].idtipounidad,
                          idjornada:myData[cii].idjornada,
                          idunidadacademica: myData[cii].idunidadacademica,
                          idperiodo:myData[cii].idperiodo
                          ,capacidad:myData[cii].capacidad,asignados:'0',fexamen:'',codfac:myData[cii].codfac});
            
                  }
            
            
              }
            
        

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
                
                res.status(500).send('No existe disponibilidad para asignarse , Inténtelo más tarde')    
            }
            else
            {
                getNextSequenceValue(myData3,myData3aa,req,res,todos);
                res.json(todos);
            }
           
                 
             
                  
                                   
            
            
                    
            
                   
                   
                 });
             
            
                }
    
            
               
            
            
       


          
    
        });

      
           


            }}
           
        });




 
}

}



