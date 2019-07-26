const compressor = require('flexmonster-compressor');
const MongoClient = require('mongodb').MongoClient;
var Denunciaunidad = require('../models/denunciaunidad');
var Participa3 = require('../models/participa3');
var fs = require('fs');
const path = require('path');
var Usermsg = require('../models/usermsg');
var User = require('../models/user');
var Marketemail = require('../models/marketemail');

exports.getPivotm = function(req, res, next){

    switch(req.params.id) {
        case 'db1':

                switch(req.params.id2) {
                    case 'denuncias':         getdenunciasrpt(req, res, next);
                    break
                    case 'forochat':         getforochatrpt(req, res, next);
                    break
                    default:
                    break;
            
                }


        break
        case 'json1':
        break
        case 'csv1':
        break
        default:
        break;

    }
        

}

var getdenunciasrpt = function(req, res, next) {
    Denunciaunidad.find({'jefeop':req.params.id3}).exec(function(err, todos) {
        if (err){  res.send(err);  }
        var myData3 = [];
        for(var i = 0; i <  todos.length;i++){
            var cat=todos[i].categoria
            for(var i2 = 0; i2 <  cat.length;i2++){
                myData3.push(cat[i2]._id)
            }

        
        }
   

     
        var f1=(req.params.id4).substr(0,10);  
        var f2=(req.params.id5).substr(0,10);  
        console.log(f1)
        console.log({tipo:{$in:myData3},"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),  
        "$lt": new Date(f2 +'T24:00:00.000Z')}})

        //"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),    "$lt": new Date(f2 +'T24:00:00.000Z')}
        Participa3.find({tipo:{$in:myData3},"createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),  
          "$lt": new Date(f2 +'T24:00:00.000Z')}}).populate('tipo').
        select({ "createdAt":1,"cui": 1,"nombre": 1,"tipo": 1,"correo": 1,"motivo": 1,
        "motivo3":1,"f3":1,"estado": 1,"notamedio": 1}).sort([['createdAt', -1]]).exec(function(err, todos2) {
        if (err){  res.send(err);  }

                        var myData31 = [];
                        for(var i = 0; i <  todos2.length;i++){
                                    var mm=todos2[i].motivo;
                                    if(mm)   {    if(mm.length>250)   {mm=mm.substr(0,250)} }
                                    else                {mm=''}

                                    var mm2=todos2[i].motivo33;
                                    if(mm2)   {    if(mm2.length>250)   {mm2=mm2.substr(0,250)} }
                                    else                {mm2=''}
                                    myData31.push({tipo:todos2[i].tipo.nombre,cantidad:1, createdAt:todos2[i].createdAt,cui:todos2[i].cui,nombre:todos2[i].nombre
                                        ,correo:todos2[i].correo
                                        ,motivo:todos2[i].motivo  ,estado:todos2[i].estado})
                                }
                           //    console.log(myData31)
                                let stream = compressor.compressJson(myData31);
                              
                                stream.on('data', data => res.write(data));
                                stream.on('end', () => res.end()
                                //  res.redirect('pivot.html');
                                ); 
                                var rutat=path.join(__dirname+'/pivotm.html')
                             

                             //stream.on('readable', function() {      stream.pipe(res);           });

                                //console.log(path.join(__dirname+'/pivotm.html'))
                               // req.forward(path.join(__dirname+'/pivotm.html'));
                             //   res.sendFile('index.html');
        });
    });

}

var datipo = function(str,vector) {
    var re='';
    for(var i = 0; i < vector.length;i++){
     if(vector[i]._id==str)
     {
     re=vector[i].nombre
         break;
 
     }
    }
 
 
 
 
     return re;
 };

 
var getforochatrpt = function(req, res, next) {
//estado , datau
    
    var datav=req.params.id3.split(",");
           
    var filtro='NA'
    for(var i = 0; i < datav.length;i++){
        if(datav[i]=='TODOS@gmail.com')
        {filtro='TODOS';
            break;
        }
    }
    var filtro2={};
    if(filtro=='TODOS')
    {
    filtro2={ accesoestado: 'foro'}

    }
    else{
    filtro2={email:{$in:datav}, accesoestado: 'foro'};
    }
    console.log(filtro2)
    User.find(filtro2).exec(function(err, todos) {
        if (err){ res.send(err); }

       

        var usuariosx = [];
        var usuariosx2 = [];
        for(var i = 0; i < todos.length;i++){
            usuariosx.push(''+ todos[i]._id + '');
            usuariosx2.push({_id:todos[i]._id,nombre:todos[i].nombre});
        }

     //   "toUserId" : {"$in" :usuariosx }

          
            Usermsg.find({"toUserId" : {"$in" :usuariosx }}).populate('userId').sort([['toUserId', 1]]).exec(function(err, todos2) {
            if (err){ res.send(err); }
           
           var tablax = [];
            for(var i = 0; i < todos2.length;i++){
                
                tablax.push({ tipo:datipo(todos2[i].toUserId,todos),cantidad:1,createdAt:todos2[i].createdAt,usuario:todos2[i].userId.nombre,msg:todos2[i].message});
            }

            
         //   console.log(tablax)
            let stream = compressor.compressJson(tablax);
          
            stream.on('data', data => res.write(data));
            stream.on('end', () => res.end()
            //  res.redirect('pivot.html');
            ); 

          
            
        });

       
      
        
    });
}