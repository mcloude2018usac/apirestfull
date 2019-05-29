
var Denunciaunidad = require('../models/denunciaunidad');
var Bitacora = require('../models/bitacora');
var Denuncia = require('../models/participa3');
var dCatalogo = require('../models/dcatalogo');
var denunciaunidad = require('../models/denunciaunidad');

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


exports.getDenunciaunidad = function(req, res, next){
    if(req.params.id3)
    {  

        if(req.params.id3=='denunciasxxx')
    {  

        var ee=''
                                                        if(req.params.id=='1')
                                                {
                                                    ee='Solicitando requerimiento'
                                                }

                                                                        
                                                                        if(req.params.id=='2')
                                                                        {
                                                                            ee='Denuncia en proceso'
                                                                        }

                                                                        
                                                                        if(req.params.id=='3')
                                                                        {
                                                                            ee='Denuncia finalizada'
                                                                        }

                                                                                                            Denuncia.find({estado:ee,tipo:req.params.id2},function(err, todos10) {
                                                                                                                if (err){ res.send(err); }
                                                                                                                res.json(todos10);

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
                                              //      console.log(todos)
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
    }}
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

    console.log(req.body);
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

    console.log(req.body);

    Denunciaunidad.find({unidad:req.body.unidad ,categoria:req.body.categoria },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe esta unidad relacionada con esta categoria'); }
        else
        {   console.log(req.body)

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



