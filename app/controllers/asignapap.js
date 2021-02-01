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
       idjornada:myData3[i].idjornada,
       idseccion:myData3[i].idseccion
             }).lean().exec({}, function(err,myasigcupo) {
       if (err) res.send(err);
             var asigno=0
             asigno=myasigcupo.length;
             asigno=asigno+1;
            

                       Asignaest.create({ 
                           idasigna:todo._id,
                           idtipounidad        	: myData3[i].idtipounidad        	,
                           idseccion        	: myData3[i].idseccion        	,
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
        
            Asignapap.find({  $or : [
                { $and : [ { noboleta: req.params.id2 }] },
                { $and : [ {  cui : req.params.id2 }] },
                { $and : [ { nov : req.params.id2 }] },
                { $and : [ { correo : req.params.id2 }] },
                { $and : [ { carne : req.params.id2 }]  }]
            }
              ).exec(function(err, todos) {
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
                else
                {
                    
                if(req.params.id=='duplicados')
                {
                   //http://127.0.0.1:9090/api/asignapaps/duplicados/1
                    Asignapap.find({estado:'Asignación finalizada con exito'}).exec(function(err, todos) {
                        if (err){ res.send(err); }
                        Asignapap.find({estado:'Pendiente de Pago'}).exec(function(err, todos2) {
                            if (err){ res.send(err); }
                            var duplicates = [];
                            for(var i = 0; i < todos.length;i++){

                                for(var j = 0; j < todos2.length;j++){
                                    if(todos[i].cui==todos2[j].cui)
                                    {
                                       
                                            duplicates.push(todos2[j]._id);

                                    }


                                }
                            }

                            
                            Asignapap.remove({_id: {$in: duplicates}}, function (err, result) {
                    if (err) {
                        console.error(err);
                    }
     
                    res.json(duplicates); 
                   
                });

                          
                           
                        });
                        
                       
                    });
                }
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
   
    if(req.params.idempresa=='horario')
    {

        Asignapap.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {    
                todo.estado	='Pendiente de Pago';
              todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    Asignaest.find({ "idasigna" : req.params.userID }).remove().exec();
                    res.json(todo);
                });
            }
        });

        
     


    }

    if(req.params.idempresa=='asignacion')
    {

        
        Asignapap.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

            Asignaest.find({ "idasigna" : req.params.userID }).remove().exec();

        res.json(todo);
    });


    }

   
   
}

           
     

exports.creaAsignapap2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);

   
if(req.body.operacion=='finaliza')
{ 
    Asignapap.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {    
            todo.estado	=req.body.estado;
            todo.idhorario=req.body.idhorario
            todo.idhorario2=req.body.idhorario2
            todo.idhorario3=req.body.idhorario3
            todo.idhorario4=req.body.idhorario4
            todo.idhorario5=req.body.idhorario5
            todo.cierra='1'
            todo.usuarioup=req.body.bitacora.email;
            



            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    if(req.params.recordID=='crea')
{ 

    if(1==1)

    Asignapap.find({  correo:req.body.correo +';mario.morales@mcloude.com' }
      , function(err, todosa) {
      if (err){ res.status(500).send(err.message)    }

      if(todosa.length>0)   {    res.status(500).send('Ya existe una asignación para este usuario'); }
      else
      {   

    Asignapap.create({  
        userId :req.body.userId ,
     
        idperiodo   		:req.body.idperiodo ,
        noboleta:req.body.noboleta ,
        monto:req.body.montoboleta ,
        cui:req.body.cui ,
        nombre:req.body.nombre ,
        rubro:req.body.rubro ,
        llave:req.body.llave ,
        montodeuda:req.body.montot,
        cursosaplica:req.body.cursostt,
        idjornada:req.body.idjornada ,
        idjornada2:req.body.idjornada2,
        idjornada3:req.body.idjornada3,
        idjornada4:req.body.idjornada4,
        idjornada5:req.body.idjornada5,
        idhorario:req.body.idhorario,
        idhorario2:req.body.idhorario2,
        idhorario3:req.body.idhorario3,
        idhorario4:req.body.idhorario4,
        idhorario5:req.body.idhorario5,
        fechasiif:req.body.fechasiif,


 
            
                nov   		:req.body.nov,
                carne   		:req.body.carne,
            
              estadogeneral:req.body.estadogeneral,
             
               
          
            
       
                idpago:req.body.idpago ,




        
        correo:req.body.correo +';mario.morales@mcloude.com' ,
        lenguaje:req.body.l1,
        matematica:	req.body.m1 ,
        fisica	:req.body.f1 ,
        biologia:	req.body.b1 ,
        quimica	:req.body.q1,
        nota	:req.body.nota,
        estado	:req.body.estado,

        usuarionew:req.body.bitacora.email
        
      }
        , function(err, todos) {
        if (err){ res.status(500).send(err.message)    }

        res.json(todos);

        });
    }
    });
}
else
{

    if(1==2)
    {
        res.status(500).send('Las fechas de inscripción PAP han finalizado.');


    }
    else
{
           Asignapap.findById({_id:  req.params.recordID
         
            
          }
            , function(err, todos) {
            if (err){ res.status(500).send(err.message)    }


 
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
              if(todos.lenguaje==true){ tt=0;myData0.push({idmateria:'Lenguaje', idjornada:req.body.idjornada,idhorario:req.body.idhorario});      }
              if(todos.matematica==true){tt=0; myData0.push({idmateria:'Matematica', idjornada:req.body.idjornada2,idhorario:req.body.idhorario2});      }
              if(todos.fisica==true){tt=0; myData0.push({idmateria:'Fisica', idjornada:req.body.idjornada3,idhorario:req.body.idhorario3});      }
              if(todos.biologia==true){tt=0; myData0.push({idmateria:'Biologia', idjornada:req.body.idjornada4,idhorario:req.body.idhorario4});      }
              if(todos.quimica==true){tt=0; myData0.push({idmateria:'Quimica', idjornada:req.body.idjornada5,idhorario:req.body.idhorario5});      }
            
              if(tt==1)
              {
              
                res.status(500).send('No existe ninguna materia asignada'); 
            return; 

              }
            
   

          


            Facplan.find({'idtipounidad.nombre'        	: 'PAP'      	,
                'idunidadacademica.codigo'        	: '10'
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
                          if(myData0a[i].idmateria==myData[ii].idmateria  && myData0a[i].idhorario==myData[ii].idhorario)
                          {
                                  if( myData[ii].capacidad!=(myData[ii].asignados))
                                  {//si hay cupo lo hago
                                      cii=0;
                                      myData3.push({_id:myData[ii]._id,idedificio:myData[ii].idedificio,idsalon:myData[ii].idsalon
                                        ,idtipounidad:myData[ii].idtipounidad
                                        ,idseccion:myData[ii].idseccion,
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
    }
      
           




}




 
}

}



