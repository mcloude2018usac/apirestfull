
var Perfil = require('../models/perfil');
var Moduloxx = require('../models/moduloxx');
var Dcatalogo = require('../models/dcatalogo');
var Dtarifa = require('../models/dtarifa');
var Permiso = require('../models/permiso');
var Permiso2 = require('../models/permison2');
var Permiso3 = require('../models/permiso3');
var Asignaest = require('../models/asignaestudiante');
var User = require('../models/user');
var Bus = require('../models/bus');
var tarifa = require('../models/tarifa');

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
      
                   
                      if(asigno!=myData.asignados)
                     {
                             
                 
                        console.log(asigno + '(estuiantes) = ' + myData.asignados + 'planificacion')
                   
                       
                     }
                   
 
                              
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
                case 'user-rol':
        
        
                                Perfil.find({'unidad.id':req.params.id,'idempresa':req.params.id2}).populate('unidad.id')
                                .exec(function(err, todos) {
                                        if (err){  res.send(err);  }
                                        res.json(todos);
                                });
                break;
    
                case 'rolusuario':

                Perfil.find({nombre:req.params.id,idempresa:req.params.id2},function(err, todos) {
                        if (err){ res.send(err); }

                   

if(todos.length>0)   {  

        Permiso.find({idrol:todos[0]._id}).sort([['orden', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }

                
                        
                Permiso3.find({idrol:todos[0].idrol}).sort([['orden', 1]]).exec(function(err, todos40) {
                        if (err){ res.send(err); }


                Permiso2.find({idrol:todos[0].idrol}).sort([['orden', 1]]).exec(function(err, todos4) {
                if (err){ res.send(err); }
                        
                        if(todos.length>0)   {  
                                
                                Moduloxx.find({idempresa:req.params.id2},function(err, todos2) {
                                        if (err){ res.send(err); }

                                        var myData = [];
                                        for(var i = 0; i < todos.length;i++){//todos los permisos
                                                for(var j = 0; j < todos2.length;j++){//todos los modulos
                                                        if(todos[i].nombre==todos2[j]._id)
                                                        {   

                                                                

                                                                
                                                                var childrem=[]
                                                                for(var k = 0; k < todos4.length;k++){//todos los permisos2
                                                                        if(todos4[k].idpermiso==todos[i]._id )
                                                                        {

                                                                                var childrem2=[]
                                                                                var aa=0;
                                                                                for(var i10 = 0; i10 < todos40.length;i10++){
                                                                                        if(todos40[i10].idpermiso==todos4[k]._id )
                                                                                        {

                                                                                                        
                                                                                                        for(var j5a = 0; j5a < todos2.length;j5a++){
                                                                                                                if(todos40[i10].nombre==todos2[j5a]._id)
                                                                                                                {   aa=1;
                                                                                                                        childrem2.push({nivel:todos2[j5a].nivel,idrol:todos4[k].idrol,title:todos2[j5a].nombre,component: todos2[j5a].componente,
                                                                                                                                        tabComponent:todos2[j5a].tabcomponente,
                                                                                                                                name:todos2[j5a].componente,index:todos2[j5a].index,icon:todos2[j5a].icono,estado:todos2[j5a].estado,
                                                                                                                                ingreso:todos40[k].ingreso,permiso:todos40[k].ingreso+','+todos40[k].consulta+','+todos40[k].eliminacion+','+todos40[k].creacion+','+todos40[k].actualizacion+','+todos40[k].filtro+','+todos40[k].reporte
                                                                                                                                ,potros1:todos40[k].potros1,
                                                                                                                                pingreso:todos40[k].ingreso ,pconsulta: todos40[k].consulta,peliminacion : todos40[k].eliminacion
                                                                                                                                ,pcreacion: todos40[k].creacion, pactualizacion: todos40[k].actualizacion, pfiltro: todos40[k].filtro
                                                                                                                                ,preporte: todos40[k].reporte
                                                                                                                       })
                                                                                                                }
                                                                                                        }


                                                                                        }

                                                                                }


                                                                                //ir armando tambien los childred de cada permiso2
                                                                                
                                                                                for(var j5 = 0; j5 < todos2.length;j5++){
                                                                                        if(todos4[k].nombre==todos2[j5]._id)
                                                                                        {   console.log(aa)
                                                                                                if(aa==1)
                                                                                                {
                                                                                                        childrem.push({nivel:todos2[j5].nivel,idrol:todos4[k].idrol,title:todos2[j5].nombre,component: todos2[j5].componente, tabComponent:todos2[j5].tabcomponente,name:todos2[j5].componente,index:todos2[j5].index,icon:todos2[j5].icono,estado:todos2[j5].estado,
                                                                                                              ingreso:todos4[k].ingreso,  permiso:todos4[k].ingreso+','+todos4[k].consulta+','+todos4[k].eliminacion+','+todos4[k].creacion+','+todos4[k].actualizacion+','+todos4[k].filtro+','+todos4[k].reporte,potros1:todos4[k].potros1,children:childrem2
                                                                                                              ,pingreso:todos4[k].ingreso ,pconsulta: todos4[k].consulta,peliminacion : todos4[k].eliminacion
                                                                                                              ,pcreacion: todos4[k].creacion, pactualizacion: todos4[k].actualizacion,pfiltro: todos4[k].filtro
                                                                                                              ,preporte: todos4[k].reporte})

                                                                                                }
                                                                                                else{
                                                                                                        childrem.push({nivel:todos2[j5].nivel,idrol:todos4[k].idrol,title:todos2[j5].nombre,component: todos2[j5].componente, tabComponent:todos2[j5].tabcomponente,name:todos2[j5].componente,index:todos2[j5].index,icon:todos2[j5].icono,estado:todos2[j5].estado,
                                                                                                                ingreso:todos4[k].ingreso,permiso:todos4[k].ingreso+','+todos4[k].consulta+','+todos4[k].eliminacion+','+todos4[k].creacion+','+todos4[k].actualizacion+','+todos4[k].filtro+','+todos4[k].reporte,potros1:todos4[k].potros1
                                                                                                                ,pingreso:todos4[k].ingreso ,pconsulta: todos4[k].consulta,peliminacion : todos4[k].eliminacion
                                                                                                                ,pcreacion: todos4[k].creacion, pactualizacion: todos4[k].actualizacion,pfiltro: todos4[k].filtro
                                                                                                              ,preporte: todos4[k].reporte  })
                                                                                                }
                                                                                             
                                                                                        }
                                                                                }
                                                                        }                                                 

                                                                }   
                                                        

                                                                if(childrem.length>0)
                                                                {
                                                                myData.push({nivel:todos2[j].nivel, idrol:todos[i].idrol,title:todos2[j].nombre,component: todos2[j].componente, tabComponent:todos2[j].tabcomponente,name:todos2[j].componente,index:todos2[j].index,icon:todos2[j].icono,estado:todos2[j].estado,
                                                                      ingreso:todos[i].ingreso,  permiso:todos[i].ingreso+','+todos[i].consulta+','+todos[i].eliminacion+','+todos[i].creacion+','+todos[i].actualizacion+','+todos[i].filtro+','+todos[i].reporte,children:childrem
                                                                      ,pingreso:todos[i].ingreso ,pconsulta: todos[i].consulta,peliminacion : todos[i].eliminacion
                                                                      ,pcreacion: todos[i].creacion, pactualizacion: todos[i].actualizacion,pfiltro: todos[i].filtro
                                                                                                              ,preporte: todos[i].reporte});
                                

                                                                }
                                                                else
                                                                {
                                                                myData.push({nivel:todos2[j].nivel,idrol:todos[i].idrol,title:todos2[j].nombre,component: todos2[j].componente, tabComponent:todos2[j].tabcomponente,name:todos2[j].componente,index:todos2[j].index,icon:todos2[j].icono,estado:todos2[j].estado,
                                                                     ingreso:todos[i].ingreso,   permiso:todos[i].ingreso+','+todos[i].consulta+','+todos[i].eliminacion+','+todos[i].creacion+','+todos[i].actualizacion+','+todos[i].filtro+','+todos[i].reporte
                                                                     ,pingreso:todos[i].ingreso ,pconsulta: todos[i].consulta,peliminacion : todos[i].eliminacion
                                                                      ,pcreacion: todos[i].creacion, pactualizacion: todos[i].actualizacion,pfiltro: todos[i].filtro
                                                                                                              ,preporte: todos[i].reporte});
                                
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
                if(req.params.id2=='WebApp Usacenlinea')
                {
                        res.json([{id:'CATEGORIA DISEÑO PLANTILAS',nombre:'CATEGORIA DISEÑO PLANTILAS'},{id:'DIAS FESTIVOS',nombre:'DIAS FESTIVOS'},{id:'RUTAS',nombre:'RUTAS'},{id:'MATERIAS',nombre:'MATERIAS'},{id:'PERIODOSSUM',nombre:'PERIODOSSUM'},{id:'UNIDADES',nombre:'UNIDADES'} ,{id:'TARIFA COMPRA SALDO',nombre:'TARIFA COMPRA SALDO'} 
                        ,{id:'TIPO UNIDADES',nombre:'TIPO UNIDADES'} ,{id:'TIPO DENUNCIAS',nombre:'TIPO DENUNCIAS'}]);


                }
                else
                {
                        res.json([{id:'CATEGORIA DISEÑO PLANTILAS',nombre:'CATEGORIA DISEÑO PLANTILAS'},{id:'DIAS FESTIVOS',nombre:'DIAS FESTIVOS'},{id:'RUTAS',nombre:'RUTAS'},{id:'MATERIAS',nombre:'MATERIAS'},{id:'UNIDADES',nombre:'UNIDADES'} ,{id:'TARIFA COMPRA SALDO',nombre:'TARIFA COMPRA SALDO'} 
                        ,{id:'TIPO UNIDADES',nombre:'TIPO UNIDADES'} ,{id:'TIPO DENUNCIAS',nombre:'TIPO DENUNCIAS'}]);

                }
            break;
            case 'dcatalogo':

                        Catalogo.find({tipo:req.params.id2,idempresa:req.params.id3,estado:'Activo'},function(err, todos) {
                                if (err){ res.send(err); }
                               
                                Dcatalogo.find({idcatalogo:todos1[0]._id,idempresa:req.params.id3},function(err, todos) {
                                        if (err){  res.send(err);  }
                                         res.json(todos);
                                     });
                               
                                
                            });


             
    
                break;
             
                case 'dinactivos':
                User.find({estado:'Inactivo',idempresa:req.params.id2},function(err, todos) {
                    if (err){  res.send(err);  }
    
                    var myData = [];
                    for(var i = 0; i < todos.length;i++){
                            myData.push({id:todos[i]._id});
    
                    }
    
                     res.json(myData);
                 });
    
                break;



            case 'dtarifa':
            //busca el disppsitivo y se encuentra la tarifa
      

            
            tarifa.find({nombre:req.params.id2,idempresa:req.params.id3,estado:'Activo'},function(err, todos2) {
                if (err){  res.send(err);  }

             
                Dtarifa.find({idtarifa:todos2[0]._id,idempresa:req.params.id3},function(err, todos) {
                        if (err){  res.send(err);  }
        
                        var myData = [];
                        for(var i = 0; i < todos.length;i++){
                                myData.push({nombre:todos[i].nombre + ',' + todos[i].horaini+ ',' + todos[i].horafin + ',' + todos[i].monto});
                        }

                        res.json(myData);
                                     

            });
                                                

    });
           
                 
                



            break;
            case 'dtarifa2':
            //busca el disppsitivo y se encuentra la tarifa
    
            Bus.findById({_id:req.params.id2},function(err, todos2) {
                if (err){  res.send(err);  }
            
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
         
         
            case 'dispositivo-tipo':
            res.json([{id:'BUS',nombre:'BUS'},{id:'TALANQUERA',nombre:'TALANQUERA'},{id:'MOLINETE',nombre:'MOLINETE'},{id:'ACCESO DIGITAL',nombre:'ACCESO DIGITAL'}]);
        break;
        case 'suscriptor-disp':
                  res.json([{id:'RFID Tarjeta',nombre:'RFID Tarjeta'} ,{id:'RFID movil',nombre:'RFID movil'},{id:'RFID pulsera',nombre:'RFID pulsera'},{id:'OTRO dispositivo',nombre:'OTRO dispositivo'},{id:'Ninguno',nombre:'Ninguno'}]);
         
        break;
     
       
  
  
        default:
        

             res.status(500).send('Resultado no encontrado'); 
             break;


    }
}



    
}