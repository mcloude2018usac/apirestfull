
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');


function datipo(value) {
var tt='';

switch(value) {
    case 'Alfanumerico':
    tt='String'
   break;
   case 'Numerico':
   tt='Number'
   break;
   case 'TextArea':
   tt='String'
   break;
   case 'Etiqueta':
   tt='String'
   break;
   case 'Lista de valores':
   tt='String'
   break;
  
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
  
  /*


                                        frmform.create({  tipo      	: '123'   }
                            , function(err, todo3) {
                            if (err){ 
                                
                                res.status(500).send(err.message)    }

                                res.json(todo3);

                            });
  */

exports.getFrmmovil = function(req, res, next){
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
        case 'formulario':
            var namess=req.params.id
            var mongoose =require("mongoose");
            Frmmovild.find({idmovil:req.params.id}).populate('type').exec(function(err, todos) {
                if (err){ res.send(err); }
                                    if(todos.length>0)   {     
                                        var cad=''
                                        for(var i = 0; i < todos.length;i++){
                                        if(i==todos.length-1)
                                        {
                                            cad=cad+'"'+todos[i].nombre+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"}';
                                        }
                                        else
                                        {
                                            cad=cad+'"'+todos[i].nombre+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
                                        } 
                                        }

                                        cad='{' + cad + '}'
                                        var jsonObject = stringToObject(cad);
                                        console.log(jsonObject)
                            var frmform= mongoose.model(namess, new  mongoose.Schema(jsonObject, {timestamps: true  }));
                            frmform.find({},function(err, todos2) {
                                if (err){  res.send(err);  }
                                res.json(todos2); 
                            });
                }
            });

  break;
  case 'formulariod':
  var namess=req.params.id
  var mongoose =require("mongoose");
  Frmmovild.find({idmovil:req.params.id}).populate('type').exec(function(err, todos) {
      if (err){ res.send(err); }
                          if(todos.length>0)   {     
                            res.json(todos); 
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
}
}
exports.deleteFrmmovil = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    Frmmovil.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFrmmovil2s = function(req, res, next){
   
 
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



