
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var frmejecuta= require('../controllers/frmmovilejecuta');
                            
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
       case 'Check List':   tt='select2';   break;
       case 'Check List Detalle':   tt='select3';   break;
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

function  existeregistrosfrom(idformulario,todos,cadxx,idpapa)
{
 
    var namess=idformulario


                  
                           
                                var cad100=''
                                var cadxx=''
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad100=cad3[0]

                                if(idpapa)
                                {
                                 cad100=cad100 + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                }
                                else
                                {
                                 cad100=cad100 + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                }
                               
                                
                               
                               cad100='{' + cad100 + '}'
                  


                        
                                var jsonObject = stringToObject(cad100);
                                var mongoose = require("mongoose");
                               
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                               
                                try {
                                    var  frmtt= mongoose.model(namess,tt);
                                    console.log('entraaaaaaaaaaaaa1')
                                  
                                    
                                    frmtt.find({"contrato":"descripcion: descripción del contrato , nocontrato: a1 ,        °5f7648b37e8d091240017cc3"} ,function(err, todos2) {
                                        if (err){  res.send(err);  }
                                
                                        if(todos2.length>0)
                                        {
                                           
                                            
                                         
                                        }
                                        else
                                        {
                                            
                                           
                                        }
                                      
                                      
                                    });
                                  } catch(e) {
                                     
                                    var  frmtt= mongoose.model(namess);
                                   
                                    frmtt.find({"contrato":"descripcion: descripción del contrato , nocontrato: a1 ,        °5f7648b37e8d091240017cc3"},function(err, todos2) {
                                         if (err){  res.send(err);  }
                                      
                                         if(todos2.length>0)
                                         {
                                            return 'si'
                                            console.log('si')
                                           
                                          } else
                                            {
                                                return 'no'
                                                console.log('no')
                                            }
                                     
                                     });
                                  }


                             
       
        
    
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
          case 'Check List': 
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
            case 'Check List Detalle': 
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
    if(req.params.id5)
    {
        
        if(req.params.id4=='frmmovilp')
        {


            if(req.params.id2=='todos')
            { 
                Frmmovil.find({idempresa:req.params.id3,tipo:req.params.id,categoria:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
            {  
                Frmmovil.find({idempresa:req.params.id3,estado:req.params.id2,tipo:req.params.id,categoria:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });

            }
          

        }

    }
    else
    {    
    if(req.params.id4)
    {
        if(req.params.id4=='formulariosolopapafiltro')
        {

     
            var namess=req.params.id
            var campost=req.params.id2
          
            var myDatavector = campost.split(',');
            var arremp=req.params.id3.split('¬')
//,_id:{$in: myData}

            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arremp[0]}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
         //   console.log(todos)
                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(dafiltrocad(todos,'','')).split('°')
                                        var filtro=''
                                  
                                        filtro='{' + arremp[1] + '}'
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'

                                   //  console.log(cad)
                                        var jsonObject = stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                             

                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){
                                                    nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' , '
                                                }
                                                myData.push({_id:todos2[i]._id , nombre: nombret })

                                                 
                                              }
                                                res.json(myData);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( JSON.parse(filtro) ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                           
                                              
                                               var myData = [];
                                               for(var i = 0; i < todos2.length;i++){
                                                 var nombret ='';
                                                 for(var j = 0; j < myDatavector.length;j++){
                                                     nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' , '
                                                 }
                                                 myData.push({_id:todos2[i]._id , nombre: nombret })
 
                                                  
                                               }
                                                 res.json(myData);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            



        }
        else
        {
        if(req.params.id4=='formulariosolopapa')
        {

            var namess=req.params.id


            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }

                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(dafiltrocad(todos,'','')).split('°')
                                        var filtro=''
                                  
                                        filtro='{' +req.params.id2+ '}'
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'

                                     console.log(filtro)
                                        var jsonObject = stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                             

                                                res.json(todos2);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( JSON.parse(filtro) ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                           
                                              
                                           
                                                 res.json(todos2);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
        {
        if(req.params.id4=='formulariocombofiltro')
        {

            var namess=req.params.id
            var campost=req.params.id2
          
            var myDatavector = campost.split(',');
            var arremp=req.params.id3.split('°')
//,_id:{$in: myData}


            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arremp[0]}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
     
                                    if(todos.length>0)   {  
                                       
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(dafiltrocad(todos,'','')).split('°')
                                        var filtro=''
                                  
                                        filtro='{' + arremp[1] + '}'
                                   
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'

                                   
                                        var jsonObject = stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            console.log(filtro)
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                             

                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){
                                                    nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' , '
                                                }
                                                myData.push({_id:todos2[i]._id , nombre: nombret })

                                                 
                                              }
                                                res.json(myData);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( JSON.parse(filtro) ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                           
                                              
                                               var myData = [];
                                               for(var i = 0; i < todos2.length;i++){
                                                 var nombret ='';
                                                 for(var j = 0; j < myDatavector.length;j++){
                                                     nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' , '
                                                 }
                                                 myData.push({_id:todos2[i]._id , nombre: nombret })
 
                                                  
                                               }
                                                 res.json(myData);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
        {
            if(req.params.id4=='arrayregistromovil')
            {


               
                var namess=req.params.id
                var idbuscar=req.params.id2.trim().replace(/\s/g,'').split(';')
                var arratodo = [];
                for(var i = 0; i < idbuscar.length;i++){
                    var uno=idbuscar[i].split(',')[0]
                    arratodo.push(uno)
                }
                console.log(req.params)
                console.log(arratodo)
 
              
           

                req.params.id3.split('°')

                if( req.params.id3.indexOf('°')<=0){
                    res.json([]);
                    return;

                }
                var arrt=req.params.id3.split('°')

                if(arrt.length===0){
                    res.json([]);
                    return;

                }

                arratodo = arratodo.filter(function(e){return e});
            
                var mongoose = require("mongoose");
                let objectIdArray = arratodo.map(s => mongoose.Types.ObjectId(s));
              
    
                Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                 
               
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                      
                                            cad=cad3[0]
                                          
                                            cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                           
                                       
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                         //   console.log(tt)
                                          //  console.log(namess)
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                
                                              console.log({_id:{$in :objectIdArray},idempresa:arrt[0]} )
                                                frmtt.find({_id:{$in :objectIdArray},idempresa:arrt[0]} ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                   
    
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( {_id:{$in :objectIdArray},idempresa:arrt[0]} ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                             
                                                  
                                                    res.json(todos2);
                                                 
                                                 });
                                              }
        
        
                                         
                            
                    }
                });
        
                
    
    
            }
            else
            {
            if(req.params.id4=='unregistromovil')
            {
    
                var namess=req.params.id
                var idbuscar=req.params.id2
                var arrt=req.params.id3.split('°')

    
                Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                  
             //   console.log(todos)
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                      
                                            cad=cad3[0]
                                          
                                            cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                           
                                     
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                         //   console.log(tt)
                                          //  console.log(namess)
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.findById({_id:idbuscar} ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                   
    
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.findById( {_id:idbuscar} ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                             
                                                  
                                                    res.json(todos2);
                                                 
                                                 });
                                              }
        
        
                                         
                            
                    }
                });
        
                
    
    
            }
            else
            {
        if(req.params.id4=='formulariocombo')
        {

            console.log(req.params)
            var namess=req.params.id
            var campost=req.params.id2
          
            var myDatavector = campost.split(',');
//,_id:{$in: myData}

            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
         //   console.log(todos)
                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'
                                   //  console.log(cad)
                                        var jsonObject = stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                        console.log(namess)
                                    
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find({} ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                               

                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){
                                                    nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' , '
                                                }
                                                myData.push({_id:todos2[i]._id , nombre: nombret })

                                                 
                                              }
                                                res.json(myData);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( {} ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                         
                                              
                                               var myData = [];
                                               for(var i = 0; i < todos2.length;i++){
                                                 var nombret ='';
                                                 for(var j = 0; j < myDatavector.length;j++){
                                                     nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' , '
                                                 }
                                                 myData.push({_id:todos2[i]._id , nombre: nombret })
 
                                                  
                                               }
                                                 res.json(myData);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
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
                formulariousr.find({idempresa:arr[0],idusuario:req.params.id2})
                .exec(function(err, todosb) {
                              if (err){  res.send(err);  }


                              if(todosb.length<=0)
                              {
                                res.json(todosb);
                              }
                              else
                              {
                                  
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                     if (err){  res.send(err);  }

                  
                   
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros ,geoposicion:todos[i].idformulario.geoposicion,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta ,tipo:todos[i].idformulario.tipo});
                        }
                        
                    }

                    



                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                      
                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado,verregistros:unique[i].verregistros,permisos:{pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].preporte,  potros1:''}});
                                 }
            
                                  res.json(myData2);
                                  
                                });
                              }


                            });
            }
            else
            {

                formulariousr.find({idempresa:arr[0], estado:arr[1],idusuario:req.params.id2})
                .exec(function(err, todosb) {
                      if (err){  res.send(err);  }

                      
                      if(todosb.length<=0)
                      {
                        res.json(todosb);
                      }
                      else
                      {
                                      
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {

                    if (err){  res.send(err);  }
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta ,tipo:todos[i].idformulario.tipo});
                        }
                        
                    }
                   
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado,verregistros:unique[i].verregistros,permisos:{pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].preporte,  potros1:''}});
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
                                  
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                     if (err){  res.send(err);  }
                  
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta  ,tipo:todos[i].idformulario.tipo});
                        }
                        
                    }
                   
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].preporte,  potros1:''}});
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
                                      
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                  

                    if (err){  res.send(err);  }
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta ,tipo:todos[i].idformulario.tipo  });
                        }
                        
                    }
                   
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion  ,categoria:todos[i].idformulario.categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].preporte,  potros1:''}});
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
        console.log('entraaaaaaaaaaaaaaaaaaaaaaaaaa')
        var filtro
       
       var arrtodos=     req.params.id4.split('°')
       console.log(arrtodos)

        Frmmovild.find({idmovil:req.params.id, display : "true"}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,req.params.id2,req.params.id3)).split('°')
                                    cad=cad3[0]

                                    if(arrtodos[1] ==='todosdetalle')
                                    {
                                        if(arrtodos[2] ==='todos')
                                        {//{ "$regex" : "' +id3 + '",
                                            cadxx='{'+ cad3[1] +',"' +'idempresa' + '":"' +arrtodos[0] + '"' +',"' +'idpapa' + '":"' +arrtodos[3] + '"'+ '}'
                                           
                                        }
                                        else
                                        {
                                            cadxx='{'+ cad3[1] + ',"' +'idempresa' + '":"'+ arrtodos[0] + '"' +',"' +'usuarionew' + '":"' +arrtodos[2] + '"'  +',"' +'idpapa' + '":"' +arrtodos[3] + '"'+ '}'
                                             
                                        }
                                    }
                                    else
                                    {
                                        if(arrtodos[1] ==='todos')
                                        {//{ "$regex" : "' +id3 + '",
                                            cadxx='{'+ cad3[1] +',"' +'idempresa' + '":"' +arrtodos[0] + '"'+ '}'
                                           
                                        }
                                        else
                                        {
                                            cadxx='{'+ cad3[1] + ',"' +'idempresa' + '":"'+ arrtodos[0] + '"' +',"' +'usuarionew' + '":"' +arrtodos[1] + '"'  +'}'
                                             
                                        }
                                    }
                             
console.log(cadxx)

                                   


                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    var jsonObject = stringToObject(cad);
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
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
    }}}}}}}}}

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
              case 'categoriagruponombre':
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
                            "nombre" : "$_id.categoria",
                          
                            "_id" : 0
                        }
                    }
                ]).exec(function(err, todos) {
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
          //  console.log(todos)
            if (err){  res.send(err);  }
            var data=[]
          
            for(var i = 0; i < todos.length;i++){
                if(todos[i].type!='Imagen' && todos[i].type!='Formulario detalle')
                {
                    if(todos[i].type==='Numerico')
                    {
                        data.push({_id:todos[i].name,nombre:todos[i].title,tipo:'number'})
                    }
                    else
                    {
                        data.push({_id:todos[i].name,nombre:todos[i].title,tipo:'text'})
                    }
                   

                }
                    
                
                
            }
            res.json(data);
            
        });
        break;
        case 'formulariocamposverid':
            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                var data=[]
              
                for(var i = 0; i < todos.length;i++){
                    if(todos[i].type!='Imagen' && todos[i].type!='Formulario detalle')
                    {
                        data.push({_id:todos[i]._id,nombre:todos[i].title,name:todos[i].name})
    
                    }
                        
                    
                    
                }
                res.json(data);
                
            });
            break;
            case 'formulariocamposveridcampo':
                Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    var data=[]
                  
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].type!='Imagen' && todos[i].type!='Formulario detalle')
                        {
                            data.push({_id:todos[i]._id,nombre:todos[i].name,name:todos[i].name})
        
                        }
                            
                        
                        
                    }
                    res.json(data);
                    
                });
                break;
        case 'formulario':
         
            var namess=req.params.id
            var arrtodos=req.params.id3.split('°')
            var filtro
            if(arrtodos[1]==='todos')
            {
                filtro={idempresa:arrtodos[0]}
            }
            else
            {
                filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1]}
            }
  
  
                Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                 
                
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                      
                                            cad=cad3[0]
                                            cadxx='{'+ cad3[1] + '}'
                                            cad=cad + '"geoposicion"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                            cadxx='{' + cadxx + '}'
                                         
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                          //  console.log(tt)
                                            console.log(filtro)
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find(filtro ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                  //  console.log(todos2)
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( filtro ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                                   // console.log(todos2)
                                                     res.json(todos2);
                                                 
                                                 });
                                              }
    
    
                                         
                            
                    }
                });
            
           
  break;
  case 'formularioproceso':
         
    var namess=req.params.id
    var arrtodos=req.params.id3.split('°')
    var filtro
    if(arrtodos[1]==='todos')
    {
        filtro={idempresa:arrtodos[0],estadoordenxxx:arrtodos[2]}
    }
    else
    {
        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:arrtodos[2]}
    }


        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arrtodos[0]}).exec(function(err, todos) {
            if (err){ res.send(err); }
         
        
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                              
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"geoposicion"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                                 
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                  //  console.log(tt)
                                    console.log(filtro)
                                
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        frmtt.find(filtr ).sort([['_id', -1]]).exec(function(err, todos2) {
                                            if (err){  res.send(err); }
                                          //  console.log(todos2)
                                            res.json(todos2);
                                          
                                        });
                                      } catch(e) {
                                        
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find( filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                             if (err){  res.send(err);
                                            }
                                           // console.log(todos2)
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    
   
break;

  case 'formulariodetalle':
         
    var namess=req.params.id
    var arrtodos=req.params.id3.split('°')
    var filtro
    
    if(arrtodos[1]==='todos')
    {
        filtro={idempresa:arrtodos[0],idpapa:arrtodos[2]}
    }
    else
    {
        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],idpapa:arrtodos[2]}
    }
  console.log(filtro)
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
        
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                              
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },      "idpapa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                                 
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                  //  console.log(tt)
                                    
                                
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        frmtt.find(filtro ,function(err, todos2) {
                                            if (err){  res.send(err); }
                                          //  console.log(todos2)
                                            res.json(todos2);
                                          
                                        });
                                      } catch(e) {
                                        
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find( filtro ,function(err, todos2) {
                                             if (err){  res.send(err);
                                            }
                                           // console.log(todos2)
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    
   
break;

  case 'formulariocombo':
         
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
                                    delete mongoose.connection.models[namess];
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
                                                      alfatypo: todos[i].alfatypo,
                                                      idfrmconsulta: todos[i].idfrmconsulta,
                                                      idfrmconsulta2: todos[i].idfrmconsulta2,
                                                      verregistros:todos[i].verregistros,

                                                      usarunaves: todos[i].usarunaves,
                                                      idfrmconsultaorigen: todos[i].idfrmconsultaorigen,
                                                      idfrmconsulta2origen: todos[i].idfrmconsulta2origen,
                                                      nombreconsulta2origen		: todos[i].nombreconsulta2origen,
                                                      idcampofiltro: todos[i].idcampofiltro,
                                                      idcampofiltromanual: todos[i].idcampofiltromanual,

                                                      idcampofiltropapa: todos[i].idcampofiltropapa,
                                                      idfrmconsultaorigenpapa: todos[i].idfrmconsultaorigenpapa


                                                      });
                      
                      
                                                  }
                                                  res.json(data); 
                            }
                        });


    });
 

break;

case 'formulariodidxx':
    var namess=req.params.id.split('°')
    console.log(namess)
   
    Formcat2.find({idformulario:namess[0],idempresa:req.params.id3}).exec(function(err, todos1) {
      if (err){ res.send(err); }
                          if(todos1.length>0)   {   
                          }
  
                          Frmmovild.find({idmovil:namess[0],_id:namess[1]}).exec(function(err, todos) {
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
                                                        alfatypo: todos[i].alfatypo,
                                                        idfrmconsulta: todos[i].idfrmconsulta,
                                                        idfrmconsulta2: todos[i].idfrmconsulta2,
                                                        verregistros:todos[i].verregistros,
  
                                                        usarunaves: todos[i].usarunaves,
                                                        idfrmconsultaorigen: todos[i].idfrmconsultaorigen,
                                                        idfrmconsulta2origen: todos[i].idfrmconsulta2origen,
                                                        nombreconsulta2origen		: todos[i].nombreconsulta2origen,
                                                        idcampofiltro: todos[i].idcampofiltro,
                                                        idcampofiltromanual: todos[i].idcampofiltromanual,
  
                                                        idcampofiltropapa: todos[i].idcampofiltropapa,
                                                        idfrmconsultaorigenpapa: todos[i].idfrmconsultaorigenpapa
  
  
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
}}}
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
                                delete mongoose.connection.models[namess];
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
/*

accion: "enviar a generación de plantilla ofertada"
actividad: "2. Generacion de plantilla ofertada"
actividadclase: "NORMAL"
actividadtipo: "EJECUCIÓN"
actor: "2. Generacion de plantilla ofertada"
estado: "generación de plantilla ofertada"
idaccion: "5f83c18e66dbdb57cca2a34d"
idactividad: "5f83837c9c97c05fdc889bbc"
idactor: "5f592105f4838034b8d5377b"
subtipoaccion: "GRUPO"
tipoaccion: "EJECUCIÓN"

*/
exports.creaFrmmovil3s = function(req, res, next){

    if(req.body.operacion==='ejecutaoperacion')
    {
        console.log('entraaaaaaaaaaaaaaaaaaaaaaaaa  EJECUTA OPERACION')
        switch(req.body.ejecuta) {
            case 'visitas_programadas':  frmejecuta.visitas_programadas(req, res, next);  
            break;
            default:
              // code block
          }
    }
    else
    {
if(req.params.recordID!=='crea')
{   Bitacora.create(req.body.bitacora);
    var namess=req.body.idform
    console.log('actualiza formulario+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''
                              
                               var cad3=(dafiltrocad(todos,'','')).split('°')
                               cad=cad3[0]
                               if(req.body.idpapa)
                               {
                                   if(req.body.tipo==='proceso')
                                   {
                                    cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                   }
                                   else
                                   {
                                    cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                   }
                                
                               }
                               else
                               {

                                    if(req.body.tipo==='proceso')
                                    {
                                        cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                      
                                    }
                                    else
                                    {
                                        cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    }
                                

                               }
                               
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                               
                          
                                var mongoose = require("mongoose");
                                delete mongoose.connection.models[namess];
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

console.log('crea formulario mnuevo')
    var namess=req.body.idform
    Bitacora.create(req.body.bitacora);
    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
     
        if (err){ res.send(err); }
                            if(todos.length>0)   {  

                               //validar si ya existe algunos de los que son llave 
                                var validarcampos =[];
                                var filtrovalida=''
                                console.log(todos.length)
                              
                               for(var i = 0; i <todos.length; i++) {
                                   if(todos[i].usarunaves==='true')
                                   {
                                   if(i===0)
                                   {
                                    filtrovalida=  '"' +todos[i].name + '":"' + req.body.estructura[todos[i].name] + '"' 
                                   }
                                   else
                                   {
                                    filtrovalida= filtrovalida + ',"' +todos[i].name + '":"' + req.body.estructura[todos[i].name]  + '"' 
                                   }
                                    
                                         
                                   }

                               }
                            
                            //   filtrovalida=filtrovalida.substring(0,filtrovalida.length-1)
                               console.log('filtroooooooooo ::::::::::::::::: '+filtrovalida + ' ::::::::')
                               

                               if(filtrovalida ==='')
                               {

                                var cad=''
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad=cad3[0]
                              
                                if(req.body.idpapa)
                                {
                                    if(req.body.tipo==='proceso')
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                    }
                                    else
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    }
                                 
                                }
                                else
                                {
 
                                     if(req.body.tipo==='proceso')
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                       
                                     }
                                     else
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                     }
                                 
 
                                }
                                
                           
                               
                                
                              
                               cad='{' + cad + '}'
                               var jsonObject = stringToObject(cad);
                         
                               var mongoose = require("mongoose");
                               delete mongoose.connection.models[namess];
                               var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                             
                                //GRABA TODO BIEN------------------------------------------------------------------------------
try {
   
    var  frmtt=  mongoose.model(namess ,tt);
   
    console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000')
 
    frmtt.create(req.body.estructura
        , function(err, todo3) {
        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
            
        res.json(todo3);
        console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll0000000000000000000000')
     
      
    
        });
  
  } catch(e) {
    
    console.log(e)
    //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
    //aqui tendria que se un sabe
    console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  
    var  frmtt= mongoose.model(namess);
  
 
    frmtt.create(req.body.estructura
        , function(err, todo3) {
        if (err){       res.status(500).send(err.message)    }
   
        res.json(todo3);
        console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll')
      
    
        });
  }
 //FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------
                               }
                               else
                               {
                                filtrovalida='{' +filtrovalida + '}'
                                console.log(filtrovalida)
                        

                                var cad=''
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad=cad3[0]
                                if(req.body.idpapa)
                                {
                                    if(req.body.tipo==='proceso')
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                    }
                                    else
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    }
                                 
                                }
                                else
                                {
 
                                     if(req.body.tipo==='proceso')
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                     }
                                     else
                                     {
                                         cad=cad + 'usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                     }
                                 
 
                                }
                                
                               
                               cad='{' + cad + '}'
                               var jsonObject = stringToObject(cad);
                             
                               var mongoose = require("mongoose");
                               delete mongoose.connection.models[namess];
                               var tt=  new mongoose.Schema(jsonObject, {timestamps:true });


                               //BUSCAR UNO EXISTENTE-----------------------------------------------------------------------------------
                               try {
                                   var  frmbusca= mongoose.model(namess,tt);
                                //{"contrato":"descripcion: descripción del contrato , nocontrato: a1 ,        °5f7648b37e8d091240017cc3"}
                                   frmbusca.find(JSON.parse(filtrovalida) ,function(err, todos2a) {
                                       if (err){  res.send(err);  }
                               
                                       if(todos2a.length>0)
                                       {
                                          
                                           res.status(500).send('Este registro Ya existe en base de datos, no pueden haber repetidos') 
                                        
                                       }
                                       else
                                       {
                                       //GRABA TODO BIEN------------------------------------------------------------------------------
                               try {
                                   var  frmtt=  mongoose.model(namess,tt);
                                
                                   frmtt.create(req.body.estructura
                                       , function(err, todo3) {
                                       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                           
                                       res.json(todo3);
                                   
                                       });
                                 
                                 } catch(e) {
                                   
                                   console.log(e)
                                   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
                                   //aqui tendria que se un sabe
                                   var  frmtt= mongoose.model(namess);
                                  
                                   frmtt.create(req.body.estructura
                                       , function(err, todo3) {
                                       if (err){       res.status(500).send(err.message)    }
                                  
                                       res.json(todo3);
                                   
                                       });
                                 }
//FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------
   
                                          
                                       }
                                     
                                     
                                   });
                                 } catch(e) {
                                    
                                   var  frmbusca= mongoose.model(namess);
                                  
                                   frmbusca.find(JSON.parse(filtrovalida),function(err, todos2a) {
                                        if (err){  res.send(err);  }
                                     
                                        if(todos2a.length>0)
                                        {
                                           res.status(500).send('Este registro Ya existe en base de datos, no pueden haber repetidos') 
                                        
                                          
                                         } else
                                           {

//GRABA TODO BIEN------------------------------------------------------------------------------
try {
   var  frmtt=  mongoose.model(namess,tt);

   frmtt.create(req.body.estructura
       , function(err, todo3) {
       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
           
       res.json(todo3);
   
       });
 
 } catch(e) {
   
   console.log(e)
   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
   //aqui tendria que se un sabe
   var  frmtt= mongoose.model(namess);
  
   frmtt.create(req.body.estructura
       , function(err, todo3) {
       if (err){       res.status(500).send(err.message)    }
  
       res.json(todo3);
   
       });
 }
//FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------


                                           }
                                    
                                    });
                                 }

                               }
                         














                                
                  

        }
    });



}}
}






exports.creaFrmmovil2s = function(req, res, next){
   

    Bitacora.create(req.body.bitacora);

if(req.params.recordID!=='crea')
{ console.log(req.body)
    Frmmovil.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
            todo.categoria        	=	req.body.categoria        	||	todo.categoria        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.tipo    	=	req.body.tipo    	||	todo.tipo    	;
            todo.tipo2    	=	req.body.tipo2    	||	todo.tipo2    	;
            todo.ejecuta    	=	req.body.ejecuta    	||	todo.ejecuta    	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.geoposicion    	=	req.body.geoposicion      	;
           
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

            if(req.body.idpapa)
            {
                Frmmovil.create({ 
                    idempresa      	: req.body.idempresa     	,
                    tipo        	: req.body.tipo        	,
                    tipo2        	: req.body.tipo2        	,
                    idpapa        	: req.body.idpapa        	,
                    ejecuta        	: req.body.ejecuta        	,
                    categoria        	: req.body.categoria        	,
                    nombre        	: req.body.nombre        	,
                    foto    	: req.body.foto    	,
                    idformdetalle:   req.body.idformdetalle,
                    estado 	: req.body.estado 	,
                    geoposicion :   req.body.geoposicion,
                    usuarionew:req.body.bitacora.email
            }
                    , function(err, todo) {
                    if (err){ 
                    
                        res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });

            }
            else
            {
                Frmmovil.create({ 
                    idempresa      	: req.body.idempresa     	,
                    tipo        	: req.body.tipo        	,
                    tipo2        	: req.body.tipo2        	,
                    categoria        	: req.body.categoria        	,
                    nombre        	: req.body.nombre        	,
                    ejecuta        	: req.body.ejecuta        	,
                    foto    	: req.body.foto    	,
                    idformdetalle:   req.body.idformdetalle,
                    geoposicion :   req.body.geoposicion,
                    estado 	: req.body.estado 	,
                    usuarionew:req.body.bitacora.email
            }
                    , function(err, todo) {
                    if (err){ 
                    
                        res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });

            }
                
    }});
}

}



