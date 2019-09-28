
//var Nuevosalon = require('../models/nuevosalon');

//var Facmat = require('../../models/facultadmateria');
var mailt = require('../../controllers/mail');
var Asignaest = require('../../models/calusac/asignaestudiantecalusac');
var Asignacalusac = require('../../models/calusac/asignacalusac');
var Bitacora = require('../../models/bitacora');
var Facplan3 = require('../../models/calusac/unidadplan3');


var request = require('request');
var xml2js = require ('xml2js'); 

exports.getAsignacalusac = function(req, res, next){
    if(req.params.id3)
    { 
        console.log(req.params)
        switch(req.params.id3) {
              case 'todosasignacalusac':

         
                    Asignacalusac.find({$or : [
                        { $and : [ { cui : req.params.id2 }] },
                        { $and : [ { noboletapago : req.params.id2 }] },
                        { $and : [ { correo : req.params.id2 }] },
                        { $and : [ { telefono : req.params.id2 }] },
                        { $and : [ { identificador : req.params.id2 }] },
                        { $and : [ { carnecalusac : req.params.id2 }] },
                        { $and : [ {carneusac : req.params.id2 } ] }]
                    }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); console.log(err) }
                 
                    res.json(todos);   
                   
                        
                        
                    });
                    break;
            case 'todosautoriza':

         
                    Asignacalusac.find({estadopago:{ $nin: [ 'Pendiente de pago' ]}
                    }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); console.log(err) }
                 
                    res.json(todos);   
                 
                        
                        
                    });
                    break;
                    case 'todosautorizapago':
                        console.log(req.params)



                    Asignacalusac.find({estadopago:{ $in: [ 'Pendiente de pago' ]},     $or : [
                        { $and : [ { cui : req.params.id2 }] },
                        { $and : [ { noboletapago : req.params.id2 }] },
                        { $and : [ { correo : req.params.id2 }] },
                        { $and : [ { telefono : req.params.id2 }] },
                        { $and : [ { identificador : req.params.id2 }] },
                        { $and : [ { carnecalusac : req.params.id2 }] },
                        { $and : [ {carneusac : req.params.id2 } ] }]
                    
                    }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); }
                 
                    res.json(todos);   
                        
                        
                    });
                break;
                      case 'todosautorizaestado':
                    Asignacalusac.find({estadopago:req.params.id2}).populate('tipopago').exec(function(err, todos) {
                        if (err){ res.send(err); }
                 
                    res.json(todos);   
                        
                        
                    });
                break;
            case 'ordenpago':
            var op= req.params.id2.split(',')
          //    var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+op[0]+'</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>'+op[1]+'</nombre><monto>'+op[2]+'</monto><anio>'+op[3]+'</anio><rubro>'+op[4]+'</rubro><variante_rubro>1</variante_rubro><subtotal>'+op[2]+'</subtotal></getData></Body></Envelope>'
             var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+op[0]+'</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>' +op[1]+'</nombre><monto>'+op[2]+'</monto><anio>'+op[3]+'</anio><rubro>'+op[4]+'</rubro><variante_rubro>1</variante_rubro><subtotal>240</subtotal></getData></Body></Envelope>'


     

            request({
                url: "http://calusacvirtual.usac.edu.gt/app/api/order.php",
                method: "POST",
                gzip: true,
                headers: {
                    'Content-Type': 'text/xml;charset=UTF-8',
                    'User-Agent': 'PostmanRuntime/7.15.2',
                    'Accept': '*/*',
                    'Cache-Control': 'no-cache',
                    'Host': 'calusacvirtual.usac.edu.gt',
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
            case 'rptsun3':
                                        Asignacalusac.aggregate( [
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
            break;
            case 'rptsun2':


            
                                        
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



            break;
            case 'rptsun' :

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
                            
                            
                                    Facplan3.aggregate([projectDataForMatch, match]  ).exec(function(err, todos) {
                                            if (err){ res.send(err); }
                                            var duplicates = [];
                                            todos.forEach(function (doc) {duplicates.push(doc._id);  });
                            
                                    //     res.json(duplicates);   
                                    
                            
                                            
                                            Facplan3.find({_id: {$in: duplicates},'idperiodo.nombre':'2019-01'}).sort({   "asignados" : -1    }).select({ "idtipounidad.nombre":1,"idunidadacademica.nombre":1,"idedificio.nombre":1,"idsalon.nombre":1,"capacidad":1,"asignados":1}).exec(function(err, todos) {
                                                if (err){ res.send(err); }
                                                var cad='';
                                                for(var i = 0; i < todos.length;i++){
                                                    cad=cad +'<p>'  + todos[i].idtipounidad.nombre  + '  '  + todos[i].idunidadacademica.nombre + '  '  + todos[i].idedificio.nombre  + '  '  + todos[i].idsalon.nombre  + ' --> '  + todos[i].capacidad + '  '  + todos[i].asignados  + '  '    +'</p>'
                                                }
                            
                                                res.send(cad)
                                                
                                            });
                            
                            
                                        });


            break;
            default:

                                        if((req.params.id3).indexOf(',')>0)
                                        {
                                            res.status(404).send('NO EXISTE REGISTRO');    
                                        }
                                        else{
                                            
                                                Asignacalusac.find({idestudiante:req.params.id3}).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').populate('profesor').populate('ididioma').exec(function(err, todos) {
                                                    if (err){ res.send(err); }
                                  //          console.log(todos)
                                                res.json(todos);   
                                                    
                                                    
                                                });
                                            }
            

        }


     
}
    else
    {
    if(req.params.id)
    { 
        Asignacalusac.find({tipo:req.params.id2},function(err, todos) {
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
           
                Asignacalusac.find({_id:req.params.id},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(404).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Asignacalusac.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }}
 
}
exports.deleteAsignacalusac = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Asignacalusac '});


    Asignaest.remove({idasigna: req.params.recordID  }, function(err, todo) {

        Asignacalusac.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

            // Asignaest
     
     
             res.json(todo);
         });
    });


  
}




exports.creaAsignacalusac2s = function(req, res, next){
   
  //  res.status(404).send(' espere un momento ')    
   //  return;

  

  
if(req.params.recordID!=='crea')
{ 
    if( req.body.operacion=='asigna2222')
    {


        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.horario        	=		'Orden de pago cobrada exitosamente'   	;
                todo100.profesor        	=req.body.foto5;
              
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
               
                    
                });
            }
        });


    }
    else
    {
    if( req.body.operacion=='asignaorden')
    {


        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.estadopago        	=		'Orden de pago cobrada exitosamente'   	;
                todo100.foto5        	=req.body.foto5;
                todo100.noorden        	=req.body.noorden;
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
               
                    
                });
            }
        });


    }
    else
    {
    
    if( req.body.operacion=='cambiaestado')
    {


        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.estadopago        	=		req.body.estadopago   	;
               
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
               
                    
                });
            }
        });


    }
    else
    {
        Bitacora.create(req.body.bitacora);
        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            { 
    
                var projectDataForMatch = {
                    $project : {
                       _id:1,
                  idtipounidad:1,
                  idunidadacademica:1,
                  idnivel:1,
                  idperiodo:1,
                  idedificio:1,
                  idsalon:1,
                  idjornada:1,
                  asignados:1,
                  idhorario : 1, //list all fields needed here
                  idprofesor:1,
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
                        'idtipounidad.id' : todo.idtipounidad.id   ,'idunidadacademica.id':todo.idunidadacademica.id ,'idperiodo.id':todo.idperiodo.id 
                        ,idnivel:todo.nivel,
                            idjornada:todo.jornada,
                            idhorario:req.body.horario,
                            idprofesor:req.body.profesor
                    }
                }
    
                console.log({ 'idtipounidad.id' : todo.idtipounidad.id   ,'idunidadacademica.id':todo.idunidadacademica.id ,'idperiodo.id':todo.idperiodo.id 
                ,idnivel:todo.nivel,
                    idjornada:todo.jornada,
                    idhorario:req.body.horario,
                    idprofesor:req.body.profesor})
        
          
                var duplicates = [];
                var asigno=0;
            
                    Facplan3.aggregate([ projectDataForMatch, match] ).exec( function(err,myData) {
                        if (err) res.send(err);
  
                        if(myData.length==0)   {    res.status(404).send('Cupo lleno en salon / No existe definido en estructura '); }
                        else
                        {
                         
                            asigno=myData[0].asignados;
                          
                            asigno=asigno+1;
                           
                            
    
                                            Facplan3.findById({ _id:myData[0]._id }, function (err, todo300)  {
                                                if (err) {  res.send(err);  }
                                                else
                                                {
                                                    todo300.asignados        	=		asigno     	;
                                                  
                                                    todo300.save(function (err, todo400){
                                                        if (err)     {  console.log(err.message)   }
    
    
                                                        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                                            if (err) {  res.send(err);  }
                                                            else
                                                            {
                                                                if (todo100.carnecalusac=='')
                                                                {
                                                                    todo100.estadopago        	=		'Asignación exitosa'    	;
                                                                    todo100.idedificio=myData[0].idedificio,
                                                                    todo100.idsalon= myData[0].idsalon,
                                                                   
                                                                   todo100.carnecalusac= '3915474',
                                                                 
                                                                    todo100.horario=req.body.horario,
                                                                   
                                                                    todo100.profesor=req.body.profesor,
                                                                    todo100.idplanifica=myData[0]._id
    
                                                                 //   todo100.nivel=todo.nivel
                                                                    
                                                        
                                                                    todo100.save(function (err, todo200){
                                                                        if (err)     {  console.log(err.message)   }
                                                                
                                                                        res.json(todo200);
                                                                   
                                                                        
                                                                    });

                                                                }
                                                                else
                                                                {

                                                                    todo100.estadopago        	=		'Asignación exitosa'    	;
                                                                    todo100.idedificio=myData[0].idedificio,
                                                                    todo100.idsalon= myData[0].idsalon,
                                                                 
                                                                 //   todo100.jornada=req.body.jornada,
                                                                    todo100.horario=req.body.horario,
                                                                   
                                                                    todo100.profesor=req.body.profesor,
                                                                    todo100.idplanifica=myData[0]._id
    
                                                                 //   todo100.nivel=todo.nivel
                                                                    
                                                        
                                                                    todo100.save(function (err, todo200){
                                                                        if (err)     {  console.log(err.message)   }
                                                                
                                                                        res.json(todo200);
                                                                   
                                                                        
                                                                    });


                                                                }


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
    }}

}
else{
    Bitacora.create(req.body.bitacora);
// no puede asignarse el mismo curso 2 veces
var filtro;

//Hijo Trabajador Adolescente
if( req.body.tipoa =='Hijo Trabajador Adolescente' || req.body.tipoa =='Adolescente'  )
{
    
    filtro= {'idtipounidad.id'        	: req.body.tipounidad.id        	,
    'idunidadacademica.id'        	: req.body.unidadacademica.id    ,
    identificador      	: req.body.identificador        	  }  ;

}
else
{
if( req.body.tipoa =='Extranjero' )
{

    filtro= {'idtipounidad.id'        	: req.body.tipounidad.id        	,
    'idunidadacademica.id'        	: req.body.unidadacademica.id    ,
    identificador      	: req.body.identificador        	  }  ;

}
else{

    filtro= {'idtipounidad.id'        	: req.body.tipounidad.id        	,
    'idunidadacademica.id'        	: req.body.unidadacademica.id    ,
     cui:req.body.cui  }  ;

}}


    Asignacalusac.find(filtro,function(err, todos) {
        if (err){  if(err) return next(err);// res.status(404).send(err); 
        return;}
      
        if(todos.length>0)   {  
            
       
            //Hijo Trabajador Adolescente
if( req.body.tipoa =='Hijo Trabajador Adolescente' || req.body.tipoa =='Adolescente'  )
{
    res.status(404).send('Ya existe una Asignación para esta unidad academica, curso y nivel , en el cual se asigno el identificador : '  +req.body.identificador  + ' para el curso ' + req.body.unidadacademica.nombre );
  

}
else
{
if( req.body.tipoa =='Extranjero' )
{
    res.status(404).send('Ya existe una Asignación para esta unidad academica, curso y nivel , en el cual se asigno el identificador : '  +req.body.identificador  + ' para el curso ' + req.body.unidadacademica.nombre );
  

}
else{
    res.status(404).send('Ya existe una Asignación para esta unidad academica, curso y nivel , en el cual se asigno el cui : '  +req.body.cui  + ' para el curso ' + req.body.unidadacademica.nombre );
  

}}


        
        
        }
        else  
        { 

                        Asignacalusac.create({ idtipounidad        	: req.body.tipounidad        	,
                            idunidadacademica        	: req.body.unidadacademica        	,
                            no_orientacion        	: req.body.no_orientacion        	,
                            idperiodo        	: req.body.periodo        	,
                            nombre 	: req.body.nombre, 	
                            idestudiante 	: req.body.idestudiante, 	
                            idinterno 	: req.body.idinterno,
                            usuarionew:req.body.bitacora.email,
                            tipopago:req.body.tipopago,
                            estadopago:req.body.estadopago,
                            noboletapago:req.body.noboletapago,
                            tipoa       	: req.body.tipoa        	,
                            carneusac       	: req.body.carneusac        	,
                            carnecalusac       	: req.body.carnecalusac        	,
                            cml       	: req.body.cml        	,
                            monto       	: req.body.monto        	,
                           rubro      	: req.body.rubro        	,
                           nivel      	: req.body.nivel        	,
                           ano      	: req.body.ano        	,
                           llave      	: req.body.llave        	,
                           
                           ididioma      	: req.body.ididioma        	,
                           idtipocurso      	: req.body.idtipocurso        	,
                           idtipogrupo      	: req.body.idtipogrupo        	,
                            jornada: req.body.jornada,        	
                           nidentificador:req.body.nidentificador       	,
                           foto1      	: req.body.foto1        	,
                           foto2      	: req.body.foto2        	,
                           foto3      	: req.body.foto3        	,
                           foto4      	: req.body.foto4        	,
                           idedificio: {    id	: '',   nombre	: ''        },
                           idsalon: {    id	: '',   nombre	: ''       },

                            identificador      	: req.body.identificador        	,
                            fechanac:req.body.fechanac,
                            cui:req.body.cui,
                            nopasaporte:req.body.nopasaporte,
                            direccion:req.body.direccion,
                            telefono:req.body.telefono,
                            correo:req.body.correo,
                            sexo:req.body.sexo,
                            nivelacademico:req.body.nivelacademico,
                            codpersonal:req.body.codpersonal,
                            dependencia:req.body.dependencia,

                          
                            tipoasignacion:req.body.tipoasignacion
                        }
                            , function(err, todo) {
                            if (err){ 
                            
                                res.status(404).send(err.message)  
                                return;
                            }
                                        //crea todas las asignaciones nuevas que tiene que sacar
                                    
                                    /*
                                    for(var i = 0; i < myData3.length;i++){
                                    var myData3cc=myData3[i] 
                                
                                    getNextSequenceValue2(myData3,myData3cc,req,res,i,todo);

                                    }
                                    */
                            
                                    res.json(todo);

                    
                    });

        }});



   






 
}

}



