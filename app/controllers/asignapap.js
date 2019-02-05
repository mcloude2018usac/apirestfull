var Asignapap = require('../models/asignapap');
var Bitacora = require('../models/bitacora');
var Userperfil = require('../models/userperfil2');

var Facultadmateria = require('../models/facultadmateria');

function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

  
exports.getAsignapap = function(req, res, next){

        if(req.params.id)
        {  
           
                Asignapap.find({userId:req.params.id}).exec(function(err, todos) {
                    if (err){ res.send(err); }

                    
                    res.json(todos);
                });
             
           
        }
        else
        { Asignapap.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    
 
}
exports.deleteAsignapap = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina solicitud de carne'});
    Asignapap.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaAsignapap2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Asignapap.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {    
            todo.userId =req.body.userId ;
            todo.idunidadacademica  ={id:req.body.idunidad,nombre:req.body.idnombre   }   	;
            todo.idperiodo   		=req.body.idperiodo ;
            todo.noboleta=req.body.noboleta ;
            todo.monto=req.body.monto ;
            todo.lenguaje=req.body.lenguaje;
            todo.matematica=	req.body.matematica ;
            todo.fisica	=req.body.fisica ;
            todo.biologia=	req.body.biologia ;
            todo.quimica	=req.body.quimica;
            todo.nota	=req.body.nota;
            todo.estado	=req.body.estado;
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Userperfil.find(  { userId:req.body.userId
    }).exec(function(err, todos) {
            if (err){ res.send(err); }

            if(todos.length==0)   {    res.status(500).send('No existe'); }
            else
            { 
                var carr= (todos[0].facultadins).split(',')
                console.log(carr[0] + ' '+carr[1] + ' '+carr[2] + ' '+todos[0].nombre1 + ' '+todos[0].nombre2 + ' ' +todos[0].nombre3+' '+ todos[0].nombre4)



                Facultadmateria.find({idtipounidad :'5b97f1bceb1dab0ab0368cc6',idunidadacademica:carr[0]},function(err, todos10) {
                    if (err){ res.send(err); }
                   

                      var l1 = false;
                      var f1 = false;
                      var m1 = false;
                      var q1 = false;
                      var b1 = false;
                      var montot=0;
                      var cursostt=''
       
           if(todos10[0].lenguaje==true){ l1=true; montot=1000  ;cursostt='Lenguaje'  }
           if(todos10[0].fisica==true){ f1=true;   montot=montot+1000 ; cursostt=cursostt + ' ,Fisica'  }
           if(todos10[0].matematica==true){ m1=true; montot=montot+1000    ; cursostt=cursostt + ' ,Matematica' }
           if(todos10[0].quimica==true){ q1=true; montot=montot+1000 ; cursostt=cursostt + ' ,Quimica'   }
           if(todos10[0].biologia==true){ b1=true; montot=montot+1000  ; cursostt=cursostt + ' ,Biologia'   }
   

           Asignapap.create({  
            userId :req.body.userId ,
            idunidadacademica  :{id:carr[0],nombre:carr[1],codigo:carr[2]}	,
            idperiodo   		:req.body.idperiodo ,
            noboleta:todos[0].noboleta ,
            monto:todos[0].montoboleta ,
            cui:todos[0].cui ,
            nombre:todos[0].nombre1+ ' ' + todos[0].nombre2 + ' ' + todos[0].nombre3 + ' ' + todos[0].nombre4  ,
            montodeuda:montot,
            cursosaplica:cursostt,
            lenguaje:l1,
            matematica:	m1 ,
            fisica	:f1 ,
            biologia:	b1 ,
            quimica	:q1,
            nota	:req.body.nota,
            estado	:req.body.estado,
            usuarionew:req.body.bitacora.email
            
          }
            , function(err, todo22) {
            if (err){ res.status(500).send(err.message)    }

            res.json(todo22);
    
        });

                    
                    
                });
             
           


            }
           
        });



/*
                            Asignapap.create({  
                                userId :req.body.userId ,
                                idunidadacademica  :req.body.idunidadacademica	,
                                idperiodo   		:req.body.idperiodo ,
                                noboleta:req.body.noboleta ,
                                monto:req.body.monto ,
                                lenguaje:req.body.lenguaje,
                                matematica:	req.body.matematica ,
                                fisica	:req.body.fisica ,
                                biologia:	req.body.biologia ,
                                quimica	:req.body.quimica,
                                nota	:req.body.nota,
                                estado	:req.body.estado,
                                usuarionew:req.body.bitacora.email
                                
                              }
                                , function(err, todo22) {
                                if (err){ res.status(500).send(err.message)    }

                                res.json(todo22);
                        
                            });
                            */
 
}

}



