
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
                            
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function datipo(value) {
var tt='';
switch(value) {
    case 'Alfanumerico':  tt='String';   break;
   case 'Numerico':  tt='Number';   break;
   case 'TextArea':   tt='String';   break;
   case 'Etiqueta':   tt='String';   break;
   case 'Lista de valores':   tt='String';   break;
    default:
      // code block
  }
    return tt;
  }

  function datipo2(value) {
    var tt='';
    switch(value) {
        case 'Alfanumerico':  tt='text';   break;
       case 'Numerico':  tt='number';   break;
       case 'TextArea':   tt='textarea';   break;
       case 'Etiqueta':   tt='label';   break;
       case 'Lista de valores':   tt='select';   break;
        default:
          // code block
      }
        return tt;
      }
    
//var newJsonString = objectToString(jsonObject);
//console.log(newJsonString)
  // Convert JSON format string to js object.
  function stringToObject(JSONString) {
      var jsonObject = JSON.parse(JSONString);
      return jsonObject;
  }
  
  // Convert javascript object to json string.
  function objectToString(jsObject) {
  
      var jsonString = JSON.stringify(jsObject);
  
      console.log("New JSON String : " + jsonString);
  
      return jsonString;
  }
  
 
 
exports.getFrmmovil = function(req, res, next){

    if(req.params.id3)
    {
        if(req.params.id3=='formulariod')
        {
            console.log(req.params.id2);


        }
        else
        {    
        Catusuario.find({'idcategoria':req.params.id,'idusuario':req.params.id2}).populate('idformulario').exec(function(err, todos) {
            if (err){  res.send(err);  }
            var myData = [];
          
            for(var i = 0; i < todos.length;i++){
                myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado });
            }
           

            var unique =   myData.filter( onlyUnique );
          
            var myData2 = [];
                          for(var i = 0; i < unique.length;i++){
                             myData2.push({_id:unique[i]._id,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado});
                         }
         
                          res.json(myData2);
                        });

    }}
    else
    {
    if(req.params.id2)
    { 
        switch(req.params.id2) {
            case 'estado':
                    Frmmovil.find({estado:req.params.id},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'categoria':
              Frmmovil.find({categoria:req.params.id},function(err, todos) {
                  if (err){  res.send(err);  }
                  res.json(todos);
                  
              });
        break;
        case 'formulariocamposver':
        Frmmovild.find({idmovil:req.params.id},function(err, todos) {
            if (err){  res.send(err);  }
            var data=[]
            for(var i = 0; i < todos.length;i++){
                if(todos[i].display=='true')
                {
                    data.push(todos[i].name)
                }
                
            }
            res.json(data);
            
        });
        break;
        case 'formulario':
            var namess=req.params.id
                Frmmovild.find({idmovil:req.params.id, display : "true"}).populate('type').exec(function(err, todos) {
                    if (err){ res.send(err); }
                                        if(todos.length>0)   {     
                                            var cad=''
                                            for(var i = 0; i < todos.length;i++){
     
                                                cad=cad+'"'+todos[i].nombre+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
                                            
                                            }
                                            cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
    
                                            var jsonObject = stringToObject(cad);
                                            var mongoose = require("mongoose");
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
    
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find({},function(err, todos2) {
                                                    if (err){  res.send(err);  }
                                                    res.json(todos2); 
                                                  
                                                });
                                              } catch(e) {
                                                 // console.log(e)
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find({},function(err, todos2) {
                                                     if (err){  res.send(err);  }
                                                     res.json(todos2); 
                                                   
                                                 });
                                              }
    
    
                                         
                            
                    }
                });
            
           
  break;
  case 'formulariod':
  var namess=req.params.id
 
  Frmmovild.find({idmovil:req.params.id}).populate('type').exec(function(err, todos) {
      if (err){ res.send(err); }
                          if(todos.length>0)   {   
                              
                            var data=[];
                            for(var i = 0; i < todos.length;i++){
                                data.push({    
                                idmovil	:  todos[i].idmovil._id,
                                type   		: datipo2(todos[i].type.nombre) ,
                                name   		: todos[i].name,
                                nombre   		:  todos[i].nombre,
                                order:	  todos[i].order,
                                title:   todos[i].title,
                                estado	:  todos[i].estado,
                                required: 	 todos[i].required,
                                placeholder:  todos[i].placeholder,
                                display:  todos[i].display,
                                selected:  todos[i].selected,
                                disabled:  todos[i].disabled,
                                hidden:   todos[i].hidden,
                                position:  todos[i].position,
                                labelsizefondt:  todos[i].labelsizefondt,
                                });


                            }
                            res.json(data); 
      }
  });

break;
            default:
              // code block
          }
    }
    else
    {
                if(req.params.id)
                { 
                        Frmmovil.find({_id:req.params.id},function(err, todos) {
                            if (err){ res.send(err); }
                        
                            if(todos.length>0)   {    res.json(todos);   }
                            else
                            {  res.status(500).send('NO EXISTE REGISTRO');      }
                            
                        });
                
                }
                else
                {             Frmmovil.find({}).populate('categoria').exec(function(err, todos) {
                                if (err){  res.send(err);  }
                                    res.json(todos);
                                });
                }
}}
}
exports.deleteFrmmovil = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    Frmmovil.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.deleteFrmmovil2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    var namess=req.params.recordID2

    Frmmovild.find({idmovil:req.params.recordID2}).populate('type').exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''
                                for(var i = 0; i < todos.length;i++){
                               
                                    cad=cad+'"'+todos[i].nombre+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
                                }

                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"}'
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                               
                              
                                var mongoose = require("mongoose");
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                    console.log('bueno')
                                    console.log(jsonObject)
                                    var  frmtt= mongoose.model(namess,tt);
                                    console.log('bueno2')
                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                       
                                            res.json(todo);
                                        
                                           
                                    });

                                  
                                  } catch(e) {
                                      console.log(e)
                                    var  frmtt= mongoose.model(namess);
                                    console.log('error PASSAAA')
                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                        res.json(todo);
                                    });

                                  }


                  

        }
    });
}

exports.creaFrmmovil3s = function(req, res, next){

if(req.params.recordID!=='crea')
{   Bitacora.create(req.body.bitacora);
    var namess=req.body.idform

    Frmmovild.find({idmovil:req.body.idform}).populate('type').exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''
                                for(var i = 0; i < todos.length;i++){
                               
                                    cad=cad+'"'+todos[i].nombre+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
                                }

                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"}'
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                               
                              
                                var mongoose = require("mongoose");
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                    var  frmtt= mongoose.model(namess,tt);

                                    frmtt.update({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                        res.json(todo3);
                                        });

/*
                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                        frmtt.create(req.body.estructura
                                            , function(err, todo3) {
                                            if (err){       res.status(500).send(err.message)    }
                                        
                                            res.json(todo3);
                                        
                                            });
                                    });
*/
                                  
                                  } catch(e) {
                                      console.log('error')
                                    var  frmtt= mongoose.model(namess);
                                    frmtt.update({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                        res.json(todo3);
                                        });

                                  /*  frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                        frmtt.create(req.body.estructura
                                            , function(err, todo3) {
                                            if (err){       res.status(500).send(err.message)    }
                                        
                                            res.json(todo3);
                                        
                                            });
                                    });*/

                                  }


                  

        }
    });

    

}
else{
    var namess=req.body.idform
    Bitacora.create(req.body.bitacora);
    Frmmovild.find({idmovil:req.body.idform}).populate('type').exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''
                                for(var i = 0; i < todos.length;i++){
                               
                                    cad=cad+'"'+todos[i].nombre+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
                                }

                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"}'
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                               
                              
                                var mongoose = require("mongoose");
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                    var  frmtt= mongoose.model(namess,tt);
                                    frmtt.create(req.body.estructura
                                        , function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                    
                                        res.json(todo3);
                                    
                                        });
                                  
                                  } catch(e) {
                                      console.log('error')
                                    var  frmtt= mongoose.model(namess);
                                    frmtt.create(req.body.estructura
                                        , function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                    
                                        res.json(todo3);
                                    
                                        });
                                  }


                  

        }
    });



}
}






exports.creaFrmmovil2s = function(req, res, next){
   
 console.log('entra a dos')
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Frmmovil.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
            todo.categoria        	=	req.body.categoria        	||	todo.categoria        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   
    Frmmovil.find({ categoria        	: req.body.categoria        	,
        nombre        	: req.body.nombre        	
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un formulario movil con este nombre'); }
        else
        {   

                    Frmmovil.create({ 
                        categoria        	: req.body.categoria        	,
                        nombre        	: req.body.nombre        	,
                        foto    	: req.body.foto    	,
                        estado 	: req.body.estado 	,
                        usuarionew:req.body.bitacora.email
                }
                        , function(err, todo) {
                        if (err){ 
                        
                            res.status(500).send(err.message)    }
                    
                        res.json(todo);

                    
                        

                    });
    }});
}

}



