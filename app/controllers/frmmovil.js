
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var Image = require('../models/image2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var frmejecuta= require('../controllers/frmmovilejecuta');
var frmejecutareporte= require('../controllers/frmmovilejecutareporte');

var functool = require('../controllers/funcionesnode');
var Contador = require('../models/contador');
var formulariotrayectoria = require('../models/asociadoventa/formulariotrayectoria');
var formulariocomentarios = require('../models/asociadoventa/formulariocomentarios');
var formulariofotos = require('../models/asociadoventa/formulariofotos');
var formulariofotos2 = require('../models/asociadoventa/formulariofotos2');
var formulariotareas = require('../models/asociadoventa/formulariotareas');

var frmactividad = require('../models/asociadoventa/frmactividad');
var frmacciones = require('../models/asociadoventa/frmacciones');
var frmactor = require('../models/asociadoventa/frmactor');
var frmactorgrupo = require('../models/asociadoventa/frmactorgrupo');
const frmmovilejecutareporte = require('../controllers/frmmovilejecutareporte');
const frmmovilejecutafunciones = require('../controllers/frmmovilejecutafunciones');
const frmmovilejecutacomandos = require('../controllers/frmmovilejecutacomandos');




async function getcombomanual(req, res, next)
{
    
    switch(req.params.id4) {
        case 'apiresttodo':
            (async () => {  
                respuesta = await frmmovilejecutafunciones.daejecutafunciones(req, res, next,[]);
               
               if(respuesta.estado==='exito')
               {
                res.json({estado:respuesta.estado,data:respuesta.datat});
               }
               else
               {
                res.json({estado:respuesta.estado,data:''});
               }
                   
                })();

        break;
        case 'getactividadesproceso':
            var namess=req.params.id
            var campost=req.params.id2
            break;
        case 'getcombopagocontratos':
                    
                var namess=req.params.id
                var campost=req.params.id2
                var myDatavector = campost.split(',');
                var idempresa=req.params.id3.split('°')[0]
                var myDatavector2 = req.params.id5.split(',');
                var contrato=functool.davalorvv(myDatavector2,'contrato')
                var filtro={estado:'Activo',idpapa:contrato}
                //enmiendas
                const ans = await functool.daidformreg('5f72a12587c9e33bd4ada7abs',filtro,{_id:-1},idempresa,'5f72a12587c9e33bd4ada7ab'); 

var papasx=[]
for(var i = 0; i <ans.length; i++) {
    papasx.push('' + ans[i]._id)
}

                 var arr=req.params.id3.split('°')
                 const pagosf = await functool.daidformreg('5f595df92521cd38c8fe3126',{
                    idpapa:{$in:papasx}
                    ,estado:'Pendiente'},{_id:1},idempresa,'5f595df92521cd38c8fe3126'); 



                    var enmiendax=[]
for(var i = 0; i <pagosf.length; i++) {
    enmiendax.push('' + pagosf[i]._id)
}

const multas = await functool.daidformreg('5f74c0fff22ed14ea01c1cbes',{
    idpapa:{$in:enmiendax}
    ,estado:'Activo'},{_id:1},idempresa,'5f74c0fff22ed14ea01c1cbe'); 

    const emergencias = await functool.daidformreg('603715b7a59cf50610072759',{
        idpapa:{$in:enmiendax},estado:'No atendida'
        },{_id:1},idempresa,'603715b7a59cf50610072759'); 

var pagosxx=[]
//String(Supervisores[i2]._id)
        for(var i = 0; i <pagosf.length; i++) {
            var totalmulta=0
            var totalemergencias=0
            var totalpago=pagosf[i].montopago;
            var idpago=String(pagosf[i]._id);
           
            for(var i2 = 0; i2 <multas.length; i2++) {
                if(idpago===multas[i2].idpapa)
                {
                    totalmulta=totalmulta+ multas[i2].monto

                }
           
            }


            for(var i3 = 0; i3 <emergencias.length; i3++) {

                if(idpago===emergencias[i3].idpapa)
                {
                    totalemergencias=totalemergencias+ emergencias[i3].monto

                }
           
            }
            
            var montoapagar=totalpago-totalmulta-totalemergencias
            pagosxx.push({_id:pagosf[i]._id,nopago:Number(pagosf[i].nopago),item:pagosf[i],nombre:'<strong>No pago</strong>: '+ pagosf[i].nopago+'<br><strong>Perido pago</strong>: '+ pagosf[i].periodopago+'<br><strong>Monto Pago</strong>: '+totalpago+'<br><strong>Multas</strong>: '+ totalmulta+'<br><strong>Emergencias</strong>: '+ totalemergencias+'<br><strong>Monto a pagar</strong>: ' + montoapagar +'<br>'})
           
        }


        pagosxx.sort(function(a, b) {
            return parseFloat(a.nopago) - parseFloat(b.nopago);
        });


      

        //nombre:'<strong>Monto Pago</strong>: 307201.83<br><strong>No pago</strong>: 25<br><strong>Monto a pagar</strong>: 307201.83<br>'



          /*      planificaciones = await functool.dadatosformulariocombo('5f595df92521cd38c8fe3126',{
                    idpapa:{$in:papasx}
                    ,estado:'Cancelado'},arr[0],myDatavector); 
                    */

                    var pagos2=[]

                if(pagosxx.length===0)
                {
                    res.json(pagosxx);
                }
                else
                {
                    pagos2.push({_id:pagosxx[0]._id,nopago:pagosxx[0].nopago,item:pagosxx[0].item,nombre:pagosxx[0].nombre});

                    res.json(pagos2)
                }

                
        break;

                case 'getcombosancioenmienda':
                    
                    var namess=req.params.id
                    var campost=req.params.id2
                    var arr=req.params.id3.split('°')
                   
                    var myDatavector = campost.split(',');
                    
                    var myDatavector2 = req.params.id5.split(',');
                    
                    var enmienda=functool.davalorvv(myDatavector2,'enmienda')
                  
                    //en las enmiendas vos a traer que plantilla de multas uso
                    var enmiendacampos=[]

                    enmiendacampos = await functool.daformxid('5f72a12587c9e33bd4ada7abs',{_id:  '' +enmienda +''},'"multasporperiodo"	: { "type" : "String" }, '); 



                    
                    var campossst=[]
                    campossst.push('multa°Multa')
                    planificaciones = await functool.dadatosformulariocombo('5fc55f9894568f50c4cdcb4c',{idpapa:enmiendacampos[0].multasporperiodo.split('¬')[1]},arr[0],campossst); 
                    res.json(planificaciones);



                    /*
                    var filtro={estado:'Activo',idpapa:contrato}
                    const ans = await daidform('5f72a12587c9e33bd4ada7abs',filtro); 
                     var arr=req.params.id3.split('°')
                    planificaciones = await functool.dadatosformulariocombo('5fc55f9894568f50c4cdcb4cs',{idpapa:ans,estado:'Activo'},arr[0],myDatavector); 
                    res.json(planificaciones);
*/


            
            break;
            default:
                res.json([]);

    }

}








var registrorep=''


 


exports.getFrmmovil = async function(req, res, next){
    
    if(req.params.id5)
    {
        if(req.params.id4=='frmmovilpreportepdf')
        {

            (async () => {  
                respuesta = await frmmovilejecutareporte.dareportepdf(req, res, next,[]);
               
                    res.json(respuesta);
                })();


        }
        else
        {
        
        if(req.params.id4=='frmmovilpreporteexcel')
        {

            (async () => {  
                respuesta = await frmmovilejecutareporte.dareporteexcel(req, res, next,[]);
               
                    res.json(respuesta);
                })();


        }
        else
        {
        if(req.params.id4=='frmmovilp')
        {
         
            if(req.params.id2=='sintodos')
            { 
                Frmmovil.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
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
                Frmmovil.find({idempresa:req.params.id3,estado:req.params.id2,tipo:'detalle',categoria:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });

            }}
        
        }
        else
        {
            

            if(req.params.id4=='apiresttodo')
            {
                getcombomanual(req, res, next);
            }
            else
            {
                getcombomanual(req, res, next);
            }
          
            
            

        }}}
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
              
         
                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                        var filtro=''
                                        filtro='{' +functool.replaceAll( arremp[1] ,'ë','/')+ '}'
                                  
                                        
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'


                                        var jsonObject = functool.stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                            

                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){

                                                    nombret = nombret + myDatavector[j].split('°')[1] + ': ' +  todos2[i][myDatavector[j].split('°')[0]]  + '°'
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
                                                    nombret = nombret + myDatavector[j].split('°')[1] + ': ' +  todos2[i][myDatavector[j].split('°')[0]]  + '°'
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
                                        var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                        var filtro=''
                                        
                                        filtro='{' +functool.replaceAll(req.params.id2,'ë','/')+ '}'
                                        
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'
                                     
                                        var jsonObject = functool.stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    
                                     
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
              
      
                   
                var objetox = {};
                
               
                    for(var j = 0; j < myDatavector.length;j++){
                        for(var i = 0; i < todos.length;i++){
                    if(myDatavector[j].split('°')[0]===todos[i].name)
                    {
                        objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                    }
                }
                   
                    
                }

                                    if(todos.length>0)   {  
                                       
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                        var filtro=''
                                  if(arremp[2] ===undefined && arremp[3]===undefined )
                                  {

                                    filtro='{' +functool.replaceAll( arremp[1] ,'ë','/')+ '}'
                                  


                                   
                                  }
                                  else
                                  {
                                    filtro='{' +functool.replaceAll( arremp[1] ,'ë','/')+ '°' + +functool.replaceAll( arremp[2] ,'ë','/')+ + '°' + +functool.replaceAll( arremp[3] ,'ë','/')+ + '}'
                                  }
                                       
                                   
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + '"sequencia"	: { "type" : "String" },"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },  "estadointerno"	: { "type" : "String" },"usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'

                                   
                                        var jsonObject = functool.stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
               
                                            
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                             
                                                var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                  
                                                res.json(datafinal);
                                                /*
                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){
                                                    nombret = nombret + myDatavector[j].split('°')[1] + ': ' +  todos2[i][myDatavector[j].split('°')[0]]  + '°'
                                                }
                                                myData.push({_id:todos2[i]._id , nombre: nombret })

                                                 
                                              }
                                                res.json(myData);
                                                */
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( JSON.parse(filtro) ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                           
                                                var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                  
                                                res.json(datafinal);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
        { if(req.params.id4=='unregistromovilnoorden')
        {

            var namess=req.params.id
            var idbuscar=functool.padLeadingZeros(req.params.id2,7)
            var arrt=req.params.id3.split('°')
            var filll={sequencia:idbuscar}
          
            if(arrt[2]==='Si')
            {
                filll={sequenciag:idbuscar}
            }
         
            
            Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
                       
                var objetox = {};
                
                for(var i = 0; i < todos.length;i++){
                    objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                }
         
                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                  
                                        cad=cad3[0]
                                      
                                        cad=cad + '       "sequencia"	: { "type" : "String" }, "usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                       
                                 
                                        var jsonObject = functool.stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    
                                        try {
                                        
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find(filll ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                               

                                                var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                          
                                                           res.json(datafinal);
                                                         
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find({sequencia:idbuscar} ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                         
                                              
                                                var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                          
                                                res.json(datafinal);
                                              
                                             
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
                    var uno=idbuscar[i].split('°')[0]
                    arratodo.push( uno)
                }
                
 
              
           

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
                                            var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                      
                                            cad=cad3[0]
                                          
                                            cad=cad + ' "usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                           
                                       
                                            var jsonObject = functool.stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                         
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                
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
                if(req.params.id4=='registromovilxidpapa')
                {
        
                    var namess=req.params.id

                    var idbuscar=req.params.id2
                    
                    var arrt=req.params.id3.split('°')
                    
    
        
                    Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                        if (err){ res.send(err); }
                      
                 
                                            if(todos.length>0)   {  
                                           
                                                var cad=''
                                                var cadxx=''
                                                var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                          
                                                cad=cad3[0]
                                              
                                                cad=cad + ' "usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                                cad='{' + cad + '}'
                                               
                                         
                                                var jsonObject = functool.stringToObject(cad);
                                              
                                                var mongoose = require("mongoose");
                                                delete mongoose.connection.models[namess];
                                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                             
                                            
                                                try {
                                                    
                                                    var  frmtt= mongoose.model(namess,tt);
                                                    frmtt.find({idpapa:idbuscar} ,function(err, todos2) {
                                                        if (err){  res.send(err); }
                                                       
        
                                                        res.json(todos2);
                                                      
                                                    });
                                                  } catch(e) {
                                                    
                                                    var  frmtt= mongoose.model(namess);
                                          
                                                    frmtt.find( {idpapa:idbuscar} ,function(err, todos2) {
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
                    if(req.params.id4=='registromovilxperiodoyarray')
                    {
            
                        var namess=req.params.id
                        
                        var idbuscar=req.params.id2.split(';')
                        var arrt=req.params.id3.split('°')
        
            
                        Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                            if (err){ res.send(err); }
                          
                     
                                                if(todos.length>0)   {  
                                               
                                                    var cad=''
                                                    var cadxx=''
                                                    var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                              
                                                    cad=cad3[0]
                                                  
                                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                                    cad='{' + cad + '}'
                                                   
                                             
                                                    var jsonObject = functool.stringToObject(cad);
                                                  
                                                    var mongoose = require("mongoose");
                                                    delete mongoose.connection.models[namess];
                                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                                 
                                                
                                                    try {
                                                       
                                                  
                                                        var  frmtt= mongoose.model(namess,tt);
                                                        frmtt.find({idpapa:{$in:idbuscar}, periodopago:arrt[2]} ,function(err, todos2) {
                                                            if (err){  res.send(err); }
                                                           
            
                                                            res.json(todos2);
                                                          
                                                        });
                                                      } catch(e) {
                                                        
                                                        var  frmtt= mongoose.model(namess);
                                              
                                                        frmtt.find( {idpapa:{$in:idbuscar}, periodopago:arrt[2]} ,function(err, todos2) {
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
                        if(req.params.id4=='unregistromovilusercreate')
            {
    
                var namess=req.params.id
                var idbuscar=req.params.id2
                var arrt=req.params.id3.split('°')

    
                Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                  
             
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                      
                                            cad=cad3[0]
                                          
                                            cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                           
                                     
                                            var jsonObject = functool.stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                         
                                        
                                            try {
                                              
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find({usuarionew:idbuscar} ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                   
    
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( {usuarionew:idbuscar} ,function(err, todos2) {
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
                if(req.params.id4=='unregistromoviltodo')
                {
        
                    var namess=req.params.id
                    var idbuscar=req.params.id2
                    var arrt=req.params.id3.split('°')
    
        
                    Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                        if (err){ res.send(err); }
                      
                                   
                var objetox = {};
                
                for(var i = 0; i < todos.length;i++){
                    objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                }
         
                 
                                            if(todos.length>0)   {  
                                           
                                                var cad=''
                                                var cadxx=''
                                                var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                          
                                                cad=cad3[0]
                                              
                                                cad=cad + '"estadointerno"	: { "type" : "String" },"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"}'

                                              
                                                cad='{' + cad + '}'
                                               
                                         
                                                var jsonObject = functool.stringToObject(cad);
                                              
                                                var mongoose = require("mongoose");
                                                delete mongoose.connection.models[namess];
                                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                             
                                            
                                                try {
                                                    
                                                    var  frmtt= mongoose.model(namess,tt);
                                                    frmtt.find({_id:idbuscar} ,function(err, todos2) {
                                                        if (err){  res.send(err); }
                                                       
                                                        var datafinal = functool.procesahtmlrecord(objetox,todos2,'no')
                                                          
                                                        res.json(datafinal);
                                                      
                                                    });
                                                  } catch(e) {
                                                    
                                                    var  frmtt= mongoose.model(namess);
                                          
                                                    frmtt.findd( {_id:idbuscar} ,function(err, todos2) {
                                                         if (err){  res.send(err);
                                                        }
                                                 
                                                      
                                                        var datafinal = functool.procesahtmlrecord(objetox,todos2,'no')
                                                          
                                                        res.json(datafinal);
                                                     
                                                     });
                                                  }
            
            
                                             
                                
                        }
                    });
            
                    
        
        
                }
          else{    
            if(req.params.id4=='unregistromovil')
            {
    
                var namess=req.params.id
                var idbuscar=req.params.id2
                var arrt=req.params.id3.split('°')

    
                Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                  
             
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                      
                                            cad=cad3[0]
                                          
                                            cad=cad + ' "estadointerno"	: { "type" : "String" },"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                           
                                     
                                            var jsonObject = functool.stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                         
                                        
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
                if(req.params.id4=='formulariosimple')
                {
        
                    
                    var namess=req.params.id
                    var namess2=req.params.id2
                   
                  
                   
                    Frmmovild.find({idmovil:req.params.id,idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
                        if (err){ res.send(err); }
                      
                 
                        var objetox = {};
                
                        for(var i = 0; i < todos.length;i++){
                            objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                        }
        
                 
                                            if(todos.length>0)   {  
                                           
                                                var cad=''
                                                var cadxx=''
                                                var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                          
                                                cad=cad3[0]
                                                cadxx='{'+ cad3[1] + '}'
                                                cad=cad + '    "sequencia"	: { "type" : "String" },"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "estadointerno"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                                cad='{' + cad + '}'
                                                cadxx='{' + cadxx + '}'
                                           
                                                var jsonObject = functool.stringToObject(cad);
                                              
                                                var mongoose = require("mongoose");
                                                delete mongoose.connection.models[namess2];
                                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                              
                                                
                                            
                                                try {
                                                    var  frmtt= mongoose.model(namess2,tt);
                                                    frmtt.find({} ,function(err, todos2) {
                                                        if (err){  res.send(err); }
                                                       
                                                          
                                                           res.json(todos2);
                                                      
                                                    });
                                                  } catch(e) {
                                                    
                                                    var  frmtt= mongoose.model(namess2);
                                          
                                                    frmtt.find( {} ,function(err, todos2) {
                                                         if (err){  res.send(err);
                                                        }
                                                 /*
                                                      
                                                       var myData = [];
                                                       for(var i = 0; i < todos2.length;i++){
                                                         var nombret ='';
                                                         for(var j = 0; j < myDatavector.length;j++){
                                                             nombret = nombret + myDatavector[j].split('°')[1] + ': ' +  todos2[i][myDatavector[j].split('°')[0]]  + ' ° '
                                                         }
                                                         myData.push({_id:todos2[i]._id , nombre: nombret })
         
                                                          
                                                       }
                                                       */
                                                      var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                          
                                                           res.json(datafinal);
                                                         
                                                     
                                                     });
                                                  }
            
            
                                             
                                
                        }
                    });
            
                    
        
        
                }

                else
                {
        if(req.params.id4=='formulariocombo')
        {

            
            var namess=req.params.id
            var campost=req.params.id2
          
            var myDatavector = campost.split(',');

//,_id:{$in: myData}

            Frmmovild.find({idmovil:req.params.id,idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
         

                
                   
                var objetox = {};
                
              
                    for(var j = 0; j < myDatavector.length;j++){
                        for(var i = 0; i < todos.length;i++){
                    if(myDatavector[j].split('°')[0]===todos[i].name)
                    {
                        objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                    }
                }
                   
                    
                }

           

         
                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                  
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + '"sequencia"	: { "type" : "String" }, "usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "estadointerno"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'
                                   
                                        var jsonObject = functool.stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      
                                        
                                    
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find({} ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                               
                                                var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                  
                                                   res.json(datafinal);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( {} ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                         /*
                                              
                                               var myData = [];
                                               for(var i = 0; i < todos2.length;i++){
                                                 var nombret ='';
                                                 for(var j = 0; j < myDatavector.length;j++){
                                                     nombret = nombret + myDatavector[j].split('°')[1] + ': ' +  todos2[i][myDatavector[j].split('°')[0]]  + ' ° '
                                                 }
                                                 myData.push({_id:todos2[i]._id , nombre: nombret })
 
                                                  
                                               }
                                               */
                                              var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                  
                                                   res.json(datafinal);
                                                 
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
        {
        if(req.params.id4=='frmmovilp')
        {

            if(req.params.id2=='detallemaster')
            { //aqui tenemos que jalar primero el idpapa todos los campos detalle de ese formulario  req.params.id5
/*
                Frmmovild.find({idmovil:req.params.id,idempresa:req.params.id3}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    var data=[]
                  
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].type==='Formulario detalle')
                        {
                                data.push('' + todos[i].idformdetalle.id + '')
                        }
                    }
*/
                    

                    Frmmovil.find({_id:{$in:req.params.id}}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                      
                         res.json(todos);
                     });

                 //   });


               
            }
            else
            {
                if(req.params.id2=='sintodos')
                { 
                    Frmmovil.find({idempresa:req.params.id3,tipo:{$in:['proceso']}}).sort({'_id': -1}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                      
                         res.json(todos);
                     });
                }
                else
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

            }}
        }

        }
        else
        {
        if(req.params.id4=='categoriausr')
        {



            var arr=(req.params.id3).split('°')
            var filtro1;
            if(arr[1]=='todos')
            {  filtro1={idempresa:arr[0],idusuario:req.params.id2}
            }
            else
            {
                filtro1={idempresa:arr[0], estado:arr[1],idusuario:req.params.id2}
            }
            

                  Frmmovil.find({idempresa:arr[0], tipo:arr[2],publico:'Si'}).exec(function(err, todosa) {
                   
       
                    

                  
                     formulariousr.find(filtro1).exec(function(err, todosb) {
                  
                              if (err){  res.send(err);  }
                              if( todosb.length<=0 && todosa.length<=0)             {               res.json([]);              }   else{
                              if(todosb.length>0 && todosa.length<=0)
                              {
                                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                                    if (err){  res.send(err);  }

                                
                                
                                    var myData = [];
                                    
                                    for(var i = 0; i < todos.length;i++){
                                    
                                        if(todos[i].idformulario.categoria==req.params.id)
                                        {
                                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta  ,
                                                ejecutainicio:todos[i].idformulario.ejecutainicio,
                                                ejecutaelimina:todos[i].idformulario.ejecutaelimina,ejecutaactualiza:todos[i].idformulario.ejecutaactualiza  ,tipo:todos[i].idformulario.tipo,permisos:{
                                                pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, 
                                                comandos:todos[i].comandos, 
                                                generareporte:todos[i].generareporte,comandos:todos[i].comandos, 
                                                activas:todos[i].activas,cerradas:todos[i].cerradas,ejecutadas:todos[i].ejecutadas,
                                                filtrarordentipo:todos[i].filtrarordentipo, filtrarorden:todos[i].filtrarorden,pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].reporte, preporte2:todos[i].reporte2,camposreporte:todos[i].camposreporte,  potros1:'', imprimeorden	:todos[i].imprimeorden, 
                                                        cancelarorden:todos[i].cancelarorden,reasignarorden:todos[i].reasignarorden,bitacoraorden:todos[i].bitacoraorden,papaorden:todos[i].papaorden,imprimeorden2	:todos[i].imprimeorden2,  finalizaorden :todos[i].finalizaorden,  eliminaorden  :todos[i].eliminaorden, dashboard  :todos[i].dashboard, filtrocampo  :todos[i].filtrocampo,  trayectoriaorden:todos[i].trayectoriaorden,  documentacionorden:todos[i].documentacionorden,  pausarorden  :todos[i].pausarorden,  anularorden  :todos[i].anularorden,  fotosorden:todos[i].fotosorden, comentariosorden:todos[i].comentariosorden,  documentosorden :todos[i].documentosorden,  tareasorden  :todos[i].tareasorden,acciones:todos[i].acciones,publico:todos[i].idformulario.publico}});
                                        }




                                        
                                    }
                                    
                        
                             
                        
                                
                                                res.json(myData);
                                                
                                                });
                              }
                              else
                              {
                              if(todosb.length<=0 && todosa.length>0)
                              {// no tiene formularios detalle
                             
                                    var myData = [];
                                    for(var i = 0; i < todosa.length;i++){
                                        if(todosa[i].categoria==req.params.id)
                                        {
                                            myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo,publico:todosa[i].publico});
                                        }
                                    }
                                    var unique =   myData.filter( functool.onlyUnique );
                                    var myData2 = [];
                                                  for(var i = 0; i < unique.length;i++){
                                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',  potros1:'',comandos:[], 
                                                     generareporte:'', 
                                                     activas:'true',cerradas:'true',ejecutadas:'false',
                                                     filtrarorden:'false', filtrarordentipo:'false',
                                                     cancelarorden:'false',reasignarorden:'false',bitacoraorden:'false',papaorden:'false',
                                                     imprimeorden	:'true',   imprimeorden2	:'false',  finalizaorden :'false',  eliminaorden  :'false', eliminaorden  :'false',    dashboard  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true',publico:unique[i].publico}});
                                                 }
                                                 
                                                  res.json(myData2);
                                
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
                                                        myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta  ,ejecutainicio:todos[i].idformulario.ejecutainicio ,ejecutaelimina:todos[i].idformulario.ejecutaelimina,ejecutaactualiza:todos[i].idformulario.ejecutaactualiza ,tipo:todos[i].idformulario.tipo,
                                                            pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, 
                                                            activas:todos[i].activas,cerradas:todos[i].cerradas,ejecutadas:todos[i].ejecutadas,
                                                            generareporte:todos[i].generareporte, 
                                                            filtrarordentipo:todos[i].filtrarordentipo, filtrarorden:todos[i].filtrarorden,pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].reporte, preporte2:todos[i].reporte2,camposreporte:todos[i].camposreporte,  potros1:'', imprimeorden	:todos[i].imprimeorden,  
                                                                    imprimeorden2	:todos[i].imprimeorden2,  finalizaorden :todos[i].finalizaorden,  
                                                                    comandos :todos[i].comandos,  
                                                                    cancelarorden:todos[i].cancelarorden,reasignarorden:todos[i].reasignarorden,bitacoraorden:todos[i].bitacoraorden,papaorden:todos[i].papaorden,eliminaorden  :todos[i].eliminaorden, dashboard  :todos[i].dashboard, filtrocampo  :todos[i].filtrocampo,  trayectoriaorden:todos[i].trayectoriaorden,  documentacionorden:todos[i].documentacionorden,  pausarorden  :todos[i].pausarorden,  anularorden  :todos[i].anularorden,  fotosorden:todos[i].fotosorden, comentariosorden:todos[i].comentariosorden,  documentosorden :todos[i].documentosorden,  tareasorden  :todos[i].tareasorden,acciones:todos[i].acciones,publico:todos[i].idformulario.publico});
                                                    }
                                                    
                                                }
                                                
                                    
                                                for(var i = 0; i < todosa.length;i++){
                                                    if(todosa[i].categoria==req.params.id)
                                                    {
                                                        var encuentra=0;
                                                        for(var ii = 0; ii < myData.length;ii++){
                                                        
                                                            if(String(myData[ii]._id)===String(todosa[i]._id))
                                                            {
                                                                encuentra=1;
                                                                break;
                                                            }
                                                        }
                                                        if(encuentra==0)
                                                        {
                                                        myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,ejecutainicio:todosa[i].ejecutainicio,ejecutaelimina:todosa[i].ejecutaelimina,ejecutaactualiza:todosa[i].ejecutaactualiza  ,tipo:todosa[i].tipo,
                                                            pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',
                                                            generareporte:'', 
                                                            activas:'true',cerradas:'true',ejecutadas:'false',
                                                            filtrarordentipo:'false', filtrarorden:'false',potros1:'' , imprimeorden	:'true', imprimeorden2	:'false',  finalizaorden :'false', 
                                                            cancelarorden:'false',reasignarorden:'false',bitacoraorden:'false',papaorden:'false', eliminaorden  :'false', eliminaorden  :'false',    dashboard  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true',publico:todosa[i].publico});
                                                        }
                                                    }
                                                    
                                                }
                                    
                                                var unique =   myData.filter( functool.onlyUnique );
                                            
                                                var myData2 = [];
                                                            for(var i = 0; i < unique.length;i++){
                                                                myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,ejecutainicio:unique[i].ejecutainicio ,ejecutaelimina:unique[i].ejecutaelimina ,ejecutaactualiza:unique[i].ejecutaactualiza  ,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:unique[i].pactualizacion, 
                                                                    comandos:unique[i].comandos,
                                                                    activas:unique[i].activas,cerradas:unique[i].cerradas,ejecutadas:unique[i].ejecutadas,
                                                                    generareporte:unique[i].generareporte, 
                                                                    filtrarordentipo:unique[i].filtrarordentipo,  filtrarorden:unique[i].filtrarorden, pconsulta:unique[i].pconsulta, pcreacion:unique[i].pcreacion, peliminacion:unique[i].peliminacion,  pfiltro:unique[i].filtro, pingreso:'true', preporte:unique[i].reporte,  potros1:'', imprimeorden	:unique[i].imprimeorden,  
                                                                    imprimeorden2	:unique[i].imprimeorden2,  finalizaorden :unique[i].finalizaorden,  
                                                                    cancelarorden:unique[i].cancelarorden,reasignarorden:unique[i].reasignarorden,bitacoraorden:unique[i].bitacoraorden,papaorden:unique[i].papaorden,eliminaorden  :unique[i].eliminaorden, dashboard  :unique[i].dashboard, filtrocampo  :unique[i].filtrocampo,  trayectoriaorden:unique[i].trayectoriaorden,  documentacionorden:unique[i].documentacionorden,  pausarorden  :unique[i].pausarorden,  anularorden  :unique[i].anularorden, 
                                                                publico:unique[i].publico, fotosorden:unique[i].fotosorden, comentariosorden:unique[i].comentariosorden,  documentosorden :unique[i].documentosorden,  tareasorden  :unique[i].tareasorden,acciones:unique[i].acciones}});
                                                            }
                                        
                                                            res.json(myData2);
                                                            
                                                            });




                              }}}
                            });
                        
                        
                        
                  
                        
                        
                        });
             

        

        }
        else
        {
            if(req.params.id4=='ordenhijas')
            {


                var filtro={ordenhijas: { $regex: '.*' + req.params.id + '.*' },idempresa:req.params.id3}
                //enmiendas
                const ans = await functool.daidformreg(req.params.id2,filtro,{_id:-1},req.params.id3,req.params.id2); 
                res.json(ans);
            }
            else
            {
       

         

        
                var namess=req.params.id //formulario
                //req.params.id2   campo   req.params.id3   informacion
                
                var filtro
               
               var arrtodos=     req.params.id4.split('°')
        
               
               Frmmovild.find({idmovil:req.params.id}).sort([['order', 1]]).exec(function(err, todosuno) {
                if (err){ res.send(err); }
                var cad3a=(functool.dafiltrocadsolouno(todosuno,req.params.id2,req.params.id3.replace('¬','/'),'')).split('°');
                var cada = cad3a[0];
                var cadsolouno = cad3a[1]
        
                Frmmovild.find({idmovil:req.params.id, display : "true"}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    var objetox = {};
                        
                    for(var i = 0; i < todos.length;i++){
                        objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                    }
                                        if(todos.length>0)   {  
                                       
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad4=(functool.dafiltrocad(todos,req.params.id2,req.params.id3.replace('¬','/'),''))
                                            var cad3=(functool.dafiltrocad(todos,req.params.id2,req.params.id3.replace('¬','/'),'')).split('°')
                                            cad=cad3[0] +cada

                                            if(cad4.indexOf('°')>0)
                                            {
                                                
                                               // e{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
                                                if(cadsolouno.indexOf(req.params.id2)>=0)
                                                {
                                                    cad3[1]  = '"' +req.params.id2 + '": { "$regex" : "' +req.params.id3.split('°')[0] + '", "$options" : "i" } ' 
                                                }
                                                else
                                                {
                                                    if(cadsolouno==='')
                                                    {
                                                        cad3[1]  = '"' +req.params.id2 + '": { "$regex" : "' +req.params.id3.split('°')[0] + '", "$options" : "i" } ' 
                                                    }
                                                    else
                                                    {
                                                        cad3[1]  = cadsolouno+ ',"' +req.params.id2 + '": { "$regex" : "' +req.params.id3.split('°')[0] + '", "$options" : "i" } ' 
                                                    }
                                                    
                                                }    
                                                
        
                                            }
                                            else
                                            {
                                               
                                            
        
                                                cad3[1]  = cadsolouno+ cad3[1]
                                            }


        
                                            if(arrtodos[1] ==='todosdetalle')
                                            {
                                                if(arrtodos[2] ==='todos')
                                                {//{ "$regex" : "' +id3 + '",
                                                    cadxx='{' + cad3[1] +',"' +'idempresa' + '":"' +arrtodos[0] + '"' +',"' +'idpapa' + '":"' +arrtodos[3] + '"'+ '}'
                                                   
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
                                     
        
        
                                           
        
        
                                            cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },   "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"}, "geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                            cad='{' + cad + '}'
                                            var jsonObject = functool.stringToObject(cad);
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                           
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                
                                                frmtt.find(JSON.parse(cadxx) ,function(err, todos2) {
                                                    if (err){  res.send(err);  }
                                                
                                                    var datafinal = functool.procesahtmlrecord(objetox,todos2,'no')
                                                          
                                                    res.json(datafinal);
                                                  
                                                  
                                                });
                                              } catch(e) {
                                                 
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find(JSON.parse(cadxx) ,function(err, todos2) {
                                                     if (err){  res.send(err);  }
                                                     var datafinal = functool.procesahtmlrecord(objetox,todos2,'no')
                                                          
                                                           res.json(datafinal);
                                                         
                                                 
                                                 });
                                              }
        
        
                                         
                            
                    }
                });
            });
    }}}}}}}}}}}}}}}

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
            case 'dasegunformulario':
                switch(req.params.id3) {
                 case 'gesorden':
                     var rr=functool.daactividadsegunfrm(req.params.id)
                    res.json({actividad:rr});
                 break;
                }
    break;
            case 'flujotrayectoriaorden':
                
                var arr=req.params.id3.split('°')
                
                Frmmovil.findById({_id:arr[1]}).sort({'order': 1}).exec(function(err, todos10a) {

                Frmmovild.find({idempresa:arr[0],idmovil:arr[1]}).sort({'order': 1}).exec(function(err, todos10) {


                formulariotrayectoria.find({idorden:req.params.id,idempresa:arr[0]}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    

                    frmactividad.find({idempresa:arr[0],idpapa:arr[1] }).sort({'orden': 1}).exec(function(err, todos1) {
                        if (err){  res.send(err);  }
                      
                        frmacciones.find({idempresa:arr[0],idpapa0:arr[1]}).sort({'orden': 1}).exec(function(err, todos2) {
                            if (err){  res.send(err);  }
                           
                           var actividades= []
                           for(var i = 0; i < todos1.length;i++){
                               var acciones=[]
                            for(var j = 0; j < todos2.length;j++){
                               
                                if(todos1[i]._id==todos2[j].idpapa)
                                {
                                    acciones.push({nombre:todos2[j].nombre,tipo:todos2[j].tipo,orden:todos2[j].orden,subtipo:todos2[j].subtipo,estado:todos2[j].estado})
                                }
                            }

                            var trayecto=[]
                            for(var k = 0; k < todos.length;k++){
                              
                                if(todos1[i]._id==todos[k].idactividad)
                                {
                                    trayecto.push(todos[k])
                                }
                            }



                            actividades.push({orden:todos1[i].orden,nombre:todos1[i].nombre,actor:todos1[i].actor,
                                clase:todos1[i].clase,estado:todos1[i].estado,acciones:acciones,trayecto:trayecto});
                           }
                           
                           
                            res.json({formulario: todos10a,actividad:actividades,campos:todos10});
                         });


            
                        });     
                     });


                   
                    
                });

            });
          break;
            case 'trayectoriaorden':
                    formulariotrayectoria.find({idorden:req.params.id,idempresa:req.params.id3},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
         
     
     
              case 'todasordenes2filtro':

                var arrr=req.params.id.split('°')

                           
var filtro={idform:arrr[0],salioorden:1,createdAt:{"$gte": new Date(arrr[2]+'T00:00:00.000Z'),"$lt": new Date(arrr[3] +'T24:00:00.000Z')}}

if(arrr[1]!==undefined && arrr[1]!=='' && arrr[1]!=='null' && arrr[1]!==null)
{
filtro={idform:arrr[0],salioorden:1,createdAt:{"$gte": new Date(arrr[2]+'T00:00:00.000Z'),"$lt": new Date(arrr[3] +'T24:00:00.000Z')
},sequenciag:functool.padLeadingZeros(arrr[1],7)}

}

if(arrr[4]!==undefined &&arrr[4]!=='undefined' && arrr[4]!=='' && arrr[4]!=='null' && arrr[4]!==null)
{
    filtro['info']={ "$regex" : arrr[4], "$options" : "i" } 
}





    formulariotrayectoria.find( filtro).sort({sequenciag:-1}).exec(function(err, todos) {
        if (err){  res.send(err);  }
        res.json(todos);
        
    });



break;
case 'todasordenes3filtro':

    var arrr=req.params.id.split('°')

               //salioorden:1
var filtro={idactividad:arrr[4],idform:arrr[3],createdAt:{"$gte": new Date(arrr[1]+'T00:00:00.000Z'),"$lt": new Date(arrr[2] +'T24:00:00.000Z')}}

console.log(filtro)
formulariotrayectoria.find( filtro).sort({sequenciag:-1}).exec(function(err, todos) {
if (err){  res.send(err);  }


var datat=[]

for(var k = 0; k < todos.length;k++){


var ff3=todos[k].updatedAt
var ff4=todos[k].createdAt
var ff5 =todos[k].updatedAt


var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
var diffhoras = parseInt((ff3 - ff4) / (1000 * 60 * 60 )); //gives day difference
var diffminutos = parseInt((ff3 - ff4) / (1000 * 60 )); //gives day difference
var diffseg = parseInt((ff3 - ff4) / (1000  )); //gives day difference
var tiempo=''
if(diffDays!==0 && diffhoras>60 && diffminutos>0 && diffseg>0)
{
tiempo= diffDays + ' Dias'

}
if(diffhoras!==0 && diffDays===0 && diffminutos>60 && diffseg>0)
{
tiempo= diffhoras + ' Horas'

}
if(diffminutos!==0 && diffDays===0 && diffhoras===0 && diffseg>60)
{
tiempo= diffminutos + ' Minutos'

}
if(diffseg!==0 && diffDays===0 && diffminutos===0 && diffhoras===0)
{
tiempo= diffseg + ' Segundos'

}
var actort=''
if(todos[k].actoractividad)
{actort=todos[k].actoractividad.nombre}

var infott=''
if(todos[k].info)
{
var cadenita=todos[k].info

if(cadenita.indexOf('<br>')>=0)
{
arrinfo=todos[k].info.split('<br>')
for(var k2 = 0; k2 < arrinfo.length;k2++){
var cad='';cad=arrinfo[k2]

if(cad.indexOf('>: .')>0 || cad.indexOf('>: 0')>0 || cad.indexOf('¬')>=0  || cad.indexOf('idempresa')>=0 || cad.indexOf('usuarioup')>=0 || cad.indexOf('usuarionew')>=0
|| cad.indexOf('geoposicion')>=0 || cad.indexOf('estadointerno')>=0|| cad.indexOf('isusuarioasigna')>=0|| cad.indexOf('comentarioanulado')>=0
|| cad.indexOf('pmodulo')>=0 || cad.indexOf('idactividadxxx')>=0   || cad.indexOf('estadoxxx')>=0  || cad.indexOf('idusuariosasigna')>=0  || cad.indexOf('asignadoxxx')>=0
|| cad.indexOf('idactorxxx')>=0  || cad.indexOf('actorxxx')>=0 || cad.indexOf('enviadoporxxx')>=0 || cad.indexOf('estadoordenxxx')>=0 || cad.indexOf('idusuarioasigna')>=0
|| cad.indexOf('tipoaccionxxx')>=0 || cad.indexOf('subtipoaccionxxx')>=0|| cad.indexOf('actividadclasexxx')>=0|| cad.indexOf('actividadtipoxxx')>=0
|| cad.indexOf('leidoxxx')>=0|| cad.indexOf('idusuarioasigna')>=0 || cad.indexOf('actividadxxx')>=0 || cad.indexOf('accionxxx')>=0
|| cad.indexOf('idaccionxxx')>=0|| cad.indexOf('ejecutainicio')>=0|| cad.indexOf('ejecutafinal')>=0|| cad.indexOf('comentariocerrado')>=0)
{}
else
{
    if(cad.indexOf('cliente')>0 || cad.indexOf('departamento')>0 )
    {
        var arr= cad.split(':')
        infott=infott+ arr[2] ;
        if(infott==='undefined')
        { infott=''
            infott=infott+ arr[1] ;

        }

        infott=infott.replace('undefined','')
    }
//  infott=infott+ '<ion-chip  color="primary" item-content style="margin-left: 10px;"> <ion-label >' + cad + '</ion-label></ion-chip>';

}

}

}
}

datat.push({actividad:todos[k].nombreactividad,usuarioejecutor:todos[k].usuarioejecutor,idform:todos[k].idform,asignadoxxx:todos[k].asignadoxxx
,usuariocreador:todos[k].usuariocreador,info:infott,idorden:todos[k].sequenciag,idorden2:todos[k].sequencia,tiempo:tiempo,
fecha:ff4,fechasalida:ff5,dias:diffDays,horas:diffhoras,minutos:diffminutos,segundos:diffseg,enviadopor:todos[k].enviadoporxxx,actor:actort})

}





res.json(datat);

});



break;

  case 'todasordenes1filtro':
    var arrr=req.params.id.split('°')
    console.log(arrr)

    var filtro={salioorden:1,createdAt:{"$gte": new Date(arrr[1]+'T00:00:00.000Z'),"$lt": new Date(arrr[2] +'T24:00:00.000Z')}}

if(arrr[0]!==undefined && arrr[0]!=='undefined' && arrr[0]!=='' && arrr[0]!=='null' && arrr[0]!==null)
{
filtro={salioorden:1,createdAt:{"$gte": new Date(arrr[1]+'T00:00:00.000Z'),"$lt": new Date(arrr[2] +'T24:00:00.000Z')},sequenciag:functool.padLeadingZeros(arrr[0],7)}

}


if(arrr[3]!==undefined && arrr[3]!=='undefined' && arrr[3]!=='' && arrr[3]!=='null' && arrr[3]!==null)
{
    filtro['info']={ "$regex" : arrr[3], "$options" : "i" } 
}

console.log(filtro)
    formulariotrayectoria.aggregate( [
        { $match:filtro},
        { 
            "$group" : {
                "_id" : {
                    "procedimiento" : "$procedimiento",
                    "idform":"$idform"

                }, 
                "COUNT(*)" : {
                    "$sum" : 1
                }
            }
        }, 
        { 
            "$project" : {
                "procedimiento" : "$_id.procedimiento", 
                "idform":"$_id.idform",

                "cantidad" : "$COUNT(*)", 
                "_id" :0
            }
        }
    ]).exec(function(err, todos) {
        if (err){  res.send(err);  }
        res.json(todos);
        
    });



break;


              case 'trayectoriaordencomentario':
                formulariotrayectoria.find({idorden:req.params.id,idempresa:req.params.id3}).sort({createdAt:-1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }


                    formulariocomentarios.find({idpapa:req.params.id,idempresa:req.params.id3}).sort({createdAt:-1}).exec(function(err, todos10) {
                        if (err){  res.send(err);  }
    
    
                        var trayecto=[]

                        for(var k = 0; k < todos.length;k++){
                              
                         
                                trayecto.push({fechaingreso:todos[k].createdAt,fechasalida:todos[k].updatedAt,usuario:todos[k].usuarioejecutor.nombre
                                    ,usuariocorreo:todos[k].usuarioejecutor.correo,actividad:todos[k].nombreactividad,comentario:''})
                            
                        }

                        for(var k = 0; k < todos10.length;k++){
                              
                         
                            trayecto.push({fechaingreso:todos10[k].createdAt,fechasalida:todos10[k].updatedAt,usuario:todos10[k].usuarionew
                                ,usuariocorreo:todos10[k].usuarionew,actividad:todos10[k].actividad,comentario:todos10[k].nombre})
                        
                    }
                    trayecto.sort(functool.sortByProperty("fechaingreso"));
                    trayecto.reverse()
                        res.json(trayecto);
                        
                    });


                    
                    
                });
          break;
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
                Frmmovild.find({idmovil:req.params.id, idempresa:req.params.id3},function(err, todos) {
                    if (err){  res.send(err);  }
                    var data=[]
                    for(var i = 0; i < todos.length;i++){
                        
                            data.push({name:todos[i].name,nombre:todos[i].title})
                        
                        
                    }
                    res.json(data);
                    
                });

        break;
            case 'formulariocamposver2':
               Frmmovild.find({idmovil:req.params.id,idempresa:req.params.id3}).exec(function(err, todos) {
          
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
            Frmmovild.find({idmovil:req.params.id,idempresa:req.params.id3}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                var data=[]
              
                for(var i = 0; i < todos.length;i++){
                    if( todos[i].type!='Formulario detalle')
                    {
                        data.push({_id:todos[i]._id,nombre:todos[i].title,name:todos[i].name})
    
                    }
                        
                    
                    
                }
                res.json(data);
                
            });
            break;
            case 'formulariocamposveridcampo':
                Frmmovild.find({idmovil:req.params.id,idempresa:req.params.id3}).exec(function(err, todos) {
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
                     case 'formularioexcelproceso':
                    var arrtodos=req.params.id3.split('°')
                    var usuarito=''
                    var tieneactividadasignacion=arrtodos[5]
                    usuarioup=arrtodos[4]
                 
                    var actividadt=[]
                    actividadt=req.params.id.split('¬')[0].split(',')
                    var grupot=[]
                    var grupot0=req.params.id.split('¬')[1].split('°')
                    for(var i = 0; i < grupot0.length;i++){
                        if(grupot0[i]!=='' && grupot0[i]!==undefined)
                        {grupot.push([grupot0[i]])}
                        
                    }
                    var namess=arrtodos[3]
                    var filtro
                        if(arrtodos[1]==='todos')
                        {
                            filtro={idempresa:arrtodos[0],estadoordenxxx:arrtodos[2]}
                        }
                        else
                        {
                            if(arrtodos[1]==='todosmios')
                            {
                              
                                if(tieneactividadasignacion==='0')
                                {
                                    if(arrtodos[2]==='ejecutadas')
                                    {
                                        filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                                    }
                                    else
                                    {
                                        filtro={idempresa:arrtodos[0],estadoordenxxx:arrtodos[2],
                                            idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                                    }
                                }
                                else
                                {// si  esta involucrado en alguna actividad de tipo asignacion pueda ser que la reciba
                                 
                                    if(arrtodos[2]==='ejecutadas')
                                    {
                                        filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                                    }
                                    else
                                    {
                                        if(actividadt[0]!=='123')
                                        {
                                            filtro={idempresa:arrtodos[0],estadoordenxxx:arrtodos[2],
                                                idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}
                                              //  $or: [       {idactividadxxx : {$in:actividadt}},
                                                //    {idusuariosasigna: {$in:arrtodos[4]}}       ]
                                                }
                                        }
                                        else
                                        { 
                                            filtro={idempresa:arrtodos[0],estadoordenxxx:arrtodos[2],
                                                idusuariosasigna: {$in:[[arrtodos[4]]]}
                                                }
                                            
                                        }
                                       
                                    }
        
                                }
                          
                            
                            
                            
                            }
                            else
                            {
                                if(actividadt[0]!=='123')
                                {
        
                                    if(arrtodos[2]==='ejecutadas')
                                    {
                                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                                    }
                                    else
                                    {
                                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:arrtodos[2],
                                            idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                                    }
                                    
                                
                                }
                                else
                                {
                                    if(arrtodos[2]==='ejecutadas')
                                    {
                                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                                    }
                                    else
                                    {
                                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:arrtodos[2]}
                                    }
                                
        
                                }
                                
        
                            }
                        
                        }
        
                           
                
                if(arrtodos.length>6)
                {
                    var masfiltro=arrtodos[6].split('¬');
                    if(masfiltro.length>0)
                    {
                        if(masfiltro[0]!=='undefined' && masfiltro[0]!=='0')
                        {
                            for(var i = 0; i < masfiltro.length;i++){
                                var vall=masfiltro[i].split(':')
                                if(vall[2]==='like')
                                {
                                    var cadtt=vall[1]
                                    
                                    if(cadtt.indexOf('|')>=0)
                                    {
                                        filtro[vall[0]] ={'$regex': '('+vall[1]+').*', '$options': 'i'}
                                    }
                                    else
                                    {
                                        filtro[vall[0]] ={'$regex': vall[1], '$options': 'i'}
                                    }

                              



                                }
                                else
                                {
                                    filtro[vall[0]] = vall[1]
                                }
                                   
                                
    
    
                            }
                        }
                       
                    }
                }
           
        
                            Frmmovild.find({idmovil:arrtodos[3], display : "true",idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
               
                            if (err){ res.send(err); }
                            var todospp=[]
                            var todosxx=('categoria°codigoarticulo°descripciondelarticulo°unidaddemedida°existenciaactual°precioporunidad°total°codigogastoreglon°foliolibroinventario°nomenclaturadecuentas').split('°')

                            var sortObject = {};
                            var stype = '_id';
                            var sdir = '-1';
                          


                            if(req.params.id.split('¬')[0]==='5fc01bbba8d0a14888774579')
                            {
                                stype = 'categoria';
                                sdir = '1';
                                for(var i = 0; i < todosxx.length;i++){
                                    for(var ii = 0; ii < todos.length;ii++){
                                       if(todos[ii].name===todosxx[i])
                                       {
                                           todospp.push(todos[ii])
                                       }

                                    }

                                }

                            }
                            else
                            {
                            stype = '_id';
                        sdir = '-1';
                              
                                todospp=todos
                            }
                         
                          
                            var objetox = {};
                            for(var i = 0; i < todospp.length;i++){
                                objetox[todospp[i].name] =todospp[i].title + '°' + todospp[i].type + '°'+ todospp[i].display;
                            }


     
                       
                                                if(todospp.length>0)   {  
                                               
                                                    var cad=''
                                                    var cadxx=''
                                                    var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                              
                                                    cad=cad3[0]
                                                    cadxx='{'+ cad3[1] + '}'
                                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },  "geoposicionxxx"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                                    cad='{' + cad + '}'
                                                    cadxx='{' + cadxx + '}'
                                                 
                                                    var jsonObject = functool.stringToObject(cad);
                                                  
                                                    var mongoose = require("mongoose");
                                                    delete mongoose.connection.models[namess];
                                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                                    sortObject[stype] = sdir;
                                                    
                                                
                                                    try {
                                                        var  frmtt= mongoose.model(namess,tt);
                                                        frmtt.find(filtro).sort(sortObject).exec(function(err, todos2) {
                                                            if (err){  res.send(err); }
                                                       
                                                         if(todos2.length>0)
                                                         {

                                                            var datafinal = []
                                                           if(arrtodos[7]==='1')
                                                           {
                                                            datafinal = functool.procesatablauirecord(objetox,todos2,'no')
                                                           }
                                                           else
                                                           {
                                                            datafinal = functool.procesatablauirecordfila(objetox,todos2,'no')
                                                           }
                                                            res.json(datafinal);
                                                        
                                                         }
                                                         else
                                                         {
                                                            res.json([]);
                                                         }
                                                          
                                                        });
                                                      } catch(e) {
                                                        
                                                        var  frmtt= mongoose.model(namess);
                                              
                                                        frmtt.find( filtro).sort(sortObject).exec(function(err, todos2) {
                                                             if (err){  res.send(err);
                                                            }
                                                           
                                                             res.json(todos2);
                                                         
                                                         });
                                                      }
            
            
                                                 
                                    
                            }
                        });
                    
                   
          break;
              
                case 'formularioexcel':
         
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
          
          
                        Frmmovild.find({idmovil:req.params.id, idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
                            if (err){ res.send(err); }
                            var todospp=[]
                            var todosxx=('categoria°codigoarticulo°descripciondelarticulo°unidaddemedida°existenciaactual°precioporunidad°total°codigogastoreglon°foliolibroinventario°nomenclaturadecuentas').split('°')

                            var sortObject = {};
                            var stype = '_id';
                            var sdir = '-1';
                          


                            if(req.params.id==='5fc01bbba8d0a14888774579')
                            {
                                stype = 'categoria';
                                sdir = '1';
                                for(var i = 0; i < todosxx.length;i++){
                                    for(var ii = 0; ii < todos.length;ii++){
                                       if(todos[ii].name===todosxx[i])
                                       {
                                           todospp.push(todos[ii])
                                       }

                                    }

                                }

                            }
                            else
                            {
                            stype = '_id';
                        sdir = '-1';
                              
                                todospp=todos
                            }
                         
                          
                            var objetox = {};
                            for(var i = 0; i < todospp.length;i++){
                                objetox[todospp[i].name] =todospp[i].title + '°' + todospp[i].type + '°'+ todospp[i].display;
                            }


     
                       
                                                if(todospp.length>0)   {  
                                               
                                                    var cad=''
                                                    var cadxx=''
                                                    var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                              
                                                    cad=cad3[0]
                                                    cadxx='{'+ cad3[1] + '}'
                                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },  "geoposicionxxx"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                                    cad='{' + cad + '}'
                                                    cadxx='{' + cadxx + '}'
                                                 
                                                    var jsonObject = functool.stringToObject(cad);
                                                  
                                                    var mongoose = require("mongoose");
                                                    delete mongoose.connection.models[namess];
                                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                                    sortObject[stype] = sdir;
                                                    
                                                
                                                    try {
                                                        var  frmtt= mongoose.model(namess,tt);
                                                        frmtt.find(filtro).sort(sortObject).exec(function(err, todos2) {
                                                            if (err){  res.send(err); }
                                                       
                                                         if(todos2.length>0)
                                                         {
                                                            var datafinal = functool.procesatablauirecord(objetox,todos2,'no')
                                                           
                                                            res.json(datafinal);
                                                        
                                                         }
                                                         else
                                                         {
                                                            res.json([]);
                                                         }
                                                          
                                                        });
                                                      } catch(e) {
                                                        
                                                        var  frmtt= mongoose.model(namess);
                                              
                                                        frmtt.find( filtro).sort(sortObject).exec(function(err, todos2) {
                                                             if (err){  res.send(err);
                                                            }
                                                           
                                                             res.json(todos2);
                                                         
                                                         });
                                                      }
            
            
                                                 
                                    
                            }
                        });
                    
                   
          break;

          case 'formulariogeneralpdf':
         
            var namess=req.params.id
            var arrtodos=req.params.id3.split('°')
            var campos=arrtodos[2]
            var filtro
            if(arrtodos[1]==='todos')
            {
                filtro={idempresa:arrtodos[0]}
            }
            else
            {
                filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1]}
            }
  
  
                Frmmovild.find({idmovil:req.params.id, idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    var todospp=[]
                    var todosxx=campos.split(',')

                    var sortObject = {};
                    var stype = '_id';
                    var sdir = '-1';
                  


                    if(req.params.id==='5fc01bbba8d0a14888774579')
                    {
                        stype = 'categoria';
                        sdir = '1';
                        for(var i = 0; i < todosxx.length;i++){
                            for(var ii = 0; ii < todos.length;ii++){
                               if(todos[ii].name===todosxx[i].trim())
                               {
                                   todospp.push(todos[ii])
                               }

                            }

                        }

                    }
                    else
                    {
                    stype = '_id';
                sdir = '-1';
                      
                        todospp=todos
                    }
                 
                  
                    var objetox = {};
                    for(var i = 0; i < todospp.length;i++){
                        objetox[todospp[i].name] =todospp[i].title + '°' + todospp[i].type + '°'+ todospp[i].display;
                    }



               
                                        if(todospp.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                      
                                            cad=cad3[0]
                                            cadxx='{'+ cad3[1] + '}'
                                            cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },  "geoposicionxxx"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                            cadxx='{' + cadxx + '}'
                                         
                                            var jsonObject = functool.stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                            sortObject[stype] = sdir;
                                            
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find(filtro).sort(sortObject).exec(function(err, todos2) {
                                                    if (err){  res.send(err); }
                                               
                                                 if(todos2.length>0)
                                                 {
                                                    var datafinal = functool.procesatablauirecordpdf(objetox,todos2,'no')
                                                   
                                                    res.json(datafinal);
                                                
                                                 }
                                                 else
                                                 {
                                                    res.json([]);
                                                 }
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( filtro).sort(sortObject).exec(function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                                   
                                                     res.json(todos2);
                                                 
                                                 });
                                              }
    
    
                                         
                            
                    }
                });
            
           
  break;

  case 'formulariogeneralpdfsolo':
         
    
    
    var arrtodos=req.params.id3.split('°')
    var namess=arrtodos[1]
  
    var filtro

        filtro={_id:req.params.id}
 


        Frmmovild.find({idmovil:arrtodos[1], idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
      
 
            var objetox = {};
            for(var i = 0; i < todos.length;i++){
                objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
            }


       
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                              
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },  "geoposicionxxx"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                                 
                                    var jsonObject = functool.stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    
                                
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        frmtt.findById(filtro).exec(function(err, todos2) {
                                            if (err){  res.send(err); }
                                            
                                       
                                            (async () => {  
                                                var reg=[]
                                                reg=todos2
                                            var datafinal = await functool.procesatablauirecordpdfuno(objetox,reg,'no',namess)
                                           
                                            res.json(datafinal);
                                                })();


                                  
                                        
                                       
                                          
                                        });
                                      } catch(e) {
                                        
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.findById( filtro).exec(function(err, todos2) {
                                             if (err){  res.send(err);
                                            }
                                           
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
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
                 
              
                    var objetox = {};
                    for(var i = 0; i < todos.length;i++){
                        objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                    }
          
               
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                      
                                            cad=cad3[0]
                                            cadxx='{'+ cad3[1] + '}'
                                            cad=cad + '    "sequencia"	: { "type" : "String" },"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },  "geoposicionxxx"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                            cadxx='{' + cadxx + '}'
                                         
                                            var jsonObject = functool.stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                          
                                            
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find(filtro).sort({_id:-1}).exec(function(err, todos2) {
                                                    if (err){  res.send(err); }
                                               
                                                 if(todos2.length>0)
                                                 {
                                                    var datafinal = functool.procesahtmlrecord(objetox,todos2,'no')
                                                   
                                                    res.json(datafinal);
                                                
                                                 }
                                                 else
                                                 {
                                                    res.json([]);
                                                 }
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( filtro).sort({_id:-1}).exec(function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                                   
                                                     res.json(todos2);
                                                 
                                                 });
                                              }
    
    
                                         
                            
                    }
                });
            
           
  break;

  case 'formularioprocesodash':
    var arrtodos=req.params.id3.split('°')
    var usuarito=''
    var tieneactividadasignacion=arrtodos[5]
    usuarioup=arrtodos[4]
    var actividadt=[]
        actividadt=req.params.id.split('¬')[0].split(',')
        var grupot=[]
        var grupot0=req.params.id.split('¬')[1].split('°')
        for(var i = 0; i < grupot0.length;i++){
            if(grupot0[i]!=='' && grupot0[i]!==undefined)
            {grupot.push([grupot0[i]])}
            
        }
    var namess=arrtodos[3]
    var estadoxxx=arrtodos[2];
    var filtroestado={}
    if(estadoxxx==='activa' || estadoxxx==='ejecutadas')
    {
        filtroestado={$in:[estadoxxx]}
    }
    else
    {
        filtroestado={$nin:['activa','ejecutadas']}
    }
    
        if(arrtodos[1]==='todos')
        {
            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado}
        }
        else
        {
            if(arrtodos[1]==='todosmios')
            {
              
                if(tieneactividadasignacion==='0')
                {
                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                            idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                    }
                }
                else
                {// si  esta involucrado en alguna actividad de tipo asignacion pueda ser que la reciba
                 
                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        if(actividadt[0]!=='123')
                        {
                            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}
                              //  $or: [       {idactividadxxx : {$in:actividadt}},
                                //    {idusuariosasigna: {$in:arrtodos[4]}}       ]
                                }
                        }
                        else
                        { 
                            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                idusuariosasigna: {$in:[[arrtodos[4]]]}
                                }
                            
                        }
                       
                    }

                }
          
            
            
            
            }
            else
            {
                if(actividadt[0]!=='123')
                {

                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado,
                            idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                    }
                    
                
                }
                else
                {
                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado}
                    }
                

                }
                

            }
        
        }

        
        
        if(arrtodos.length>6)
        {
            var masfiltro=arrtodos[6].split('¬');
            if(masfiltro.length>0)
            {
                if(masfiltro[0]!=='undefined' && masfiltro[0]!=='0')
                {
                    for(var i = 0; i < masfiltro.length;i++){
                        var vall=masfiltro[i].split(':')
                        if(vall[2]==='like')
                        {   var cadtt=vall[1]
                            
                            if(cadtt.indexOf('|')>=0)
                            {
                                filtro[vall[0]] ={'$regex': '('+vall[1]+').*', '$options': 'i'}
                            }
                            else
                            {
                                filtro[vall[0]] ={'$regex': vall[1], '$options': 'i'}
                            }
                            
/*
                            $or : [
                                { $and : [ { aduana:{'$regex': '605a3a9e5bc1b8016c3ce64b', '$options': 'i'} }] },
                                { $and : [ { aduana:{'$regex': '6081ef095fd01a21f8ae4692', '$options': 'i'} }] }]

                                */
                            
                        }
                        else
                        {
                            filtro[vall[0]] = vall[1]
                        }
                           
                        


                    }
                }
               
            }
        }
   

        console.log(filtro)


            Frmmovild.find({idmovil:arrtodos[3], display : "true",idempresa:arrtodos[0]}).exec(function(err, todos) {
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
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.aggregate([
                          
                                                {
                                                 
                                                      "$group" : {
                                                          "_id" : {
                                                             grupo:"$actividadxxx",
                                                             subgrupo:"$estadoordenxxx"
                                                            
                                                              
                                                          }, 
                                                           
                                                          cantidad: { $sum: 1 }
                                                          
                                                      }
                                                  }, 
                                                  { 
                                                      "$project" : {
                                                         
                                                          "grupo":"$_id.grupo",
                                                        "subgrupo":"$_id.subgrupo",
                                                        
                                                           "cantidad" : "$cantidad", 
                                                          "_id" :0
                                                      }
                                                  },
                                                  { 
                                                    "$sort" : {
                                                        "subgrupo" : 1
                                                    }
                                                }
                                              ]).exec(function(err, todos2) {
                                                if (err){  res.send(err); }
                                            
                                                
                                                res.json(functool.graficatiposubtipocantidad(todos2,''));
                                            
                                            });
                                        } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                
                                            frmtt.find( filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                                if (err){  res.send(err);
                                                }
                                                res.json(todos2);
                                            
                                            });
                                        }


                                    
                        
               // }
            });
        
    
    break;

    
    case 'formularioprocesodash2':
    var arrtodos=req.params.id3.split('°')
    var usuarito=''
    var tieneactividadasignacion=arrtodos[5]
    usuarioup=arrtodos[4]
    var actividadt=[]
        actividadt=req.params.id.split('¬')[0].split(',')
        var grupot=[]
        var grupot0=req.params.id.split('¬')[1].split('°')
        for(var i = 0; i < grupot0.length;i++){
            if(grupot0[i]!=='' && grupot0[i]!==undefined)
            {grupot.push([grupot0[i]])}
            
        }
    var namess=arrtodos[3]
    var estadoxxx=arrtodos[2];
    var filtroestado={}
    if(estadoxxx==='activa' || estadoxxx==='ejecutadas')
    {
        filtroestado={$in:[estadoxxx]}
    }
    else
    {
        filtroestado={$nin:['activa','ejecutadas']}
    }
    
        if(arrtodos[1]==='todos')
        {
            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado}
        }
        else
        {
            if(arrtodos[1]==='todosmios')
            {
              
                if(tieneactividadasignacion==='0')
                {
                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                            idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                    }
                }
                else
                {// si  esta involucrado en alguna actividad de tipo asignacion pueda ser que la reciba
                 
                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        if(actividadt[0]!=='123')
                        {
                            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}
                              //  $or: [       {idactividadxxx : {$in:actividadt}},
                                //    {idusuariosasigna: {$in:arrtodos[4]}}       ]
                                }
                        }
                        else
                        { 
                            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                idusuariosasigna: {$in:[[arrtodos[4]]]}
                                }
                            
                        }
                       
                    }

                }
          
            
            
            
            }
            else
            {
                if(actividadt[0]!=='123')
                {

                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado,
                            idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                    }
                    
                
                }
                else
                {
                    if(arrtodos[2]==='ejecutadas')
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                    }
                    else
                    {
                        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado}
                    }
                

                }
                

            }
        
        }

        
        
        if(arrtodos.length>6)
        {
            var masfiltro=arrtodos[6].split('¬');
            if(masfiltro.length>0)
            {
                if(masfiltro[0]!=='undefined' && masfiltro[0]!=='0')
                {
                    for(var i = 0; i < masfiltro.length;i++){
                        var vall=masfiltro[i].split(':')
                        if(vall[2]==='like')
                        {   var cadtt=vall[1]
                            
                            if(cadtt.indexOf('|')>=0)
                            {
                                filtro[vall[0]] ={'$regex': '('+vall[1]+').*', '$options': 'i'}
                            }
                            else
                            {
                                filtro[vall[0]] ={'$regex': vall[1], '$options': 'i'}
                            }
                            
/*
                            $or : [
                                { $and : [ { aduana:{'$regex': '605a3a9e5bc1b8016c3ce64b', '$options': 'i'} }] },
                                { $and : [ { aduana:{'$regex': '6081ef095fd01a21f8ae4692', '$options': 'i'} }] }]

                                */
                            
                        }
                        else
                        {
                            filtro[vall[0]] = vall[1]
                        }
                           
                        


                    }
                }
               
            }
        }
   

        console.log(filtro)


            Frmmovild.find({idmovil:arrtodos[3], display : "true",idempresa:arrtodos[0]}).exec(function(err, todos) {
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
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.aggregate([
                          
                                                {
                                                 
                                                      "$group" : {
                                                          "_id" : {
                                                             grupo:"$actorxxx",
                                                             grupo0:"$asignadoxxx",
                                                             subgrupo:"$estadoordenxxx"
                                                            
                                                              
                                                          }, 
                                                           
                                                          cantidad: { $sum: 1 }
                                                          
                                                      }
                                                  }, 
                                                  { 
                                                      "$project" : {
                                                         
                                                          "grupo":"$_id.grupo",
                                                          "grupo0":"$_id.grupo0",
                                                        "subgrupo":"$_id.subgrupo",
                                                        
                                                           "cantidad" : "$cantidad", 
                                                          "_id" :0
                                                      }
                                                  },
                                                  { 
                                                    "$sort" : {
                                                        "subgrupo" : 1
                                                    }
                                                }
                                              ]).exec(function(err, todos2) {
                                                if (err){  res.send(err); }
                                            
                                                
                                                res.json(functool.graficatiposubtipocantidad(todos2,'grupo+grupo0'));
                                            
                                            });
                                        } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                
                                            frmtt.find( filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                                if (err){  res.send(err);
                                                }
                                                res.json(todos2);
                                            
                                            });
                                        }


                                    
                        
               // }
            });
        
    
    break;



       
    case 'formularioprocesosolouna':
        var arrtodos=req.params.id3.split('°')
        var usuarito=''
        var tieneactividadasignacion=arrtodos[5]
        usuarioup=arrtodos[4]
        var actividadt=[]
        actividadt=req.params.id.split('¬')[0].split(',')
        var grupot=[]
        var grupot0=req.params.id.split('¬')[1].split('°')
        for(var i = 0; i < grupot0.length;i++){
            if(grupot0[i]!=='' && grupot0[i]!==undefined)
            {grupot.push([grupot0[i]])}
            
        }
        var pagex=arrtodos[7]
        var lastid=arrtodos[8]
        var limitx=arrtodos[6]
        var namess=arrtodos[3]
        var noorden=functool.padLeadingZeros(arrtodos[10],7)
        var sisequencia=arrtodos[11]
        var estadoxxx=arrtodos[2];
        var filtroestado={}
        if(estadoxxx==='activa' || estadoxxx==='ejecutadas')
        {
            filtroestado={$in:[estadoxxx]}
        }
        else
        {
            filtroestado={$nin:['activa','ejecutadas']}
        }
        
            if(arrtodos[1]==='todos')
            {
                filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado}
            }
            else
            {
                if(arrtodos[1]==='todosmios')
                {
                  
                    if(tieneactividadasignacion==='0')
                    {
                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                        }
                    }
                    else
                    {// si  esta involucrado en alguna actividad de tipo asignacion pueda ser que la reciba
                     
                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            if(actividadt[0]!=='123')
                            {
                                filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                    idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}
                                  //  $or: [       {idactividadxxx : {$in:actividadt}},
                                    //    {idusuariosasigna: {$in:arrtodos[4]}}       ]
                                    }
                            }
                            else
                            { 
                                filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                    idusuariosasigna: {$in:[[arrtodos[4]]]}
                                    }
                                
                            }
                           
                        }

                    }
              
                
                
                
                }
                else
                {
                    if(actividadt[0]!=='123')
                    {

                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado,
                                idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                        }
                        
                    
                    }
                    else
                    {
                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado}
                        }
                    

                    }
                    

                }
            
            }

      if(sisequencia==='Si')
      {
        filtro['sequenciag'] = noorden
      }
      else
      {
        filtro['sequenciag'] = noorden
      }
              
             
            
            if(arrtodos.length>8 && arrtodos[9]!==undefined)
            {
                var masfiltro=arrtodos[9].split('¬');
                if(masfiltro.length>0)
                {
                    if(masfiltro[0]!=='false' && masfiltro[0]!=='undefined' && masfiltro[0]!=='0')
                    {
                        for(var i = 0; i < masfiltro.length;i++){
                            var vall=masfiltro[i].split(':')
                            if(vall[2]==='like')
                            {
                                var cadtt=vall[1]
                                
                                if(cadtt.indexOf('|')>=0)
                                {
                                    filtro[vall[0]] ={'$regex': '('+vall[1]+').*', '$options': 'i'}
                                }
                                else
                                {
                                    filtro[vall[0]] ={'$regex': vall[1], '$options': 'i'}
                                }
                            }
                            else
                            {
                                filtro[vall[0]] = vall[1]
                            }
                               
                            


                        }
                    }
                   
                }
            }
       

     


                Frmmovild.find({idmovil:arrtodos[3], display : "true",idempresa:arrtodos[0]}).exec(function(err, todos) {
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
                                                var  frmtt= mongoose.model(namess,tt);
                                                
                                                //Personal.paginate({filtro},{lean:     false,page:pagex, limit:  limitx})
                                                //.skip(skips).limit(page_size)
                                                //.skip(skips).limit(page_size)
                                              //  var skips = Number(limitx) * (Number(pagex) - 1)
                                              var skips = Number(limitx)
                                              //  frmtt.paginate({filtro},{lean:     false,page:pagex, limit:  limitx}).exec(function(err, todos2) {
                                                frmtt.find( filtro ).sort([['_id', -1]]).limit(skips).exec(function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                
                                                    var datafinal = functool.procesahtmlrecordproceso(objetox,todos2,'no')
                                               
                                                    res.json(datafinal);
                                                
                                                   // res.json(todos2);
                                                
                                                });
                                            } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                    
                                                frmtt.find( filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                                    if (err){  res.send(err);
                                                    }
                                                    var datafinal = functool.procesahtmlrecordproceso(objetox,todos2,'no')
                                               
                                                    res.json(datafinal);
                                                  //  res.json(todos2);
                                                
                                                });
                                            }


                                        
                            
                   // }
                });
            
        
        break;


       
        case 'formularioprocesosololike':
            var arrtodos=req.params.id3.split('°')
            var usuarito=''
            var tieneactividadasignacion=arrtodos[5]
            usuarioup=arrtodos[4]
            var actividadt=[]
            actividadt=req.params.id.split('¬')[0].split(',')
            var grupot=[]
            var grupot0=req.params.id.split('¬')[1].split('°')
            for(var i = 0; i < grupot0.length;i++){
                if(grupot0[i]!=='' && grupot0[i]!==undefined)
                {grupot.push([grupot0[i]])}
                
            }
    
            var pagex=arrtodos[7]
            var lastid=arrtodos[8]
            var limitx=arrtodos[6]
            var namess=arrtodos[3]
            var campoxxx=arrtodos[10]
            var valorxxx=arrtodos[11]
            var estadoxxx=arrtodos[2];
            var filtroestado={}
            if(estadoxxx==='activa' || estadoxxx==='ejecutadas')
            {
                filtroestado={$in:[estadoxxx]}
            }
            else
            {
                filtroestado={$nin:['activa','ejecutadas']}
            }
            
                if(arrtodos[1]==='todos')
                {
                    filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado}
                }
                else
                {
                    if(arrtodos[1]==='todosmios')
                    {
                      
                        if(tieneactividadasignacion==='0')
                        {
                            if(arrtodos[2]==='ejecutadas')
                            {
                                filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                            }
                            else
                            {
                                filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                    idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                            }
                        }
                        else
                        {// si  esta involucrado en alguna actividad de tipo asignacion pueda ser que la reciba
                         
                            if(arrtodos[2]==='ejecutadas')
                            {
                                filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                            }
                            else
                            {
                                if(actividadt[0]!=='123')
                                {
                                    filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                        idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}
                                      //  $or: [       {idactividadxxx : {$in:actividadt}},
                                        //    {idusuariosasigna: {$in:arrtodos[4]}}       ]
                                        }
                                }
                                else
                                { 
                                    filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                        idusuariosasigna: {$in:[[arrtodos[4]]]}
                                        }
                                    
                                }
                               
                            }
    
                        }
                  
                    
                    
                    
                    }
                    else
                    {
                        if(actividadt[0]!=='123')
                        {
    
                            if(arrtodos[2]==='ejecutadas')
                            {
                                filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                            }
                            else
                            {
                                filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado,
                                    idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                            }
                            
                        
                        }
                        else
                        {
                            if(arrtodos[2]==='ejecutadas')
                            {
                                filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                            }
                            else
                            {
                                filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado}
                            }
                        
    
                        }
                        
    
                    }
                
                }
    
          
                 
                
                if(arrtodos.length>8 && arrtodos[9]!==undefined)
                {
                    var masfiltro=arrtodos[9].split('¬');
                    if(masfiltro.length>0)
                    {
                        if(masfiltro[0]!=='false' && masfiltro[0]!=='undefined' && masfiltro[0]!=='0')
                        {
                            for(var i = 0; i < masfiltro.length;i++){
                                var vall=masfiltro[i].split(':')
                                if(vall[2]==='like')
                                {
                                    var cadtt=vall[1]
                                    
                                    if(cadtt.indexOf('|')>=0)
                                    {
                                        filtro[vall[0]] ={'$regex': '('+vall[1]+').*', '$options': 'i'}
                                    }
                                    else
                                    {
                                        filtro[vall[0]] ={'$regex': vall[1], '$options': 'i'}
                                    }
                                }
                                else
                                {
                                    filtro[vall[0]] = vall[1]
                                }
                                   
                                
    
    
                            }
                        }
                       
                    }
                }
           
    
         
                Frmmovild.find({idmovil:arrtodos[3],idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todosuno) {
                    if (err){ res.send(err); }
    
    
                    var cad3a=(functool.dafiltrocadsolouno(todosuno,campoxxx,valorxxx.replace('¬','/'),'')).split('°');
                    var cada = cad3a[0];
                    var cadsolouno = ''
                    cadsolouno=cad3a[2];
                    if(cadsolouno!=="")
                    {
                            if(cadsolouno.split('¬')[2]==='like')
                            {
                                filtro[cadsolouno.split('¬')[0]]= { "$regex" : cadsolouno.split('¬')[1].split('°')[0] , "$options" : "i" } 
                            }
                            else
                            {
                                filtro[cadsolouno.split('¬')[0]]=cadsolouno.split('¬')[1].split('°')[0]
                            }
    
                    }
              
                Frmmovild.find({idmovil:arrtodos[3], display : "true",idempresa:arrtodos[0]}).exec(function(err, todos) {
                        if (err){ res.send(err); }
                    
                        var objetox = {};
                    for(var i = 0; i < todos.length;i++){
                        objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                    }
                  
               
                    var cad4=(functool.dafiltrocad(todos,campoxxx,valorxxx.replace('¬','/'),''))
                    var cad3=(functool.dafiltrocad(todos,campoxxx,valorxxx.replace('¬','/'),'')).split('°')
    
                    var cadsolouno = ''
                        cadsolouno=cad3[2];
                        if(cadsolouno!=="")
                        {
                                if(cadsolouno.split('¬')[2]==='like')
                                {
                                    if(cad4.indexOf('°')>0)
                                    {
                                       filtro[campoxxx]= { "$regex" : valorxxx.split('°')[0] , "$options" : "i" } 
                                    }
                                    else
                                    {
                                        filtro[cadsolouno.split('¬')[0]]= { "$regex" : cadsolouno.split('¬')[1].split('°')[0] , "$options" : "i" } 
                                    }
    
                                   
                                }
                                else
                                {
                                    filtro[cadsolouno.split('¬')[0]]=cadsolouno.split('¬')[1].split('°')[0]
                                }
                        }
    
    
    
                   
                                              
                                        
                                                cad=cad3[0]+cada
                                              //  cadxx='{'+ cad3[1] + '}'
                                                cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },   "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"}, "geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
    
                                                cad='{' + cad + '}'
                                               // cadxx='{' + cadxx + '}'
    
                                                //filtro    + cad3[1] +',"' +
                                            
                                                var jsonObject = functool.stringToObject(cad);
                                            
                                                var mongoose = require("mongoose");
                                                delete mongoose.connection.models[namess];
                                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                            
                                                
                                            
                                                try {
                                                    var  frmtt= mongoose.model(namess,tt);
                                                    
                                                    //Personal.paginate({filtro},{lean:     false,page:pagex, limit:  limitx})
                                                    //.skip(skips).limit(page_size)
                                                    //.skip(skips).limit(page_size)
                                                  //  var skips = Number(limitx) * (Number(pagex) - 1)
                                                  var skips = Number(limitx)
                                                  //  frmtt.paginate({filtro},{lean:     false,page:pagex, limit:  limitx}).exec(function(err, todos2) {
                                                    frmtt.find( filtro ).sort([['_id', -1]]).limit(skips).exec(function(err, todos2) {
                                                        if (err){  res.send(err); }
                                                    
                                                        var datafinal = functool.procesahtmlrecordproceso(objetox,todos2,'no')
                                                   
                                                        res.json(datafinal);
                                                    
                                                       // res.json(todos2);
                                                    
                                                    });
                                                } catch(e) {
                                                    
                                                    var  frmtt= mongoose.model(namess);
                                        
                                                    frmtt.find( filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                                        if (err){  res.send(err);
                                                        }
                                                        var datafinal = functool.procesahtmlrecordproceso(objetox,todos2,'no')
                                                   
                                                        res.json(datafinal);
                                                      //  res.json(todos2);
                                                    
                                                    });
                                                }
    
    
                                            
                                
                       // }
                    });
                });
            
            break;
    
    
    
    case 'formularioproceso':
        var arrtodos=req.params.id3.split('°')
        var usuarito=''
        var tieneactividadasignacion=arrtodos[5]
        usuarioup=arrtodos[4]
        var actividadt=[]
        actividadt=req.params.id.split('¬')[0].split(',')
        var grupot=[]
        var grupot0=req.params.id.split('¬')[1].split('°')
        for(var i = 0; i < grupot0.length;i++){
            if(grupot0[i]!=='' && grupot0[i]!==undefined)
            {grupot.push([grupot0[i]])}
            
        }

        var pagex=arrtodos[7]
        var lastid=arrtodos[8]
        var limitx=arrtodos[6]
        var namess=arrtodos[3]
        var estadoxxx=arrtodos[2];
        var filtroestado={}
        if(estadoxxx==='activa' || estadoxxx==='ejecutadas')
        {
            filtroestado={$in:[estadoxxx]}
        }
        else
        {
            filtroestado={$nin:['activa','ejecutadas']}
        }
        
            if(arrtodos[1]==='todos')
            {
                filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado}
            }
            else
            {
                if(arrtodos[1]==='todosmios')
                {
                  
                    if(tieneactividadasignacion==='0')
                    {
                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                        }
                    }
                    else
                    {// si  esta involucrado en alguna actividad de tipo asignacion pueda ser que la reciba
                     
                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            if(actividadt[0]!=='123')
                            {
                                filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                    idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}
                                  //  $or: [       {idactividadxxx : {$in:actividadt}},
                                    //    {idusuariosasigna: {$in:arrtodos[4]}}       ]
                                    }
                            }
                            else
                            { 
                                filtro={idempresa:arrtodos[0],estadoordenxxx:filtroestado,
                                    idusuariosasigna: {$in:[[arrtodos[4]]]}
                                    }
                                
                            }
                           
                        }

                    }
              
                
                
                
                }
                else
                {
                    if(actividadt[0]!=='123')
                    {

                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado,
                                idactividadxxx:{$in:actividadt},grupoasignado:{$in:grupot}}
                        }
                        
                    
                    }
                    else
                    {
                        if(arrtodos[2]==='ejecutadas')
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],pmodulo: {$in:[[usuarioup]]}}
                        }
                        else
                        {
                            filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:filtroestado}
                        }
                    

                    }
                    

                }
            
            }

             if(lastid!=='undefined' && lastid!=='')
             {
                filtro['_id'] = {'$lt': lastid}
             }
            
            if(arrtodos.length>8)
            {
                var masfiltro=arrtodos[9].split('¬');
                if(masfiltro.length>0)
                {
                    if(masfiltro[0]!=='false' && masfiltro[0]!=='undefined' && masfiltro[0]!=='0')
                    {
                        for(var i = 0; i < masfiltro.length;i++){
                            var vall=masfiltro[i].split(':')
                            if(vall[2]==='like')
                            {
                                var cadtt=vall[1]
                                
                                if(cadtt.indexOf('|')>=0)
                                {
                                    filtro[vall[0]] ={'$regex': '('+vall[1]+').*', '$options': 'i'}
                                }
                                else
                                {
                                    filtro[vall[0]] ={'$regex': vall[1], '$options': 'i'}
                                }
                            }
                            else
                            {
                                filtro[vall[0]] = vall[1]
                            }
                               
                            


                        }
                    }
                   
                }
            }
       

     
console.log(filtro)

                Frmmovild.find({idmovil:arrtodos[3], display : "true",idempresa:arrtodos[0]}).exec(function(err, todos) {
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
                                                var  frmtt= mongoose.model(namess,tt);
                                                
                                                //Personal.paginate({filtro},{lean:     false,page:pagex, limit:  limitx})
                                                //.skip(skips).limit(page_size)
                                                //.skip(skips).limit(page_size)
                                              //  var skips = Number(limitx) * (Number(pagex) - 1)
                                              var skips = Number(limitx)
                                              //  frmtt.paginate({filtro},{lean:     false,page:pagex, limit:  limitx}).exec(function(err, todos2) {
                                                frmtt.find( filtro ).sort([['_id', -1]]).limit(skips).exec(function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                
                                                    var datafinal = functool.procesahtmlrecordproceso(objetox,todos2,'no')
                                               
                                                    res.json(datafinal);
                                                
                                                   // res.json(todos2);
                                                
                                                });
                                            } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                    
                                                frmtt.find( filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                                    if (err){  res.send(err);
                                                    }
                                                    var datafinal = functool.procesahtmlrecordproceso(objetox,todos2,'no')
                                               
                                                    res.json(datafinal);
                                                  //  res.json(todos2);
                                                
                                                });
                                            }


                                        
                            
                   // }
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
            
                    Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
                        if (err){ res.send(err); }
                            
                    var objetox = {};
                 
                    for(var i = 0; i < todos.length;i++){
                       
                        objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                    }
          
                    
                                            if(todos.length>0)   {  
                                        
                                                var cad=''
                                                var cadxx=''
                                                var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                        
                                                cad=cad3[0]
                                                cadxx='{'+ cad3[1] + '}'
                                                cad=cad + '    "sequencia"	: { "type" : "String" },"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },   "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },      "idpapa"	: { "type" : "String" }'
                                                cad='{' + cad + '}'
                                                cadxx='{' + cadxx + '}'
                                            
                                                var jsonObject = functool.stringToObject(cad);
                                            
                                                var mongoose = require("mongoose");
                                                delete mongoose.connection.models[namess];
                                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                            
                                                
                                            
                                                try {
                                                    var  frmtt= mongoose.model(namess,tt);
                                                    frmtt.find(filtro).sort({_id:-1}).exec(function(err, todos2) {
                                                        if (err){  res.send(err); }
                                                    
                                                        var datafinal = functool.procesahtmlrecord(objetox,todos2,'no')
                                                    res.json(datafinal);
                                                    
                                                    });
                                                } catch(e) {
                                                    
                                                    var  frmtt= mongoose.model(namess);
                                        
                                                    frmtt.find( filtro).sort({_id:-1}).exec(function(err, todos2) {
                                                        if (err){  res.send(err);
                                                        }
                                                    
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

                            var myDatavector=req.params.id2.split('°')

                            var objetox = {};
                
              
                            for(var j = 0; j < myDatavector.length;j++){
                                for(var i = 0; i < todos.length;i++){
                            if(myDatavector[j].split('°')[0]===todos[i].name)
                            {
                                objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                            }
                        }
                           
                            
                        }

                   /*
                        var objetox = {};
                 
                        for(var i = 0; i < todos.length;i++){
                            if(myDatavector[j].split('°')[0]===todos[i].name)
                            {
                                objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                            }
                           
                            
                        }*/
                                            if(todos.length>0)   {  
                                        
                                                var cad=''
                                                var cadxx=''
                                                var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                        
                                                cad=cad3[0]
                                                cadxx='{'+ cad3[1] + '}'
                                                cad=cad + '  "sequencia"	: { "type" : "String" },    "usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "estadointerno"	: { "type" : "String" },"usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                                cad='{' + cad + '}'
                                                cadxx='{' + cadxx + '}'
                                            
                                                var jsonObject = functool.stringToObject(cad);
                                            
                                                var mongoose = require("mongoose");
                                                delete mongoose.connection.models[namess];
                                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                            
                                                
                                            
                                                try {
                                                    var  frmtt= mongoose.model(namess,tt);
                                                    frmtt.find({} ,function(err, todos2) {
                                                        if (err){  res.send(err); }
                                                    
                                                       
                                                          var datafinal = functool.procesahtmlrecord(objetox,todos2,'si')
                                                    res.json(datafinal);
                                                    
                                                    });
                                                } catch(e) {
                                                    
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

                                    Frmmovild.find({idmovil:req.params.id}).exec(function(err, todos) {
                                        if (err){ res.send(err); }
                                                            if(todos.length>0)   {   
                                                            
                                                            var data=[];
                                                            for(var i = 0; i < todos.length;i++){

                                                        
                                                                data.push({  
                                                                _id :  todos[i]._id, 
                                                                idmovil	:  todos[i].idmovil._id,
                                                                type   		: functool.datipo2(todos[i].type) ,
                                                                name   		: todos[i].name,
                                                                default:todos[i].default,
                                                                default2:todos[i].default2,
                                                                default3:todos[i].default3,
                                                                frmapirest:todos[i].frmapirest,
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
                                                                options:functool.daarreglo(todos1,todos[i]._id),
                                                                fondoetiqueta: todos[i].fondoetiqueta,
                                                                coloretiqueta: todos[i].coloretiqueta,
                                                                copiarencampo: todos[i].copiarencampo,
                                                                blike: todos[i].blike,
                                                                rangomin: todos[i].rangomin,
                                                                rangomax: todos[i].rangomax,
                                                                rangostep: todos[i].rangostep,
                                                                alfatypo: todos[i].alfatypo,
                                                                idfrmconsulta: todos[i].idfrmconsulta,
                                                                idfrmconsulta2: todos[i].idfrmconsulta2,
                                                                verregistros:todos[i].verregistros,

                                                                usarunaves: todos[i].usarunaves,
                                                                usarunaves2: todos[i].usarunaves2,
                                                                idfrmconsultaorigen: todos[i].idfrmconsultaorigen,
                                                                idfrmconsulta2origen: todos[i].idfrmconsulta2origen,
                                                                nombreconsulta2origen		: todos[i].nombreconsulta2origen,
                                                                idcampofiltro: todos[i].idcampofiltro,
                                                                idcampofiltro2: todos[i].idcampofiltro2,
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
                                                                    type   		: functool.datipo2(todos[i].type) ,
                                                                    name   		: todos[i].name,
                                                                    default:todos[i].default,
                                                                    default2:todos[i].default2,
                                                                    default3:todos[i].default3,
                                                                    copiarencampo: todos[i].copiarencampo,
                                                                    frmapirest:todos[i].frmapirest,
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
                                                                    options:functool.daarreglo(todos1,todos[i]._id),
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
                                                                    usarunaves2: todos[i].usarunaves2,
                                                                    idfrmconsultaorigen: todos[i].idfrmconsultaorigen,
                                                                    idfrmconsulta2origen: todos[i].idfrmconsulta2origen,
                                                                    nombreconsulta2origen		: todos[i].nombreconsulta2origen,
                                                                    idcampofiltro: todos[i].idcampofiltro,
                                                                    idcampofiltro2: todos[i].idcampofiltro2,
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
exports.deleteFrmmovil = async function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});



        
    Frmmovil.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

        Frmmovild.deleteMany({idmovil:req.params.recordID  }, function(err, todo100) {  
             frmactividad.deleteMany({idpapa:req.params.recordID  }, function(err, todo100) {  
                 frmacciones.deleteMany({idpapa0:req.params.recordID  }, function(err, todo100) {  
                     frmactor.find({idpapa:req.params.recordID  }, function(err, todo100a) { 
                         var duplicates = [];
                         for(var i = 0; i < todo100a.length;i++){
                                         duplicates.push(todo100a[i]._id);
                         }
                         
                 frmactor.deleteMany({idpapa:req.params.recordID  }, function(err, todo100) { 
                     
                    
 
 
 
                         frmactorgrupo.deleteMany({idpapa: {$in: duplicates}  }, function(err, todo100) { 
 
                             formulariousrd.deleteMany({idformulario:req.params.recordID  }, function(err, todo100) { 
                                 res.json(todo);
                             });
 
 
                             
                         });
                     });
                 });
  });
             });
 
            
 
 
         });
         
     });
      




}


exports.deleteFrmmovil2 = async function(req, res, next){
   //5f503bededa4710798a79b84°Formulario°1_actualizainventarioaj°'

    var arrtt=req.params.idempresa.split('°')
  


    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    var namess=req.params.recordID2

    Frmmovild.find({idmovil:req.params.recordID2}).exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''


                                
                                var cad3=(functool.dafiltrocad(todos,'','','')).split('°')
                                cad=cad3[0]
                               // cadxx='{'+ cad3[1] + '}'
                                cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                cad='{' + cad + '}'
                                var jsonObject = functool.stringToObject(cad);
                               
                              
                                var mongoose = require("mongoose");
                                delete mongoose.connection.models[namess];
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                 
                                    var  frmtt= mongoose.model(namess,tt);
                                  
                        



                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                       
                                        if(req.params.recordID3==='proceso')
                                        {
                                        formulariocomentarios.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                            
                                            formulariofotos.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  
                                                formulariofotos2.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  

                                               formulariotareas.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                            
                                                    formulariotrayectoria.deleteMany({idmobil:req.params.recordID}, function(err, todo10) {  
                                                Image.deleteMany({idpapa0:req.params.recordID}, function(err, todo10) {  
                                            
                                                        res.json(todo);
                                                    
                                                    });
                                                    
                                                    });
                                                });
                                                });
                                            
                                            });
                                        
                                        });
                                    }
                                    else
                                    {
                                        if(req.body.tipo2==='Formulario'){
                                            if(req.body.ejecutaelimina!=='' && req.body.ejecutaelimina!==undefined)
                                            {
                                                (async () => {  
                                                respuesta = await frmejecuta.formularioejecutaelimina(req, res, next,[]);
                                                

                                     


                                                if(respuesta.estado!=='exito')
                                                {
                                                    res.status(500).send(respuesta.estado) 
                                                    return;
                                                } 
                                            
                                                    res.json(todo);
                                                })();
                                                
                                        
                                            }
                                            else
                                            {
                                                res.json(todo);
                                            }
                                            
                                           
                                        }
                                        else
                                        {
                                            res.json(todo);
                                        }
                                    
                                       
                                    }

                                           
                                        
                                           
                                    });

                                  
                                  } catch(e) {
                                 
                                    var  frmtt= mongoose.model(namess);
                                  
                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                       
                                        if(req.params.recordID3==='proceso')
                                        {
                               
                                            formulariocomentarios.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                                
                                                formulariofotos.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  
                                                    formulariofotos2.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  
    
                                                   formulariotareas.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                                
                                                        formulariotrayectoria.deleteMany({idmobil:req.params.recordID}, function(err, todo10) {  
                                                
                                                Image.deleteMany({idpapa0:req.params.recordID}, function(err, todo10) {  
                                                
                                                            res.json(todo);
                                                        
                                                        });  });
                                                        
                                                        });
                                                    
                                                    });
                                                
                                                });
                                            
                                            });
                                   
                                    }
                                    else
                                    {
                                        if(req.body.tipo2==='Formulario'){
                                            if(req.body.ejecutaelimina!=='' && req.body.ejecutaelimina!==undefined)
                                            {
                                                (async () => {  
                                                respuesta = await frmejecuta.formularioejecutaelimina(req, res, next,[]);
                                                

                                                if(respuesta.estado!=='exito')
                                                {
                                                    res.status(500).send(respuesta.estado) 
                                                    return;
                                                } 
                                            
                                                    res.json(todo);
                                                })();
                                                
                                        
                                            }
                                            else
                                            {
                                                res.json(todo);
                                            }
                                            
                                            
                                           
                                        }
                                        else
                                        {
                                            res.json(todo);
                                        }
                                    }

                                           
                                        
                                           
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
exports.creaFrmmovil3s = async function(req, res, next){

    if(req.body.operacion==='anulaorden')
    {

            (async () => {  
            respuesta = await frmejecuta.formularioanula(req, res, next,[]);
            
            if(respuesta.estado!=='exito')
            {
                res.status(500).send(respuesta.estado) 
                return;
            } 
        
                res.json({estado:'ok'});
            })();
            
    
        
    }
    else{
        if(req.body.operacion==='actualizasimple')
        {
          
            Bitacora.create(req.body.bitacora);
    
         
    
            producto = await functool.actualizaformularioidfinal(req.body.formulario,{ _id:req.body.idform},req.body.bitacora.idempresa,req.body.formulario,req.body.estructura); 
           
            res.json({estado:'ok'});
    
        }
        else{
    if(req.body.operacion==='actualizafrmdirecto')
    {
      
        Bitacora.create(req.body.bitacora);

     

        producto = await functool.actualizaformularioidfinal(req.body.formulario,{ _id:req.body.idform},req.body.bitacora.idempresa,req.body.formulario,req.body.update); 
       
        res.json({estado:'ok'});

    }
    else{
        if(req.body.operacion==='actualizaprocesodirecto')
    {
      
        Bitacora.create(req.body.bitacora);

     

        producto = await functool.actualizaformularioidfinal(req.body.formulario,{ _id:req.body.idform},req.body.bitacora.idempresa,req.body.formulario,req.body.update); 
       

        tary2= await functool.creatrayectoriatoid(req.body.idform,req.body.formulario,req.body.formulario,new Date(), 
        req.body.usuarioejecutor,req.body.nidform,req.body.actividadsigaccion,req.body.fecha);

        if(req.body.op==='Anular orden')
        {//req.body.sequenciag    req.body.formulario
            //Update ticket set estadoticket=0 where noticket=200197

            var ejecuta1=await  functool.ejecutasql("update ticket set estadoticket=0  where noticket="+
            Number(req.body.sequenciag ),functool.daconectasql(req.body.formulario),null)
        }

        res.json({estado:'ok'});

    }
    else{
    if(req.body.operacion==='actualizaordentrayectoria')
    {

     

    //    formulariotrayectoria.updateMany({ idorden: req.body.idmovil },{salioorden:0}, function(err, todo3) {
      //      if (err){       res.status(500).send(err.message)    }

      


        formulariotrayectoria.findOne({ _id:{$nin:[req.body.idtrayectoria]},
            idorden:req.body.idmovil }).sort({_id:-1}).exec( function (err, todo)  {
            if (err) {  res.send(err);  }


            if(todo.length===0)
            {
                res.json([]);
            }
            else
{
            var ff3=new Date(req.body.fechaactual)
            var ff4=todo.createdAt 
            

            var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
            var diffhoras = parseInt((ff3 - ff4) / (1000 * 60 * 60 )); //gives day difference
            var diffminutos = parseInt((ff3 - ff4) / (1000 * 60 )); //gives day difference
            var diffseg = parseInt((ff3 - ff4) / (1000  )); //gives day difference
//one_day means 1000*60*60*24
//one_hour means 1000*60*60
//one_minute means 1000*60
//one_second means 1000


            formulariotrayectoria.findById({ _id:todo._id}, function (err, todo)  {
                
                if (err) {  res.send(err);  }
                else
                {  todo.salioorden=0;
                    todo.usuarioejecutor=req.body.usuarioejecutor;
                    todo.dias=diffDays;
                    todo.horas=diffhoras;
                    todo.minutos=diffminutos;
                    todo.segundos=diffseg;

                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                        
                        res.json(todo);
                    });
                }
            });
        }
        });
   // });
       


    }
    else
    {
        if(req.body.operacion==='ejecutaoperacion')
        {
           
    
            var a='1'
            switch(a) {
                case '1':
    
                    (async () => {    
                        respuesta = await frmmovilejecutacomandos.ejecutacomandos(req, res, next);
                        
                        if(respuesta.estado!=='exito')
                        {
                            res.status(500).send(respuesta.estado) 
                            return;
                        }   
                        res.json({estado:'ok',data:respuesta.data,tipo:respuesta.tipo});
                    })();
    
    
                ;
               
                break;
                default:
                    res.json({estado:'ok',data:[],tipo:''});
              }
        }
        else
        {
    if(req.body.operacion==='ejecutaactualizaracion')
    {
       

        var a='1'
        switch(a) {
            case '1':

                (async () => {    
                    respuesta = await frmmovilejecutacomandos.ejecutacomandos(req, res, next);
                    
                    if(respuesta.estado!=='exito')
                    {
                        res.status(500).send(respuesta.estado) 
                        return;
                    }   
                    res.json({estado:'ok',data:respuesta.data,tipo:respuesta.tipo});
                })();


            ;
           
            break;
            default:
                res.json({estado:'ok',data:[],tipo:''});
          }
    }
    else
    {
      
        
if(req.params.recordID!=='crea')
{ 
    
  
    //ejecuta en el proceso la antes de actualizar segun accion
    
    
    if(req.body.tipo2==='Formulario'){
        if(req.body.ejecutainicio!=='' && req.body.ejecutainicio!==undefined)
        {
    
            respuesta = await frmejecuta.formularioinicialact(req, res, next,[]);
            
            if(respuesta.estado!=='exito')
            {
                res.status(500).send(respuesta.estado) 
                return;
            }   
            
    
        }
        
      
    }
    else
    {
        if(req.body.estructura.ejecutainicio!=='' && req.body.estructura.ejecutainicio!==undefined)
        {
            
            
            respuesta = await frmejecuta.procesoinicialact(req, res, next,[]);
            
            
        }

    }

   
    Bitacora.create(req.body.bitacora);
    var namess=req.body.idform
    
    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     


                                var filtrovalida=''
                  
                                filtrovalida=functool.dafiltrocadvalida(todos,'','',req)
               
                                if(filtrovalida ==='')
                                {
                                    var cad=''
                              
                                    var cad3=(functool.dafiltrocad(todos,'','','',req.body.norequeridospp)).split('°')
                                    cad=cad3[0]
                                    if(req.body.idpapa)
                                    {
                                        if(req.body.tipo==='proceso')
                                        {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },   "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"}, "geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                        }
                                        else
                                        {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"}'
                                        }
                                     
                                    }
                                    else
                                    {
     
                                         if(req.body.tipo==='proceso')
                                         {
                                             cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                           
                                         }
                                         else
                                         {
                                             cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"}'
                                         }
                                     
     
                                    }
                                    
                                     cad='{' + cad + '}'
                                     var jsonObject = functool.stringToObject(cad);
                                    
                               
                                     var mongoose = require("mongoose");
                                     delete mongoose.connection.models[namess];
                                     var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                              
                                  //   try {
                                         var  frmtt= mongoose.model(namess,tt);
                                    
                                         frmtt.updateMany({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                             if (err){       res.status(500).send(err.message)    }
                                             if(req.body.tipo==='proceso')
                                             {//crea trayectoria
                                              formulariotrayectoria.create({
                                                  idempresa		:  req.body.trayectoria.idempresa,
                                                  idorden	:  req.body.estructuraante._id,
                                                  
                                                  sequencia:req.body.estructuraante.sequencia,
                                                  sequenciag:req.body.estructuraante.sequenciag,
                                                  usuariocreador		: req.body.trayectoria.usuariocreador,
                                                  procedimiento		: req.body.trayectoria.procedimiento,
                                                  estadoxxx		: req.body.trayectoria.estadoxxx,
                                                  fecha		: req.body.trayectoria.fecha,
                                                  asignadoxxx	: req.body.trayectoria.asignadoxxx,
                                                  enviadoporxxx		: req.body.trayectoria.enviadoporxxx,
                                                  info		: req.body.trayectoria.info,
                                                    email:req.body.trayectoria.email,
                                                    grupoasignado		: req.body.trayectoria.grupoasignado,
                                                  minutos		:0,
                                                  dias:0,
                                                  horas:0,
                                                  segundos:0,
                                                  tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                                  nombre		:req.body.trayectoria.nombre,
                                                  idform		: req.body.trayectoria.idform,
                                                  tipoform	:req.body.trayectoria.tipoform,
                                                  tipo2form	:req.body.trayectoria.tipo2form,
                                                  ejecuta: req.body.trayectoria.ejecuta,
                                                  estadoorden: req.body.trayectoria.estadoorden,
                                                  salioorden:req.body.trayectoria.salioorden,
                                                  categoriaform	: req.body.trayectoria.categoriaform,
                                                  idactividad		: req.body.trayectoria.idactividad,
                                                  actoractividad		:req.body.trayectoria.actoractividad,
                                                  claseactividad		: req.body.trayectoria.claseactividad,
                                                  nombreactividad		: req.body.trayectoria.nombreactividad,
                                                  tipoactividad		: req.body.trayectoria.tipoactividad,
                                                  etapaactividad		:req.body.trayectoria.etapaactividad,
                                                  idaccion		: req.body.trayectoria.idaccion,
                                                  tipoaccion		: req.body.trayectoria.tipoaccion,
                                                  subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                                  nombreaccion		: req.body.trayectoria.nombreaccion,
                                                  estadoaccion		: req.body.trayectoria.estadoaccion,
                                                  actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                            }  , function(err, todo330) {
                                             if (err){  console.log(err.message);    res.status(500).send(err.message)    }


                                             if(req.body.ejecutaactualiza!=='' && req.body.ejecutaactualiza!==undefined)
                                                {
                                                    (async () => {    
                                                    respuesta = await frmejecuta.formularioejecutaactualiza(req, res, next,[]);
                                                    
                                                    res.json(todo330);
                                                    })();
                                            
                                                }
                                                else
                                                {
                                                    res.json(todo330);
                                                }
        


                                             
                                            });
                                     
                                     
                                             
                                             }
                                             else
                                             {
                                                if(req.body.ejecutaactualiza!=='' && req.body.ejecutaactualiza!==undefined)
                                                {
                                                    (async () => {    
                                                    respuesta = await frmejecuta.formularioejecutaactualiza(req, res, next,[]);
                                                   
                                                    res.json(todo3);
                                                    })();
                                            
                                                }
                                                else
                                                {
                                                    if(req.body.ejecuta!=='' && req.body.ejecuta!==undefined)
                                                    {
                                                        (async () => {    
                                                        respuesta = await frmejecuta. procesofinalcrea(req, res, next,todo3);
                                                      
                                                        res.json(todo3);
                                                        })();
                                                
                                                    }
                                                    else
                                                    {
                                                        res.json(todo3);
                                                    }
    
                                                }
                                             }
     
                                          
                                             });

                                }
                                else
                                {

                                    filtrovalida='{' +filtrovalida + '}'
                                    console.log(filtrovalida)
                            
    
                                    var cad=''
                                    var cad3=(functool.dafiltrocad(todos,'','','',req.body.norequeridospp)).split('°')
                                    cad=cad3[0]
                                    if(req.body.idpapa)
                                    {
                                        if(req.body.tipo==='proceso')
                                        {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                         
                                        }
                                        else
                                        {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                        }
                                     
                                    }
                                    else
                                    {
     
                                         if(req.body.tipo==='proceso')
                                         {
                                             cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                         }
                                         else
                                         {
                                             cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                         }
                                     
     
                                    }
                                    
                                   
                                   cad='{' + cad + '}'
                                   var jsonObject = functool.stringToObject(cad);
                                 
                                   var mongoose = require("mongoose");
                                   delete mongoose.connection.models[namess];
                                   var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
    
                                       var  frmbusca= mongoose.model(namess,tt);
               
                                       frmbusca.find(JSON.parse(filtrovalida) ,function(err, todos2a) {
                                           if (err){  res.send(err);  }
                                           var cadrrr=functool.validawarning(todos)
                                           if(cadrrr.estado==='false')
                                           {
                                               registrorep=cadrrr.llave+ ' '+filtrovalida
                                           }
                                           if(cadrrr.estado==='true')
                                           {
                                               registrorep=cadrrr.llave2+ ' '+filtrovalida
                                           }
   
                                           if(cadrrr.estado==='nada')
                                           {
                                               registrorep=''
                                           }
   
                                           
                                          if(todos2a.length>0 && cadrrr.estado==='false')
                                          {
                                             
                                              res.status(500).send('Registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) 
                                           
                                          }
                                          else
                                          {
                                            if(cadrrr.estado==='false'){cadrrr.estado='nada'}
                          
                                                var  frmtt=  mongoose.model(namess,tt);
                                                
                                                frmtt.updateMany({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                                    if (err){       res.status(500).send(err.message)    }
                                                    if(req.body.tipo==='proceso')
                                                    {//crea trayectoria
                                                     formulariotrayectoria.create({
                                                         idempresa		:  req.body.trayectoria.idempresa,
                                                         idorden	:  req.body.estructuraante._id,
                                                         sequencia:req.body.estructuraante.sequencia,
                                                         sequenciag:req.body.estructuraante.sequenciag,
                                                         usuariocreador		: req.body.trayectoria.usuariocreador,
                                                         procedimiento		: req.body.trayectoria.procedimiento,
                                                         fecha		: req.body.trayectoria.fecha,
                                                         asignadoxxx	: req.body.trayectoria.asignadoxxx,
                                                         estadoxxx		: req.body.trayectoria.estadoxxx,
                                                         enviadoporxxx		: req.body.trayectoria.enviadoporxxx,
                                                         info		: req.body.trayectoria.info,
                                                           email:req.body.trayectoria.email,
                                                           grupoasignado		: req.body.trayectoria.grupoasignado,
                                                         minutos		:0,
                                                         dias:0,
                                                         horas:0,
                                                         segundos:0,
                                                         tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                                         nombre		:req.body.trayectoria.nombre,
                                                         idform		: req.body.trayectoria.idform,
                                                         tipoform	:req.body.trayectoria.tipoform,
                                                         tipo2form	:req.body.trayectoria.tipo2form,
                                                         ejecuta: req.body.trayectoria.ejecuta,
                                                         estadoorden: req.body.trayectoria.estadoorden,
                                                         salioorden:req.body.trayectoria.salioorden,
                                                         categoriaform	: req.body.trayectoria.categoriaform,
                                                         idactividad		: req.body.trayectoria.idactividad,
                                                         actoractividad		:req.body.trayectoria.actoractividad,
                                                         claseactividad		: req.body.trayectoria.claseactividad,
                                                         nombreactividad		: req.body.trayectoria.nombreactividad,
                                                         tipoactividad		: req.body.trayectoria.tipoactividad,
                                                         etapaactividad		:req.body.trayectoria.etapaactividad,
                                                         idaccion		: req.body.trayectoria.idaccion,
                                                         tipoaccion		: req.body.trayectoria.tipoaccion,
                                                         subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                                         nombreaccion		: req.body.trayectoria.nombreaccion,
                                                         estadoaccion		: req.body.trayectoria.estadoaccion,
                                                         actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                                   }  , function(err, todo330) {
                                                    if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                    if(req.body.ejecutaactualiza!=='' && req.body.ejecutaactualiza!==undefined)
                                                    {
                                                        (async () => {    
                                                        respuesta = await frmejecuta.formularioejecutaactualiza(req, res, next,[]);
                                                        console.log(respuesta)
                                                        if(cadrrr.estado==='nada')  {      res.json(todo330);}
                                                else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                                        })();
                                                
                                                    }
                                                    else
                                                    {
                                                        if(cadrrr.estado==='nada')  {      res.json(todo330);}
                                                        else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                                    }
                                                   });
                                            
                                            
                                                    
                                                    }
                                                    else
                                                    {
                                                        if(req.body.ejecutaactualiza!=='' && req.body.ejecutaactualiza!==undefined)
                                                {
                                                    (async () => {    
                                                    respuesta = await frmejecuta.formularioejecutaactualiza(req, res, next,[]);
                                                    console.log(respuesta)
                                                    if(cadrrr.estado==='nada')  {      res.json(todo3);}
                                                    else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                                    })();
                                            
                                                }
                                                else
                                                {
                                                    if(cadrrr.estado==='nada')  {      res.json(todo3);}
                                                else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                                }
                                                    }
            
                                                 
                                                    });
    
                                           }
                                         
                                         
                                       });

                                }


                     
        }
    });

    

}
else{


//ejecuta en formulario antes de grabar
if(req.body.tipo2==='Formulario'){
    if(req.body.ejecutainicio!=='' && req.body.ejecutainicio!==undefined)
    {

        respuesta = await frmejecuta.formularioinicialcrea(req, res, next,[]);
    
        if(respuesta.estado!=='exito')
        {
            res.status(500).send(respuesta.estado) 
            return;
        }   
        

    }
    
   
}


       
    var namess=req.body.idform
    Bitacora.create(req.body.bitacora);
    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
     
        if (err){ res.send(err); }
                if(todos.length>0)   {  
                                console.log({tipo:namess})
                                var nombreseq='12345'
                                if(req.body.tipo==='proceso')
                                {//crea trayectoria
                                    nombreseq='generalproceso'
                                }

                                Contador.findOneAndUpdate({tipo:nombreseq}, { $inc: { sequence_value: 1 } }, function(err, seq2){
                                    if(err) { throw(err); }
                                
                                    var secuencia2;

                                    if(req.body.tipo==='proceso')
                                    {//crea trayectoria
                                        secuencia2=functool.padLeadingZeros(seq2.sequence_value,7)
                                        req.body.estructura['sequenciag']= secuencia2;
                                    }

                          

                                Contador.findOneAndUpdate({tipo:namess}, { $inc: { sequence_value: 1 } }, function(err, seq){
                                    if(err) { throw(err); }
                                 
                                    var secuencia;
                                    secuencia=functool.padLeadingZeros(seq.sequence_value,7)
                                    req.body.estructura['sequencia']= secuencia;
                                   
                               //validar si ya existe algunos de los que son llave 
                          
                                var filtrovalida=''
                  
                               filtrovalida=functool.dafiltrocadvalida(todos,'','',req)
              
                               if(filtrovalida ==='')
                               {

                                            var cad=''
                                            var cad3=(functool.dafiltrocad(todos,'','',req.body.norequeridospp)).split('°')
                                            cad=cad3[0]
                                            if(req.body.idpapa)
                                            {
                                                if(req.body.tipo==='proceso')
                                                {
                                                cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                                }
                                                else
                                                {
                                                cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                                }
                                            
                                            }
                                            else
                                            {
            
                                                if(req.body.tipo==='proceso')
                                                {
                                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                                
                                                }
                                                else
                                                {
                                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                                }
                                            
            
                                            }
                                        cad='{' + cad + '}'
                                        var jsonObject = functool.stringToObject(cad);
                                    
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                             
                                    //GRABA TODO BIEN------------------------------------------------------------------------------
                     //   try {
                                
                                            var  frmtt=  mongoose.model(namess ,tt);
                                        
                                            console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000')
                                        
                                            frmtt.create(req.body.estructura
                                                , function(err, todo3) {
                                                if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                    
                                                if(req.body.tipo==='proceso')
                                                {//crea trayectoria
                                                formulariotrayectoria.create({
                                                    idempresa		:  req.body.trayectoria.idempresa,
                                                    idorden	: todo3._id,
                                                    sequencia:todo3.sequencia,
                                                    sequenciag:todo3.sequenciag,
                                                    usuariocreador		: req.body.trayectoria.usuariocreador,
                                                    procedimiento		: req.body.trayectoria.procedimiento,
                                                    fecha		: todo3.createdAt,
                                                    estadoxxx		: req.body.trayectoria.estadoxxx,
                                                    asignadoxxx	: req.body.trayectoria.asignadoxxx,
                                                    enviadoporxxx		: req.body.trayectoria.enviadoporxxx,
                                                    info		: req.body.trayectoria.info,
                                                    email:req.body.trayectoria.email,
                                                    grupoasignado		: req.body.trayectoria.grupoasignado,
                                                    minutos		:0,
                                                    dias:0,
                                                    horas:0,
                                                    segundos:0,
                                                    tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                                    nombre		:req.body.trayectoria.nombre,
                                                    idform		: req.body.trayectoria.idform,
                                                    tipoform	:req.body.trayectoria.tipoform,
                                                    tipo2form	:req.body.trayectoria.tipo2form,
                                                    ejecuta: req.body.trayectoria.ejecuta,
                                                    estadoorden: req.body.trayectoria.estadoorden,
                                                    salioorden:req.body.trayectoria.salioorden,
                                                    categoriaform	: req.body.trayectoria.categoriaform,
                                                    idactividad		: req.body.trayectoria.idactividad,
                                                    actoractividad		:req.body.trayectoria.actoractividad,
                                                    claseactividad		: req.body.trayectoria.claseactividad,
                                                    nombreactividad		: req.body.trayectoria.nombreactividad,
                                                    tipoactividad		: req.body.trayectoria.tipoactividad,
                                                    etapaactividad		:req.body.trayectoria.etapaactividad,
                                                    idaccion		: req.body.trayectoria.idaccion,
                                                    tipoaccion		: req.body.trayectoria.tipoaccion,
                                                    subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                                    nombreaccion		: req.body.trayectoria.nombreaccion,
                                                    estadoaccion		: req.body.trayectoria.estadoaccion,
                                                    actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                            }  , function(err, todo330) {
                                                if (err){  console.log(err.message);    res.status(500).send(err.message)    }

                                                if(req.body.ejecuta!=='' && req.body.ejecuta!==undefined)
                                                {
                                                    (async () => {    
                                                respuesta = await frmejecuta.procesofinalcrea(req, res, next,todo3);
                                                
                                                if(respuesta.estado!=='exito')
                                                {
                                                    res.status(500).send(respuesta.estado) 
                                                    return;
                                                }   
                                                res.json(todo3);
                                            })();
                                                }
                                                else
                                                {
                                                    res.json(todo3);
                                                }
                                              
                                           


                                           
                                               

                                                
                                            });
                                                

                                                
                                                }
                                                else
                                                {
                                                          
                                                            
                                                    if(req.body.tipo2==='Formulario'){
                                                        if(req.body.ejecuta!=='' && req.body.ejecuta!==undefined)
                                                        {
                                                            (async () => {    
                                                            respuesta = await frmejecuta.formulariofinalcrea(req, res, next,todo3);
                                                            console.log(respuesta)
                                                            if(respuesta.estado!=='exito')
                                                            {
                                                                res.status(500).send(respuesta.estado) 
                                                                return;
                                                            }   
                                                            res.json(todo3);
                                                        })();
                                                    
                                                        }
                                                        else
                                                        {
                                                            res.json(todo3);
                                                            
                                                        }
                                                        
                                                       
                                                    }

                                                
                                                }
                                                console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll0000000000000000000000')
                                            
                                            
                                            
                                                });
                     
 //FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------
                               }
                               else
                               {//HAY QUE VALIDAR ALGUN FILTRO PRIMERO
                                filtrovalida='{' +filtrovalida + '}'
                                console.log(filtrovalida)
                        

                                var cad=''
                                var cad3=(functool.dafiltrocad(todos,'','',req.body.norequeridospp)).split('°')
                                cad=cad3[0]
                                if(req.body.idpapa)
                                {
                                    if(req.body.tipo==='proceso')
                                    {
                                     cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                     
                                    }
                                    else
                                    {
                                     cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                    }
                                 
                                }
                                else
                                {
 
                                     if(req.body.tipo==='proceso')
                                     {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                     }
                                     else
                                     {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                     }
                                 
 
                                }
                                
                               
                               cad='{' + cad + '}'
                               var jsonObject = functool.stringToObject(cad);
                             
                               var mongoose = require("mongoose");
                               delete mongoose.connection.models[namess];
                               var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                   var  frmbusca= mongoose.model(namess,tt);
           
                                   frmbusca.find(JSON.parse(filtrovalida) ,function(err, todos2a) {
                                       if (err){  res.send(err);  }
                               
                                       var cadrrr=functool.validawarning(todos)
                                        if(cadrrr.estado==='false')
                                        {
                                            registrorep=cadrrr.llave+ ' '+filtrovalida
                                        }
                                        if(cadrrr.estado==='true')
                                        {
                                            registrorep=cadrrr.llave2+ ' '+filtrovalida
                                        }

                                        if(cadrrr.estado==='nada')
                                        {
                                            registrorep=''
                                        }

                                        
                                       if(todos2a.length>0 && cadrrr.estado==='false')
                                       {
                                          
                                           res.status(500).send('Registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) 
                                        
                                       }
                                       else
                                       {
                       
                                        if(cadrrr.estado==='false'){cadrrr.estado='nada'}
                                            var  frmtt=  mongoose.model(namess,tt);
                                            
                                            frmtt.create(req.body.estructura
                                                , function(err, todo3) {
                                                if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                    
                                                if(req.body.tipo==='proceso')
                                                {//crea trayectoria
                                                    formulariotrayectoria.create({
                                                        idempresa		:  req.body.trayectoria.idempresa,
                                                        idorden	: todo3._id,
                                                        sequencia:todo3.sequencia,
                                                        sequenciag:todo3.sequenciag,
                                                        usuariocreador		: req.body.trayectoria.usuariocreador,
                                                        procedimiento		: req.body.trayectoria.procedimiento,
                                                      fecha		: todo3.createdAt,
                                                        estadoxxx		: req.body.trayectoria.estadoxxx,
                                                        asignadoxxx	: req.body.trayectoria.asignadoxxx,
                                                        enviadoporxxx		: req.body.trayectoria.enviadoporxxx,
                                                        info		: req.body.trayectoria.info,
                                                        email:req.body.trayectoria.email,
                                                        grupoasignado		: req.body.trayectoria.grupoasignado,
                                                        minutos		:0,
                                                        dias:0,
                                                        horas:0,
                                                        segundos:0,
                                                        tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                                        nombre		:req.body.trayectoria.nombre,
                                                        estadoorden: req.body.trayectoria.estadoorden,
                                                        idform		: req.body.trayectoria.idform,
                                                        salioorden:req.body.trayectoria.salioorden,
                                                        tipoform	:req.body.trayectoria.tipoform,
                                                        tipo2form	:req.body.trayectoria.tipo2form,
                                                        ejecuta: req.body.trayectoria.ejecuta,
                                                        categoriaform	: req.body.trayectoria.categoriaform,
                                                        idactividad		: req.body.trayectoria.idactividad,
                                                        actoractividad		:req.body.trayectoria.actoractividad,
                                                        claseactividad		: req.body.trayectoria.claseactividad,
                                                        nombreactividad		: req.body.trayectoria.nombreactividad,
                                                        tipoactividad		: req.body.trayectoria.tipoactividad,
                                                        etapaactividad		:req.body.trayectoria.etapaactividad,
                                                        idaccion		: req.body.trayectoria.idaccion,
                                                        tipoaccion		: req.body.trayectoria.tipoaccion,
                                                        subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                                        nombreaccion		: req.body.trayectoria.nombreaccion,
                                                        estadoaccion		: req.body.trayectoria.estadoaccion,
                                                        actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                                    }  , function(err, todo330) {
                                                        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                     //   res.json(todo330);

                                                        
                                                if(req.body.ejecuta!=='' && req.body.ejecuta!==undefined)
                                                {
                                                    (async () => {    
                                                respuesta = await frmejecuta.procesofinalcrea(req, res, next,todo3);
                                                
                                                if(respuesta.estado!=='exito')
                                                {
                                                    res.status(500).send(respuesta.estado) 
                                                    return;
                                                }   
                                                if(cadrrr.estado==='nada')  {      res.json(todo3);}
                                                else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                            })();
                                                }
                                                else
                                                {
                                                    if(req.body.tipo2==='Formulario'){
                                                        if(req.body.ejecuta!=='' && req.body.ejecuta!==undefined)
                                                        {
                                                            (async () => {    
                                                            respuesta = await frmejecuta.formulariofinalcrea(req, res, next,todo3);
                                                            console.log(respuesta)
                                                            if(respuesta.estado!=='exito')
                                                            {
                                                                res.status(500).send(respuesta.estado) 
                                                                return;
                                                            }   
                                                            if(cadrrr.estado==='nada')  {      res.json(todo3);}
                                                else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                                        })();
                                                    
                                                        }
                                                        else
                                                        {
                                                            if(cadrrr.estado==='nada')  {      res.json(todo3);}
                                                            else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                                        }
                                                        
                                                       
                                                    }
                                                }
                                              



                                                    });
                                                }
                                                else
                                                {
                                                    if(cadrrr.estado==='nada')  {      res.json(todo3);}
                                                else{        res.status(500).send('Precaución registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) }
                                                }
                                            
                                                });

                                       }
                                     
                                     
                                   });
                          
                               }

                            });
                        }); 
                  

        }
    });



}}}}}}}}
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
            todo.publico    	=	req.body.publico    	||	todo.publico    	;
            todo.tipo2    	=	req.body.tipo2    	||	todo.tipo2    	;
            todo.ejecuta    	=	req.body.ejecuta    	 	;
            todo.ejecutainicio    	=	req.body.ejecutainicio    	   	;
            todo.descripciong	= req.body.descripciong	,
            todo.ejecutaactualiza    	=	req.body.ejecutaactualiza    	  	;
            todo.ejecutaelimina    	=	req.body.ejecutaelimina   		;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.geoposicion    	=	req.body.geoposicion      	;
           
       //     todo.idformdetalle   		 ={id:req.body.idformdetalle.id,nombre:req.body.idformdetalle.nombre   }   	;

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
                    iniciocorrelativo: req.body.iniciocorrelativo,
                    publico        	: req.body.publico        	,
                    idpapa        	: req.body.idpapa        	,
                    ejecuta        	: req.body.ejecuta        	,
                    ejecutainicio: req.body.ejecutainicio,
                    ejecutaactualiza: req.body.ejecutaactualiza,
                    ejecutaelimina: req.body.ejecutaelimina,
                    categoria        	: req.body.categoria        	,
                    descripciong	: req.body.descripciong	,
                    nombre        	: req.body.nombre        	,
                    foto    	: req.body.foto    	,
                //    idformdetalle:   req.body.idformdetalle,
                    estado 	: req.body.estado 	,
                    geoposicion :   req.body.geoposicion,
                    usuarionew:req.body.bitacora.email
            }
                    , function(err, todo) {
                    if (err){ 
                    
                        res.status(500).send(err.message)    }

                        Contador.create({
                            "tipo" : todo._id,
                            "sequence_value" : req.body.iniciocorrelativo
                        });
                
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
                    iniciocorrelativo: req.body.iniciocorrelativo,
                    nombre        	: req.body.nombre        	,
                    publico        	: req.body.publico        	,
                    ejecuta        	: req.body.ejecuta        	,
                    ejecutainicio: req.body.ejecutainicio,
                    descripciong	: req.body.descripciong	,
                    ejecutaactualiza: req.body.ejecutaactualiza,
                    ejecutaelimina: req.body.ejecutaelimina,
                    foto    	: req.body.foto    	,
              //      idformdetalle:   req.body.idformdetalle,
                    geoposicion :   req.body.geoposicion,
                    estado 	: req.body.estado 	,
                    usuarionew:req.body.bitacora.email
            }
                    , function(err, todo) {
                    if (err){ 
                    
                        res.status(500).send(err.message)    }
                
                 console.log(todo)

                    Contador.create({
                        "tipo" : todo._id,
                        "sequence_value" : req.body.iniciocorrelativo
                    });

                    res.json(todo);
                    

                });

            }
                
    }});
}

}



