
var Perfil = require('../models/perfil');
var Moduloxx = require('../models/moduloxx');
var Dcatalogo = require('../models/dcatalogo');
var Dtarifa = require('../models/dtarifa');
var Permiso = require('../models/permiso');
var Permiso2 = require('../models/permison2');
var Asignaest = require('../models/asignaestudiante');
var User = require('../models/user');
var Bus = require('../models/bus');

var cleanName = function(str) {
        if (str == '') return str; // jQuery
      
        var special = ['&', 'O', 'Z', '-', 'o', 'z', 'Y', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ', '.', ' ', '+'],
            normal = ['et', 'o', 'z', '-', 'o', 'z', 'y', 'a', 'a', 'a', 'a', 'a', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'd', 'n', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'a', 'a', 'a', 'a', 'a', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'n', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y', '.', ' ', '+'];
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < special.length; j++) {
                if (str[i] == special[j]) {
                    str = str.replace(new RegExp(str[i], 'gi'), normal[j]);
                }
            }
        }

        return str.toUpperCase();
    };

    function getNextSequenceValue2(myData){
        //  console.log('asignado antes:')
         // console.log(myData3cc);
           Asignaest.find({idtipounidad        	: myData.idtipounidad        	,
               idunidadacademica        	: myData.idunidadacademica  , 
               idperiodo        	: myData.idperiodo      	,
               idedificio:myData.idedificio,
               idsalon:myData.idsalon,
               idhorario:myData.idhorario,
               idmateria:myData.idmateria
                     }).lean().exec({}, function(err,myasigcupo) {
               if (err) res.send(err);
                     var asigno=0
                     asigno=myasigcupo.length;
      
                    // console.log('asigno')
                     //console.log(myasigcupo)
                      if(asigno!=myData.asignados)
                     {
                             
                      //  console.log( myData)
                        console.log(asigno + '(estuiantes) = ' + myData.asignados + 'planificacion')
                   
                       
                     }
                   
                     
  /*
         
                               Facplan.findById({ _id:myData._id }, function (err, todo)  {
                                   if (err) {  res.send(err);  }
                                   else
                                   { 
                                           
                                        console.log('asigno')
                                        console.log(asigno)
                     
                                        // console.log('asignados')
                                   //console.log(Number(todo.asignados))
                                        todo.asignados        	=		asigno     	;
                                       
                                       todo.save(function (err, todo){
                                           if (err)     {  console.log(err.message)   }
                                           //console.log(todo);
                                       });


                                   }
                               });
                               */
                              
           });
      }

      function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
      }



exports.getCombofijo = function(req, res, next){
       var sql='';
if(req.params.id3)
{
        switch(req.params.id3) {
    
                case 'rolusuario':
console.log({nombre:req.params.id,idempresa:req.params.id2})
                Perfil.find({nombre:req.params.id,idempresa:req.params.id2},function(err, todos) {
                        if (err){ res.send(err); }
                        
                        if(todos.length>0)   {  
                        
                                Permiso.find({idrol:todos[0]._id}).sort([['orden', 1]]).exec(function(err, todos) {
                                        if (err){ res.send(err); }
                                        
                                        Permiso2.find({idrol:todos[0].idrol}).sort([['orden', 1]]).exec(function(err, todos4) {
                                        if (err){ res.send(err); }
                                                
                                                if(todos.length>0)   {  
                                                        
                                                        Moduloxx.find({idempresa:req.params.id2},function(err, todos2) {
                                                                if (err){ res.send(err); }
        
                                                                var myData = [];
                                                                for(var i = 0; i < todos.length;i++){
                                                                        for(var j = 0; j < todos2.length;j++){
                                                                                if(todos[i].nombre==todos2[j]._id)
                                                                                {       var childrem=[]
                                                                                        for(var k = 0; k < todos4.length;k++){
                                                                                                if(todos4[k].idpermiso==todos[i]._id)
                                                                                                {
                                                                                                        for(var j5 = 0; j5 < todos2.length;j5++){
                                                                                                                if(todos4[k].nombre==todos2[j5]._id)
                                                                                                                {   
                                                                                                                        childrem.push({nivel:todos2[j5].nivel,idrol:todos4[k].idrol,title:todos2[j5].nombre,component: todos2[j5].componente, tabComponent:todos2[j5].tabcomponente,name:todos2[j5].componente,index:todos2[j5].index,icon:todos2[j5].icono,estado:todos2[j5].estado,
                                                                                                                                permiso:todos4[k].ingreso+','+todos4[k].consulta+','+todos4[k].eliminacion+','+todos4[k].creacion+','+todos4[k].actualizacion})
                                                                                                                }
                                                                                                        }
                                                                                                }                                                 
        
                                                                                        }   
                                                                                //    console.log(todos[i].nombre);
                                                                                        if(childrem.length>0)
                                                                                        {
                                                                                        myData.push({nivel:todos2[j].nivel, idrol:todos[i].idrol,title:todos2[j].nombre,component: todos2[j].componente, tabComponent:todos2[j].tabcomponente,name:todos2[j].componente,index:todos2[j].index,icon:todos2[j].icono,estado:todos2[j].estado,
                                                                                                permiso:todos[i].ingreso+','+todos[i].consulta+','+todos[i].eliminacion+','+todos[i].creacion+','+todos[i].actualizacion,children:childrem});
                                                        
        
                                                                                        }
                                                                                        else
                                                                                        {
                                                                                        myData.push({nivel:todos2[j].nivel,idrol:todos[i].idrol,title:todos2[j].nombre,component: todos2[j].componente, tabComponent:todos2[j].tabcomponente,name:todos2[j].componente,index:todos2[j].index,icon:todos2[j].icono,estado:todos2[j].estado,
                                                                                                permiso:todos[i].ingreso+','+todos[i].consulta+','+todos[i].eliminacion+','+todos[i].creacion+','+todos[i].actualizacion});
                                                        
                                                                                        }
                                                                                        
                                                                                        break;                
                                                                                }
        
        
                                                                        }          
                                                                
                                                                
                                
                                                                }
                            
                                                                res.json(myData);
                                                        
        
        
                                                        
                                                });       
        
                                                
                                                
                                                }
                                                else
                                                {  res.status(500).send('NO EXISTE ROL ASIGNADO');      }
        
        
        
        
                                        });         
                                    });
        
                              
                        
                        
                        }
                        else
                        {  res.status(500).send('NO EXISTE ROL ASIGNADO');      }
                        
                    });
                    break;
        }


}
else{
       switch(req.params.id) {
    
      
        case 'catalogo-tipo':
                        res.json([{id:'CATEGORIA DISEÑO PLANTILAS',nombre:'CATEGORIA DISEÑO PLANTILAS'},{id:'DIAS FESTIVOS',nombre:'DIAS FESTIVOS'},{id:'RUTAS',nombre:'RUTAS'},{id:'MATERIAS',nombre:'MATERIAS'},{id:'PERIODOSSUM',nombre:'PERIODOSSUM'},{id:'UNIDADES',nombre:'UNIDADES'} ,{id:'TARIFA COMPRA SALDO',nombre:'TARIFA COMPRA SALDO'} 
                        ,{id:'TIPO UNIDADES',nombre:'TIPO UNIDADES'} ,{id:'TIPO DENUNCIAS',nombre:'TIPO DENUNCIAS'}]);
            break;

            case 'dtarifa':
            //busca el disppsitivo y se encuentra la tarifa
            console.log(req.params)

           
                Dtarifa.find({idtarifa:req.params.id2},function(err, todos) {
                        if (err){  res.send(err);  }
        
                        var myData = [];
                        for(var i = 0; i < todos.length;i++){
                                myData.push({nombre:todos[i].nombre + ',' + todos[i].horaini+ ',' + todos[i].horafin + ',' + todos[i].monto});
                        }

                        res.json(myData);
                                     

            });
                                    
                



            break;
            case 'dtarifa2':
            //busca el disppsitivo y se encuentra la tarifa
            console.log(req.params)
            Bus.findById({_id:req.params.id2},function(err, todos2) {
                if (err){  res.send(err);  }
                console.log(todos2)
                Dtarifa.find({idtarifa:todos2.idtarifa.id},function(err, todos) {
                        if (err){  res.send(err);  }
        
                        var myData = [];
                        for(var i = 0; i < todos.length;i++){
                                myData.push({nombre:todos[i].nombre + ',' + todos[i].horaini+ ',' + todos[i].horafin + ',' + todos[i].monto});
                        }

                        res.json(myData);
                                     

            });
                                    
                



               
             });

            break;
            case 'dcatalogo':
            Dcatalogo.find({idcatalogo:req.params.id2},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });

            break;
         
            case 'dinactivos':
            User.find({estado:'Inactivo'},function(err, todos) {
                if (err){  res.send(err);  }

                var myData = [];
                for(var i = 0; i < todos.length;i++){
                        myData.push({id:todos[i]._id});

                }

                 res.json(myData);
             });

            break;
         
            case 'dispositivo-tipo':
            res.json([{id:'BUS',nombre:'BUS'},{id:'TALANQUERA',nombre:'TALANQUERA'},{id:'MOLINETE',nombre:'MOLINETE'},{id:'ACCESO DIGITAL',nombre:'ACCESO DIGITAL'}]);
        break;
        case 'suscriptor-disp':
                  res.json([{id:'RFID Tarjeta',nombre:'RFID Tarjeta'} ,{id:'RFID movil',nombre:'RFID movil'},{id:'RFID pulsera',nombre:'RFID pulsera'},{id:'OTRO dispositivo',nombre:'OTRO dispositivo'},{id:'Ninguno',nombre:'Ninguno'}]);
         
        break;
     
        case 'user-rol':
        
        
                        Perfil.find({'unidad.id':req.params.id2}).populate('unidad.id')
                        .exec(function(err, todos) {
                                if (err){  res.send(err);  }
                                res.json(todos);
                        });
        break;
  
  
        default:
             console.log(req.params.id)

             res.status(500).send('Resultado no encontrado'); 
             break;


    }
}



    
}