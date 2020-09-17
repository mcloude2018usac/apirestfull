
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
                            
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function datipo(value) {
var tt='';
switch(value) {
    case 'Alfanumerico':  tt='String';   break;
   case 'Numerico':  tt='Number';   break;
   case 'Moneda':  tt='Number';   break;
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
       case 'Moneda':  tt='moneda';   break;
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
                                      
     
        switch(todos[i].type) {
            case 'Rango':  
            if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
            if(todos[i].required=='false')
            {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
            }
            else
            {
                cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
            }
            break;
             case 'Fecha': //ISODate("2018-08-08T15:00:56.875Z"),
             if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false')
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;
              case 'Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Fecha y Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Check': 
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
               case 'Imagen': 
               if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
               else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
               if(todos[i].required=='false')
               {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
               }
               else
               {
                  
                   cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
               }
                break;
         case 'Alfanumerico': 
         if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
         else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
         if(todos[i].required=='false')
         {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
         }
         else
         {
            
             cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
         }
          break;
        case 'Numerico':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'Moneda':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'TextArea':  
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
        else{cadxx='"' +id2 + '": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
//        if(todos[i].name==id2){cadxx='"' +id2 + '":"' +id3 + '"'  }
   
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
          break;
        case 'Etiqueta':   
         break;
        case 'Lista de valores': 
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
         else{cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
        if(todos[i].required=='false')
             {cad=cad+'"'+todos[i].name+'":{"type" : "String"},';
                 //cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String"},   "label"	: { "type" : "String" }},';
             }
             else
             {cad=cad+'"'+todos[i].name+'":{"type" : "String", "required" : "true"},';
                //     cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String", "required" : "true" },   "label"	: { "type" : "String", "required" : "true" }},';
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
        
        if(req.params.id4=='frmmovilp')
        {


            if(req.params.id2=='todos')
            { 
                Frmmovil.find({idempresa:req.params.id3,tipo:req.params.id}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
            {  
                Frmmovil.find({idempresa:req.params.id3,estado:req.params.id2,tipo:req.params.id}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });

            }
          

        }
        else
        {
        if(req.params.id4=='categoriausradmin')
        {



            var arr=(req.params.id3).split('°')


            if(arr[1]=='todos')
            {
                formulariousr.find({idempresa:arr[0]})
                .exec(function(err, todosb) {
                              if (err){  res.send(err);  }

                              if(todosb.length<=0)
                              {
                                res.json(todosb);
                              }
                              else
                              {
                                  
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                     if (err){  res.send(err);  }
                  
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado });
                        }
                        
                    }
                   
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado});
                                 }
               
                                  res.json(myData2);
                                });
                              }


                            });
            }
            else
            {

                formulariousr.find({idempresa:arr[0], estado:arr[1]})
                .exec(function(err, todosb) {
                      if (err){  res.send(err);  }

                      
                      if(todosb.length<=0)
                      {
                        res.json(todosb);
                      }
                      else
                      {
                                      
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                  

                    if (err){  res.send(err);  }
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado });
                        }
                        
                    }
                   
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado});
                                 }
               
                                  res.json(myData2);
                                });
                      }


          
                            });
            }

        

        }
        else
        {

        if(req.params.id4=='categoriausr')
        {



            var arr=(req.params.id3).split('°')


            if(arr[1]=='todos')
            {
                formulariousr.find({idusuario:req.params.id2,idempresa:arr[0]})
                .exec(function(err, todosb) {
                              if (err){  res.send(err);  }

                              if(todosb.length<=0)
                              {
                                res.json(todosb);
                              }
                              else
                              {
                                  
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                     if (err){  res.send(err);  }
                  
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado });
                        }
                        
                    }
                   
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado});
                                 }
               
                                  res.json(myData2);
                                });
                              }


                            });
            }
            else
            {

                formulariousr.find({idusuario:req.params.id2,idempresa:arr[0], estado:arr[1]})
                .exec(function(err, todosb) {
                      if (err){  res.send(err);  }

                      
                      if(todosb.length<=0)
                      {
                        res.json(todosb);
                      }
                      else
                      {
                                      
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                  

                    if (err){  res.send(err);  }
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado });
                        }
                        
                    }
                   
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado});
                                 }
               
                                  res.json(myData2);
                                });
                      }


          
                            });
            }

        

        }
        else
        {
        var namess=req.params.id //formulario
        //req.params.id2   campo   req.params.id3   informacion
        Frmmovild.find({idmovil:req.params.id, display : "true"}).sort([['order', 1]]).exec(function(err, todos) {
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
                                         
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find(JSON.parse(cadxx) ,function(err, todos2) {
                                             if (err){  res.send(err);  }
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    }}}

    }
    else{
   
    if(req.params.id3)
    { 
       
        if(req.params.id=='todos')
        { 

            if(req.params.id2=='todos')
            { 
                Frmmovil.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
            {  
                Frmmovil.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });

            }
          
          
        }
        else
        {
          
        



        switch(req.params.id2) {
            case 'estado':
                    Frmmovil.find({estado:req.params.id,idempresa:req.params.id3},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'categoriagrupo':
                Frmmovil.aggregate(  [
                    { 
                        "$match" : { 
                            tipo:req.params.id3,idempresa:req.params.id
                        }
                    }, 
                    { 
                        "$group" : { 
                            "_id" : { 
            
                                "categoria" : "$categoria"
                            }
                        }
                    }, 
                    { 
                        "$project" : { 
                            "categoria" : "$_id.categoria",
                          
                            "_id" : 0
                        }
                    }
                ]).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    res.json(todos);
                    
                });
          break;
          case 'categoriagrupo2':
              var arr=(req.params.id3).split('°')
            Frmmovil.aggregate(  [
                { 
                    "$match" : { 
                        tipo:arr[0],idempresa:req.params.id,
                    }
                }, 
                { 
                    "$group" : { 
                        "_id" : { 
        
                            "categoria" : "$categoria"
                        }
                    }
                }, 
                { 
                    "$project" : { 
                        "categoria" : "$_id.categoria",
                      
                        "_id" : 0
                    }
                }
            ]).exec(function(err, todos) {
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
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).exec(function(err, todos) {
            if (err){  res.send(err);  }
            var data=[]
          
            for(var i = 0; i < todos.length;i++){
                if(todos[i].type!='Imagen' && todos[i].type!='Formulario detalle')
                {
                    data.push({_id:todos[i].name,nombre:todos[i].title})

                }
                    
                
                
            }
            res.json(data);
            
        });
        break;
        case 'formulario':
         
            var namess=req.params.id
                Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
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
                                         
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                          //  console.log(tt)
                                            
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find({} ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                  //  console.log(todos2)
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( {} ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                                   // console.log(todos2)
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

                        Frmmovild.find({idmovil:req.params.id}).exec(function(err, todos) {
                            if (err){ res.send(err); }
                                                if(todos.length>0)   {   
                                                  
                                                  var data=[];
                                                  for(var i = 0; i < todos.length;i++){

                                               
                                                      data.push({  
                                                      _id :  todos[i]._id, 
                                                      idmovil	:  todos[i].idmovil._id,
                                                      type   		: datipo2(todos[i].type) ,
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
    }
    else
    {
                if(req.params.id2)
                { 
                    if(req.params.id=='todos')
                    {

                    
                    Frmmovil.find({idempresa:req.params.id2}).exec(function(err, todos) {
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

    Frmmovild.find({idmovil:req.params.recordID2}).exec(function(err, todos) {
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

    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''
                               
                               var cad3=(dafiltrocad(todos,'','')).split('°')
                               cad=cad3[0]
                               if(req.body.idpapa)
                               {
                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                               }
                               else
                               {
                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                               }
                                
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
    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
       
        if (err){ res.send(err); }
                            if(todos.length>0)   {  
                               
                                 var cad=''
                                 var cad3=(dafiltrocad(todos,'','')).split('°')
                                 cad=cad3[0]
                                 if(req.body.idpapa)
                                 {
                                  cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                 }
                                 else
                                 {
                                  cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                 }
                                
                                 
                                
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                                console.log(jsonObject)
                                var mongoose = require("mongoose");
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                    var  frmtt=  mongoose.model(namess,tt);
                                   console.log(req.body.estructura)
                                    frmtt.create(req.body.estructura
                                        , function(err, todo3) {
                                        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                             console.log('crea')
                                        res.json(todo3);
                                    
                                        });
                                  
                                  } catch(e) {
                                    
                                    console.log(e)
                                    //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
                                    //aqui tendria que se un sabe
                                    var  frmtt= mongoose.model(namess);
                                    console.log(req.body.estructura)
                                    frmtt.create(req.body.estructura
                                        , function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                      console.log('crea2')
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
            todo.tipo    	=	req.body.tipo    	||	todo.tipo    	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.idformdetalle   		 ={id:req.body.idformdetalle.id,nombre:req.body.idformdetalle.nombre   }   	;

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
                        tipo        	: req.body.tipo        	,
                        categoria        	: req.body.categoria        	,
                        nombre        	: req.body.nombre        	,
                        foto    	: req.body.foto    	,
                        idformdetalle:   req.body.idformdetalle,
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



