const compressor = require('flexmonster-compressor');
const MongoClient = require('mongodb').MongoClient;
var Denunciaunidad = require('../models/denunciaunidad');
var Participa3 = require('../models/participa3');
var fs = require('fs');
const path = require('path');
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

        //5b7047adf0953c001442954c

        Participa3.find({tipo:{$in:myData3},idusuario:req.params.id3}).populate('tipo').select({ "createdAt":1,"cui": 1,"nombre": 1,"tipo": 1,"correo": 1,"motivo": 1,
        "motivo3":1,"f3":1,"estado": 1,"notamedio": 1,"xpos": 1, "f1":1,"ypos": 1,        "_id": 1}).sort([['createdAt', -1]]).exec(function(err, todos2) {
        if (err){  res.send(err);  }

                        var myData31 = [];
                        for(var i = 0; i <  todos2.length;i++){
                                    var mm=todos2[i].motivo;
                                    if(mm)   {    if(mm.length>250)   {mm=mm.substr(0,250)} }
                                    else                {mm=''}

                                    var mm2=todos2[i].motivo33;
                                    if(mm2)   {    if(mm2.length>250)   {mm2=mm2.substr(0,250)} }
                                    else                {mm2=''}
                                    myData31.push({ createdAt:todos2[i].createdAt,cui:todos2[i].cui,nombre2:todos2[i].nombre,correo:todos2[i].correo
                                        ,motivo:todos2[i].motivo  ,estado:todos2[i].estado})
                                }
                               
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
exports.getPivotm = function(req, res, next){

    switch(req.params.id) {
        case 'db1':

                switch(req.params.id2) {
                    case 'denuncias':         getdenunciasrpt(req, res, next);
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
