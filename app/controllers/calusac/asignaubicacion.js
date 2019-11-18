
var mailt = require('../../controllers/mail');

var Asignaubicacion = require('../../models/calusac/asignaubicacion');
var Bitacora = require('../../models/bitacora');
var Facplan3 = require('../../models/calusac/unidadplan4');

var Operadores = require('../../models/calusac/operadores');

var request = require('request');
var xml2js = require ('xml2js'); 

exports.getAsignaubicacion = function(req, res, next){
    if(req.params.id3)
    { 
        console.log(req.params)
        switch(req.params.id3) {
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
                                                console.log(todo300)
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
                                    nombre 	: req.body.nombre, 	

                                    ididioma 	: req.body.ididioma, 
                                    idtipo 	: req.body.idtipo, 

                                    idestudiante 	: req.body.idestudiante, 	
                                    idinterno 	: req.body.idinterno,
                                    usuarionew:req.body.bitacora.email,
                                    
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
                                Operadores.find({}).sort([['encola', -1]]).exec(function(err, todosb) {
                                    if (err){  if(err) return next(err);// res.status(404).send(err); 
                                    return;}
                                 
                                
                                    if(todosb.length>0)   {  
                                        var opexx=todosb[0]._id
                                        var opexx2=todosb[0].email
                                     
                    
                                        Asignaubicacion.create({ idtipounidad        	: req.body.tipounidad        	,
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
                                            tipoa       	: req.body.tipoa        	,
                                            carneusac       	: req.body.carneusac        	,
                                            carneubicacion       	: req.body.carneubicacion        	,
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



