
var Perfil = require('../models/perfil');
var Moduloxx = require('../models/moduloxx');
var Permiso = require('../models/permiso');
var Permiso2 = require('../models/permison2');
var Area_evento = require('../models/area_evento');
var Aread_evento = require('../models/aread_evento');
var csv      = require('csv-express');
var Evento = require('../models/eventos');
var Pagopap = require('../models/pagospap');
var Denunciaunidad = require('../models/denunciaunidad');
var Participa3 = require('../models/participa3');
var Participa33 = require('../models/participa33');
var Unidadplan2 = require('../models/unidadplan2');
var Cuentaccoriente = require('../models/asignapapccorriente');


var Unidadacademica = require('../models/unidadacademica');
var Asignapcb = require('../models/asignapcb');
var Participa = require('../models/participa');
var Participa2 = require('../models/participa2');
var Facplan = require('../models/unidadplan');
var Facplan2 = require('../models/unidadplan2');
var cursoeve=require('../models/aread_evento');
var Userperfil = require('../models/userperfil2');
var Asignapap = require('../models/asignapap');
var Marketemail = require('../models/marketemail');
var Asignaest = require('../models/asignaestudiante');
var Personal = require('../models/user');

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

   
      function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
      }


      
      function getNextSequenceValue2a(codfac2,idunidadacademicat,idedificiot,idsalont,idmateriat,idhorariot,cuentaaa,res){


       

        Facplan.findById({  codfac:codfac2 ,'idunidadacademica.id':idunidadacademicat,'idedificio.id':idedificiot,'idsalon.id':idsalont,idmateria:idmateriat ,idhorario:idhorariot }, function (err, todo)  {
                if (err) { console.log(err.message)  }
                else
                {  
                    todo.asignados    	=	cuentaaa
                    todo.save(function (err, todo333){
                        if (err)     { console.log(err.message)  }
                      //  res.json(todo);
                    });
                }
            });
      }



      function getNextSequenceValue2(salonn, idd,cuentaaa){

        Unidadplan2.findById({ _id: idd }, function (err, todo)  {
                if (err) {  res.send(err);  }
                else
                {  
                    todo.asignados    	=	cuentaaa
                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                      //  res.json(todo);
                    });
                }
            });
      }


      
  function buscaarray(data,asigna,perfil,horario,materia) {
        var val=0
        for(var i = 0; i <data.length; i++) {
                 if(data[i].idasigna==asigna && data[i].idperfil==perfil  && data[i].idhorario==horario 
                        && data[i].idmateria==materia  )
                 {
                        val=1;
                    break;
                 }
        }
        
       return val;
    
        
    }

    var request = require('request');
    function getNext(myData3,myData3aa,req,res,necesito){
        request({
                url: "https://rest2019externo.herokuapp.com/api/estudiantepcb/" + nov +"/resultado" ,
                method: "GET",
                gzip: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'123'
                  
    
    
                    
                },
                body: ''
            }, function (error, response, body){
       
                if (error){  console.log(error); res.send(error);  }

                var aa=JSON.parse(body)

                for (var ii = 0; ii < aa.length; ii++) {
                       
                        console.log(mat)

                        if(aa[ii].ID_MATERIA==mat  &&  aa[ii].APROBACION=='1')
                        {
                                console.log('APROBO ' + aa[ii].ORIENTACION + '  ' +aa[ii].ID_MATERIA)   

                        }
                        else{

                                console.log('no APROBO ' + aa[ii].ORIENTACION + '  ' +aa[ii].ID_MATERIA)   

                        }

                            
                }

           
               
    
               //   res.send(body);
        
    
    
    
            });

    }
exports.getCombofijo = function(req, res, next){
       var sql='';

       console.log(req.params)

       switch(req.params.id) {
        case 'help':
        Marketemail.find({idempresa:req.params.id3,idcategoria:req.params.id2}).populate('grupo').exec(function(err, todos) {
                if (err){ res.send(err); }
               
                res.json(todos);   
                
            });
        break;

        case 'SUNRPT11':

        var  nov='';
        Asignaest.find({no_orientacion:'2018003645'}).exec(function(err, todos) {
                if (err){ res.send(err); }

                var myData = [];
                for (var i = 0; i < todos.length; i++) {

                        var mat=0;
                        if( todos[i].idmateria=='Biologia'){mat=1;}
                        if( todos[i].idmateria=='Fisica'){mat=2;}
                        if( todos[i].idmateria=='Lenguaje'){mat=3;}
                        if( todos[i].idmateria=='Matematica'){mat=4;}
                        if( todos[i].idmateria=='Quimica'){mat=5;}

                    


                        myData.push({nov:todos[i].no_orientacion ,materia:mat});
                        var nov=todos[i].no_orientacion
                        console.log( ' ----------------- ' + todos[i].no_orientacion + ' ' + todos[i].idmateria + ' ' + mat) 
                       


                }

console.log('TERMINA')
              
                res.json(myData);   
                
            });
      /*

                        request({
                                url: "https://rest2019externo.herokuapp.com/api/estudiantepcb/" + nov +"/resultado" + req.params.id2+"/" + req.params.id3,
                                method: "GET",
                                gzip: true,
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization':'123'
                                  
                    
                    
                                    
                                },
                                body: ''
                            }, function (error, response, body){
                       
                                if (error){  console.log(error); res.send(error);  }
                               
                            
                    
                        
                                  res.send(body);
                        
                    
                    
                    
                            });
*/


        break;        
        case 'registroest':

                        request({
                                url: "http://52.151.38.147:9090/api/datosfijos/" + req.params.id2+"/" + req.params.id3,
                                method: "GET",
                                gzip: true,
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization':'123'
                                  
                    
                    
                                    
                                },
                                body: ''
                            }, function (error, response, body){
                       
                                if (error){  console.log(error); res.send(error);  }
                               
                            
                    
                        
                                  res.send(body);
                        
                    
                    
                    
                            });



        break;        
        case 'oracleclient':

        if(req.params.id6)
        {

                request({
                        url:  'http://190.143.151.236:8501/api/'+req.params.id2 + '/' +  req.params.id3 +'/' +  req.params.id4+'/' +  req.params.id5+'/' +  req.params.id6,
                        method: "GET",
                        gzip: true,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':'123'
                          
            
            
                            
                        },
                        body: ''
                    }, function (error, response, body){
               
                        if (error){  console.log(error); res.send(error);  }
                       
                    
            
                
                          res.send(body);
                
            
            
            
                    });

        }
        else
        {
                console.log('en 4')
                console.log('http://190.143.151.236:8501/api/'+req.params.id2 + '/' +  req.params.id3 +'/' +  req.params.id4)
                request({
                        url:  'http://190.143.151.236:8501/api/'+req.params.id2 + '/' +  req.params.id3 +'/' +  req.params.id4,
                        method: "GET",
                        gzip: true,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':'123'
                          
            
            
                            
                        },
                        body: ''
                    }, function (error, response, body){
               
                        if (error){  console.log(error); res.send(error);  }
                       
                    
            
                
                          res.send(body);
                
            
            
            
                    });

        }



        break;        
        case 'actarea':
        

        Unidadacademica.find({}).exec(function(err, todos) {
                if (err){ res.send(err); }
               /*
                for (var i = 0; i < todos.length; i++) {

                        Asignaest.updateMany({'idunidadacademica.id': todos[i].id}, {
                                idunidadacademica :{id:todos[i]._id,nombre:todos[i].nombre,codigo:todos[i].codigo   }   	
                            }, function(err, numberAffected, rawResponse) {
                                 
                               //handle it
                            })



                            

                }
*/
                res.json(todos);   
                
            });

    
      
   
        break;
        case 'areas-evento':
    
        Area_evento.find({'idtipoevento.codigo':req.params.id2},function(err, todos) {
                if (err){  res.send(err);  }
                res.json(todos);
        });
        break;
        case 'areasd-evento':
        Aread_evento.find({'idtipoevento.codigo':req.params.id2,'idarea.id':req.params.id3,estado:'1'},function(err, todos) {
                if (err){  res.send(err);  }
                res.json(todos);
        });
        break;

        case 'tablaasignacion3':
              
                Asignapcb.find({"nombre" :'   '}).lean().exec(function(err, todos11) {
                        if (err){  res.send(err);  }    

                        var aaa=[];
                        for(var ii = 0; ii < todos11.length;ii++){
                                aaa.push(todos11[ii].idestudiante)
                        }

                        console.log(aaa)
                        

                        Personal.find({ email:{$in:aaa}}).lean().exec(function(err, todos) {
                                        if (err){  res.send(err);  }    
                                        var resp=[]
                                 
                                      //  res.json(resp);
                                      var filename   = "Tablaasignacion3.csv";
                                      res.statusCode = 200;
                                      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                      res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                      res.csv(todos, true);
                                      
                        
                                });
                                
                                });

              
                        break;

        case 'tablaasignacion2':
        //'idunidadacademica.codigo':'1'
                                Asignaest.find({}).lean().exec(function(err, todos) {
                                if (err){  res.send(err);  }    
                                var resp=[]
                                for(var i = 0; i < todos.length;i++){
                                var periodo=todos[i].idperiodo.nombre.split("-");
                       
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
                                        ,id_materia:todos[i].idmateria,noorientacion:todos[i].no_orientacion,id:todos[i]._id,nombre:todos[i].nombre});
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
                        Asignaest.find({ 'idtipounidad.id':'5b97f1bceb1dab0ab0368cc6'}).select({idperiodo: 1,no_orientacion:1,idmateria:1,date:1,idunidadacademica:1,codfac:1,noasignado:1}).lean().exec(function(err, todos) {
                        if (err){  res.send(err);  }    
                        var resp=[]
                        for(var i = 0; i < todos.length;i++){
                        var periodo=todos[i].idperiodo.nombre.split("-");
           
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
        case 'tablaasignacioncentro':

       
       

        //'idunidadacademica.codigo':'1'
                                Asignaest.find({ 'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }}).select({idhorario:1,idsalon:1,nombre:1,idperiodo: 1,no_orientacion:1,idmateria:1,date:1,idunidadacademica:1,codfac:1,noasignado:1}).lean().exec(function(err, todos) {
                                if (err){  res.send(err);  }    
                                var resp=[]
                                for(var i = 0; i < todos.length;i++){
                                var periodo=todos[i].idperiodo.nombre.split("-");
                   
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
                                var  nn=''
                              
                                if(todos[i].nombre)      {nn=todos[i].nombre} 
                                      
                                resp.push({no_asignado:todos[i].noasignado ,no_orientacion:ll,nombre:nn,
                                        centro:todos[i].idunidadacademica.codigo,
                                        id_materia:idmat,salon:todos[i].idsalon.nombre,hora:todos[i].idhorario ,
                                        codigo_fac:todos[i].codfac,ingreso:tno
                                        ,no_oportunidad:periodo[1]
                                        ,anio_asignacion:anio});
        
                                
        
                                }
                              //  res.json(resp);
                                var filename   = "Tablaasignacion.csv";
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                res.csv(resp, true);
                
                        });
                      
                break;
                case 'tablaasignacioncompleto':

       
       

                //'idunidadacademica.codigo':'1'
                                        Asignaest.find({ }).select({idhorario:1,idsalon:1,nombre:1,idperiodo: 1,no_orientacion:1,idmateria:1,date:1,idunidadacademica:1,codfac:1,noasignado:1}).lean().exec(function(err, todos) {
                                        if (err){  res.send(err);  }    
                                        var resp=[]
                                        for(var i = 0; i < todos.length;i++){
                                        var periodo=todos[i].idperiodo.nombre.split("-");
                            
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
                                        var  nn=''
                                  
                                        if(todos[i].nombre)      {nn=todos[i].nombre} 
                                              
                                        resp.push({no_asignado:todos[i].noasignado ,no_orientacion:ll,nombre:nn,
                                                centro:todos[i].idunidadacademica.codigo,
                                                id_materia:idmat,salon:todos[i].idsalon.nombre,hora:todos[i].idhorario ,
                                                codigo_fac:todos[i].codfac,ingreso:tno
                                                ,no_oportunidad:periodo[1]
                                                ,anio_asignacion:anio});
                
                                        
                
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
                                        var ubica=''
                                        for(var i = 0; i < todos.length;i++){
                                                for(var ii = 0; ii < todos0.length;ii++){
                                                        if(todos0[ii]._id==todos[i].idevento)
                                                        {
                                                           tevento=  todos0[ii].nombre   
                                                           ubica= 'Edificio: '+todos0[ii].edificio + '  Salon: ' +  todos0[ii].salon     
                                                           break;
                                                        }
                                                }        
                                                //resp.push({tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,curso:tevento,nombre:todos[i].nombre + ' ' +todos[i].apellido,genero:todos[i].genero,correo:todos[i].correo,telefono:todos[i].telefono,edad:todos[i].edad});
                                                resp.push({ubica:ubica,tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,curso:tevento});
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

  res.status(500).send('si ');
  return;
}
else
{
     
        res.status(500).send('si ');
        return;
}

        //Facplan
      

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

                                                Evento.find({idempresa:req.params.id2}).lean().exec({}, function(err,todos) {
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

                                                                var d =new Date( todos[i].fechaini).toISOString().substr(0,10);   
                                                                var n = d.split('-')   
                                        

                                                        myData.push({nombre:cleanName(todos[i].nombre),fechaini:d,
                                                                ubicacion:todos[i].ubicacion,Noparticipantes:cc});
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
                console.log(req.params.id2)

                                var filename   = "participantes.csv";
                                
                                Participa.find({idevento:req.params.id2}).sort({nombre:1}).exec(function(err, todos2) {
                                        if (err){ res.send(err); }
                                        console.log(todos2)

                                        if(todos2.length>0)   {  

                                                var myData = [];
                                                for(var i = 0; i < todos2.length;i++){


                                                myData.push({nombre:cleanName(todos2[i].nombre) + ' '+ cleanName(todos2[i].apellido),fecha:todos2[i].fecha.substr(0,10),ingresos:cleanName(todos2[i].cuenta),correo:todos2[i].correo  });
                                                }
                                                
                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                res.csv(myData, true);
                                        
                                                
                                        }
                                
                                });

        break;

        case 'excel-denuncias':

        var filename   = "denuncias.csv";
        

        Denunciaunidad.find({'jefeop':req.params.id2}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                var myData3 = [];
                var myData32 = [];
                for(var i = 0; i <  todos.length;i++){
                    var cat=todos[i].categoria
                    for(var i2 = 0; i2 <  cat.length;i2++){
                        myData3.push(cat[i2]._id)
                        myData32.push(cat[i2].nombre)
                    }
    
                   
                }
               

               
    
                Participa33.find({tipo:{$in:myData32}}).populate('idusuario').exec(function(err, todos22) {
                        if (err){  res.send(err);  }
         
                        Participa3.find({tipo:{$in:myData3}}).populate('tipo').sort([['createdAt', 1]]).exec(function(err, todos2) {
                                if (err){  res.send(err);  }
             
                                var myData31 = [];
                                var mydata41=[]
                                for(var i = 0; i <  todos2.length;i++){
                                        var idusuario=''
                                        var fechaasignada=''
                                        var estadoasignada=''
                                        for(var i2 = 0; i2 <  todos22.length;i2++){
                                                if(todos2[i]._id==todos22[i2].iddenuncia)
                                                {
                                                      
                                                   idusuario=todos22[i2].idusuario.nombre;
                                                 
                                                   fechaasignada             =new Date( todos22[i2].createdAt).toISOString().substr(0,10)  ;
                                                   estadoasignada            =todos22[i2].estado;
                                                   break;

                                                }
                                        }

                                 if(idusuario!='')
                                 {
                                       
                                        myData31.push({
                                                nombre:todos2[i].nombre ,correo:todos2[i].correo
                                                ,xpos:todos2[i].xpos,ypos:todos2[i].ypos,
                                             estado:todos2[i].estado,tipo:todos2[i].tipo.nombre,
                                             createdAt:new Date( todos2[i].createdAt).toISOString().substr(0,10)
                                        ,usuarioseguimiento:idusuario,estadoseguimiento:estadoasignada,fechaseguimiento:fechaasignada})
           

                                 }     
                                 else{

                                        myData31.push({nombre:todos2[i].nombre ,correo:todos2[i].correo,
                                                xpos:todos2[i].xpos,ypos:todos2[i].ypos,
                                             estado:todos2[i].estado,tipo:todos2[i].tipo.nombre,
                                             createdAt:new Date( todos2[i].createdAt).toISOString().substr(0,10)
                                             ,usuarioseguimiento:'',estadoseguimiento:'',fechaseguimiento:''})
           
                                 }  


                             }

                                      
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                res.csv(myData31, true);
                 
                       
                
                }
                );

            
              
                });
             });


    
        break;
        case 'excel-asigna':

                                var filename   = "asignaciones.csv";
                                
                                Facplan.find({'idperiodo.nombre':req.params.id2,'idtipounidad.id':'5b97f1bceb1dab0ab0368cc6'}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
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

                                                        
                                                myData.push({unidadacademica:cleanName(todos2[i].idtipounidad.nombre),periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:cleanName(todos2[i].idsalon.nombre)
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
        case 'excel-asigna3':

        var filename   = "asignaciones2.csv";
        
        Facplan.find({'idperiodo.nombre':req.params.id2, 'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
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

                                
                        myData.push({unidadacademica:cleanName(todos2[i].idtipounidad.nombre),periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:todos2[i].idsalon.nombre
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
        case 'excel-asignaU':

        var filename   = "asignacionesU.csv";
        
        Facplan.find({'idperiodo.nombre':req.params.id2,'idtipounidad.nombre':req.params.id3}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
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
        case 'excel-asigna2':

        var filename   = "asignacionesPAP.csv";
        
        Facplan2.find({'idperiodo.nombre':'2019-01'}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
                if (err){ res.send(err); }
                

                if(todos2.length>0)   {  

                        var myData = [];
                        for(var i = 0; i < todos2.length;i++){

                                var ll=''
                                if(todos2[i].idmateria=='Lenguaje'){ll='3'}
                                if(todos2[i].idmateria=='Matematica'){ll='4'}
                                if(todos2[i].idmateria=='Fisica'){ll='2'}
                                if(todos2[i].idmateria=='Quimica'){ll='5'}
                                if(todos2[i].idmateria=='Biologia'){ll='1'}

                                
                        myData.push({periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:cleanName(todos2[i].idsalon.nombre)
                                ,codigomateria:ll,materia:cleanName(todos2[i].idmateria),horario:cleanName(todos2[i].idhorario)
                                ,capacidad:todos2[i].capacidad ,asignados:todos2[i].asignados
                                 ,jornada:todos2[i].idjornada
                         });
                        }
                        
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(myData, true);
                
                        
                }
        
        });

break;



case 'excel-asigna33xxx':

var myDataxxx = [];

Unidadplan2.find({}).exec(function(err, todos20) {
        if (err){ res.send(err); }
 var cuentatt=1
        Asignaest.find({}).exec(function(err, todos300) {
                if (err){ res.send(err); }
      var  cuenta=1;
                for(var i = 0; i < todos20.length;i++){
                cuenta=0;
                        for(var j = 0; j < todos300.length;j++){
                                if(todos20[i].idsalon.nombre==todos300[j].idsalon.nombre)
                                {
                                        cuenta=cuenta+1;
                                        cuentatt=cuentatt+1;


                                }
                        }

                    getNextSequenceValue2( todos20[i].idsalon.nombre,todos20[i]._id,cuenta);
                }


                    
                    //    myDataxxx.push({salon:todos20[i].idsalon.nombre,id:todos20[i]._id  ,cuenta2:cuenta});
res.json({cantidad:cuentatt});
                      


        });

});






break;


case 'excel-asigna33xxxcc':

var myDataxxx = [];


Facplan.find({  "idperiodo.nombre" : "2019-01", 'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }}).exec(function(err, todos20) {
        if (err){ res.send(err); }

Asignaest.aggregate(
        [
                { 
                    "$match" : {
                        "idperiodo.nombre" : "2019-01",
                        'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }
                    }
                }, 
                { 
                    "$group" : {
                        "_id" : {
                            "codfac" : "$codfac", 
                            "idunidadacademica᎐codigo" : "$idunidadacademica.codigo", 
                            "idedificio᎐id" : "$idedificio.id", 
                            "idhorario" : "$idhorario", 
                            "idunidadacademica᎐id" : "$idunidadacademica.id", 
                            "idsalon᎐id" : "$idsalon.id", 
                            "idmateria" : "$idmateria"
                        }, 
                        "COUNT(*)" : {
                            "$sum" : 1
                        }
                    }
                }, 
                { 
                    "$project" : {
                        "codfac" : "$_id.codfac", 
                        "idunidadacademica.id" : "$_id.idunidadacademica᎐id", 
                        "idunidadacademica.codigo" : "$_id.idunidadacademica᎐codigo", 
                        "idedificio.id" : "$_id.idedificio᎐id", 
                        "idsalon.id" : "$_id.idsalon᎐id", 
                        "idmateria" : "$_id.idmateria", 
                        "idhorario" : "$_id.idhorario", 
                        "cantidad" : "$COUNT(*)", 
                        "_id" : 0
                    }
                }
            ], function (err, result) {
                if (err) {
                    next(err);
                } else {

                        var  data1=[]
                        for(var j = 0; j < result.length;j++){
                                var encuentra=0;
                                for(var jj = 0; jj < todos20.length;jj++){

                                        var ll=''
                                        if(result[j].idmateria=='Lenguaje'){ll='3'}
                                        if(result[j].idmateria=='Matematica'){ll='4'}
                                        if(result[j].idmateria=='Fisica'){ll='2'}
                                        if(result[j].idmateria=='Quimica'){ll='5'}
                                        if(result[j].idmateria=='Biologia'){ll='1'}


                                        if(result[j].codfac==todos20[jj].codfac &&  result[j].idunidadacademica.id==todos20[jj].idunidadacademica.id &&  result[j].idedificio.id==todos20[jj].idedificio.id &&  result[j].idsalon.id==todos20[jj].idsalon.id &&  result[j].idmateria==todos20[jj].idmateria &&  result[j].idhorario==todos20[jj].idhorario &&  result[j].cantidad==todos20[jj].asignados)
                                        {
                                                 encuentra=1;       

                                        }
                                        else{

                                                if(result[j].codfac==todos20[jj].codfac &&  result[j].idunidadacademica.id==todos20[jj].idunidadacademica.id &&  result[j].idedificio.id==todos20[jj].idedificio.id &&  result[j].idsalon.id==todos20[jj].idsalon.id &&  result[j].idmateria==todos20[jj].idmateria &&  result[j].idhorario==todos20[jj].idhorario)
                                        {
                                                 encuentra=3;       

                                        }
                                       
                                       

                                        }

                                                


                                }

                                if(encuentra==0)
                                {
                                             console.log(result[j])  

                                }
                                else
                                {

                                        if(encuentra==1)
                                {
                                        

                                }
                                else
                                {
                                        getNextSequenceValue2a(result[j].codfac,result[j].idunidadacademica.id,result[j].idedificio.id,result[j].idsalon.id,result[j].idmateria,result[j].idhorario,result[j].cantidad,res);

                                  

                                }
                                //getNextSequenceValue2a(result[j].codfac,result[j].idunidadacademica.id,result[j].idedificio.id,result[j].idsalon.id,result[j].idmateria,result[j].idhorario,result[j].cantidad,res);

                                        

                                }


                        }
//cons
                     //   getNextSequenceValue2a( todos20[i].idsalon.nombre,todos20[i]._id,cuenta);
                 
                                  
                    
res.json({ result});

                    
                }
            });

        });
  //  res.json(aa);
    break;




                    


case 'excel-papest':

var myDataxxx = [];

Userperfil.find({}).exec(function(err, todos20) {
        if (err){ res.send(err); }
 var cuentatt=1
 Asignapap.find({}).exec(function(err, todos300) {
                if (err){ res.send(err); }
      var  cuenta=0;
      var data1=[];
                for(var i = 0; i < todos20.length;i++){
               cuenta=0;
                        for(var j = 0; j < todos300.length;j++){
                                if(todos20[i].userId==todos300[j].userId)
                                {
                                     cuenta=1;
                                }
                        }
                        if(cuenta==1)
                        {}
                        else
                        { 
                             data1.push({id:todos20[i]._id})

                        }

                      
                }


                    
                    
res.json({data1});
                      


        });

});






break;


case 'excel-papcuenta':

var myDataxxx = [];


Cuentaccoriente.find({}).exec(function(err, todos20ab) {
        if (err){ res.send(err); }

Userperfil.find({}).exec(function(err, todos20) {
        if (err){ res.send(err); }
 var cuentatt=1
 Asignapap.find({}).exec(function(err, todos300) {
                if (err){ res.send(err); }
   
      var data1=[];
                for(var i = 0; i < todos20.length;i++){
                        for(var j = 0; j < todos300.length;j++){
                                if(todos20[i].userId==todos300[j].userId)
                                {  var cc='';var cc2=''
                                       cc=todos20[i].carne;  cc2=todos20[i].nov;
                                        if(todos20[i].carne=='0')   {   cc='';     }
                                        if(todos20[i].nov=='0')   {   cc2='';     }
                                        data1.push({idperfil:todos20[i]._id,
                                                idasigna:todos300[j]._id,
                                                nov:cc2,
                                                carne:cc,
                                                nombre:todos300[j].nombre,
                                                noboleta:todos300[j].noboleta,
                                                monto:todos300[j].monto,
                                                cui:todos300[j].cui
                                        
                                        })
                                  break;
                                }
                        }
                      
                      
                }

//busca las asignaciones
                Asignaest.find({}).exec(function(err, todos500) {
                        if (err){ res.send(err); }


                        var data2=[];
                        for(var i = 0; i < data1.length;i++){
                                for(var j = 0; j < todos500.length;j++){
                                        if(data1[i].idasigna==todos500[j].idasigna)
                                        { 
                                                
                                                var val = buscaarray(todos20ab, data1[i].idasigna , data1[i].idperfil
                                                       , todos500[j].idhorario,todos500[j].idmateria);
                                              
                                                
                                               if(val==0)
                                               {         
                                               Cuentaccoriente.create({ 
                                                idperfil:data1[i].idperfil,
                                                idasigna:data1[i].idasigna,
                                                userId:todos500[j].idestudiante,
                                                periodo:todos500[j].idperiodo.nombre,
                                                nov:data1[i].nov,
                                                carne:data1[i].carne,
                                                nombre:data1[i].nombre,
                                                noboleta:data1[i].noboleta,
                                                monto:data1[i].monto,
                                                cui:data1[i].cui,
                                                idtipounidad:todos500[j].idtipounidad.nombre,
                                                idunidadacademica:todos500[j].idunidadacademica.nombre,
                                                idperiodo:todos500[j].idperiodo.nombre,
                                                idedificio:todos500[j].idedificio.nombre,
                                                idsalon:todos500[j].idsalon.nombre,
                                                idjornada:todos500[j].idjornada,
                                                idestudiante:todos500[j].idestudiante,
                                                idhorario:todos500[j].idhorario,
                                                idmateria:todos500[j].idmateria,
                                                usuarionew:todos500[j].usuarionew,
                                                deudaactual:1000,
                                                deposito1:0, deposito2:0, deposito3:0,  deposito4:0, deposito5:0,
                                                saldoactual:1000,
                                                noboleta2:0,   noboleta3:0,      noboleta4:0,    noboleta5:0
                                                }
                                                        , function(err, todo) {
                                                        if (err){ res.status(500).send(err.message)    }
                                                    
                                                     
                                                
                                                     
                                                        
                                                
                                                    });
                                                }

                                          
                                                
                                        }
                                }
                              
                              
                        }
                                            
res.json(todos500);
                     
                });
        });

});
});





break;
case 'excel-asigna3reduce':


Asignapap.aggregate(
        [
                { 
                        "$group" : {
                            "_id" : {
                                "userId" : "$userId"
                            }, 
                            "COUNT" : {
                                "$sum" : 1
                            }
                        }
                    }, 
                    { 
                        "$project" : {
                            "userId" : "$_id.userId", 
                            "COUNT" : "$COUNT", 
                            "_id" :0
                        }
                    }, 
                    { 
                        "$match" : {
                            "COUNT" : {
                                "$gt" :1
                            }
                        }
                    }
        ], function (err, result) {
                if (err) {
                    next(err);
                } else {

                        var  data1=[]
                 
                        Asignapap.find({}).exec(function(err, todos20) {
                                if (err)
                                { res.send(err); }

                                for(var i = 0; i < result.length;i++){
                                        var encuentra=[]
                                        for(var j = 0; j < todos20.length;j++){

                                                if(todos20[j].userId==result[i].userId)
                                                {

                                                     encuentra.push({id:todos20[j]._id });   
                                                //     data1.push({id:todos20[i]._id + ' ' + todos20[i].cursosaplica +' ' + todos20[i].usuarionew + ' ' +result[j].COUNT + ' '  + result[j].userId});   


                                                     //break;

                                                }


                                        }
                                      
                                        for(var k = 0; k <encuentra.length-1;k++){
                                                data1.push({id:encuentra[k].id});   
                                                      
                                                 //  Asignapap.findByIdAndRemove({ _id: encuentra[k].id }, function(err, todoxxx) {
                                                     //
                                                        //    });
                                        }

                                     

                                      

                                }

                  
                              //  res.json(data1);
                                

                                Asignaest.find({}).exec(function(err, todos200) {
                                        if (err)
                                        { res.send(err); }
                                        var data2=[]        
                                        for(var i = 0; i < todos200.length;i++){
                                                for(var j = 0; j < data1.length;j++){
        
                                                        if(todos200[i].idasigna==data1[j].id)
                                                        {
                                                              data2.push({id:todos200[i]._id,nombre:todos200[i].nombre,materia:todos200[i].idmateria,horario:todos200[i].idhorario,usu1: todos200[i].usuarionew});   
                                                               // res.json(todo);
                                                          //  });


                                                            break;

        
                                                        }
        
        
                                                }
                                        }  


                                           
                                                      
                                        
                                        res.json(data2);

                                });


                                
                        
                        });


                    
                }
            });

    
  //  res.json(aa);
    break;

case 'excel-asigna3':

var filename   = "Fichapap.csv";

Userperfil.find({}).exec(function(err, todos20) {
        if (err){ res.send(err); }
     
                        Asignapap.find({}).exec(function(err, todos2) {
                                if (err){ res.send(err); }
                           
                                if(todos2.length>0)   {  
                                         var myData = [];
                                        for(var i = 0; i < todos20.length;i++){
                                                var ii=0;
                                                for(var j = 0; j < todos2.length;j++){
                                                        if(todos20[i].usuarionew==todos2[j].usuarionew)
                                                        {
ii=1;
                                                             
                                                
                                        myData.push({usuarionew:todos20[i].usuarionew,idasigna:todos2[j]._id,nov:todos20[i].nov,carne:todos20[i].carne,
                                                codigounidad:todos2[j].idunidadacademica.codigo,unidadacademica:todos2[j].idunidadacademica.nombre
                                                ,cui:todos2[j].cui ,noboleta:todos2[j].noboleta ,montoboleta:todos2[j].montodeuda,cursosaplica:todos2[j].cursosaplica
                                                ,montopago:todos2[j].monto,nombre:todos2[j].nombre
                                        });
                                                  break;
                                        

                                                        }  
                                                }
                                              if(ii==0)
                                              {//encuentra todos los userperfil que no tengan asiganpap
                                             //   console.log(todos20[i]);
                                                console.log(todos20[i]._id  + ',' + todos20[i].userId + ',' + todos20[i].cui+ ',' + todos20[i].nov + ',' + todos20[i].nombre1+ ' ' + todos20[i].nombre2 + ' ' + todos20[i].nombre3+ ' ' + todos20[i].nombre4+ ',' + todos20[i].usuarionew);
                                              //  console.log(todos20[i]._id + ','+todos20[i].cui + ',' + ','+todos20[i].nombre1 + ' ' + todos[i].nombre2+ ' '+ todos20[i].nombre3 + ' ' + todos[i].nombre4 + ','+todos20[i].carne + ','+todos20[i].userId+ ','+todos20[i].usuarionew )
                                          /*    date: 2019-02-25T15:05:19.484Z,
                                              _id: 5c74042f8859720016d9b40d,
                                              userId: '5bbd134e20477c0013e36754',
                                              cui: '3035538710110',
                                              nov: '2018039111',
                                              nombre1: 'Luis',
                                              nombre2: 'Fernando',
                                              nombre3: 'Chajón',
                                              nombre4: 'Hernández',
                                              telefono: '49092537',
                                              fechanac: 2001-04-18T00:00:00.000Z,
                                              genero: 'Masculino',
                                              */
                                              }

                                        }
                                                //busca todos los usuarios que tengan asinacion papa
                                        Asignaest.find({}).exec(function(err, todos200) {
                                                if (err){ res.send(err); }

                                                var myData2 = [];
                                                 var  aaa=1;
                                                for(var j = 0; j < todos200.length;j++){
                                                        aaa=1;
                                                           for(var i = 0; i < myData.length;i++){

                                                       
                                                                if(todos200[j].idasigna==myData[i].idasigna)
                                                                {

                                                                                  
                                                                        myData2.push({idasigna:myData[i].idasigna,nov:myData[i].nov,carne:myData[i].carne,
                                                                                nombre:myData[i].nombre,montopago:myData[i].montopago,
                                                                                codigounidad:myData[i].codunidad,unidadacademica:myData[i].unidadacademica
                                                                                ,cui:myData[i].cui ,noboleta:myData[i].noboleta ,montoboleta:myData[i].montoboleta,
                                                                                cursosaplica:myData[i].cursosaplica,
                                                                                edificio:todos200[j].idedificio.nombre,
                                                                                salon:todos200[j].idsalon.nombre,
                                                                                jornada:todos200[j].idjornada,
                                                                                horario:todos200[j].idhorario,
                                                                                materia:todos200[j].idmateria,
                                                                                noasignado:todos200[j].noasignado,cantidad:1
                                                                        });
                                                                        aaa=0;
                                                                                break;

                                                                }
                                                        }
                                                                if(aaa==1)
                                                                {
                                                                       

                                                                                //encuentra todos los asigna papa que no tengan asignacion
                                                                                //hay que borrar o volver a generar
                                                                              console.log(todos200[j].idasigna + ','+ todos200[j].nombre+ ','+ todos200[j].idestudiante+ ','+ todos200[j].no_orientacion+ ','+ todos200[j].idmateria+ ' '+ todos200[j].jornada+ ' '+ todos200[j].idhorario + ' '+ todos200[j].idsalon.nombre)

                                                                            

                                                                        

                                                                }

                                                }

                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                res.csv(myData2, true);
                                             //   res.json(myData2);


                                        });

                                     
                
                                      
                                
                                }

                        });

});

break;
        default:

  


    }




    
}