
var mailt = require('../../controllers/mail');

var Asignaubicacion = require('../../models/calusac/asignaubicacion');
var Bitacora = require('../../models/bitacora');
var Facplan3 = require('../../models/calusac/unidadplan3');
var unidadnivel3 = require('../../models/calusac/unidadnivel3');
var unidadidioma3 = require('../../models/calusac/unidadidioma3');
var Operadores = require('../../models/calusac/operadores');
var Asignacalusac = require('../../models/calusac/asignacalusac');
var Calusacnota = require('../../models/calusac/calusacnota');
var request = require('request');
var xml2js = require ('xml2js'); 

var Uniaca3 = require('../../models/calusac/unidadacademica3');
var Uidioma3 = require('../../models/calusac/unidadidioma3');
var Unidadtipogrupo3 = require('../../models/calusac/unidadtipogrupo3');
var Unidadidioma3 = require('../../models/calusac/unidadidioma3');


function getNextSequenceValue2(myData3cc,req,res,unixx,idixx){
  

   var testado='Perdida'
   if( myData3cc.n5>=70)
   {
       testado='Ganada'
   }
   var unitt='0'
   for(var i = 0; i < unixx.length;i++){
       if(unixx[i]._id==myData3cc.idunidadacademica.id)
       {
           unitt=unixx[i].codigo
           break;
       }
   }


   var iditt='0'
   for(var i = 0; i < idixx.length;i++){
       if(idixx[i]._id==myData3cc.ididioma.id)
       {
           iditt=idixx[i].codigo
           break;
       }
   }

   console.log({ 
    idasigna:myData3cc._id,
    cui:myData3cc.cui,
    identificador:myData3cc.identificador,
    carnecalusac:myData3cc.carnecalusac,
    nombre: myData3cc.nombre,
    ididioma:myData3cc.ididioma,
    
    tipopago: myData3cc.tipopago,
    n1	: myData3cc.n1,
    n2	: myData3cc.n2,
    n3	: myData3cc.n3,
    n4	: myData3cc.n4,
    n5	: myData3cc.n5,
    estado: testado,
    usuarionew	:myData3cc.usuarionew,
    codigocurso:unitt,
    codigoidioma:iditt

    
})

                    Calusacnota.create({ 
                            idasigna:myData3cc._id,
                            cui:myData3cc.cui,
                            identificador:myData3cc.identificador,
                            carnecalusac:myData3cc.carnecalusac,
                            nombre: myData3cc.nombre,
                            ididioma:myData3cc.ididioma,
                            
                            tipopago: myData3cc.tipopago,
                            n1	: myData3cc.n1,
                            n2	: myData3cc.n2,
                            n3	: myData3cc.n3,
                            n4	: myData3cc.n4,
                            n5	: myData3cc.n5,
                            estado: testado,
                            usuarionew	:myData3cc.usuarionew,
                            codigocurso:unitt,
                            codigoidioma:iditt
                      
                            
                        });
    

}



exports.getAsignaubicacion = function(req, res, next){
    if(req.params.id7)
    { 
        if(req.params.id=='todos100a')
        {
         
            //todos100a/5ecc254ebc3a1c001e9ed01d/personasprofe2/1/4/3/2°Final
            console.log({idplanifica:req.params.id2,estadoacta:{$in:['Preliminar','Grabación']}})
            Asignacalusac.find({idplanifica:req.params.id2,estadoacta:{$in:['Preliminar','Grabación']}}).exec( function (err, result10a) {
                if (err) {
                    console.error(err);
                }
console.log(result10a)
              if(result10a.length>0)
              {
            Uidioma3.find({ }).select({codigo:1,_id:1}).exec(function(err, todos100) {
                if (err){ res.send(err); }
    
                var allt2=[]
                allt2=todos100;

            Uniaca3.find({ }).select({codigo:1,_id:1}).exec(function(err, todos10) {
                    if (err){ res.send(err); }
        
                  var allt=[]
                  allt=todos10;
    
                var aa=(req.params.id7).split('°')
       
                var conditions = {idplanifica:req.params.id2
                    
                }
                , update = { estadoacta: aa[1] }
                , options = { multi: true };


                Asignacalusac.update(conditions, update, options, function (err, result) {
                    if (err) {
                        console.error(err);
                    }
                    if(aa[1]=='Final')
                    {
                       

                        Asignacalusac.find({idplanifica:req.params.id2}).populate('ididioma').exec( function (err, result10) {
                            if (err) {
                                console.error(err);
                            }

                            console.log(result10)
                            for(var i = 0; i < result10.length;i++){
                                var myData3cc=result10[i] 
                               
                               
                                getNextSequenceValue2(myData3cc,req,res,allt,allt2);
    
                             }

                             res.json(result);                              

                        });
                       
                        
                 
                    }
                    else
                    {
                        res.json(result);      

                    }
                 
                   
                });
            });
               

            });
        }
        else
        {

            res.json(result10a);      

        }
        });

        }
        else
        {
        if(req.params.id=='todos100')
        {
            Asignaubicacion.find({ididioma:req.params.id2
            ,'idedificio.id': req.params.id4,'idsalon.id':req.params.id5,iddia:req.params.id6,idhora:req.params.id7
        }).populate('ididioma').exec(function(err, todos10) {
                if (err){ res.send(err); }
    
              
                var duplicates ='';
                for(var i = 0; i < todos10.length;i++){
                    duplicates=todos10[i]._id;
                 
                
                }
                var aa=(req.params.id7).split('°')

                var conditions = {ididioma:req.params.id2
                    ,'idedificio.id': req.params.id4,'idsalon.id':req.params.id5,iddia:req.params.id6,idhora:aa[0]
                }
                , update = { estadoacta: aa[1] }
                , options = { multi: true };


                Asignaubicacion.update(conditions, update, options, function (err, result) {
                    if (err) {
                        console.error(err);
                    }
     
                    res.json(duplicates); 
                   
                });

               



            });

        }
        else
        {
            if(req.params.id=='todos1000excel')
            {
                var filename   = "registros.csv";
                console.log('entra aqui')
              
                Asignacalusac.find({idplanifica:req.params.id2
                
            }).populate('ididioma')  .select({carnecalusac:1, "correo":1,"telefono":1, "nombre":1,"cui": 1,"carnecalusac": 1,"n1": 1,"n2": 1,"n3": 1,
            "n4":1,"n5":1,  "profedor":"1",     "_id": 1}).sort({   "carnecalusac" :1    }).exec(function(err, todos10) {
                    if (err){ res.send(err); }
      
                    var result = [];
                    for (const item of todos10) {
                        var n1a='0';
                        var n2a='0';
                        var n3a='0';
                        var n4a='0';
                        var n5a='0';

                        if(item.n1){ if(item.n1!=null){  n1a=item.n1;}}
                        if(item.n2){ if(item.n2!=null){  n2a=item.n2;}}
                        if(item.n3){ if(item.n3!=null){  n3a=item.n3;}}
                        if(item.n4){ if(item.n4!=null){  n4a=item.n4;}}
                        if(item.n5){ if(item.n5!=null){  n5a=item.n5;}}

                           result.push({carnecalusac:item.carnecalusac,correo:item.correo,telefono:item.telefono,nombre:item.nombre,cui:item.cui,n1:n1a,n2:n2a,n3:n3a,n4:n4a,n5:n5a});
                       
                   }

                   res.statusCode = 200;
                   res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                   res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                   res.csv(result, true);
                  
                });
    
            }
            else
            {
            if(req.params.id=='todos1000')
            {
                console.log('entra aqui')
              
                Asignacalusac.find({idplanifica:req.params.id2
                
            }).populate('ididioma')  .select({carnecalusac:1, "correo":1,"telefono":1, "nombre":1,"cui": 1,"carnecalusac": 1,"n1": 1,"n2": 1,"n3": 1,
            "n4":1,"n5":1,  "profedor":"1",     "_id": 1}).sort({   "carnecalusac" :1    }).exec(function(err, todos10) {
                    if (err){ res.send(err); }
      
                    var result = [];
                    for (const item of todos10) {
                        var n1a='0';
                        var n2a='0';
                        var n3a='0';
                        var n4a='0';
                        var n5a='0';

                        if(item.n1){ if(item.n1!=null){  n1a=item.n1;}}
                        if(item.n2){ if(item.n2!=null){  n2a=item.n2;}}
                        if(item.n3){ if(item.n3!=null){  n3a=item.n3;}}
                        if(item.n4){ if(item.n4!=null){  n4a=item.n4;}}
                        if(item.n5){ if(item.n5!=null){  n5a=item.n5;}}

                           result.push({carnecalusac:item.carnecalusac,correo:item.correo,telefono:item.telefono,nombre:item.nombre,cui:item.cui,identificador:item.carnecalusac,n1:n1a,n2:n2a,n3:n3a,n4:n4a,n5:n5a,
                            profesor:item.profesor,_id:item._id});
                       
                   }

                    res.json(result);
                });
    
            }
            else
            {
        if(req.params.id=='todos')
        {
            Asignaubicacion.find({ididioma:req.params.id2
            ,'idedificio.id': req.params.id4,'idsalon.id':req.params.id5,iddia:req.params.id6
            ,idhora:req.params.id7
        }).populate('ididioma').exec(function(err, todos10) {
                if (err){ res.send(err); }
    
                res.json(todos10);
            });

        }
        else
        {
            Asignaubicacion.find({'idprofesor' :req.params.id,ididioma:req.params.id2
            ,'idedificio.id': req.params.id4,'idsalon.id':req.params.id5,iddia:req.params.id6,idhora:req.params.id7
        }).populate('ididioma').exec(function(err, todos10) {
                if (err){ res.send(err); }
    
                res.json(todos10);
            });

        }}}
    }}


    }
    else{
    if(req.params.id3)
    { 
        console.log(req.params)
        switch(req.params.id3) {
        
            case 'horarioprofe':
              
            var  aa=(req.params.id2).split('°')

            console.log(aa)
                Asignaubicacion.aggregate(   [
                    { 
                        "$match" : {
                            "idprofesor" : req.params.id, 
                            "ididioma" : aa[0],
                            "estadoacta":aa[1]
                        }
                    }, 
                    { 
                        "$group" : {
                            "_id" : {
                                "iddia" : "$iddia", 
                                "idhora" : "$idhora", 
                                "idedificio" : "$idedificio", 
                                "idsalon" : "$idsalon",
                                "estadoacta" : "$estadoacta"
                            }
                        }
                    }, 
                    { 
                        "$project" : {
                            "idedificio" : "$_id.idedificio", 
                            "idsalon" : "$_id.idsalon", 
                            "iddia" : "$_id.iddia", 
                            "idhora" : "$_id.idhora", 
                            "estadoacta":"$_id.estadoacta",
                            "_id" :0
                        }
                    }
                ]).exec(function(err, todos10) {
                    if (err){ res.send(err); }
              
                     var result = [];
                     for (const item of todos10) {
                      
                            result.push({idedificio:{id:item.idedificio.id,nombre:item.idedificio.nombre},
                                idsalon:{id:item.idsalon.id,nombre:item.idsalon.nombre},nombre:item.idsalon.nombre + ' ' + item.idedificio.nombre + ' ' + item.iddia + ' ' + item.iddia,
                                iddia:item.iddia,idhora:item.idhora,estadoacta:item.estadoacta});
                        
                    }


               
                     
                            res.json(result);

               
                     
                           
                        
                });
        break;
        case 'horarioprofe2a':
            
      

            Asignacalusac.aggregate(   [
                { 
                    "$match" : {
                     
                    
                        "estadoacta":req.params.id2
                      
                    }
                }, 
                { 
                    "$group" : {
                        "_id" : {
                            "idplanifica" : "$idplanifica",
                            "idtipounidad" : "$idtipounidad",
                            "estadoacta" : "$estadoacta"
                        }
                    }
                }, 
                { 
                    "$project" : {
                        "idplanifica" : "$_id.idplanifica", 
                        "estadoacta" : "$_id.estadoacta", 
                        "idtipounidad" : "$_id.idtipounidad",
                        "_id" :0
                    }
                }
            ]).exec(function(err, todos10a) {
                if (err){ res.send(err); }

                var duplicates = [];
                var duplicates2 = [];

                for(var i = 0; i < todos10a.length;i++){
                  
                    duplicates.push(todos10a[i].idplanifica);
                 
                
                }

                Facplan3.find({ _id:duplicates}).populate('idnivel').populate('idjornada').populate('idhorario').populate('ididioma').
                populate('idprofesor').exec(function(err, todos10) {
                       if (err){  res.send(err);  }

                    
                 var result = [];
                 for (const item of todos10) {
                  
                    var planx=''
                                for(var i = 0; i < todos10a.length;i++){
                                    if(todos10a[i].idplanifica==item._id)
                                    {
                                        planx=todos10a[i].estadoacta
                                        break;
                                    }
                                }
                        result.push({_id:item._id,idedificio:{id:item.idedificio.id,nombre:item.idedificio.nombre},
                            unidad:item.idtipounidad.nombre,horario:item.idhorario.nombre + '-' + item.idhorario.nombre2 + ' Dia: ' + item.idhorario.dia,
                            idsalon:{id:item.idsalon.id,nombre:item.idsalon.nombre}
                            ,nombre:'Nombre:'+item.idunidadacademica.nombre + ' Edificio:' + item.idedificio.nombre 
                            + ' Salon:' + item.idsalon.nombre + ' Periodo:' + item.idperiodo.nombre + '  Jornada:'+item.idjornada.nombre
                            + ' Nivel:'+item.idnivel.nombre + ' '+ item.idprofesor.nombre + ' '+ item.idunidadacademica.nombre + ' ' + item.idtipounidad.nombre,
                            edificio:item.idedificio.nombre ,
                            profesor:item.idprofesor.nombre,
                            idioma:item.idunidadacademica.nombre,
                            idiomacodigo:item.idunidadacademica.codigo,
                            salon:item.idsalon.nombre,
                            curso:item.idunidadacademica.nombre,
                            periodo:item.idperiodo.nombre,
                            jornada:item.idjornada.nombre,nivel:item.idnivel.nombre,

                            iddia:item.idnivel.nombre,idhora:item.idjornada.nombre,estadoacta:planx});


                    
                }


           

                        res.json(result);




                });


          
           
                 
                       
                    
            });
         

           
                 
         
    break;
      
    
    case 'tipoasignado':
            
      

        Facplan3.aggregate(   [
           
            { 
                "$group" : {
                    "_id" : {
                        "idtipo" : "$idtipo"
                      
                    }
                }
            }, 
            { 
                "$project" : {
                    "idtipo" : "$_id.idtipo", 
                
                    "_id" :0
                }
            }
        ]).exec(function(err, todos10a) {
            if (err){ res.send(err); }

            var duplicates = [];
            var duplicates2 = [];

            for(var i = 0; i < todos10a.length;i++){
              
                duplicates.push(todos10a[i].idtipo);
             
            
            }

            Unidadtipogrupo3.find({ _id:duplicates,idtipounidad :req.params.id,idunidadacademica:req.params.id2}).exec(function(err, todos) {
                   if (err){  res.send(err);  }

                   if(todos.length>0)   {    res.json(todos);   }
                   else
                   {  res.status(500).send('NO EXISTE REGISTRO');      }



            });


      
       
             
                   
                
        });
     

       
             
     
break;
  
case 'tipoidioma':
            
      

    Facplan3.aggregate(   [
       
        { 
            "$group" : {
                "_id" : {
                    "ididioma" : "$ididioma"
                  
                }
            }
        }, 
        { 
            "$project" : {
                "ididioma" : "$_id.ididioma", 
            
                "_id" :0
            }
        }
    ]).exec(function(err, todos10a) {
        if (err){ res.send(err); }

        var duplicates = [];
        var duplicates2 = [];

        for(var i = 0; i < todos10a.length;i++){
          
            duplicates.push(todos10a[i].ididioma);
         
        
        }
       
        Unidadidioma3.find({ _id:duplicates,idtipounidad :req.params.id,idunidadacademica:req.params.id2}).exec(function(err, todos) {
               if (err){  res.send(err);  }

               if(todos.length>0)   {    res.json(todos);   }
               else
               {  res.status(500).send('NO EXISTE REGISTRO');      }



        });


  
   
         
               
            
    });
 

   
         
 
break;


    case 'horarioprofe2':
            
            var  aa=(req.params.id2).split('°')

           

            Asignacalusac.aggregate(   [
                { 
                    "$match" : {
                        "profesor" : req.params.id, 
                        "ididioma" : aa[0],
                        "estadoacta":aa[1]
                      
                    }
                }, 
                { 
                    "$group" : {
                        "_id" : {
                            "idplanifica" : "$idplanifica",
                            "idtipounidad" : "$idtipounidad",
                            "estadoacta" : "$estadoacta"
                        }
                    }
                }, 
                { 
                    "$project" : {
                        "idplanifica" : "$_id.idplanifica", 
                        "estadoacta" : "$_id.estadoacta", 
                        "idtipounidad" : "$_id.idtipounidad",
                        "_id" :0
                    }
                }
            ]).exec(function(err, todos10a) {
                if (err){ res.send(err); }
                  
                var duplicates = [];
                var duplicates2 = [];

                for(var i = 0; i < todos10a.length;i++){
                  
                    duplicates.push(todos10a[i].idplanifica);
                 
                
                }
                console.log({ _id:duplicates})
                //cuidado si son examennes de ubicacion deberia de ser facplan4
                Facplan3.find({ _id:duplicates}).populate('idnivel').populate('idjornada').populate('idhorario').
                populate('idprofesor').exec(function(err, todos10) {
                       if (err){  res.send(err);  }

                    console.log(todos10)
                 var result = [];
                 for (const item of todos10) {
                  
                    var planx=''
                                for(var i = 0; i < todos10a.length;i++){
                                    if(todos10a[i].idplanifica==item._id)
                                    {
                                        planx=todos10a[i].estadoacta
                                        break;
                                    }
                                }
                        result.push({_id:item._id,idedificio:{id:item.idedificio.id,nombre:item.idedificio.nombre},
                            unidad:item.idtipounidad.nombre,horario:item.idhorario.nombre + '-' + item.idhorario.nombre2 + ' Dia: ' + item.idhorario.dia,
                            idsalon:{id:item.idsalon.id,nombre:item.idsalon.nombre}
                            ,nombre:'Nombre:'+item.idunidadacademica.nombre + ' Edificio:' + item.idedificio.nombre 
                            + ' Salon:' + item.idsalon.nombre + ' Periodo:' + item.idperiodo.nombre + '  Jornada:'+item.idjornada.nombre
                            + ' Nivel:'+item.idnivel.nombre,
                            edificio:item.idedificio.nombre ,
                            idioma:item.idunidadacademica.nombre,
                            profesor:item.idprofesor.nombre,
                            salon:item.idsalon.nombre,
                            curso:item.idunidadacademica.nombre,
                            periodo:item.idperiodo.nombre,
                            jornada:item.idjornada.nombre,nivel:item.idnivel.nombre,

                            iddia:item.idnivel.nombre,idhora:item.idjornada.nombre,estadoacta:planx});


                    
                }


           

                        res.json(result);




                });


          
           
                 
                       
                    
            });
         

           
                 
         
    break;
        case 'idiomasprofe2':

            Asignacalusac.aggregate( [
                { 
                    "$match" : { 
                        "profesor" : req.params.id
                    }
                }, 
                { 
                    "$group" : { 
                        "_id" : { 
                            "ididioma" : "$ididioma",
                        
                        }, 
                        "COUNT(*)" : { 
                            "$sum" : (1)
                        }
                    }
                }, 
                { 
                    "$project" : { 
                        "ididioma" : "$_id.ididioma", 
                     
                        "COUNT(*)" : "$COUNT(*)", 
                        "_id" : (0)
                    }
                }
            ]).exec(function(err, todos) {
                var duplicates = [];
              
                for(var i = 0; i < todos.length;i++){
                    duplicates.push(todos[i].ididioma);
            
                
                }

                unidadidioma3.find({ _id: {$in: duplicates}}).populate('idtipounidad').exec(function(err, todos10) {
                    if (err){ res.send(err); console.log(err) }
                    var result = [];
                    console.log(todos10)
                    for(var i = 0; i < todos10.length;i++){
                        result.push({codigo:todos10[i]._id,nombre:todos10[i].nombre,tipounidad:todos10[i].idtipounidad.nombre});
                    }
                res.json(result);   

                });

            });
                  
       /*     Asignacalusac.find({'profesor' :req.params.id}).populate('ididioma').exec(function(err, todos10) {
                if (err){ res.send(err); }
                console.log(todos10)
                var result = [];
                const map = new Map();
                for (const item of todos10) {
                    if(!map.has(item.ididioma.nombre)){
                        map.set(item.ididioma.nombre, true);    // set any value to Map
                        result.push({codigo:item.ididioma._id,nombre:item.ididioma.nombre});
                    }
                }


           console.log(result)
                 
                        res.json(result);
                    
            });*/
    break;
            case 'idiomasprofe':
                  console.log('entra ubicacion')
                  console.log({'idprofesor' :req.params.id})
                    Asignaubicacion.find({'idprofesor' :req.params.id}).populate('ididioma').exec(function(err, todos10) {
                        if (err){ res.send(err); }
                        var result = [];
                        const map = new Map();
                        for (const item of todos10) {
                            if(!map.has(item.ididioma.nombre)){
                                map.set(item.ididioma.nombre, true);    // set any value to Map
                                result.push({codigo:item.ididioma._id,nombre:item.ididioma.nombre,tipounidad:item.idtipounidad.nombre});
                            }
                        }

console.log(result)
                   
                         
                                res.json(result);
                            
                    });
            break;
              case 'todosasignaubicacion':

         
                    Asignaubicacion.find({$or : [
                        { $and : [ { cui : req.params.id2 }] },
                        { $and : [ { noboletapago : req.params.id2 }] },
                        { $and : [ { correo : req.params.id2 }] },
                        { $and : [ { telefono : req.params.id2 }] },
                        { $and : [ { identificador : req.params.id2 }] },
                        { $and : [ { carneubicacion : req.params.id2 }] },
                        { $and : [ {carneusac : req.params.id2 } ] }]
                    }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); console.log(err) }
                 
                    res.json(todos);   
                   
                        
                        
                    });
                    break;
            case 'todosautoriza':
console.log({userasignadoemail:req.params.id2   })
         
                    Asignaubicacion.find({userasignadoemail:req.params.id2,estadooperador:req.params.id ,estadopago:{ $nin: [ 'Pendiente de pago' ]}  }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); console.log(err) }
                 
                    res.json(todos);   
                 
                        
                        
                    });
                    break;
                    case 'todosautorizapago':
                        



                    Asignaubicacion.find({estadopago:{ $in: [ 'Pendiente de pago' ]},     $or : [
                        { $and : [ { cui : req.params.id2 }] },
                        { $and : [ { noboletapago : req.params.id2 }] },
                        { $and : [ { correo : req.params.id2 }] },
                        { $and : [ { telefono : req.params.id2 }] },
                        { $and : [ { identificador : req.params.id2 }] },
                        { $and : [ { carneubicacion : req.params.id2 }] },
                        { $and : [ {carneusac : req.params.id2 } ] }]
                    
                    }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); }
                 
                    res.json(todos);   
                        
                        
                    });
                break;
                      case 'todosautorizaestado':
                    Asignaubicacion.find({estadopago:req.params.id2}).populate('tipopago').exec(function(err, todos) {
                        if (err){ res.send(err); }
                 
                    res.json(todos);   
                        
                        
                    });
                break;
            case 'ordenpago':
            var op= req.params.id2.split(',')
          //    var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+op[0]+'</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>'+op[1]+'</nombre><monto>'+op[2]+'</monto><anio>'+op[3]+'</anio><rubro>'+op[4]+'</rubro><variante_rubro>1</variante_rubro><subtotal>'+op[2]+'</subtotal></getData></Body></Envelope>'
             var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+op[0]+'</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>' +op[1]+'</nombre><monto>'+op[2]+'</monto><anio>'+op[3]+'</anio><rubro>'+op[4]+'</rubro><variante_rubro>1</variante_rubro><subtotal>240</subtotal></getData></Body></Envelope>'


     

            request({
                url: "http://ubicacionvirtual.usac.edu.gt/app/api/order.php",
                method: "POST",
                gzip: true,
                headers: {
                    'Content-Type': 'text/xml;charset=UTF-8',
                    'User-Agent': 'PostmanRuntime/7.15.2',
                    'Accept': '*/*',
                    'Cache-Control': 'no-cache',
                    'Host': 'ubicacionvirtual.usac.edu.gt',
                    'Accept-Encoding': 'gzip, deflate',
                    'Content-Length': myXMLText.length,
                    'Connection': 'keep-alive',
                    'cache-control': 'no-cache',
    
    
                    
                },
                body: myXMLText
            }, function (error, response, body){
       
                if (error){   res.send(error);  }
               
            
                var xml2js = require('xml2js');
                var parser = new xml2js.Parser({explicitArray: true, trim: true});
                parser.parseString(body, (err, result) => {
            
                  res.json(JSON.stringify(result));
                });
    
    
    
            });


            break;
           
      
            default:

                                        if((req.params.id3).indexOf(',')>0)
                                        {
                                            res.status(404).send('NO EXISTE REGISTRO');    
                                        }
                                        else{
                                            
                                                Asignaubicacion.find({idestudiante:req.params.id3}).populate('idtipo').populate('ididioma').exec(function(err, todos) {
                                                    if (err){ res.send(err); }
                          
                                                res.json(todos);   
                                                    
                                                    
                                                });
                                            }
            

        }


     
}
    else
    {
    if(req.params.id)
    { 
        Asignaubicacion.find({tipo:req.params.id2},function(err, todos) {
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
           
                Asignaubicacion.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(404).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Asignaubicacion.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }}
}
}
exports.deleteAsignaubicacion = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Asignaubicacion '});
/*

    Asignaest.remove({idasigna: req.params.recordID  }, function(err, todo) {

        Asignaubicacion.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

            // Asignaest
     
     
             res.json(todo);
         });
    });

*/
  
}




exports.creaAsignaubicacion2s = function(req, res, next){
   
  //  res.status(404).send(' espere un momento ')    
   //  return;

  
console.log(req.params)
  
if(req.body.operacion=='ponenota2')
{ 
console.log({ _id: req.params.recordID })
    Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
        if (err) {  res.send(err);  }
        else
        {
           
             console.log(req.body);
                todo100.n1=req.body.n1,
                todo100.n2= req.body.n2,
                todo100.n3= req.body.n3,
                todo100.n4= req.body.n4,
                todo100.n5= req.body.n5,
               
     
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
               
                    
                });

          


        }
    });



}
else{
    
if(req.body.operacion=='ponenota')
{ 

    Asignaubicacion.findById({ _id: req.params.recordID }, function (err, todo100)  {
        if (err) {  res.send(err);  }
        else
        {
           
             
                todo100.n1=req.body.n1,
                todo100.n2= req.body.n2,
                todo100.n3= req.body.n3,
                
               
     
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
               
                    
                });

          


        }
    });



}
else{
  
if(req.params.recordID!=='crea')
{ 
  

    
  
        Bitacora.create(req.body.bitacora);
        Asignaubicacion.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            { 
    
                var projectDataForMatch = {
                    $project : {
                       _id:1,
                  idtipounidad:1,
                  idperiodo:1,
                  ididioma:1,
                  idedificio:1,
                  idsalon:1,
                  idtipo:1,
                  idprofesor:1,
                  iddia:1,
                  idhora:1,
                  asignados:1,
                   //list all fields needed here
                  
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
                        filterThisDoc : 1,
                        'idtipounidad.id' : todo.idtipounidad.id    ,'idperiodo.id':todo.idperiodo.id 
                        ,ididioma:todo.ididioma,
                            idtipo:todo.idtipo                  
                            ,iddia: {"$eq": new Date(req.body.iddia)},
                            idhora:req.body.idhora
                           
                    }
                }
    console.log({ 'idtipounidad.id' : todo.idtipounidad.id    ,'idperiodo.id':todo.idperiodo.id 
    ,ididioma:todo.ididioma,
        idtipo:todo.idtipo             
        ,iddia: {"$eq": new Date(req.body.iddia)},
        idhora:req.body.idhora})
         
                var duplicates = [];
                var asigno=0;
            
                    Facplan3.aggregate([ projectDataForMatch, match] ).exec( function(err,myData) {
                        if (err) res.send(err);
  console.log(myData)
                        if(myData.length==0)   {    res.status(404).send('Cupo lleno en salon / No existe definido en estructura '); }
                        else
                        {
                         
                            asigno=myData[0].asignados;
                          
                            asigno=asigno+1;
                           
                            
    
                                            Facplan3.findById({ _id:myData[0]._id }).populate('idprofesor').exec( function (err, todo300)  {
                                              
                                                if (err) {  res.send(err);  }
                                                else
                                                {
                                                    todo300.asignados        	=		asigno     	;
                                                  
                                                    todo300.save(function (err, todo400){
                                                        if (err)     {  console.log(err.message)   }
    
    
                                                        Asignaubicacion.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                                            if (err) {  res.send(err);  }
                                                            else
                                                            {
                                                               
                                                                    todo100.estadopago        	=		'Asignación exitosa'    	;
                                                                    todo100.idedificio=myData[0].idedificio,
                                                                    todo100.idsalon= myData[0].idsalon,
                                                                    todo100.iddia= myData[0].iddia,
                                                                    todo100.idhora= myData[0].idhora,
                                                                    todo100.estadoacta='Grabación',
                                                                   
                                                                 
                                                                 
                                                                   
                                                                   
                                                                    todo100.idprofesor=todo300.idprofesor._id,
                                                                    todo100.idprofesornombre=todo300.idprofesor.nombre,
                                                                    todo100.idplanifica=myData[0]._id
    
                                                                 //   todo100.nivel=todo.nivel
                                                                    
                                                        
                                                                    todo100.save(function (err, todo200){
                                                                        if (err)     {  console.log(err.message)   }
                                                                
                                                                        res.json(todo200);
                                                                   
                                                                        
                                                                    });

                                                              


                                                            }
                                                        });
                                                        
                                                        
                                                    });
                                                }
                                            });
    
                          
                         
        
    
                        }
    
                    });
    
    
             
    
    
    
                   
                            
    
    
            }
        });

    
    
    
}
else{
    console.log(req.body)
    Bitacora.create(req.body.bitacora);
        
            var filtro;

                
                filtro= {'idtipounidad.id'        	: req.body.tipounidad.id        	,
                
                identificador      	: req.body.identificador      	  }  ;

         
console.log(filtro)

    Asignaubicacion.find(filtro,function(err, todos) {
        if (err){  if(err) return next(err);// res.status(404).send(err); 
        return;}
      console.log(todos)
        if(todos.length>0)   {  
                            res.status(404).send('Ya existe una Asignación para esta unidad academica' );
         }
        else  
        { 
            //hagarra un aperador

            if(req.body.estadopago=='Pendiente de pago')
            {  // pasa de largo esperando el pago
                                Asignaubicacion.create({ idtipounidad        	: req.body.tipounidad        	,
                                    idperiodo        	: req.body.periodo        	,
                                    identificador      	: req.body.identificador      ,
                                    identificador2      	: req.body.identificador2      ,
                                    nombre 	: req.body.nombre, 	
                                    ididioma 	: req.body.ididioma, 
                                    idtipo 	: req.body.idtipo, 
                                    estadoacta:'Grabación',
                                    idestudiante 	: req.body.idestudiante, 	
                                    fechasiif	: req.body.fechasiif, 	
                                    idinterno 	: req.body.idinterno,
                                    usuarionew:req.body.bitacora.email,
                                    n1: {    id	: '',   nombre	: ''        },
                                    n2: {    id	: '',   nombre	: ''        },
                                    n3: {    id	: '',   nombre	: ''        },
                                    estadopago:req.body.estadopago,
                                    noorden:req.body.noorden,
                                    monto       	: req.body.monto        	,

                                rubro      	: req.body.rubro        	,
                                ano      	: req.body.ano        	,
                                tipoasignacion 	: req.body.tipoasignacion, 
                                llave      	: req.body.llave        	,
                                idprofesor: '',
                                idprofesornombre:'',
                                idedificio: {    id	: '',   nombre	: ''        },
                                idsalon: {    id	: '',   nombre	: ''       },
                                iddia:'',
                                idhora:''

                                     	
                                }
                                    , function(err, todo) {
                                    if (err){ 
                                    
                                        res.status(404).send(err.message)  
                                    //  return;
                                    }
                                    res.json(todo);
                                            
                        
                                    });

            }else{//queda con el operador

            }

         

                    

        }});



   






 
}}
}
}



