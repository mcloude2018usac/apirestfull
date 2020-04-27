
//var Nuevosalon = require('../models/nuevosalon');

//var Facmat = require('../../models/facultadmateria');
var mailt = require('../../controllers/mail');
var Asignaest = require('../../models/calusac/asignaestudiantecalusac');
var Asignacalusac = require('../../models/calusac/asignacalusac');
var Bitacora = require('../../models/bitacora');
var Facplan3 = require('../../models/calusac/unidadplan3');
var User = require('../../models/user');
var Operadores = require('../../models/calusac/operadores');
var Asignaubicacion = require('../../models/calusac/asignaubicacion');
var request = require('request');
var xml2js = require ('xml2js'); 


var Calusaccarnet = require('../../models/calusac/calusaccarnets');


exports.getAsignacalusac = function(req, res, next){
    if(req.params.id3)
    { 
      
        switch(req.params.id3) {
            case 'asigna_profesor2':
                Asignaubicacion.aggregate(  [
                    { 
                        "$group" : {
                            "_id" : {
                                "idprofesor" : "$idprofesor"
                            }
                        }
                    }, 
                    { 
                        "$project" : {
                            "idprofesor" : "$_id.idprofesor", 
                            "_id" :0
                        }
                    }
                ]).exec(function(err, todos) {
        var cad=''
        var duplicates = [];
                    for(var i = 0; i < todos.length;i++){
                        duplicates.push(todos[i].idprofesor );
                
                    
                    }

                    User.find({ _id: {$in: duplicates}}).exec(function(err, todos10) {
                        if (err){ res.send(err); console.log(err) }
                              
                    res.json(todos10);   

                    });
                 




                });
break;

            case 'asigna_profesor':
                Asignacalusac.aggregate( [
                    { 
                        "$group" : {
                            "_id" : {
                                "profesor" : "$profesor"
                            }
                        }
                    }, 
                    { 
                        "$project" : {
                            "profesor" : "$_id.profesor", 
                            "_id" : 0
                        }
                    }
                ]).exec(function(err, todos) {
        var cad=''
        var duplicates = [];
                    for(var i = 0; i < todos.length;i++){
                        duplicates.push(todos[i].profesor );
                
                    
                    }

                    User.find({ _id: {$in: duplicates}}).exec(function(err, todos10) {
                        if (err){ res.send(err); console.log(err) }
                              
                    res.json(todos10);   

                    });
                 




                });
break;

            case 'rptasignacalusac1':

                Asignacalusac.find({ }).populate('tipopago').populate('jornada').populate('nivel').
                populate('horario').populate('dia').exec(function(err, todos) {
                    if (err){ res.send(err); console.log(err) }
                    var myData = [];
                    var cc=0;
                    for(var i = 0; i < todos.length;i++){
                    
                            var d =new Date( todos[i].fechanac).toISOString().substr(0,10);   
                            var n = d.split('-')   
                            var d2 =new Date( todos[i].createdAt).toISOString().substr(0,10);   
                            var n2 = d2.split('-')   
    
                            
                            var d =new Date( todos[i].fechanac).toISOString();   

                               
                            var n3 = d.split('T')
                            var n2a=(n3[1]).split(':')   
                       


                    myData.push({es_carnet:todos[i].carnecalusac,
                        es_cui:todos[i].cui,
                        es_pais_or:'',
                        es_pasapor:'',
                        es_corden:'',
                        es_cregis:'0',
                        es_libro:'0',
                        es_folio:'0',
                        es_partida:'0',
                        es_nombre:todos[i].nombre,
                        es_direc:todos[i].direccion,
                        es_nacimi:d,
                        es_e_civil:'',
                        es_catego:todos[i].tipoa,
                        es_sexo:todos[i].sexo,
                        es_f_ins:d2,
                        es_reg:todos[i].codpersonal,
                        es_u_car:todos[i].carneusac,
                        es_u_fac:'0',
                        es_tel:todos[i].telefono,
                        es_f_exa:'0',
                        es_uid:'',
                        es_ufecha:d2,
                        es_uhora:n2a[0] + ':' + n2a[1]
                    });
                
                    }
                    
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                    res.setHeader("Content-Disposition", 'attachment; filename='+'rpt_estudiante_calusac.csv');
                    res.csv(myData, true);
               
                    
                        
                });




                break;
                case 'rptasignacalusac1a':

                    Asignacalusac.find({ 'idtipounidad.id':req.params.id}).populate('tipopago').populate('jornada').populate('nivel').
                    populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); console.log(err) }
                        var myData = [];
                        var cc=0;
                        for(var i = 0; i < todos.length;i++){
                        
                                var d =new Date( todos[i].fechanac).toISOString().substr(0,10);   
                                var n = d.split('-')   
                                var d2 =new Date( todos[i].createdAt).toISOString().substr(0,10);   
                                var n2 = d2.split('-')   
        
                                
                                var d =new Date( todos[i].fechanac).toISOString();   
    
                                   
                                var n3 = d.split('T')
                                var n2a=(n3[1]).split(':')   
                           
    
    
                        myData.push({es_carnet:todos[i].carnecalusac,
                            es_cui:todos[i].cui,
                            es_pais_or:'',
                            es_pasapor:'',
                            es_corden:'',
                            es_cregis:'0',
                            es_libro:'0',
                            es_folio:'0',
                            es_partida:'0',
                            es_nombre:todos[i].nombre,
                            es_direc:todos[i].direccion,
                            es_nacimi:d,
                            es_e_civil:'',
                            es_catego:todos[i].tipoa,
                            es_sexo:todos[i].sexo,
                            es_f_ins:d2,
                            es_reg:todos[i].codpersonal,
                            es_u_car:todos[i].carneusac,
                            es_u_fac:'0',
                            es_tel:todos[i].telefono,
                            es_f_exa:'0',
                            es_uid:'',
                            es_ufecha:d2,
                            es_uhora:n2a[0] + ':' + n2a[1]
                        });
                    
                        }
                        
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+'rpt_estudiante_calusac.csv');
                        res.csv(myData, true);
                   
                        
                            
                    });
    
    
    
    
                    break;
                case 'rptasignacalusac2':

                    Asignacalusac.find({ }).populate('tipopago').populate('jornada').populate('nivel').
                    populate('horario').populate('dia').exec(function(err, todos) {
                        if (err){ res.send(err); console.log(err) }
                        var myData = [];
                        var cc=0;
                        for(var i = 0; i < todos.length;i++){
                        
                                var d =new Date( todos[i].fechanac).toISOString();   

                               
                                var n = d.split('T')
                                var n2a=(n[1]).split(':')   
                                var d2 =new Date( todos[i].createdAt).toISOString().substr(0,10);   
                                var n2 = d2.split('-')   
        
    
                        myData.push({es_carnet:todos[i].carnecalusac,
                            as_acta:'',
                            as_centro:'0',
                            as_idioma:'0',
                            as_curso:'',
                            as_gcrono:'0',
                            as_nivel:'0',
                            as_hora:'0',
                            as_dia:'0',

                            as_fase:todos[i].idperiodo.nombre,
                            as_ano:todos[i].ano,
                            as_salon:'',
                          
                            as_f_asig:d2,
                            as_prerre:'1',
                            as_tipoc:'',
                            as_uid:'',
                            as_ufecha:d2,
                            as_uhora:n2a[0] + ':' + n2a[1]
                            
                        });
                    
                        }
                        
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+'rpt_asigna_calusac.csv');
                        res.csv(myData, true);
                   
                        
                        
                    });
    
    
    
    
                    break;
                    case 'rptasignacalusac2a':

                        Asignacalusac.find({ 'idtipounidad.id':req.params.id}).populate('tipopago').populate('jornada').populate('nivel').
                        populate('horario').populate('dia').exec(function(err, todos) {
                            if (err){ res.send(err); console.log(err) }
                            var myData = [];
                            var cc=0;
                            for(var i = 0; i < todos.length;i++){
                            
                                    var d =new Date( todos[i].fechanac).toISOString();   
    
                                   
                                    var n = d.split('T')
                                    var n2a=(n[1]).split(':')   
                                    var d2 =new Date( todos[i].createdAt).toISOString().substr(0,10);   
                                    var n2 = d2.split('-')   
            
        
                            myData.push({es_carnet:todos[i].carnecalusac,
                                as_acta:'',
                                as_centro:'0',
                                as_idioma:'0',
                                as_curso:'',
                                as_gcrono:'0',
                                as_nivel:'0',
                                as_hora:'0',
                                as_dia:'0',
    
                                as_fase:todos[i].idperiodo.nombre,
                                as_ano:todos[i].ano,
                                as_salon:'',
                              
                                as_f_asig:d2,
                                as_prerre:'1',
                                as_tipoc:'',
                                as_uid:'',
                                as_ufecha:d2,
                                as_uhora:n2a[0] + ':' + n2a[1]
                                
                            });
                        
                            }
                            
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                            res.setHeader("Content-Disposition", 'attachment; filename='+'rpt_asigna_calusac.csv');
                            res.csv(myData, true);
                       
                            
                            
                        });
        
        
        
        
                        break;
              case 'todosasignacalusac':

         
                    Asignacalusac.find({$or : [
                        { $and : [ { cui : req.params.id2 }] },
                        { $and : [ { noboletapago : req.params.id2 }] },
                        { $and : [ { correo : req.params.id2 }] },
                        { $and : [ { telefono : req.params.id2 }] },
                        { $and : [ { identificador : req.params.id2 }] },
                        { $and : [ { carnecalusac : req.params.id2 }] },
                        { $and : [ {carneusac : req.params.id2 } ] }]
                    }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').populate('ididioma').populate('profesor').exec(function(err, todos) {
                        if (err){ res.send(err); console.log(err) }
                 
                    res.json(todos);   
                   
                        
                        
                    });
                    break;
            case 'todosautoriza':

                    if(req.params.id=='NUEVOS' || req.params.id=='EN PROCESO')
                    {
                        Asignacalusac.find({userasignadoemail:req.params.id2,estadooperador:req.params.id   }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                            if (err){ res.send(err); console.log(err) }
                   
                        res.json(todos);  
                         }); 

                    }
                    else
                    {
                        Asignacalusac.find({userasignadoemail:req.params.id2,estadooperador:req.params.id ,estadopago:{ $in: [ 'Pendiente de pago','Orden de pago actualizada exitosamente' ]}  }).populate('tipopago').populate('jornada').populate('nivel').populate('horario').populate('dia').exec(function(err, todos) {
                            if (err){ res.send(err); console.log(err) }
                     
                        res.json(todos);   
                          });

                    }

                 
                 
                        
                        
                  
                    break;
                    case 'todosautorizapago':
                        



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
    if( req.body.operacion=='actualizarinfor')
    {


        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.foto1        	=		req.body.foto1   	;
                todo100.foto2        	=		req.body.foto2   	;
                todo100.foto3        	=		req.body.foto3   	;
                todo100.foto4        	=		req.body.foto4   	;

                todo100.estadooperador='ACTUALIZADAS'
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
               
                    
                });
            }
        });


    }
    else
    {
    if( req.body.operacion=='mandacomentario')
    {


        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.ultrechazo        	=		req.body.estadopago   	;
                todo100.estadooperador='EN PROCESO'
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);
               
                    
                });
            }
        });


    }
    else
    {
  console.log(req.body)
    if( req.body.operacion=='asignaxxxx')
    {


         
    if( req.body.carnetcalusac=='')
    {
        var contadorcca=0
Calusaccarnet.findById({ _id: '5e9cd2bd1aee4463745bcfd6' }, function (err, todo100xx)  {
    if (err) {  res.send(err);  }

    contadorcca=todo100xx.contador+1
    todo100xx.contador	=	contadorcca;
    

    todo100xx.save(function (err, todo200cc){
        if (err)     {  console.log(err.message)   }
        console.log('genera carnet')
        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.horario        	=	req.body.horario	;
                todo100.profesor        	=req.body.profesor;
                todo100.carnecalusac = contadorcca;
                todo100.estadopago    ='Asignación exitosa';
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);

                    //mandar correo
               
                    
                });
            }
        });

    });
});
    }
    else{

console.log('entra aqui')
        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.horario        	=	req.body.horario	;
                todo100.profesor        	=req.body.profesor;
                todo100.estadopago    ='Asignación exitosa';
             
    
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            
                    res.json(todo200);

                    //mandar correo
               
                    
                });
            }
        });



    }

        

    }
    else
    {
    if( req.body.operacion=='asignaorden')
    {


        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.estadopago        	=		'Orden de pago actualizada exitosamente'   	;
                todo100.foto5        	=req.body.foto5;
                todo100.noorden        	=todo100.noboletapago;
                todo100.identificador=req.body.identificador;
                todo100.noboletapago=req.body.noorden;
                todo100.estadooperador='AUTORIZADO'
    
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
//decrementar 
console.log(req.body);


        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
            if (err) {  res.send(err);  }
            else
            { 
                todo100.estadopago        	=		req.body.estadopago   	;
                todo100.userejecutaemail=req.body.userejecutaemail
                todo100.estadooperador='AUTORIZADO'
                
                todo100.save(function (err, todo200){
                    if (err)     {  console.log(err.message)   }
            

                    Operadores.findById({ _id:req.body.userasignado}, function (err, todo1000)  {
                        if (err) {  res.send(err);  }
                        else
                        {
                        
                                todo1000.ejecutada      	=		todo1000.ejecutada+1    	;
                                todo1000.encola      	=		(todo1000.asignada) - (todo1000.ejecutada)  	;
                    
                                todo1000.save(function (err, todo200){
                                    if (err)     {  console.log(err.message)   }
                            
                                    res.json(todo200);
                            
                                    
                                });

                            
                        


                        }
                    });


                 
               
                    
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
    
    
                                                              
                                                                        if( req.body.carnetcalusac=='')
                                                                        {
                                                                            var contadorcca=0
                                                                        Calusaccarnet.findById({ _id: '5e9cd2bd1aee4463745bcfd6' }, function (err, todo100xxaa)  {
                                                                        if (err) {  res.send(err);  }

                                                                        contadorcca=todo100xxaa.contador+1
                                                                        todo100xxaa.contador	=	contadorcca;
                                                                        

                                                                        todo100xxaa.save(function (err, todo200cc){
                                                                            if (err)     {  console.log(err.message)   }

                                                                            Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                                                                if (err) {  res.send(err);  }
                                                                                else
                                                                                {
                                                                                    todo100.estadopago        	=		'Asignación exitosa'    	;
                                                                                    todo100.idedificio=myData[0].idedificio,
                                                                                    todo100.idsalon= myData[0].idsalon,
                                                                                
                                                                                todo100.carnecalusac= contadorcca,
                                                                                
                                                                                    todo100.horario=req.body.horario,
                                                                                
                                                                                    todo100.profesor=req.body.profesor,
                                                                                    todo100.idplanifica=myData[0]._id

                                                                                //   todo100.nivel=todo.nivel
                                                                                    
                                                                        
                                                                                    todo100.save(function (err, todo200){
                                                                                        if (err)     {  console.log(err.message)   }
                                                                                
                                                                                        res.json(todo200);
                                                                                
                                                                                        
                                                                                    });


                                                                                }
                                                                            });



                                                                        });
                                                                    });
                                                                    }
                                                                    else
                                                                    {

                                                                        Asignacalusac.findById({ _id: req.params.recordID }, function (err, todo100)  {
                                                                            if (err) {  res.send(err);  }
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
                                                                        });

                                                                    }


                                              
                                                        
                                                        
                                                    });
                                                }
                                            });
    
                          
                         
        
    
                        }
    
                    });
    
    
             
    
    
    
                   
                            
    
    
            }
        });

    }
    }}}
    }
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
                identificador      	: req.body.identificador    ,cui:'3333333'    	  }  ;

            }
            else
            {
            if( req.body.tipoa =='Extranjero' )
            {

                filtro= {'idtipounidad.id'        	: req.body.tipounidad.id        	,
                'idunidadacademica.id'        	: req.body.unidadacademica.id    ,
                identificador      	: req.body.identificador       ,cui:'3333333'     	  }  ;

            }
            else{

                filtro= {'idtipounidad.id'        	: req.body.tipounidad.id        	,
                'idunidadacademica.id'        	: req.body.unidadacademica.id    ,
                cui:req.body.cui ,identificador:'1233333' }  ;

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
            //hagarra un aperador

            if(req.body.estadopago=='Pendiente de pago')
            {  // pasa de largo esperando el pago
                                Asignacalusac.create({ idtipounidad        	: req.body.tipounidad        	,
                                    userasignado:'',
                                    userasignadoemail:'',
                                    ultrechazo:'',
                                    estadooperador:'NUEVOS',
                                    userejecutaemail:'',
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
                                    rubrot       	: req.body.rubrot        	,
                                    fechasiif       	: req.body.fechasiif        	,
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
                                    n1:0,
                                    n2:0,
                                    n3:0,
                                    n4:0,
                                    n5:0,
                                    estadoacta:'',
                                    tipoasignacion:req.body.tipoasignacion
                                }
                                    , function(err, todo) {
                                    if (err){ 
                                    
                                        res.status(404).send(err.message)  
                                    //  return;
                                    }
                                    res.json(todo);
                                            
                        
                                    });

                                }
            
            
            else{//queda con el operador
                                Operadores.find({}).sort([['encola', 1]]).exec(function(err, todosb) {

                                    
                                    if (err){  if(err) return next(err);// res.status(404).send(err); 
                                    return;}
                                 
                                
                                    if(todosb.length>0)   {  
                                        var opexx=todosb[0]._id
                                        var opexx2=todosb[0].email
                                     
                    
                                        Asignacalusac.create({ idtipounidad        	: req.body.tipounidad        	,
                                            userasignado:opexx,
                                            userasignadoemail:opexx2,
                                            userejecutaemail:'',
                                            ultrechazo:'',
                                            estadooperador:'NUEVOS',
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
                                            rubrot       	: req.body.rubrot        	,
                                            fechasiif       	: req.body.fechasiif        	,
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
                                            n1:0,
                                            n2:0,
                                            n3:0,
                                            n4:0,
                                            n5:0,
                                            estadoacta:'',                    
                                      
                                            tipoasignacion:req.body.tipoasignacion
                                        }
                                            , function(err, todo) {
                                            if (err){ 
                                            
                                                res.status(404).send(err.message)  
                                            //  return;
                                            }
                                                    
                                        Operadores.findById({ _id: opexx}, function (err, todo1000)  {
                                                if (err) {  res.send(err);  }
                                                else
                                                {
                                                
                                                        todo1000.asignada      	=		todo1000.asignada+1    	;
                                                        todo1000.encola      	=		(todo1000.asignada) - (todo1000.ejecutada)  	;
                                                        
                                            
                                                        todo1000.save(function (err, todo200){
                                                            if (err)     {  console.log(err.message)   }
                                                    
                                                            res.json(todo);
                                                    
                                                            
                                                        });
                    
                                                    
                                                
                    
                    
                                                }
                                            });
                    
                    
                                            
                                                
                    
                                    
                                    });
                                
                                    }
                                });

            }

         

                    

        }});



   






 
}

}



