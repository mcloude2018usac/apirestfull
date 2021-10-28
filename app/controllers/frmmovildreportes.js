
var Frmmovildreportes = require('../models/frmmovildreportes');
var Bitacora = require('../models/bitacora');
var Frmmovil = require('../models/frmmovil');
var Frmactividad = require('../models/asociadoventa/frmactividad');
var functool = require('../controllers/funcionesnode');
var Frmmovild = require('../models/frmmovild');

exports.getFrmmovildreportes = function(req, res, next){

    if(req.params.id4)
    {
        if(req.params.id2==='orden')
        {
            Frmmovildreportes.find({idempresa:req.params.id3,idmovil:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                if(todos.length>0)
                { res.json({orden:todos[0].order +10});
                   
                }
                else
                {
                    res.json({orden:10});
                }

               
             });
        }
        else
        {
        if(req.params.id2=='todos')
        { 
            Frmmovildreportes.find({idempresa:req.params.id3,idmovil:req.params.id4}).sort({'order': 1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            Frmmovildreportes.find({idempresa:req.params.id3,estado:req.params.id2,idmovil:req.params.id4}).sort({'order': 1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
            }}
    }
    else
    {
    if(req.params.id2)
    {
        
        switch(req.params.id2) {
            case 'reportegrafica2':
                var arrr=req.params.id.split('°')

                var namess=arrr[0];
            

               

                
            Frmmovild.find({idmovil:arrr[1], display : "true",idempresa:arrr[1]}).exec(function(err, todos) {
                if (err){ res.send(err); }
            
                var objetox = {};
            for(var i = 0; i < todos.length;i++){
                objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
            }
  
                                //    if(todos.length>0)   {  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },   
                                
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },   "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"}, "geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'

                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'
                                    
                                        var jsonObject = functool.stringToObject(cad);
                                    
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    
                                        
                                    
                                        try {
                                            var  frmtt= mongoose.model(namess);
                                            frmtt.find(filtroff).exec(function(err, todos2) {
                                                if (err){  res.send(err); }
                                            console.log(todos2)
                                                var rr=functool.graficasolotipocantidad(todos2,'',arrr,datasets)
                                                console.log(rr)
                                                res.json(rr);
                                            
                                            });
                                        } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess,tt);
                                             frmtt.find(filtroff).exec(function(err, todos2) {
                                                if (err){  res.send(err);
                                                }
                                                //grupo+grupo0
                                                var rr=functool.graficasolotipocantidad(todos2,'',arrr,datasets)
                                                console.log(rr)
                                                res.json(rr);
                                            
                                            });
                                        }


                                    
                        
               // }
            });
        


                break;
                case 'reportegrafica':
                    var arrr=req.params.id.split('°')
    
                    var namess=arrr[1];
                    var conteo={ $sum: 1 }
                    var grupostt=arrr[0].split(',')
                    var grupostt2=[]
    
    
                    for(var i = 0; i < grupostt.length;i++){
                        if(grupostt[i]!==' ')
                        {
                            grupostt2.push(grupostt[i].trim())
                        }
                    }
    
                    var conteostt=arrr[10].split(',')
                    var conteostt2=[]
    
                    
                    for(var i = 0; i < conteostt.length;i++){
                        if(conteostt[i]!==' ')
                        {
                            conteostt2.push(conteostt[i].trim())
                        }
                    }
    
    
                    var grupo={  }
                    var grupo0={}
    
                        for(var i = 0; i < grupostt2.length;i++){
                            grupo0[ grupostt2[i].trim()]="$"+grupostt2[i].trim() 
                        }
    
                        grupo[ "_id"]=grupo0
                      
                        for(var i = 0; i < conteostt2.length;i++){
                            if(conteostt2[i].trim().split(':')[0]==='contar registros' )
                                {grupo[ 'cantidadxx']={ $sum: 1 } 
                                }
                                else
                                {
    
                                    if(conteostt2[i].trim().split(':')[1]==='sum' )
                                    { grupo[ conteostt2[i].trim().split(':')[0]]={ $sum: "$" + conteostt2[i].trim().split(':')[0] } 
    
                                    }
                                                              else
                                    {
                                        grupo[ conteostt2[i].trim().split(':')[0]]={ $avg:  "$" + conteostt2[i].trim().split(':')[0] } 
                                    }
                                }
                        }
    
    
                     var filtroff={}
                     var fechasfiltro=arrr[5]
                     var filtroextra=arrr[6]
                     if(fechasfiltro!==undefined && fechasfiltro!=='')
                     {
                        filtroff={
                        "createdAt": {"$gte": new Date(functool.dafecha(fechasfiltro.split('¬')[0]) +'T00:00:00.000Z'),
                        "$lt": new Date(functool.dafecha(fechasfiltro.split('¬')[1]) +'T24:00:00.000Z')}
                    };
                       
                     }
    
             
                         var subff=filtroextra.split('¬')
                         for(var i = 0; i < subff.length;i++){
                             if(subff[i]!=='undefined')
                             {
                                var oo= JSON.parse('{'+subff[i]+'}')
                                Object.assign(filtroff, oo);
                              
                             }
                             
                             }
    
    
                    
                     var proyect={}
                     var datasets=[]
    
                    if(grupostt2.length===1)
                    {
    
                          for(var i = 0; i < grupostt2.length;i++){
                                proyect[ 'grupo']="$_id."+grupostt2[i].trim() 
                            }
    
    
                        for(var i = 0; i < conteostt2.length;i++){
                            if(conteostt2[i].trim().split(':')[0]==='contar registros' )
                            {proyect[ 'cantidadxx']="$cantidadxx"
                            datasets.push('cantidadxx')
                        }
                            else
                            {
                                proyect[ conteostt2[i].trim().split(':')[2]]="$"+conteostt2[i].trim().split(':')[0] 
    
                                   datasets.push(conteostt2[i].trim().split(':')[2] )
                            }
                            
                        }
    
                        
                        Object.assign(proyect, {_id:0});
                      
                    }
                    else
                    {
                        var concatt=[]
                        for(var i = 0; i < grupostt2.length;i++){
                            concatt.push("$_id."+grupostt2[i].trim())
                            if(i<grupostt2.length-1)
                            {
                                concatt.push("°")
                            }
                          
                            }
                        
                            proyect['grupo']={ "$concat": concatt}
    
                            for(var i = 0; i < conteostt2.length;i++){
                                if(conteostt2[i].trim().split(':')[0]==='contar registros' )
                                {
                                    proyect[ 'cantidadxx']="$cantidadxx"
                                    datasets.push('cantidadxx')
                                }
                                else
                                {
                                    proyect[ conteostt2[i].trim().split(':')[2]]="$"+conteostt2[i].trim().split(':')[0] 
                                    datasets.push(conteostt2[i].trim().split(':')[2] )
                                   // proyect[ conteostt2[i].trim()]="$"+conteostt2[i].trim() 
                                }
                               
                            }
                          Object.assign(proyect, {_id:0});
                    }
    
                    var sortt={  "cantidadxx" : Number(arrr[7])}
                    if(arrr[2]==='SUM'){conteo={ $sum: 1 }}
                    if(arrr[2]==='COUNT'){conteo={ $sum: 1 }}
                    if(arrr[2]==='AVG'){conteo={ $avg: 1 }}
    
                    
                Frmmovild.find({idmovil:arrr[1], display : "true",idempresa:arrr[4]}).exec(function(err, todos) {
                    if (err){ res.send(err); }
                
                    var objetox = {};
                for(var i = 0; i < todos.length;i++){
                    objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                }
      
                                    //    if(todos.length>0)   {  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },   
                                    
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                    
                                            cad=cad3[0]
                                            cadxx='{'+ cad3[1] + '}'
                                            cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },   "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"}, "geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
    
                                            cad='{' + cad + '}'
                                            cadxx='{' + cadxx + '}'
                                        
                                            var jsonObject = functool.stringToObject(cad);
                                        
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                        
                                            
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess);
                                                frmtt.aggregate([
                                                    { $match: filtroff },
                                                    {
                                                     
                                                          "$group" : grupo
                                                      }, 
                                                      { 
                                                          "$project" : proyect
                                                      },
                                                      { 
                                                        "$sort" : sortt
                                                    }
                                                  ]).exec(function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                console.log(todos2)
                                                    var rr=functool.graficasolotipocantidad(todos2,'',arrr,datasets)
                                                    console.log(rr)
                                                    res.json(rr);
                                                
                                                });
                                            } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.aggregate([
                                                    { $match: filtroff },
                                                    {
                                                     
                                                          "$group" : grupo
                                                      }, 
                                                      { 
                                                          "$project" : proyect
                                                      },
                                                      { 
                                                        "$sort" : sortt
                                                    }
                                                  ]).exec(function(err, todos2) {
                                                    if (err){  res.send(err);
                                                    }
                                                    //grupo+grupo0
                                                    var rr=functool.graficasolotipocantidad(todos2,'',arrr,datasets)
                                                    console.log(rr)
                                                    res.json(rr);
                                                
                                                });
                                            }
    
    
                                        
                            
                   // }
                });
            
    
    
                    break;
         
                case 'estado':
                    Frmmovildreportes.find({estado:req.params.id},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'tipoformulario':
              Frmmovildreportes.find({idmovil:req.params.id}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
               
                
            });
            break
            case 'camposformulario':
                
                Frmmovildreportes.find({idmovil:req.params.id}).sort([['order', 1]]).exec(function(err, todos) {
                  if (err){ res.send(err); }
              
                  var myData = [];
                  for(var i = 0; i < todos.length;i++){
                    myData.push({_id:todos[i]._id ,nombre:todos[i].name  })
                  }

                 res.json(myData);   
                 
                  
              });
            break;
            case 'tipofrmorden':
            Frmmovildreportes.find({idmovil:req.params.id}).sort([['order', -1]]).exec(function(err, todos) {
              if (err){ res.send(err); }
           
              if(todos.length>0)
              { res.json({orden:todos[0].order +10});
                 
              }
              else
              {
                  res.json({orden:10});
              }

            
             
              
          });
          break;
            default:
              // code block
          }


        
    }
    else
    { Frmmovildreportes.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
}
exports.deleteFrmmovildreportes = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    Frmmovildreportes.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFrmmovildreportes2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.id!=='crea')
{ 

    Frmmovildreportes.findById({ _id: req.params.id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 

                   
       
        

            todo.type       	=	req.body.type        	||	todo.type;    

            todo.formulario     	= req.body.formulario    	||	todo.formulario;   
            todo.idformulario       	=	req.body.idformulario        	||	todo.idformulario;   

            todo.tipo	=	req.body.tipo        	||	todo.tipo;   
            todo.camposfiltro	=	req.body.camposfiltro        	||	todo.camposfiltro;   
            todo.funcionget	=	req.body.funcionget        	||	todo.funcionget;   
            todo.filtroextra	=	req.body.filtroextra    ;  
            todo.ordentipo =	req.body.ordentipo 
            todo.colores1 =	req.body.colores1
            todo.colores2 =	req.body.colores2
            todo.typegraf	=	req.body.typegraf        	||	todo.typegraf;   
            todo.camposreporte	=	req.body.camposreporte        	||	todo.camposreporte;   
            todo.campox	=	req.body.campox        	||	todo.campox;   
            todo.campoy	=	req.body.campoy        	||	todo.campoy;   
            todo.nombrex	=	req.body.nombrex        	||	todo.nombrex; 
            todo.nombrey	=	req.body.nombrey        	||	todo.nombrey; 
            todo.tipoconteo	=	req.body.tipoconteo        	||	todo.tipoconteo; 
            todo.esproceso	=	req.body.esproceso        	||	todo.esproceso;   
  

        



            todo.usuarioup=req.body.bitacora.email;
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
  
    var nombret=req.body.nombre	    
    

    Frmmovildreportes.find({ idmovil	:req.body.idmovil 	,
       
        name   	:nombret
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un reporte con este nombre : ' + nombret); }
        else
        {  

                    Frmmovildreportes.create({ 
                        idempresa      	: req.body.idempresa     	,
                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                       
                        nombre:	 req.body.nombre ,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,
                    
                        usuarionew:req.body.bitacora.email
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


exports.creaFrmmovildreportes3s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
  
if(req.params.id2!=='crea')
{ 
   
    Frmmovildreportes.findById({ _id: req.params.id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
        
       
            todo.nombre       	=	req.body.nombre;    
            todo.order       	=	req.body.order        	||	todo.order;   
            todo.display	=	req.body.display        ;    
            todo.title       	=	req.body.title        	||	todo.title;    
            todo.estado       	=	req.body.estado        	||	todo.estado;    
            todo.type       	=	req.body.type        	||	todo.type;    
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
  
    var nombret=req.body.nombre	    

    Frmmovildreportes.find({ idmovil	:req.body.idmovil 	,
       
        name   	:nombret
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un reporte con este nombre : ' + nombret); }
        else
        {   

                    Frmmovildreportes.create({ 
                        idempresa      	: req.body.idempresa     	,
                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                    
                        nombre:	 req.body.nombre ,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,
                    
                        usuarionew:req.body.bitacora.email

                      
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


