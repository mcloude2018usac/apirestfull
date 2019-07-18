
var Denunciaunidad = require('../models/denunciaunidad');
var Bitacora = require('../models/bitacora');
var Denuncia = require('../models/participa3');
var dCatalogo = require('../models/dcatalogo');
var denunciaunidad = require('../models/denunciaunidad');
var Participa3 = require('../models/participa3');
var Participa33 = require('../models/participa33');

var datipo = function(datat,op) {
    var rr=''
    for (var i = 0; i < datat.length; i++) {
            if (datat[i]._id == op) {
                rr=datat[i].nombre
                break;
            }
        
    }

    return rr;
};

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


function diff_hours(dt2, dt1) 
{

 var diff =(dt2.getTime() - dt1.getTime()) / 1000;
 diff /= ( 60 * 60 * 24);
 return Math.abs(Math.round(diff));
 
}

exports.getDenunciaunidad = function(req, res, next){
    if(req.params.id5)
    {  

   
            if(req.params.id3=='denunciasxxx2')
        {  
    
         
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
                        var arrxx=(req.params.id).split(',');
                        var f1=(arrxx[0]).substr(0,10);  
                        var f2=(arrxx[1]).substr(0,10);  
         
                        Participa3.find({tipo:{$in:myData3},"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),    "$lt": new Date(f2 +'T24:00:00.000Z')}}).exec(function(err, todos2) {
                                if (err){  res.send(err);  }
             
                              
    
                                                                    
                   
                            
    
    //todos----------------------------------------------------------------
    console.log(todos2)
    var occurences = todos2.reduce(function (r, row) {
        r[row.estado] = ++r[row.estado] || 1;
        return r;
    }, {});
    
    
    var result4 = Object.keys(occurences).map(function (key) {
        return { tipo: key, cantidad: occurences[key] };
    });
              
    
    console.log(result4)
                          
                            var myfinal = [];
                            myfinal.push({activas:null,ejecucion:null,cerradas:null,todos:result4});
                             res.json(myfinal);     
              
                 
                       

                });
    
            
              
                });
             });
    
    
    
        }
        else
        {
        if(req.params.id3=='denunciasxxx')
    {  console.log(req.params.id4)
        if(req.params.id4==undefined)      {     }     else{       req.params.id4='TODOS'      }
        if(req.params.id5==undefined)      {     }     else{       req.params.id5='TODOS'      }

                    var filtro;
                    if(req.params.id4=='TODOS' &&  req.params.id5=='TODOS')
                    {
                        filtro={'jefeop':req.params.id2}
                    }
                    else{
                        if(req.params.id4!='TODOS' &&  req.params.id5!='TODOS')
                        {
                            //req.params.id4     req.params.id5 --

                            //ir a traer todos los jefes de esa unidad a la tabla
                            var aa=(req.params.id5).split(',')
                            filtro={jefeop:{$in:aa}}
                        }
                        else{
                
                                        if(req.params.id4!='TODOS' &&  req.params.id5=='TODOS')
                                        {
                                            //req.params.id4     req.params.id5 --
                
                                            //ir a traer todos los jefes de esa unidad a la tabla
                                            var aa=(req.params.id4).split(',')
                                            filtro={jefeop:{$in:aa}}
                                        }
                                        else{
                                                    if(req.params.id4=='TODOS' &&  req.params.id5!='TODOS')
                                                    {
                                                        //req.params.id4     req.params.id5 --
                            
                                                        //ir a traer todos los jefes de esa unidad a la tabla
                                                        var aa=(req.params.id4).split(',')
                                                        filtro={jefeop:{$in:aa}}
                                                    }
                                                    else{
            
                                                        filtro={'jefeop':req.params.id2}
            
                                                    }   
    


                                        }   
                            
                        }
                

                    }

console.log(filtro)
                
                    Denunciaunidad.find(filtro).exec(function(err, todos) {
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
                                var arrxx=(req.params.id).split(',');
                                var f1=(arrxx[0]).substr(0,10);  
                                var f2=(arrxx[1]).substr(0,10);  
                
                                Participa3.find({tipo:{$in:myData3},"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),    "$lt": new Date(f2 +'T24:00:00.000Z')}}).populate('tipo').populate('idusuario').exec(function(err, todos2) {
                                        if (err){  res.send(err);  }
                    
                                        var myData31 = [];
                                        var mydata41=[]
                                        var mydata42=[]
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

                                                                            
                                            dt1 = new Date(todos2[i].createdAt);
                                            dt2 = new Date();

                                        if(idusuario!='')
                                        {
            

                                                //ejecutadose
                                                if(todos2[i].estado=='Cerrado')
                                                {

                                                    mydata42.push({horas:diff_hours(dt1, dt2),
                                                        nombre:todos2[i].nombre ,correo:todos2[i].correo
                                                        ,xpos:todos2[i].xpos,ypos:todos2[i].ypos,
                                                    estado:todos2[i].estado,tipo:todos2[i].tipo.nombre,
                                                    createdAt:new Date( todos2[i].createdAt).toISOString().substr(0,10)
                                                ,usuarioseguimiento:idusuario,estadoseguimiento:estadoasignada,fechaseguimiento:fechaasignada,cantidad:1})
                
                                                }
                                                else
                                                {

                                                    mydata41.push({horas:diff_hours(dt1, dt2),
                                                        nombre:todos2[i].nombre ,correo:todos2[i].correo
                                                        ,xpos:todos2[i].xpos,ypos:todos2[i].ypos,
                                                    estado:todos2[i].estado,tipo:todos2[i].tipo.nombre,
                                                    createdAt:new Date( todos2[i].createdAt).toISOString().substr(0,10)
                                                ,usuarioseguimiento:idusuario,estadoseguimiento:estadoasignada,fechaseguimiento:fechaasignada,cantidad:1})
                
                                                }
                                            

                                        }     
                                        else{
                                                //activas

                                                myData31.push({horas:diff_hours(dt1, dt2),nombre:todos2[i].nombre ,correo:todos2[i].correo,
                                                        xpos:todos2[i].xpos,ypos:todos2[i].ypos,
                                                    estado:todos2[i].estado,tipo:todos2[i].tipo.nombre,
                                                    createdAt:new Date( todos2[i].createdAt).toISOString().substr(0,10)
                                                    ,usuarioseguimiento:'',estadoseguimiento:'',fechaseguimiento:''})
                                                    
                
                                        }  


                                    }

                //---------------------------------------------------------- ACTIVAS
                                    var occurences = myData31.reduce(function (r, row) {
                                        r[row.tipo] = ++r[row.tipo] || 1;
                                        return r;
                                    }, {});
                                    
                                    var result = Object.keys(occurences).map(function (key) {
                                        return { tipo: key, cantidad: occurences[key] };
                                    });
                                    
            //EJECUTANDOSE----------------------------------------------------------------

            var occurences = mydata41.reduce(function (r, row) {
                r[row.tipo] = ++r[row.tipo] || 1;
                return r;
            }, {});

            var result2 = Object.keys(occurences).map(function (key) {
                return { tipo: key, cantidad: occurences[key] };
            });

            //cerradas----------------------------------------------------------------

            var occurences = mydata42.reduce(function (r, row) {
                r[row.tipo] = ++r[row.tipo] || 1;
                return r;
            }, {});

            var result3 = Object.keys(occurences).map(function (key) {
                return { tipo: key, cantidad: occurences[key] };
            });
                    


            //todos----------------------------------------------------------------

            var occurences = todos2.reduce(function (r, row) {
                r[row.tipo.nombre] = ++r[row.tipo.nombre] || 1;
                return r;
            }, {});


            var result4 = Object.keys(occurences).map(function (key) {
                return { tipo: key, cantidad: occurences[key] };
            });
                    


                                
                                    var myfinal = [];
                                    myfinal.push({activas:result,ejecucion:result2,cerradas:result3,todos:result4});
                                    res.json(myfinal);     
                    
                        
                            
                        
                        }
                        );

                    
                    
                        });
                    });



    }
    else
    {
                                var f1=req.params.id
                                var f2=req.params.id2
                               
                            
                                dCatalogo.find({idcatalogo:'5c6394cbcffe290016d494b5'},function(err, todos10) {
                                    if (err){ res.send(err); }

                               
                                                Denuncia.aggregate([
                                                    { $match:{
                                                        "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                                                        "$lt": new Date(f2 +'T24:00:00.000Z')}
                                                    }},
                                                
                                                    { $group: {
                                                    _id:  { tipo:"$tipo", estado:"$estado"},
                                                    "cantidad":{$sum:1}
                                                    },
                                                }
                                                ], function (err, todos) {
                                                    if (err){ res.send(err); }
                                            
                                                    var myData = [];
                                                    for(var i = 0; i < todos.length;i++){
                                                     //   console.log(todos[i])
                                                         myData.push({tipo:datipo(todos10,todos[i]._id.tipo),cantidad:todos[i].cantidad,estado:todos[i]._id.estado ,tipito:todos[i]._id.tipo});
                                                    }
                                                   
                                                    var filtro;
                                                    if(req.params.id3=='TODOS' )
                                                    {
                                                        filtro={     estado:'Ejecutando'   };
                                                    }
                                                    else
                                                    {
                                                        filtro={     estado:'Ejecutando' ,unidad: req.params.id3 };
                                                    }

                                                    denunciaunidad.find(filtro).populate('unidad').populate('categoria').exec(function(err, todos100) {
                                                        if (err){ res.send(err); }

                                                        var myData2 = [];
                                                        for(var i = 0; i < todos100.length;i++){

                                                                for(var j = 0; j < myData.length;j++){
                                                                    if(todos100[i].categoria.nombre==myData[j].tipo)
                                                                    {
                                                                        myData2.push({tipo:myData[j].tipo,estado:myData[j].estado,tipito:myData[j].tipito,
                                                                            cantidad:myData[j].cantidad,
                                                                            unidad:todos100[i].unidad.nombre,unidadestado: todos100[i].unidad.nombre + '-' +myData[j].estado });
                                                                    }
                                                                    
                                                                }
                                                                
                                                        }

                                                        res.json(myData2);
                                                    });         
                                                });
                            });
    }}}
    else
    {   
    if(req.params.id2)
    {  
        if(req.params.id=='jefeope')
        {
                
            Denunciaunidad.find({'jefeop':req.params.id2}).exec(function(err, todos) {
                if (err){  res.send(err);  }
               
                var myData = [];
                for(var i = 0; i < todos.length;i++){
                    for(var i2 = 0; i2 < todos[i].operadores.length;i2++){
                        myData.push({nombre:todos[i].operadores[i2].nombre ,_id:todos[i].operadores[i2]._id});
                    }
                    
            }

               
                 res.json(myData);
             });
    
        }
        else
        {
        
        if(req.params.id=='todos')
        {

            Denunciaunidad.find({'unidad':req.params.id2}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                console.log(todos)
                 res.json(todos);
             });
    
        }
        else
        {

            if(req.params.id=='unidadesejecutandose')
            {

                Denunciaunidad.find({estado:'Ejecutando'}).populate('unidad').populate('categoria').exec(function(err, todos) {
                    if (err){  res.send(err);  }

                    var myData = [];
                    for(var i = 0; i < todos.length;i++){
                     //   console.log(todos[i])
                         myData.push({_id:todos[i].unidad._id,nombre:todos[i].unidad.nombre });
                    }

                 

                    var unique =   myData.filter( onlyUnique );

                    var myData2 = [];
                                 for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,nombre:unique[i].nombre });
                                 }
                 
                                  res.json(myData2);

                     
                 });
    
            }
            
        }
    

        }

       
       
       
    }
    else
    {
       if(req.params.id)
        {  
           
                Denunciaunidad.find({_id:req.params.id}).exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Denunciaunidad.find({}).populate('unidad').exec(function(err, todos) {
               if (err){  res.send(err);  }
               console.log(todos)
                res.json(todos);
            });
        }}}

 
}
exports.deleteDenunciaunidad = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Denunciaunidad '});
    Denunciaunidad.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaDenunciaunidad2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 


    Denunciaunidad.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            todo.categoria        	=	req.body.categoria        	||	todo.categoria        	;
            todo.jefeop        	=	req.body.jefeop        	||	todo.jefeop        	;
            todo.operadores        	=	req.body.operadores        	||	todo.operadores        	;
            todo.unidad        	=	req.body.unidad        	||	todo.unidad        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.estado        	=	req.body.estado        	||	todo.estado        	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }   
    });

}
else{

  

    Denunciaunidad.find({unidad:req.body.unidad ,categoria:req.body.categoria,jefeop        	: req.body.jefeop  },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe esta unidad , categoria y jefe de operaciones'); }
        else
        {   

            Denunciaunidad.create({
                categoria        	: req.body.categoria        	,
                unidad        	: req.body.unidad       ,
                nombre        	: req.body.nombre       ,
                estado        	: req.body.estado       ,
                jefeop        	: req.body.jefeop       ,
                operadores        	: req.body.operadores       ,
                usuarionew:req.body.bitacora.email, 
              }
                , function(err, todo) {
                if (err){ 
                   
                    res.status(500).send(err.message)    }
            
                res.json(todo);
        
             
                
        
            });

            
             }
        
    });
   
 
}

}



