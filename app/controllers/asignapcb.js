
var Nuevosalon = require('../models/nuevosalon');
var Facplan = require('../models/unidadplan');
var Facmat = require('../models/facultadmateria');
var mailt = require('../controllers/mailprueba');

var Asignaest = require('../models/asignaestudiante');
var Asignapcb = require('../models/asignapcb');
var Bitacora = require('../models/bitacora');


var Asignacalusac = require('../models/calusac/asignacalusac');
var Notascalusac = require('../models/calusac/calusacnota');


function getNextSequenceValuenota(req,res,cant,codf){

    Asignacalusac.find({_id:codf }, function (err, todo1)  {
        if (err) {  res.send(err);  }
        else
        {
            if(todo1.length>0) {
           
      
    Asignacalusac.findById({_id:todo1[0]._id}, function (err, todo)  {
                if (err) {  res.send(err);  }
                else
                { 

                   
                  
                     todo.estadoacta=	'Final'   	;
                    
                    todo.save(function (err, todo){
                        if (err)     {  console.log(err.message) 
                           
                        
                        
                        }
                       
                      
                    });
                
                }
            });
        }
        }
        });

}


function getNextSequenceValue2aaa(req,res,cant,codf){

                        Facplan.find({codfac:codf }, function (err, todos10)  {
                            if (err) {  res.send(err);  }
                            else
                            { 
                               
                                Facplan.findById({_id:todos10[0]._id }, function (err, todo)  {
                                    if (err) {  res.send(err);  }
                                    else
                                    { 
                                      
                                         todo.asignados        	=		cant   	;
                                        
                                        todo.save(function (err, todo){
                                            if (err)     {  console.log(err.message)   }
                                          
                                        });
                                    }
                                });


                            }
                        });
    
 }


exports.getAsignapcb = function(req, res, next){
    if(req.params.id3)
    { 
        if(req.params.id3=='existepcb')
        {
          //  http://127.0.0.1:9090/api/asignapcbs/1/1/notacalusac
          Asignapcb.find({no_orientacion:req.params.id2}).exec(function(err, todos) {

               
              res.json(todos); 
            });


        }
        else
        {
        if(req.params.id3=='notacalusac')
        {
          //  http://127.0.0.1:9090/api/asignapcbs/1/1/notacalusac
          Notascalusac.find({}).exec(function(err, todos) {

                for(var i = 0; i < todos.length;i++){     
                    getNextSequenceValuenota(req,res,1,todos[i].idasigna);


                      }
              res.json(todos); 
            });


        }
        else{
        if(req.params.id3=='componesalon')
        {
          //  http://127.0.0.1:9090/api/asignapcbs/1/1/componesalon
            Asignaest.aggregate( [
                { 
                    "$group" : {
                        "_id" : {
                            "codfac" : "$codfac"
                        }, 
                        "COUNT(*)" : {
                            "$sum" : 1
                        }
                    }
                }, 
                { 
                    "$project" : {
                        "codfac" : "$_id.codfac", 
                        "cantidad" : "$COUNT(*)", 
                        "_id" :0
                    }
                }
            ]).exec(function(err, todos) {

                for(var i = 0; i < todos.length;i++){     
                    getNextSequenceValue2aaa(req,res,todos[i].cantidad,todos[i].codfac);


                      }
              res.json(todos); 
            });


        }
        else{

        if(req.params.id3=='rptsun3')
        {

              
            Asignapcb.aggregate( [
                { 
                    "$group" : {
                        "_id" : {
                            "idtipounidad᎐nombre" : "$idtipounidad.nombre"
                        }, 
                        "COUNT(*)" : {
                            "$sum" : 1
                        }
                    }
                }, 
                { 
                    "$project" : {
                        "idtipounidad.nombre" : "$_id.idtipounidad᎐nombre", 
                        "cantidad" : "$COUNT(*)", 
                        "_id" : 0
                    }
                }
            ]).exec(function(err, todos) {
    var cad=''
                for(var i = 0; i < todos.length;i++){
                    cad=cad +'<p>'  +todos[i].idtipounidad.nombre  + ';'  + todos[i].cantidad +'</p>'
              
                  
                }
                res.send(cad)
            });


        }
        else
        {
        if(req.params.id3=='rptsun2')
        {

            
            Asignaest.aggregate( [
            { 
                "$group" : {
                    "_id" : {
                        "idmateria" : "$idmateria", 
                        "idtipounidad᎐nombre" : "$idtipounidad.nombre"
                    }, 
                    "COUNT(*)" : {
                        "$sum" : 1
                    }
                }
            }, 
            { 
                "$project" : {
                    "idtipounidad.nombre" : "$_id.idtipounidad᎐nombre", 
                    "idmateria" : "$_id.idmateria", 
                    "cantidad" : "$COUNT(*)", 
                    "_id" : 0
                }
            }, 
            { 
                "$sort" : {
                    "idtipounidad" : 1
                }
            }
        ]).exec(function(err, todos) {
            if (err){ res.send(err); }
            var unidad=''
            unidad=todos[0].idtipounidad.nombre
            var v1=0;    
            var v2=0;
            var v3=0;
            var v4=0;
            var v5=0;
            var v6=0;
            var cad=''
            cad=cad +'<p>  UNIDAD;LENGUAJE;MATEMATICA;BIOLOGIA;FISICA;QUIMICA;TOTAL</p>'
              

            for(var i = 0; i < todos.length;i++){
           
                    if(unidad==todos[i].idtipounidad.nombre)
                    { 
                   
                   
                            if(todos[i].idmateria=='Lenguaje'){v1=v1 + todos[i].cantidad;}
                            if(todos[i].idmateria=='Matematica'){v2=v2 +todos[i].cantidad}
                            if(todos[i].idmateria=='Biologia'){v3=v3+todos[i].cantidad}
                            if(todos[i].idmateria=='Fisica'){v4=v4+todos[i].cantidad}
                            if(todos[i].idmateria=='Quimica'){v5=v5+todos[i].cantidad}

                    }
                    else
                    {
                      
                        v6=v1+v2+v3+v4+v5
                        cad=cad +'<p>'  +unidad  + ';'  + v1 + ';'  + v2  + ';'  + v3  + ';'  + v4 + ';'  + v5  + ';' + v6  +'</p>'
              
                    unidad=todos[i].idtipounidad.nombre
                    v1=0;v2=0;v3=0;v4=0;v5=0;v6=0
                    if(todos[i].idmateria=='Lenguaje'){v1=v1 + todos[i].cantidad; }
                    if(todos[i].idmateria=='Matematica'){v2=v2 +todos[i].cantidad}
                    if(todos[i].idmateria=='Biologia'){v3=v3+todos[i].cantidad}
                    if(todos[i].idmateria=='Fisica'){v4=v4+todos[i].cantidad}
                    if(todos[i].idmateria=='Quimica'){v5=v5+todos[i].cantidad}

                    }

            }

            v6=v1+v2+v3+v4+v5
            cad=cad +'<p>'  +unidad  + ';'  + v1 + ';'  + v2  + ';'  + v3  + ';'  + v4 + ';'  + v5  + ';' + v6  +'</p>'
  
       

            
            res.send(cad)




        });

        }
        else
        {
        if(req.params.id3=='rptsun')
        {//$where : "this.Grade1 > this.Grade2" }

        var projectDataForMatch = {
            $project : {
                _id : 1, //list all fields needed here
                filterThisDoc : {
                    $cond : {
                        if  : {
                            $lt : ["$asignados", "$capacidad"]
                        },
                    then : 1,
                    else  : 0
                } //or use compare operator $cmp
            }
        }
        }
        
        var match = {
            $match : {
                filterThisDoc : 1
            }
        }


        Facplan.aggregate([projectDataForMatch, match]  ).exec(function(err, todos) {
                if (err){ res.send(err); }
                var duplicates = [];
                todos.forEach(function (doc) {duplicates.push(doc._id);  });

           //     res.json(duplicates);   
          

                
                Facplan.find({_id: {$in: duplicates},'idperiodo.nombre':'2019-03'}).sort({   "asignados" : -1    }).select({ "idtipounidad.nombre":1,"idunidadacademica.nombre":1,"idedificio.nombre":1,"idsalon.nombre":1,"capacidad":1,"asignados":1}).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    var cad='';
                    for(var i = 0; i < todos.length;i++){
                        cad=cad +'<p>'  + todos[i].idtipounidad.nombre  + '  '  + todos[i].idunidadacademica.nombre + '  '  + todos[i].idedificio.nombre  + '  '  + todos[i].idsalon.nombre  + ' --> '  + todos[i].capacidad + '  '  + todos[i].asignados  + '  '    +'</p>'
                    }

                    res.send(cad)
                    
                });


            });

        
        }
        else{
                    if((req.params.id3).indexOf(',')>0)
                    {
                        res.status(404).send('NO EXISTE REGISTRO');    
                    }
                    else{
                        
                            Asignapcb.find({no_orientacion:req.params.id3},function(err, todos) {
                                if (err){ res.send(err); }
                            
                            res.json(todos);   
                                
                                
                            });
                        }
    }}}}}}}
    else
    {
    if(req.params.id)
    { 
        Asignapcb.find({tipo:req.params.id2},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(404).send('NO EXISTE REGISTRO');      }
            
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
                    {  res.status(404).send('NO EXISTE REGISTRO');      }
                    
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

        Asignapcb.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

            // Asignaest
     
     
             res.json(todo);
         });
    });


  
}


function getNextSequenceValue2(myData3,myData3cc,req,res,i,todo){

 
     Asignaest.find({idtipounidad        	: req.body.tipounidad        	,
        'idunidadacademica.id'        	: req.body.unidadacademica.id   , 
         idperiodo        	: req.body.periodo      	,
         idedificio:myData3[i].idedificio,
         idsalon:myData3[i].idsalon,
         idhorario:myData3[i].idhorario,
         idmateria:myData3[i].idmateria,
         codfac:myData3[i].codfac
               }).lean().exec({}, function(err,myasigcupo) {

         if (err) res.send(err);
  
               var asigno=0
               asigno=myasigcupo.length;
               asigno=asigno+1;
              
                         Asignaest.create({ 
                             idasigna:todo._id,
                             idtipounidad        	: req.body.tipounidad        	,
                             idunidadacademica        	: req.body.unidadacademica     	,
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
                             {
                                  todo.asignados        	=		asigno     	;
                                 
                                 todo.save(function (err, todo){
                                     if (err)     {  console.log(err.message)   }
                                     
                                 });
                             }
                         });
     });
}

function getNextSequenceValue(myData3,myData3aa,req,res,necesito){
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

            

            mailt.mandacorreoprueba2(['eveready11p@gmail.com','ambrosioaleman07@gmail.com','mario.morales@mcloude.com'],'Solicitando salon para Unidad academica: ' + req.body.unidadacademica.nombre + ', Materia: '+  myData3aa[0].idmateria +', Edificio: '+  myData3aa[0].idedificio.nombre +' y Salon: '+  myData3aa[0].idsalon.nombre, 'Solicitud de nuevo salon',['mario.morales@mcloude.com'])

           //   mailt.sendEmail(['ambrosioaleman07@gmail.com','mario.morales@mcloude.com'],'Solicitando salon para Unidad academica: ' + req.body.unidadacademica.nombre + ', Materia: '+  myData3aa[0].idmateria +', Edificio: '+  myData3aa[0].idedificio.nombre +' y Salon: '+  myData3aa[0].idsalon.nombre, 'Solicitud de nuevo salon',['mario.morales@mcloude.com']);
                                                                                                                                                                             



            res.status(500).send('No existe disponibilidad de espacio para asignarse en este momento a esta Unidad Académica, estaremos habilitando espacio a la brevedad posible, por favor inténtelo más tarde.')    
        }
        else
        {
            if(myData3.length==0)
            { 
                 

          
            Nuevosalon.create({ 
                nombre:'Solicitando salon para Unidad academica: ' + req.body.tipounidad.nombre + ' ' +  req.body.unidadacademica.nombre  + '-->' + necesito ,
                estado        	: 'Solicitando' ,
                correo:''       	
            });

            


            mailt.mandacorreoprueba2(['eveready11p@gmail.com','ambrosioaleman07@gmail.com','mario.morales@mcloude.com'], 'Solicitando salon para Unidad academica: ' + req.body.tipounidad.nombre + ' ' + req.body.unidadacademica.nombre  + '-->' + necesito, 'Solicitud de nuevo salon',['mario.morales@mcloude.com','ambrosioaleman07@gmail.com'])

       


            res.status(500).send('No existe disponibilidad de espacio para asignarse en este momento a esta Unidad Académica, estaremos habilitando espacio a la brevedad posible, por favor inténtelo más tarde.')    
            }
            else{
    
      
                        Asignapcb.create({ idtipounidad        	: req.body.tipounidad        	,
                            idunidadacademica        	: req.body.unidadacademica        	,
                            no_orientacion        	: req.body.no_orientacion        	,
                            idperiodo        	: req.body.periodo        	,
                            fechaini:req.body.fechaini,
                            nombre 	: req.body.nombre, 	
                            idestudiante 	: req.body.idestudiante, 	
                            idinterno 	: req.body.idinterno,
                            usuarionew:req.body.bitacora.email,
                            idtipounidad2        	: req.body.tipounidad2        	,
                            idunidadacademica2        	: req.body.unidadacademica2        	,
                            tipoasignacion:req.body.tipoasignacion
                        }
                            , function(err, todo) {
                            if (err){ 
                            
                                res.status(404).send(err.message)  
                                return;
                              }
                                        //crea todas las asignaciones nuevas que tiene que sacar
                                     
                                    
                                    for(var i = 0; i < myData3.length;i++){
                                       var myData3cc=myData3[i] 
                                 
                                       getNextSequenceValue2(myData3,myData3cc,req,res,i,todo);

                                    }
                            
                                    res.json(todo);

                      
                });
        }}
 }

exports.creaAsignapcb2s = function(req, res, next){
   
  //  res.status(404).send(' espere un momento ')    
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
            todo.idtipounidad2        	={id:req.body.idtipounidad2.id,nombre:req.body.idtipounidad2.nombre   }   	;
            todo.idunidadacademica2        	={id:req.body.idunidadacademica2.id,nombre:req.body.idunidadacademica2.nombre,codigo:req.body.idunidadacademica2.codigo   }   	;
           

            todo.save(function (err, todo){
                if (err)     {  res.status(404).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

var aa=1;
if(aa==2) 
{
    res.status(404).send('Las fechas de inscripción PCB han finalizado.');

}
else
{

    
    Asignapcb.find({
        no_orientacion        	: req.body.no_orientacion        	,
        'idperiodo.nombre'        	: req.body.periodo.nombre        
        	 },function(err, todos) {
        if (err){  if(err) return next(err);// res.status(404).send(err); 
        return;}
      
        if(todos.length>0)   {    res.status(404).send('Ya existe una Asignación para este periodo <br> No puedes volver a asignarte.'); }
        else
        { 
  //agregar periodo que se esta trabajando*************************************************************

 
  
Facplan.find({'idtipounidad.id'        	: req.body.tipounidad.id        	,
'idunidadacademica.id'        	: req.body.unidadacademica.id  
 //,   asignados:{$lt:capacidad}    	
         }).sort([['createdAt', 1]]).lean().exec({}, function(err,myData) {
    if (err) res.send(err);


    if(myData.length==0)
    {
     res.status(500).send(' No existe disponibilidad de espacio para asignarse en este momento a esta Unidad Académica, estaremos habilitando espacio a la brevedad posible, por favor inténtelo más tarde.')    
     return;

    }

   var filtromat
       if(req.body.tipoasignacion=='manual')
       {
        filtromat={idtipounidad        	: req.body.tipounidad2.id        	,
            idunidadacademica        	: req.body.unidadacademica2.id 	
                 };
       }
       else
       {
        filtromat={idtipounidad        	: req.body.tipounidad.id        	,
            idunidadacademica        	: req.body.unidadacademica.id 	
                 };

       }
 

    Facmat.find(filtromat).lean().exec({}, function(err,myData0t) {
     
        if (err) res.send(err);

        if(myData0t.length==0)
    {
     res.status(404).send(' No existe  configurado materias en unidad academica')    
     return;

    }

      
        var myData0 = [];
            
       
           if(myData0t[0].lenguaje==true){ myData0.push({idmateria:'Lenguaje'});      }
           if(myData0t[0].fisica==true){ myData0.push({idmateria:'Fisica'});      }
           if(myData0t[0].matematica==true){ myData0.push({idmateria:'Matematica'});      }
           if(myData0t[0].quimica==true){ myData0.push({idmateria:'Quimica'});      }
           if(myData0t[0].biologia==true){ myData0.push({idmateria:'Biologia'});      }

           if(myData0.length==0)
           {
       //     res.status(404).send(' No existen materias configuradas para esta unidad academica')    
         //   return;

           }
       
           
       
           Asignaest.find({idtipounidad        	: req.body.tipounidad        	,
            'idunidadacademica.id'        	: req.body.unidadacademica.id ,
            //idunidadacademica        	: req.body.unidadacademica        	,
            no_orientacion        	: req.body.no_orientacion        	,
            idestudiante:req.body.idestudiante,aprobado:'Aprobado',
            idperiodo        	: req.body.periodo        }).lean().exec({}, function(err,myData2) {
            if (err) res.send(err);
             var myData0a = [];
             
             //las materias que tengo que ganar

     
             if(myData2.length==0 && req.body.resultadopcb.length==0)
             {//NO TENGO NADA GANADO
                myData0a=myData0   //tengo que ganar todas 

       
         
               
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
                          var necesito=''
                          var cii=0;
                          var cii2=0;
                          //las materias qye tengo que ganar
                      
                        for(var i = 0; i < myData0a.length;i++){
                           
                            for(var ii = 0; ii < myData.length;ii++){
                                    if(myData0a[i].idmateria==myData[ii].idmateria )
                                    {
                                      necesito=necesito+' ' +myData0a[i].idmateria
                                            if( myData[ii].capacidad>=(Number(myData[ii].asignados)))
                                            {//si hay cupo lo hago
                                                
                                                cii=0;
                                            
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
                            {    
                                myData3aa.push({_id:myData[cii]._id,idedificio:myData[cii].idedificio,idsalon:myData[cii].idsalon
                                    ,idhorario:myData[cii].idhorario,idmateria:myData[cii].idmateria
                                    ,capacidad:myData[cii].capacidad,asignados:'0',fexamen:myData[cii].fexamen,codfac:myData[cii].codfac});

                            }


                        }


if(myData0a.length==0)
{   var matganada=''
    for(var iii = 0; iii < req.body.resultadopcb.length;iii++){
       matganada=  matganada + '-' +req.body.resultadopcb[iii].idmateria + ' ' 
    }
    res.status(404).send(' Ya cuenta con resultados satisfactorios de PCB para esta Unidad Académica , Materias ganadas: '+ matganada)    
    

}
else
{
  
    getNextSequenceValue(myData3,myData3aa,req,res,necesito);

}

                       


           
         });
        });

       
       
     });
 

    }
        
});

}

    

   






 
}

}



