
var Catusuario = require('../models/catusuario');
var Bitacora = require('../models/bitacora');
var Dcatalogo = require('../models/dcatalogo');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var frmmovil = require('../models/frmmovil');

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


exports.getCatusuario = function(req, res, next){
    
    if(req.params.id4)
    {  
        if(req.params.id2=='categoria')
        {
            Catusuario.find({'idcategoria':req.params.id,idempresa:req.params.id3}).populate('idusuario').populate('idformulario').exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
    
        }
        else
        {
            if(req.params.id2=='categoriausrmoviladmin')
            {

                var filtrott=req.params.id4

                if(req.params.id4==='formulario')
                {
                    filtrott={$in:[req.params.id4,'paginas']};
                }
                frmmovil.find({idempresa:req.params.id,tipo:filtrott,publico:'Si'}).
                exec(function(err, todosa) {
                 
                    if (err){  res.send(err);  }
                    //if(todosa.length===0)       {res.json([]);}         else                 {
             
                    formulariousrd.find({idempresa:req.params.id,tipo:req.params.id4,idusuario:req.params.id3}).populate('idpapa').populate('idformulario').exec(function(err, todos) {

                        if(todos.length===0)
                        {
                            
                            
                            if(todosa.length===0)//no existen procesos publicos
                            {res.json([]);}
                            else
                            {
                                for(var i = 0; i< todosa.length; i++){    
                                    if(todosa[i].categoria && todosa[i].categoria!==null)
                                    {
                                    if(uniqueNames.indexOf(todosa[i].categoria+ '°' + todosa[i].tipo) === -1){
                                        uniqueNames.push(todosa[i].categoria+ '°' + todosa[i].tipo);        
                                    }        }
                                }
            
                                for(var i = 0; i< uniqueNames.length; i++){    
                                    myData.push({nombre: uniqueNames[i].split('0') ,tipo: uniqueNames[i].split('1')});
                                  
                                }
            
                           
            
                                
                                res.json(myData);
        
        
                            }
                            
                        
                        }
                        else
                        {
                        if (err){  res.send(err);  }
                        var myData = [];
                      
                        var uniqueNames = [];
                        for(var i = 0; i< todos.length; i++){    
                            if(todos[i].idformulario && todos[i].idformulario !==null&& todos[i].tipo!=='paginas')
                            {
                            if(uniqueNames.indexOf(todos[i].idformulario.categoria ) === -1){

                                uniqueNames.push(todos[i].idformulario.categoria );        
                            }        
                        }
                        }
    
                        for(var i = 0; i< todosa.length; i++){    
                            if(todosa[i].categoria && todosa[i].categoria!==null && todosa[i].tipo!=='paginas')
                            {
                                if(uniqueNames.indexOf(todosa[i].categoria) === -1){
                                    uniqueNames.push(todosa[i].categoria );        
                                } 

                            }
                                 
                        }
    
                        for(var i = 0; i< uniqueNames.length; i++){    
                            myData.push({nombre: uniqueNames[i],tipo: 'na',link:'na'});
                          
                        }

                        for(var i = 0; i< todosa.length; i++){    
                            if( todosa[i].tipo==='paginas')
                            {
                                myData.push({nombre: todosa[i].nombre,tipo: todosa[i].tipo,link:todosa[i].descripciong});
                        }
                        }

    
                        res.json(myData);
                    }
    
                      
    
                    });
               // }
             
                 });
        
            }
            else
            {
            if(req.params.id2=='categoriausrmovil')
            {


                var filtrott=req.params.id4

                if(req.params.id4==='formulario')
                {
                    filtrott={$in:[req.params.id4,'paginas']};
                }
                frmmovil.find({idempresa:req.params.id,tipo:filtrott,publico:'Si'}).
                exec(function(err, todosa) {

                    var myData = [];
                  
                         
                    var uniqueNames = [];
               
                    if (err){  res.send(err);  }
                formulariousrd.find({idempresa:req.params.id,tipo:req.params.id4,idusuario:req.params.id3}).populate('idpapa').populate('idformulario').exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    if(todos.length===0)
                    {
                        
                        
                    if(todosa.length===0)//no existen procesos publicos
                    {res.json([]);}
                    else
                    {
                        for(var i = 0; i< todosa.length; i++){    
                            if(todosa[i].categoria && todosa[i].categoria!==null && todosa[i].tipo!=='paginas')
                            {
                            if(uniqueNames.indexOf(todosa[i].categoria) === -1){
                                uniqueNames.push(todosa[i].categoria);        
                            }        }
                        }
    
                        for(var i = 0; i< uniqueNames.length; i++){    
                            myData.push({nombre: uniqueNames[i] });
                          
                        }
    
                        for(var i = 0; i< todosa.length; i++){    
                            if( todosa[i].tipo==='paginas')
                            {
                                myData.push({nombre: todosa[i].nombre,tipo: todosa[i].tipo,link:todosa[i].descripciong});
                        }
                        }

    
                        
                        res.json(myData);


                    }
                    
                    }
                    else
                    {    
                    for(var i = 0; i< todos.length; i++){    
                        if(todos[i].idformulario && todos[i].idformulario !==null && todos[i].tipo!=='paginas')
                        {
                        if(uniqueNames.indexOf(todos[i].idformulario.categoria) === -1){
                            uniqueNames.push(todos[i].idformulario.categoria);        
                        }     
                    }   
                    }

                    for(var i = 0; i< todosa.length; i++){    
                        if(todosa[i].categoria && todosa[i].categoria!==null && todosa[i].tipo!=='paginas') 
                        {
                        if(uniqueNames.indexOf(todosa[i].categoria) === -1){
                            uniqueNames.push(todosa[i].categoria);        
                        }        }
                    }

                    for(var i = 0; i< uniqueNames.length; i++){    
                        myData.push({nombre: uniqueNames[i] });
                      
                    }

               
                    for(var i = 0; i< todosa.length; i++){    
                        if( todosa[i].tipo==='paginas')
                        {
                            myData.push({nombre: todosa[i].nombre,tipo: todosa[i].tipo,link:todosa[i].descripciong});
                    }
                    }

                    
                    res.json(myData);
                }

                  

                });

            
                 });
        
            }
            else
            {
            if(req.params.id2=='categoriausr')
            {
                Catusuario.find({'idusuario':req.params.id,idempresa:req.params.id3}).populate('idcategoria').exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    var myData = [];
                    for(var i = 0; i < todos.length;i++){
                        myData.push({_id:todos[i].idcategoria._id,nombre:todos[i].idcategoria.nombre });
                    }
    

                    var unique =   myData.filter( onlyUnique );

                    var myData2 = [];
                    var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                    var j=0;
                                 for(var i = 0; i < unique.length;i++){
                                    if(j==6){j=0;} 
                                     myData2.push({_id:unique[i]._id,nombre:unique[i].nombre,"colort":"box " + arre[j] });
                                     j=j+1;
                                 }
                 
                                  res.json(myData2);


                  


                 });
        
            }
            else
            {
                if(req.params.id2=='categoriausr22')
                {

         
                     Dcatalogo.find({idcatalogo:req.params.id,idempresa:req.params.idempresa},function(err, todos) {
                        if (err){  res.send(err);  }
                        var myData = [];
                        for(var i = 0; i < todos.length;i++){
                            myData.push({_id:todos[i]._id,nombre:todos[i].nombre });
                        }
        
    
                        var unique =   myData.filter( onlyUnique );
    
                        var myData2 = [];
                        var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                        var j=0;
                                     for(var i = 0; i < unique.length;i++){
                                        if(j==6){j=0;} 
                                         myData2.push({_id:unique[i]._id,nombre:unique[i].nombre,"colort":"box " + arre[j] });
                                         j=j+1;
                                     }
                     
                                      res.json(myData2);
    
    
                      
    
    
                     });
            
                }
                else
                {
        
                    if(req.params.id2=='categoriausr222')
                    {
    
             
                         Dcatalogo.find({idcatalogo:req.params.id,_id:req.params.id3},function(err, todos) {
                            if (err){  res.send(err);  }
                            var myData = [];
                            for(var i = 0; i < todos.length;i++){
                                myData.push({_id:todos[i]._id,nombre:todos[i].nombre });
                            }
            
        
                            var unique =   myData.filter( onlyUnique );
        
                            var myData2 = [];
                            var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                            var j=0;
                                         for(var i = 0; i < unique.length;i++){
                                            if(j==6){j=0;} 
                                             myData2.push({_id:unique[i]._id,nombre:unique[i].nombre,"colort":"box " + arre[j] });
                                             j=j+1;
                                         }
                         
                                          res.json(myData2);
        
        
                          
        
        
                         });
                
                    }
                    
                }
                
            }}}

        }
    }
    else
    {
       if(req.params.id)
        {  
                Catusuario.find({_id:req.params.id}).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    if(todos.length>0)   {    res.json(todos);   }
                    
                });
        }
        else
        { Catusuario.find({}).populate('idusuario').populate('idformulario').exec(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }}
 
}
exports.deleteCatusuario = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Categoria usuario '});
    Catusuario.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaCatusuario2s = function(req, res, next){
   
 
   
if(req.params.recordID!=='crea')
{  Bitacora.create(req.body.bitacora);
    Catusuario.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.idempresa        	=	req.body.idempresa        	||	todo.idempresa        	;
            todo.idcategoria        	=	req.body.idcategoria        	||	todo.idcategoria        	;
            todo.idusuario        	=	req.body.idusuario        	||	todo.idusuario        	;
            todo.idformulario        	=	req.body.idformulario        	||	todo.idformulario        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{

    Bitacora.create(req.body.bitacora);
    Catusuario.find({idusuario:req.body.idusuario ,idcategoria:req.body.idcategoria,idformulario        	: req.body.idformulario        },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un formulario asignado a este usuario'); }
        else
        {   

            Catusuario.create({
                idempresa        	: req.body.idempresa        	,
                idcategoria        	: req.body.idcategoria        	,
                idusuario        	: req.body.idusuario       ,
                idformulario        	: req.body.idformulario       ,
                nombre        	: req.body.nombre       ,
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



