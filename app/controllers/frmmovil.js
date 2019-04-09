
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
                            
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
   case 'Rango':   tt='Number';   break;
   case 'Fecha':   tt='Date';   break;
   case 'Fecha y Hora':   tt='Date';   break;
   case 'Hora':   tt='Date';   break;
   case 'Check':   tt='String';   break;
   case 'Imagen':   tt='String';   break;
   
    default:
      // code block
  }
    return tt;
  }

  function datipo2(value) {
    var tt='';
    switch(value) {
        case 'Alfanumerico':  tt='text';   break;
       case 'Numerico':  tt='Number';   break;
       case 'TextArea':   tt='textarea';   break;
       case 'Etiqueta':   tt='label';   break;
       case 'Lista de valores':   tt='select';   break;
       case 'Rango':   tt='rango';   break;
       case 'Fecha':   tt='fecha';   break;
       case 'Fecha y Hora':   tt='fechahora';   break;
       case 'Hora':   tt='hora';   break;
       case 'Check':   tt='check';   break;
       case 'Imagen':   tt='imagen';   break;
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


  function objectFindByKey(array, key, value) {
    return array[0][0];
  //  return this.array(function(x) { return x[key] })

}


  
  // Convert javascript object to json string.
  function objectToString(jsObject) {
  
      var jsonString = JSON.stringify(jsObject);
  
    //  console.log("New JSON String : " + jsonString);
  
      return jsonString;
  }
  
 
  function daarreglo(data,op) {
  
    var val=[]

    //return data.map(function(item,index){      return item.idunidad === op;   });
     //val = data.filter(function(item){        return item.idunidad === op;   });
   // val= data.forEach(function(item,index){      return item.idunidad === op;   });
  
    for(var i = 0; i <data.length; i++) {
             if(data[i].idunidad==op)
             {

                val.push({key:data[i]._id,label:data[i].nombre});
             }
    }
    
   return val;

    
}



function dafiltrocad(todos,id2,id3) {
    var cad=''
    var cadxx=''
   
    for(var i = 0; i < todos.length;i++){
                                      
     //  console.log(todos[i].type.nombre)
        switch(todos[i].type.nombre) {
            case 'Rango':  
            if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
            if(todos[i].required=='false')
            {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
            }
            else
            {
                cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
            }
            break;
             case 'Fecha': //ISODate("2018-08-08T15:00:56.875Z"),
             if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false')
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
             }
              break;
              case 'Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Fecha y Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Check': 
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
              }
               break;
               case 'Imagen': 
               if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
               else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
               if(todos[i].required=='false')
               {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
               }
               else
               {
                  
                   cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
               }
                break;
         case 'Alfanumerico': 
         if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
         else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
         if(todos[i].required=='false')
         {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
         }
         else
         {
            
             cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
         }
          break;
        case 'Numerico':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'TextArea':  
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
        else{cadxx='"' +id2 + '": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
//        if(todos[i].name==id2){cadxx='"' +id2 + '":"' +id3 + '"'  }
   
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type.nombre) + '","required":"' + todos[i].required +'"},';
        }
          break;
        case 'Etiqueta':   
         break;
        case 'Lista de valores': 
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
         else{cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
        if(todos[i].required=='false')
             {
                 cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String"},   "label"	: { "type" : "String" }},';
             }
             else
             {
                     cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String", "required" : "true" },   "label"	: { "type" : "String", "required" : "true" }},';
             }

          break;
         default:
           // code block
       }

     
     }
     return cad +'°'+cadxx
}

var objectToArray = function(obj) {
    var _arr = [];

    for (var key in obj) {
        _arr.push([key, obj[key]]);
    }
    return _arr;
}
 
exports.getFrmmovil = function(req, res, next){
    if(req.params.id4)
    {
        if(req.params.id4=='categoriausr')
        {
            Catusuario.find({'idcategoria':req.params.id,'idusuario':req.params.id2,idempresa:req.params.id3}).populate('idformulario').exec(function(err, todos) {
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

        }
        else
        {
        var namess=req.params.id //formulario
        //req.params.id2   campo   req.params.id3   informacion
        Frmmovild.find({idmovil:req.params.id, display : "true"}).populate('type').sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,req.params.id2,req.params.id3)).split('°')
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    var jsonObject = stringToObject(cad);
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                   
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        
                                        frmtt.find(JSON.parse(cadxx) ,function(err, todos2) {
                                            if (err){  res.send(err);  }
                                        
                                            res.json(todos2);
                                          
                                        });
                                      } catch(e) {
                                         // console.log(e)
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find(JSON.parse(cadxx) ,function(err, todos2) {
                                             if (err){  res.send(err);  }
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    }

    }
    else{
   
    if(req.params.id3)
    { 
        switch(req.params.id2) {
            case 'estado':
                    Frmmovil.find({estado:req.params.id,idempresa:req.params.id3},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'categoria':
              Frmmovil.find({categoria:req.params.id,idempresa:req.params.id3},function(err, todos) {
                  if (err){  res.send(err);  }
                  res.json(todos);
                  
              });
        break;
        case 'formulariocamposver':
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3},function(err, todos) {
            if (err){  res.send(err);  }
            var data=[]
            for(var i = 0; i < todos.length;i++){
                
                    data.push({name:todos[i].name,nombre:todos[i].title})
                
                
            }
            res.json(data);
            
        });

        break;
        case 'formulariocamposver2':
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).populate('type').exec(function(err, todos) {
            if (err){  res.send(err);  }
            var data=[]
            for(var i = 0; i < todos.length;i++){
                if(todos[i].type.nombre!='Imagen')
                {
                    data.push({_id:todos[i].name,nombre:todos[i].title})

                }
                    
                
                
            }
            res.json(data);
            
        });
        break;
        case 'formulario':
            var namess=req.params.id
                Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).populate('type').sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                            cad=cad3[0]
                                            cadxx='{'+ cad3[1] + '}'
                                            cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                            cadxx='{' + cadxx + '}'
                                          //  console.log(cadxx)
                                            var jsonObject = stringToObject(cad);
                                         //   var jsonObject2 = stringToObject(cadxx);
                                           
                                            var mongoose = require("mongoose");
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                            
                                           //  console.log(cadxx);   
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find({} ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                    
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                 // console.log(e)
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( {} ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                                 
                                                     res.json(todos2);
                                                 
                                                 });
                                              }
    
    
                                         
                            
                    }
                });
            
           
  break;
  case 'formulariod':
  var namess=req.params.id
 
  Formcat2.find({idformulario:req.params.id,idempresa:req.params.id3}).exec(function(err, todos1) {
    if (err){ res.send(err); }
                        if(todos1.length>0)   {   
                        }

                        Frmmovild.find({idmovil:req.params.id}).populate('type').exec(function(err, todos) {
                            if (err){ res.send(err); }
                                                if(todos.length>0)   {   
                                                  
                                                  var data=[];
                                                  for(var i = 0; i < todos.length;i++){

                                                     
                                                      data.push({  
                                                      _id :  todos[i]._id, 
                                                      idmovil	:  todos[i].idmovil._id,
                                                      type   		: datipo2(todos[i].type.nombre) ,
                                                      name   		: todos[i].name,
                                                      default:todos[i].default,
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
                                                      categoria:  todos[i].categoria,
                                                      combofijo:  todos[i].combofijo,
                                                      options:daarreglo(todos1,todos[i]._id),
                                                      fondoetiqueta: todos[i].fondoetiqueta,
                                                      coloretiqueta: todos[i].coloretiqueta,
                                                      blike: todos[i].blike,
                                                      rangomin: todos[i].rangomin,
                                                      rangomax: todos[i].rangomax,
                                                      rangostep: todos[i].rangostep,
                                                      alfatypo: todos[i].alfatypo
                                                      });
                      
                      
                                                  }
                                                  res.json(data); 
                            }
                        });


    });
 

break;
            default://busqueda de formulario
           
             
          }
    }
    else
    {
                if(req.params.id2)
                { 
                    if(req.params.id=='todos')
                    {

                    
                    Frmmovil.find({idempresa:req.params.id2}).populate('categoria').exec(function(err, todos) {
                        if (err){  res.send(err);  }
                            res.json(todos);
                        });
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


                                
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad=cad3[0]
                               // cadxx='{'+ cad3[1] + '}'
                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                               
                              
                                var mongoose = require("mongoose");
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                 
                                    var  frmtt= mongoose.model(namess,tt);
                                  
                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                       
                                            res.json(todo);
                                        
                                           
                                    });

                                  
                                  } catch(e) {
                                 
                                    var  frmtt= mongoose.model(namess);
                                  
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
                               
                               var cad3=(dafiltrocad(todos,'','')).split('°')
                               cad=cad3[0]
                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                               
                              console.log(jsonObject)
                                var mongoose = require("mongoose");
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                    var  frmtt= mongoose.model(namess,tt);

                                    frmtt.update({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                        res.json(todo3);
                                        });


                                  
                                  } catch(e) {
                                    
                                    var  frmtt= mongoose.model(namess);
                                    frmtt.update({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                        res.json(todo3);
                                        });

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
                                 var cad3=(dafiltrocad(todos,'','')).split('°')
                                 cad=cad3[0]
                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                                console.log(jsonObject)
                                console.log(req.body.estructura)
                              
                                var mongoose = require("mongoose");
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                    var  frmtt= mongoose.model(namess,tt);
                                   
                                    frmtt.create(req.body.estructura
                                        , function(err, todo3) {
                                        if (err){  console.log(err.message);     res.status(500).send(err.message)    }
                                                console.log(todo3)
                                        res.json(todo3);
                                    
                                        });
                                  
                                  } catch(e) {
                                    
                                    var  frmtt= mongoose.model(namess);
                                  
                                    frmtt.create(req.body.estructura
                                        , function(err, todo3) {
                                        if (err){     console.log(err.message);    res.status(500).send(err.message)    }
                                        console.log(todo3)
                                        res.json(todo3);
                                    
                                        });
                                  }


                  

        }
    });



}
}






exports.creaFrmmovil2s = function(req, res, next){
   

    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Frmmovil.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
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
                        idempresa      	: req.body.idempresa     	,
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



