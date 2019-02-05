
var Perfil = require('../models/perfil');
var Moduloxx = require('../models/moduloxx');
var Permiso = require('../models/permiso');
var Permiso2 = require('../models/permison2');
var Area_evento = require('../models/area_evento');
var Aread_evento = require('../models/aread_evento');
var csv      = require('csv-express');
var Evento = require('../models/eventos');



var Participa = require('../models/participa');
var Participa2 = require('../models/participa2');
var Facplan = require('../models/unidadplan');
var cursoeve=require('../models/aread_evento');

var request = require('request');

var Asignaest = require('../models/asignaestudiante');

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
      
                      if(asigno!=myData.asignados)
                     {
                             
                      //  console.log( myData)
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

       switch(req.params.id) {
        case 'areas-evento':
     console.log({'idtipoevento.codigo':req.params.id2});
        Area_evento.find({'idtipoevento.codigo':req.params.id2},function(err, todos) {
                if (err){  res.send(err);  }
                res.json(todos);
        });
        break;
        case 'areasd-evento':
        Aread_evento.find({'idtipoevento.codigo':req.params.id2,'idarea.id':req.params.id3},function(err, todos) {
                if (err){  res.send(err);  }
                res.json(todos);
        });
        break;

        
        case 'tablaasignacion2':
        //'idunidadacademica.codigo':'1'
                                Asignaest.find({}).lean().exec(function(err, todos) {
                                if (err){  res.send(err);  }    
                                var resp=[]
                                for(var i = 0; i < todos.length;i++){
                                var periodo=todos[i].idperiodo.nombre.split("-");
                        //   console.log(periodo)
                                var anio=Number(periodo[0])+1
                                var idmat=0
                                
                                if(todos[i].idmateria=='Biologia'){idmat=1}
                                if(todos[i].idmateria=='Fisica'){idmat=2}
                                if(todos[i].idmateria=='Lenguaje'){idmat=3}
                                if(todos[i].idmateria=='Matematica'){idmat=4}
                                if(todos[i].idmateria=='Quimica'){idmat=5}
        
                                var ll=todos[i].no_orientacion
                                var tno=0;
                                if(ll.length==10)
                                {
                                        tno=1
                                }
                                else
                                {
                                        tno=2
                                }
                                var d =new Date( todos[i].date).toISOString().substr(0,10);   
                                var n = d.split('-')   
        
                                resp.push({periodo:periodo[0] ,no_oportunidad:periodo[1]
                                        ,anio_asignacion:anio,id_facultad:todos[i].idunidadacademica.nombre
                                        ,id_tipo:todos[i].idtipounidad.nombre
                                        ,id_materia:todos[i].idmateria,noorientacion:todos[i].no_orientacion,id:todos[i]._id});
                                }
                              //  res.json(resp);
                              var filename   = "Tablaasignacion2.csv";
                              res.statusCode = 200;
                              res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                              res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                              res.csv(resp, true);
                              
                
                        });
                      
                break;
        case 'tablaasignacion':
//'idunidadacademica.codigo':'1'
                        Asignaest.find({}).lean().exec(function(err, todos) {
                        if (err){  res.send(err);  }    
                        var resp=[]
                        for(var i = 0; i < todos.length;i++){
                        var periodo=todos[i].idperiodo.nombre.split("-");
                //   console.log(periodo)
                        var anio=Number(periodo[0])+1
                        var idmat=0
                        
                        if(todos[i].idmateria=='Biologia'){idmat=1}
                        if(todos[i].idmateria=='Fisica'){idmat=2}
                        if(todos[i].idmateria=='Lenguaje'){idmat=3}
                        if(todos[i].idmateria=='Matematica'){idmat=4}
                        if(todos[i].idmateria=='Quimica'){idmat=5}

                        var ll=todos[i].no_orientacion
                        var tno=0;

                

                        if(ll.length==10)
                        {
                                tno=1
                        }
                        else
                        {
                                tno=2
                        }

                        var pp=''
                        var noori=''

                        if(ll.length==10 || ll.length==9)
                        {
                                pp=ll.substr(0,4);
                                noori=ll.substr(4,ll.length-1)

                        }
                        else
                        {
                                        if(ll.length==7)
                                        {
                                                pp=ll.substr(0,2);
                                                noori=ll.substr(2,ll.length-1)
                
                                                
                                        }
                                        else
                                        {
                                                pp='0'
                                                noori=ll
                

                                        }


                        }


                        var d =new Date( todos[i].date).toISOString().substr(0,10);   
                        var n = d.split('-')   

                        resp.push({periodo:pp,no_orientacion:noori,ingreso:tno
                                ,no_oportunidad:periodo[1]
                                ,anio_asignacion:anio,id_facultad:todos[i].idunidadacademica.codigo
                                ,codigo_fac:todos[i].codfac,no_asignado:todos[i].noasignado,id_materia:idmat,fecha:n[2] + '-'+ n[1] + '-' + n[0]});

                        

                        }
                      //  res.json(resp);
                        var filename   = "Tablaasignacion.csv";
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(resp, true);
        
                });
              
        break;
        case 'tablainfoboleta':
//'idunidadacademica.codigo':'1'
                        Facplan.find({}).lean().exec(function(err, todos) {
                        if (err){  res.send(err);  }    
                        var resp=[]
                        for(var i = 0; i < todos.length;i++){
                        var periodo=todos[i].idperiodo.nombre.split("-");
                //   console.log(periodo)
                        var anio=Number(periodo[0])+1
                        var idmat=0
                        
                        if(todos[i].idmateria=='Biologia'){idmat=1}
                        if(todos[i].idmateria=='Fisica'){idmat=2}
                        if(todos[i].idmateria=='Lenguaje'){idmat=3}
                        if(todos[i].idmateria=='Matematica'){idmat=4}
                        if(todos[i].idmateria=='Quimica'){idmat=5}

                     
                        var d =new Date( todos[i].date).toISOString().substr(0,10);   
                        var n = d.split('-')   

                        resp.push({codigo_fac:todos[i].codfac,id_facultad:todos[i].idunidadacademica.codigo
                                ,no_oportunidad:periodo[1]
                                ,anio_asignacion:anio
                                ,lugar:todos[i].idedificio.nombre
                                ,salon:todos[i].idsalon.nombre
                                ,horario:todos[i].idhorario
                                ,disponible:todos[i].capacidad
                                ,asignados:todos[i].asignados
                                ,fecha:n[2] + '-'+ n[1] + '-' + n[0]

                                ,id_materia:idmat});
                        }
                      //  res.json(resp);
                        var filename   = "Tablainfoboleta.csv";
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(resp, true);
        
                });
              
        break;
        
        case 'participantes2':

        cursoeve.find({},function(err, todos0) {
                        if (err){  res.send(err);  }      
                                Participa2.find({},function(err, todos) {
                                        if (err){  res.send(err);  }
                                        var resp=[]
                                        var tevento=''
                                        for(var i = 0; i < todos.length;i++){
                                                for(var ii = 0; ii < todos0.length;ii++){
                                                        if(todos0[ii]._id==todos[i].idevento)
                                                        {
                                                           tevento=  todos0[ii].nombre   
                                                        }
                                                }        
                                                resp.push({tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,curso:tevento,nombre:todos[i].nombre + ' ' +todos[i].apellido,genero:todos[i].genero,correo:todos[i].correo,telefono:todos[i].telefono,edad:todos[i].edad});
                                        }
                                        res.json(resp);
                                });
                });
        break;
        case 'buses-nelson':
                                request('http://190.143.151.236:8500/ws/databuses.cfm', function (error, response, body) {
                                        if (!error && response.statusCode == 200) {
                                        var importedJSON = JSON.parse(body);
                                        res.json(importedJSON);
                                        }
                                })
            break;
      
  
        case 'reporte-salon':


     var query=req.body.unidadacademica.nombre;
     var undef;

// Fails on undefined variables
if (query !== undef) {
    // variable is defined
    
    res.status(500).send('si ');
    return;
                       
} else {
    // else do this
   
    res.status(500).send('mo');
    return;

}

        if (query  != undefined) { console.log('ssssssssss')

        res.status(500).send('si ');
        return;
}


        if ( typeof query  !== 'undefined' && query )
{
  //do stuff if query is defined and not null
  console.log('si')
  res.status(500).send('si ');
  return;
}
else
{
        console.log('no')
        res.status(500).send('si ');
        return;
}

        //Facplan
        Facplan.find({ _id: req.body.unidadacademica.nombre  },function(err, todos) {
                if (err){ // res.send(err);
                      //  if(err) return next(err);
                      console.log('aqui quedo')
                        res.status(500).send('No existe ');
                       
                }
               
                var aa=0;
            
                for(var i = 0; i < todos.length;i++){
                   if(todos[i].asignados>0)
                   {
                               // aa=aa+todos[i].asignados
                     //console.log(todos[i].idtipounidad,todos[i].idunidadacademica,todos[i].idperiodo,todos[i].idedificio,todos[i].idsalon);   
                     getNextSequenceValue2(todos[i]);

                
        }     
     
                }
                console.log('total asignados fac plan: ')
                //res.json(todos);
        });


        break;

        case 'modulo-grupo':
                        res.json([{id:'PAGINA',nombre:'PAGINA'} ,{id:'LINK',nombre:'LINK'},{id:'MENU',nombre:'MENU'},{id:'PAGINAHTML',nombre:'PAGINAHTML'}]);
        break;
     
        case 'excel-eventos':
                           var filename   = "eventos.csv";

                                Participa.find({},function(err, todos2) {
                                        if (err){ res.send(err); }
                                        

                                        if(todos2.length>0)   {  

                                        //   res.json(todos2);

                                                Evento.find({impresion:'Activo'}).lean().exec({}, function(err,todos) {
                                                        if (err) res.send(err);
                                                        var myData = [];
                                                        var cc=0;
                                                        for(var i = 0; i < todos.length;i++){
                                                        
                                                                for(var j = 0; j < todos2.length;j++){
                                                                
                                                                        if(todos[i]._id==todos2[j].idevento)
                                                                        {
                                                                                cc=cc+1;
                                                                        }
                                                                                
                                                                }       


                                                        myData.push({nombre:cleanName(todos[i].nombre),Noparticipantes:cc});
                                                        cc=0;
                                                        }
                                                        
                                                        res.statusCode = 200;
                                                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                        res.csv(myData, true);
                                                //  res.json(todos2);  
                                                });

                                                
                                        }
                                
                                });


        break;
        case 'excel-participa':

                                var filename   = "participantes.csv";
                                
                                Participa.find({idevento:req.params.id2,estado:'Ingreso'}).sort({nombre:1}).exec(function(err, todos2) {
                                        if (err){ res.send(err); }
                                        

                                        if(todos2.length>0)   {  

                                                var myData = [];
                                                for(var i = 0; i < todos2.length;i++){


                                                myData.push({nombre:cleanName(todos2[i].nombre) + ' '+ cleanName(todos2[i].apellido),fecha:todos2[i].fecha.substr(0,10),ingresos:cleanName(todos2[i].cuenta) });
                                                }
                                                
                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                res.csv(myData, true);
                                        
                                                
                                        }
                                
                                });

        break;
        case 'excel-asigna':

                                var filename   = "asignaciones.csv";
                                
                                Facplan.find({'idperiodo.nombre':'2018-04'}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
                                        if (err){ res.send(err); }
                                        

                                        if(todos2.length>0)   {  

                                                var myData = [];
                                                for(var i = 0; i < todos2.length;i++){

                                                        var d =new Date( todos2[i].fexamen).toISOString()
                                                        var n = d.toString();      
                                                        var ll=''
                                                        if(todos2[i].idmateria=='Lenguaje'){ll='3'}
                                                        if(todos2[i].idmateria=='Matematica'){ll='4'}
                                                        if(todos2[i].idmateria=='Fisica'){ll='2'}
                                                        if(todos2[i].idmateria=='Quimica'){ll='5'}
                                                        if(todos2[i].idmateria=='Biologia'){ll='1'}

                                                        
                                                myData.push({periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:cleanName(todos2[i].idsalon.nombre)
                                                        ,codigomateria:ll,materia:cleanName(todos2[i].idmateria),horario:cleanName(todos2[i].idhorario)
                                                        ,capacidad:todos2[i].capacidad ,asignados:todos2[i].asignados
                                                        ,fexamen:d.substr(0,10) ,codfac:todos2[i].codfac 
                                                 });
                                                }
                                                
                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                res.csv(myData, true);
                                        
                                                
                                        }
                                
                                });

        break;
  
        default:

  


    }




    
}