
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Bitacoraxxx = require('../models/bitacoraxxx');
var formulariotrayectoria = require('../models/asociadoventa/formulariotrayectoria');
var Contador = require('../models/contador');
var conecta1 = 'mssql://sa:$ertobar@192.168.34.5/stbd'
var conecta2 = 'mssql://sa:$ertobar@192.168.34.5/cielomarbd'
var conecta3 = 'mssql://sa:$ertobar@192.168.34.5/camposbd'
var sql = require("mssql")
var sql2 = require("mssql")
var sql3 = require("mssql")
var fs = require('fs');  
var util = require('util');
const imageToBase64 = require('image-to-base64');

var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});


//const odbc = require('odbc');

const connectionConfig = {   connectionString: 'DSN=OTRO',    connectionTimeout: 10,    loginTimeout: 10,}



const { getGaleriaimg } = require('./galeriaimg');

function  ejecutaaccess  (cad)
{

    return new Promise(resolve => {
        resolve({estado:'exito',datat:[]}); 
});
}


async function  sertobartime() {


    var cad1="select noticket,fechacerrado,cerradopor,usuario,trasladoEP,idtr from ticketcerrado where trasladoEP=0"
     var ejecuta1=await  ejecutasql( cad1,conecta1)

     var ticketin=''

     
    for(var i = 0; i < ejecuta1.datat.recordset.length;i++){
        ticketin=ticketin + ejecuta1.datat.recordset[i].noticket + ','

    }

    if(ticketin!=='')
    {

        ticketin=ticketin.substring(0,ticketin.length-1)
        var cad2="select serieface,nofactuface,NoDte,No_Factura,ticket from Factura_Encabezado where ticket in ("+  ticketin +")"
    
        var ejecuta2=await  ejecutasql( cad2,conecta1)

        for(var i = 0; i < ejecuta2.datat.recordset.length;i++){
        

            var  updatet={
                serie:ejecuta2.datat.recordset[i].serieface,
                nofactura:ejecuta2.datat.recordset[i].nofactuface,
                uuid:ejecuta2.datat.recordset[i].NoDte,
                reffactfel:ejecuta2.datat.recordset[i].           No_Factura,
                estadoordenxxx:'cerrada',
                estadointerno:'Cerrado'
                
            }

               var tt=''
               tt=padLeadingZeros(ejecuta2.datat.recordset[i].ticket,7)

               var tray= await buscatrayectoria(tt)

               producto = await actualizaformularioidfinal(tray.idform,{ sequenciag:padLeadingZeros(ejecuta2.datat.recordset[i].ticket,7)},'5f503bededa4710798a79b84',tray.idform,updatet); 
                var cad3='update ticketcerrado set trasladoEP=1 where noticket ='+ejecuta2.datat.recordset[i].ticket
               var ejecuta3=await  ejecutasql( cad3,conecta1)


        
       


        }



    }
   
  //   var ejecuta1=await  functool.ejecutasql( cad2,conecta1)


}

        
var     buscatrayectoria= function(idtt){
    return new Promise(resolve => {    
        
        

       
     formulariotrayectoria.find({ sequenciag:idtt}).exec( function (err, todo2000)  {
         if (err) {  res.send(err);  }


         if(todo2000.length===0)
         {
             resolve({idform:''}); 
         }
         else
{

resolve({idform:todo2000[0].idform}); 


    
     }
     });



      

    });
}

function ejecutasql  (cad,sqlconecta)
{
//var  ejecutasql= async function(cad,sqlconecta) {
   
    return new Promise(resolve => {
    
      sql.connect(sqlconecta, function (err) {
          
        
        if (err) { 
            log_file.write(util.format('ERRORRRR---' + cad) + '\r\n');
            log_file.write(util.format(cad) + '\r\n');
            resolve({estado:'error',datat:{recordset:[]}})
        }
        else
        {            
        var request = new sql.Request();
         request.query(cad, function (err, recordset) {             
             if (err) {
         
                log_file.write(util.format('ERRORRRR---' + cad) + '\r\n');
                  resolve({estado:'error',datat:{recordset:[]}})
                }
             else
             {
                sql.close();
                log_file.write(util.format('BUENO---' + cad) + '\r\n');
                resolve({estado:'exito',datat:recordset})
             }
      
          //   request.end();
        
          
      
     });

    }

     
    });
  });
}

  
/*
options: {
   enableArithAbort: true,//<----------set this to true
   port: parseInt(config.port, 10),
   database: config.database,
   trustServerCertificate: true
}
*/

function daactividadsegunfrm(frm)
{
    var arr=frm.split('°')
    switch(arr[0]) {
        case '605a23446886480f70f6ec3f'://importaciones
            if(arr[3]==='Rectificación'){return '606e18ed73b21e24e0f63c23'}
            else
            {                return '6074c46b73b21e24e0f63c3a'            }
            
        break;
        case '605a23696886480f70f6ec43':  
        if(arr[3]==='Rectificación'){return '6085ab09842ba023f878b61f'}
            else
            {                return '6085ad37842ba023f878b627'            }
              break;//exportaciones
        case '605a24e46886480f70f6ec47':  
        if(arr[3]==='Rectificación'){return '608631cc2e70db0d600a82ca'}
            else
            {                return '608631cc2e70db0d600a82ca'            }
          break;//transitos
        case '605a252e6886480f70f6ec4b':  
        if(arr[3]==='Rectificación'){return '608738ade75c6616505520e2'}
            else
            {                return '608738ade75c6616505520e2'            }
          break;//df zf



            default: return 'na'
    }
}
function daconectaorden(tipo) {
    var tt='';
    switch(tipo) {
        case '605a23446886480f70f6ec3f':  tt='861';   break;//importaciones
        case '605a23696886480f70f6ec43':  tt='862';   break;//exportaciones
        case '605a24e46886480f70f6ec47':  tt='2101';   break;//transitos
        case '605a252e6886480f70f6ec4b':  tt='2161';   break;//df zf
        case '605a27bf6886480f70f6ec57': tt='2141';    break;//servicios
        case '605a27336886480f70f6ec53':  tt='2201';   break;//carga internacional
        case '605a26e16886480f70f6ec4f':  tt='2122';   break;//faucas

     
        default:
          // code block
      }
        return tt;
}

function dacodigocliente(tipo) {
    var tt='';
    switch(tipo) {
        case '605a23446886480f70f6ec3f':  tt='codigos';   break;//importaciones
        case '605a23696886480f70f6ec43':  tt='codigos';   break;//exportaciones
        case '605a24e46886480f70f6ec47':  tt='codigos';   break;//transitos
        case '605a252e6886480f70f6ec4b':  tt='codigos';   break;//df zf
      
        case '605a27336886480f70f6ec53':  tt='codigoc';   break;//carga internacional
        case '605a26e16886480f70f6ec4f':  tt='codigos';   break;//faucas

     
        default:
          // code block
      }
        return tt;
}
function daconectasql(tipo,estructura) {
    var tt='';
    switch(tipo) {
        case '605a23446886480f70f6ec3f':  tt=conecta1;   break;//importaciones
        case '605a23696886480f70f6ec43':  tt=conecta1;   break;//exportaciones
        case '605a24e46886480f70f6ec47':  tt=conecta1;   break;//transitos
        case '605a252e6886480f70f6ec4b':  tt=conecta1;   break;//df zf
        case '605a27bf6886480f70f6ec57':  tt=conecta1;   break;//servicios
        //ver segun estructura     empresa   'Sertobar' (stbd)   'Cielomar'   'Agencias Campos' (camposbd)
        tt=conecta1;  
        
        break;//servicios

        case '605a27336886480f70f6ec53':  tt=conecta2;   break;//carga internacional
        case '605a26e16886480f70f6ec4f':  tt=conecta1;   break;//faucas
        
 
        default:
          // code block
      }
        return tt;
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
   case 'Documento':   tt='String';   break;
   case 'Componente':   tt='String';   break;
   case 'Visualizar query':   tt='String';   break;
   case 'Lista de valores remoto':   tt='String';   break;
   case 'Firma Electronica':   tt='String';   break;
   case 'Codigo Qr':   tt='String';   break;
   case 'Firma Digital':   tt='String';   break;
   case 'Geoposicionamiento automatico':   tt='String';   break;
   case 'Pais':   tt='String';   break;
   case 'Tarjeta de credito':   tt='String';   break;
   case 'Telefono':   tt='String';   break;
   case 'Correo electronico':   tt='String';   break;
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
           case 'Documento':   tt='documento';   break;
           case 'Componente':   tt='componente';   break;
           case 'Visualizar query':   tt='verquery';   break;
           case 'Lista de valores remoto':   tt='selectremoto';   break;
           case 'Firma Electronica':   tt='firmaelectronica';   break;
           case 'Codigo Qr':   tt='codigoqr';   break;
           case 'Firma Digital':   tt='firmadigital';   break;
           case 'Geoposicionamiento automatico':   tt='geoautomatico';   break;
           case 'Pais':   tt='pais';   break;
           case 'Tarjeta de credito':   tt='tarjeta';   break;
           case 'Telefono':   tt='telefono';   break;
           case 'Correo electronico':   tt='correo';   break;
            default:
              // code block
          }
            return tt;
          }



          function graficatiposubtipocantidad(todos2,op) {
               
            var myData2 = [];
            var myData3 = [];
            var myData = [];
          
    
            var arre=['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)']
            var arre2=['rgb(255, 99, 132)','rgb(54, 162, 235)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)']
            //etiquetas
    
            if(todos2.length==0)
            {
              return {labels:[],dataset:[]}
            }
            else
            {
            if(op==='')
            {
                for(var i = 0; i < todos2.length;i++){  myData.push(todos2[i].grupo) ;  todos2[i].exito=0}
            }
            else
            {
                
                for(var i = 0; i < todos2.length;i++){  
                    if(todos2[i].grupo0!==undefined && todos2[i].grupo0!==''){
                        myData.push(todos2[i].grupo+'-' + todos2[i].grupo0) ; 
                    }
                    else
                    {
                        myData.push(todos2[i].grupo) ; 
                    }
                    todos2[i].exito=0
                }
            }            
            
            // console.log(myData)
    
        myData=removeDups(myData);
        myData.sort()
        var total=0
         for(var i = 0; i <myData.length;i++){    myData3.push(null)      }
         var grupo=todos2[0].subgrupo
         var ncolor=0;
         var j=0;
         var grupott=''
         for(var i = 0; i <todos2.length;i++){
            
             if( todos2[i].exito===0)
             {
             if(grupo==todos2[i].subgrupo)     {   
                 for(var r = 0; r < myData.length;r++){
                     if(op==='')
                     {grupott=todos2[i].grupo}
                     else
                     {
                        if(todos2[i].grupo0!==undefined && todos2[i].grupo0!==''){
                            grupott=todos2[i].grupo+'-' + todos2[i].grupo0
                        }
                        else
                        {
                            grupott=todos2[i].grupo
                        }
                        
                     }
                     if(myData[r]==grupott)
                     {
                         myData3[r]=Number(todos2[i].cantidad);      
                         total=total+Number(todos2[i].cantidad)
                         todos2[i].exito=1
    
                     }
                 }
    
                   
                 
                 }
             else{
    
            
                     myData2.push({ label: grupo,   data: myData3,  fill: false,backgroundColor:arre[ncolor],  borderColor: arre2[ncolor], borderWidth: 1  });
           
                 
    
                      ncolor=ncolor+1;
                      myData3 = [];
                     j=0;
                     for(var ii = 0; ii <  myData.length;ii++){
                         myData3.push(null)
                     }
                     grupo=todos2[i].subgrupo
    
                     for(var r = 0; r < myData.length;r++){
                        if(op==='')
                        {grupott=todos2[i].grupo}
                        else
                        {
                            if(todos2[i].grupo0!==undefined && todos2[i].grupo0!==''){
                                grupott=todos2[i].grupo+'-' + todos2[i].grupo0
                            }
                            else
                            {
                                grupott=todos2[i].grupo
                            }
                        }
                         if(myData[r]==grupott)
                         {
                             myData3[r]=Number(todos2[i].cantidad);   
                             total=total+Number(todos2[i].cantidad);   
                             todos2[i].exito=1
    
                         }
                     }
    
                 
                 //    myData3[j]=result.rows[i].VALOR
                 //    j=j+1;
                
                    
             }
            
            }
    
         }
    
    
    
             myData2.push({ label: grupo,  data: myData3, fill: false, backgroundColor:arre[ncolor],  borderColor: arre2[ncolor], borderWidth: 1  });
    
         return {labels:myData,dataset:myData2,total:total,tabla:todos2};
        }
        
        }

  
        function validawarning(todos) {
            var re={estado:'nada',llave:'',llave2:''}
            var siusallave=0
            var siusallave2=0
            var llave1=''
            var llave2=''
        
            for(var i = 0; i < todos.length;i++){
                if( todos[i].usarunaves===undefined){todos[i].usarunaves='false'}
                if( todos[i].usarunaves2===undefined){todos[i].usarunaves2='false'}
                      if((todos[i].usarunaves==='true' )  )
                {
                    siusallave=1
                    llave1=llave1+ todos[i].title + '('+ todos[i].valor +')' + ', '
                }
                if(todos[i].usarunaves2==='true')
                {siusallave2=1
                    llave2=llave2+ todos[i].title + '('+ todos[i].valor +')' + ', '}
                }
        
            if(siusallave===1)
            {
                return {estado:'false',llave:llave1,llave2:''}
            }
            else
            {
                if(siusallave2===1)
                {
                    return {estado:'true',llave:'',llave2:llave2}
                }
                else
                { return {estado:'nada',llave:'',llave2:''}}
            }
        
           
        
            
        
        }
                  
        function removeDups(names) {
            let unique = {};
            names.forEach(function(i) {
              if(!unique[i]) {
                unique[i] = true;
              }
            });
            return Object.keys(unique);
          }
     var     actualizatrayectoria= function(idtt,idorden,fechatt,usuarioejecutor){
        return new Promise(resolve => {    
            
            

           
         formulariotrayectoria.findOne({ _id:{$nin:[idtt]},
             idorden:idorden }).sort({_id:-1}).exec( function (err, todo2000)  {
             if (err) {  res.send(err);  }
 
 
             if(todo2000.length===0)
             {
                 resolve(todo3); 
             }
             else
 {
             var ff3=new Date(fechatt)
             var ff4=todo2000.createdAt 
             
 
             var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
             var diffhoras = parseInt((ff3 - ff4) / (1000 * 60 * 60 )); //gives day difference
             var diffminutos = parseInt((ff3 - ff4) / (1000 * 60 )); //gives day difference
             var diffseg = parseInt((ff3 - ff4) / (1000  )); //gives day difference
 //one_day means 1000*60*60*24
 //one_hour means 1000*60*60
 //one_minute means 1000*60
 //one_second means 1000
 
 
             formulariotrayectoria.findById({ _id:todo2000._id}, function (err, todo3000)  {
                 
                 if (err) {  res.send(err);  }
                 else
                 {  todo3000.salioorden=0;
                     todo3000.usuarioejecutor=usuarioejecutor;
                     todo3000.dias=diffDays;
                     todo3000.horas=diffhoras;
                     todo3000.minutos=diffminutos;
                     todo3000.segundos=diffseg;
 
                     todo3000.save(function (err, todo){
                         if (err)     {  res.status(500).send(err.message)   }
                         
                         resolve(todo); 
                     });
                 }
             });
         }
         });



          

        });
    }


    

    var     creatrayectoriatoid= function(idtt,namess,namess2,fechatt,usuarioejecutor,procedimientox,actaccionsig,fecha){
        return new Promise(resolve => {    

            Frmmovild.find({idmovil:namess}).exec(function(err, todos) {

                if(todos.length>0)   {  
                var cad=''
                var cadxx=''
                var cad3=(dafiltrocad(todos,'','','')).split('°')
              
          
             
                cad=cad3[0]
                cadxx='{'+ cad3[1] + '}'
                cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},"papaorigen":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'


                cad='{' + cad + '}'
                cadxx='{' + cadxx + '}'

           //  console.log(cad)
                var jsonObject = stringToObject(cad);
              
                var mongoose = require("mongoose");
                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                delete mongoose.connection.models[namess2];
                var  frmtt= mongoose.model(namess2,tt);


                frmtt.findById({_id:idtt}).exec(function(err, todos2) {
                    if (err){  res.send(err); }

                    
             var ff3=new Date(fechatt)
             var ff4=todos2.createdAt 
             
 
             var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
             var diffhoras = parseInt((ff3 - ff4) / (1000 * 60 * 60 )); //gives day difference
             var diffminutos = parseInt((ff3 - ff4) / (1000 * 60 )); //gives day difference
             var diffseg = parseInt((ff3 - ff4) / (1000  )); //gives day difference



                    formulariotrayectoria.create({
                        idempresa		: todos2.idempresa,
                        idorden	: todos2._id,
                        idordeng:todos2.sequencia,
                        papaorigen: todos2.papaorigen,
                        sequencia:todos2.sequencia,
                        fecha:fecha,
                        sequenciag:todos2.sequenciag,
                        salioorden:1,
                        usuariocreador		: usuarioejecutor,
                        usuarioejecutor:usuarioejecutor,
                        procedimiento:procedimientox,
                        secuenciagants:todos2.secuenciagants,
                        idanst:todos2.idanst,
                        estadoxxx:todos2.estadoxxx,
                        enviadoporxxx:todos2.enviadoporxxx,
                        info:'',
                     //   email:todos2.email,

                        minutos		:diffminutos,
                        dias:diffDays,
                        horas:diffhoras,
                        segundos:diffseg,
                        tipocreacionorden		:todos2.actividadclasexxx,

                        
                        nombre		:'nombre',
                        idform		: namess,
                        "tipoform" : "proceso",
                        "tipo2form" : "Formulario",
                        "ejecuta" : "",
                        estadoorden: todos2.estadoordenxxx,
                        
                        categoriaform	: "NA",



                        idactividad		: todos2.idaccionxxx,

                        actoractividad		:{
                            "id" : todos2.idactorxxx,
                            "nombre" : todos2.actorxxx
                        },
                    
                        claseactividad		: todos2.actividadclasexxx,
                        nombreactividad		: todos2.actividadxxx,
                        tipoactividad		: todos2.actividadtipoxxx,
                        etapaactividad		:'INGRESO',
                      
                      
                        idaccion		: todos2.idaccionxxx,
                        tipoaccion		: todos2.tipoaccionxxx,
                        subtipoaccion		: todos2.subtipoaccionxxx,
                         nombreaccion		: todos2.accionxxx,
                        estadoaccion		: todos2.estadoxxx,


                        actividadsiguienteaccion		:   actaccionsig
                }  , function(err, todo330) {
                    if (err){  console.log(err.message);    res.status(500).send(err.message)    }

                    resolve(todos2); 


             



                  
                     
                });
                    

                });


            }



            });
            

        });
    }

    var creafrmregistroproceso= function(req){
        return new Promise(resolve => {         
        var namess=req.body.optionorden.formulario
        Bitacora.create(req.body.optionorden.bitacora);
        Frmmovild.find({idmovil:req.body.optionorden.formulario}).exec(function(err, todos) {
         
            if (err){ res.send(err); }
                    if(todos.length>0)   {  

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
                                secuencia2=padLeadingZeros(seq2.sequence_value,7)
                                req.body.optionorden.estructura['sequenciag']= secuencia2;
                            }

                  
                                 
                                    Contador.findOneAndUpdate({tipo:namess}, { $inc: { sequence_value: 1 } }, function(err, seq){
                                        if(err) { throw(err); }
                                        console.log(seq)
                                        var secuencia;
                                        secuencia=padLeadingZeros(seq.sequence_value,7)
                                        req.body.optionorden.estructura['sequencia']= secuencia;
                                       
                                   //validar si ya existe algunos de los que son llave 
                              
                                    var filtrovalida=''
                      
                                   filtrovalida=dafiltrocadvalidaconbosy(todos,'','',req.body.optionorden)
                  
                                   if(filtrovalida ==='')
                                   {
    
                                                var cad=''
                                                var cad3=(dafiltrocad(todos,'','',req.body.optionorden.norequeridospp)).split('°')
                                                cad=cad3[0]
                                                if(req.body.optionorden.idpapa)
                                                {
                                                    if(req.body.optionorden.tipo==='proceso')
                                                    {
                                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},"papaorigen":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                                    }
                                                    else
                                                    {
                                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                                    }
                                                
                                                }
                                                else
                                                {
                
                                                    if(req.body.optionorden.tipo==='proceso')
                                                    {
                                                        cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},"papaorigen":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                                    
                                                    }
                                                    else
                                                    {
                                                        cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                                    }
                                                
                
                                                }
                                            cad='{' + cad + '}'
                                            var jsonObject = stringToObject(cad);
                                        
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                 
                                        //GRABA TODO BIEN------------------------------------------------------------------------------
                         //   try {
                                    
                                                var  frmtt=  mongoose.model(namess ,tt);
                                            
                                                console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000')
                                            
                                     
    
                                                    if(req.body.tipo==='proceso')
                                                    {
                                                   
                                                            req.body.optionorden.estructura['papaorigen']=  req.body.itemsx._id;
                                                            frmtt.create(req.body.optionorden.estructura
                                                                , function(err, todo3) {
                                                                if (err){ 
                                                                     console.log(err.message);  
                                                                   
                                                                      }
                                                                    
                                                                if(req.body.tipo==='proceso')
                                                                {//crea trayectoria
                                                                formulariotrayectoria.create({
                                                                    idempresa		:  req.body.optionorden.trayectoria.idempresa,
                                                                    idorden	: todo3._id,
                                                                    idordeng:secuencia,
                                                                    papaorigen: req.body.itemsx._id,
                                                                    sequencia:todo3.sequencia,
                                                                    sequenciag:todo3.sequenciag,
                                                                    usuariocreador		: req.body.optionorden.trayectoria.usuariocreador,
                                                                    procedimiento:req.body.optionorden.trayectoria.procedimiento,
                                                                    secuenciagants:req.body.optionorden.trayectoria.secuenciagants,
                                                                    idanst:req.body.optionorden.trayectoria.idanst,
                                                                    estadoxxx:req.body.optionorden.trayectoria.estadoxxx,
                                                                    fecha:req.body.optionorden.trayectoria.fecha,
                                                                    enviadoporxxx:req.body.optionorden.trayectoria.enviadoporxxx,
                                                                    info:req.body.optionorden.trayectoria.info,
                                                                    email:req.body.optionorden.trayectoria.email,
                                                                    minutos		:0,
                                                                    dias:0,
                                                                    horas:0,
                                                                    segundos:0,
                                                                    tipocreacionorden		:req.body.optionorden.trayectoria.tipocreacionorden,
                                                                    nombre		:req.body.optionorden.trayectoria.nombre,
                                                                    idform		: req.body.optionorden.trayectoria.idform,
                                                                    tipoform	:req.body.optionorden.trayectoria.tipoform,
                                                                    tipo2form	:req.body.optionorden.trayectoria.tipo2form,
                                                                    ejecuta: req.body.optionorden.trayectoria.ejecuta,
                                                                    estadoorden: req.body.optionorden.trayectoria.estadoorden,
                                                                    salioorden:req.body.optionorden.trayectoria.salioorden,
                                                                    categoriaform	: req.body.optionorden.trayectoria.categoriaform,
                                                                    idactividad		: req.body.optionorden.trayectoria.idactividad,
                                                                    actoractividad		:req.body.optionorden.trayectoria.actoractividad,
                                                                    claseactividad		: req.body.optionorden.trayectoria.claseactividad,
                                                                    nombreactividad		: req.body.optionorden.trayectoria.nombreactividad,
                                                                    tipoactividad		: req.body.optionorden.trayectoria.tipoactividad,
                                                                    etapaactividad		:req.body.optionorden.trayectoria.etapaactividad,
                                                                    idaccion		: req.body.optionorden.trayectoria.idaccion,
                                                                    tipoaccion		: req.body.optionorden.trayectoria.tipoaccion,
                                                                    subtipoaccion		: req.body.optionorden.trayectoria.subtipoaccion,
                                                                    nombreaccion		: req.body.optionorden.trayectoria.nombreaccion,
                                                                    estadoaccion		: req.body.optionorden.trayectoria.estadoaccion,
                                                                    actividadsiguienteaccion		:  req.body.optionorden.trayectoria.actividadsiguienteaccion
                                                            }  , function(err, todo330) {
                                                                if (err){  console.log(err.message);    res.status(500).send(err.message)    }

                                                                resolve(todo3); 


                                                         



                                                              
                                                                 
                                                            });
                                                                
                
                                                                
                                                                }
                                                                else
                                                                {
                                                                          
                                                                            
                                                                    resolve(todo3); 
                                                                       
                                                                    
                
                                                                
                                                                }
                                                                console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll0000000000000000000000')
                                                            
                                                            
                                                            
                                                                });
                                                       
    
                                                    }
                                                    else
                                                    {
                                                        frmtt.create(req.body.optionorden.estructura
                                                            , function(err, todo3) {
                                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                                
                                                            if(req.body.tipo==='proceso')
                                                            {//crea trayectoria
                                                            formulariotrayectoria.create({
                                                                idempresa		:  req.body.optionorden.trayectoria.idempresa,
                                                                idorden	: todo3._id,
                                                                idordeng:0,
                                                                sequencia:todo3.sequencia,
                                                                sequenciag:todo3.sequenciag,
                                                                usuariocreador		: req.body.optionorden.trayectoria.usuariocreador,
                                                                procedimiento:req.body.optionorden.trayectoria.procedimiento,
                                                                secuenciagants:req.body.optionorden.trayectoria.secuenciagants,
                                                                idanst:req.body.optionorden.trayectoria.idanst,
                                                                estadoxxx:req.body.optionorden.trayectoria.estadoxxx,
                                                                fecha:req.body.optionorden.trayectoria.fecha,
                                                                enviadoporxxx:req.body.optionorden.trayectoria.enviadoporxxx,
                                                                info:req.body.optionorden.trayectoria.info,
                                                                email:req.body.optionorden.trayectoria.email,
                                                                minutos		:0,
                                                                dias:0,
                                                                horas:0,
                                                                segundos:0,
                                                                tipocreacionorden		:req.body.optionorden.trayectoria.tipocreacionorden,
                                                                nombre		:req.body.optionorden.trayectoria.nombre,
                                                                idform		: req.body.optionorden.trayectoria.idform,
                                                                tipoform	:req.body.optionorden.trayectoria.tipoform,
                                                                tipo2form	:req.body.optionorden.trayectoria.tipo2form,
                                                                ejecuta: req.body.optionorden.trayectoria.ejecuta,
                                                                estadoorden: req.body.optionorden.trayectoria.estadoorden,
                                                                salioorden:req.body.optionorden.trayectoria.salioorden,
                                                                categoriaform	: req.body.optionorden.trayectoria.categoriaform,
                                                                idactividad		: req.body.optionorden.trayectoria.idactividad,
                                                                actoractividad		:req.body.optionorden.trayectoria.actoractividad,
                                                                claseactividad		: req.body.optionorden.trayectoria.claseactividad,
                                                                nombreactividad		: req.body.optionorden.trayectoria.nombreactividad,
                                                                tipoactividad		: req.body.optionorden.trayectoria.tipoactividad,
                                                                etapaactividad		:req.body.optionorden.trayectoria.etapaactividad,
                                                                idaccion		: req.body.optionorden.trayectoria.idaccion,
                                                                tipoaccion		: req.body.optionorden.trayectoria.tipoaccion,
                                                                subtipoaccion		: req.body.optionorden.trayectoria.subtipoaccion,
                                                                nombreaccion		: req.body.optionorden.trayectoria.nombreaccion,
                                                                estadoaccion		: req.body.optionorden.trayectoria.estadoaccion,
                                                                actividadsiguienteaccion		:  req.body.optionorden.trayectoria.actividadsiguienteaccion
                                                        }  , function(err, todo330) {
                                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
            
                                                            resolve(todo3); 
                                                             
                                                        });
                                                            
            
                                                            
                                                            }
                                                            else
                                                            {
                                                                      
                                                                        
                                                                resolve(todo3); 
                                                                   
                                                                
            
                                                            
                                                            }
                                                            console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll0000000000000000000000')
                                                        
                                                        
                                                        
                                                            });
                                                    }
                         
     //FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------
                                   }
                                   else
                                   {//HAY QUE VALIDAR ALGUN FILTRO PRIMERO
                                    filtrovalida='{' +filtrovalida + '}'
                                    console.log(filtrovalida)
                            
    
                                    var cad=''
                                    var cad3=(dafiltrocad(todos,'','',req.body.optionorden.norequeridospp)).split('°')
                                    cad=cad3[0]
                                    if(req.body.optionorden.idpapa)
                                    {
                                        if(req.body.optionorden.tipo==='proceso')
                                        {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},"papaorigen":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                         
                                        }
                                        else
                                        {
                                         cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                        }
                                     
                                    }
                                    else
                                    {
     
                                         if(req.body.optionorden.tipo==='proceso')
                                         {
                                             cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},"sequencia":{"type":"String"},"sequenciag":{"type":"String"},"papaorigen":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                         }
                                         else
                                         {
                                             cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" }, "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"sequencia":{"type":"String"}'
                                         }
                                     
     
                                    }
                                    
                                   
                                   cad='{' + cad + '}'
                                   var jsonObject =stringToObject(cad);
                                 
                                   var mongoose = require("mongoose");
                                   delete mongoose.connection.models[namess];
                                   var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
    
                                       var  frmbusca= mongoose.model(namess,tt);
               
                                       frmbusca.find(JSON.parse(filtrovalida) ,function(err, todos2a) {
                                           if (err){  res.send(err);  }
                                   
                                           if(todos2a.length>0)
                                           {
                                              
                                               res.status(500).send('Registro ya existe en base de datos, este formulario tiene llaves unicas: ' + registrorep) 
                                            
                                           }
                                           else
                                           {
                           
                                                var  frmtt=  mongoose.model(namess,tt);
    
                                                if(req.body.tipo==='proceso')
                                                {
                                                   
                                                        req.body.optionorden.estructura['papaorigen']=  req.body.itemsx._id;
                                                        frmtt.create(req.body.optionorden,estructura
                                                            , function(err, todo3) {
                                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                                
                                                            if(req.body.tipo==='proceso')
                                                            {//crea trayectoria
                                                                formulariotrayectoria.create({
                                                                    idempresa		:  req.body.optionorden.trayectoria.idempresa,
                                                                    idorden	: todo3._id,
                                                                    sequencia:todo3.sequencia,
                                                                    sequenciag:todo3.sequenciag,
                                                                    papaorigen: req.body.itemsx._id,
                                                                    usuariocreador		: req.body.optionorden.trayectoria.usuariocreador,
                                                                    procedimiento:req.body.optionorden.trayectoria.procedimiento,
                                                                    secuenciagants:req.body.optionorden.trayectoria.secuenciagants,
                                                                    idanst:req.body.optionorden.trayectoria.idanst,
                                                                    fecha:req.body.optionorden.trayectoria.fecha,
                                                                    estadoxxx:req.body.optionorden.trayectoria.estadoxxx,
                                                                    enviadoporxxx:req.body.optionorden.trayectoria.enviadoporxxx,
                                                                    info:req.body.optionorden.trayectoria.info,
                                                                    email:req.body.optionorden.trayectoria.email,
                                                                    minutos		:0,
                                                                    dias:0,
                                                                    horas:0,
                                                                    segundos:0,
                                                                    tipocreacionorden		:req.body.optionorden.trayectoria.tipocreacionorden,
                                                                    nombre		:req.body.optionorden.trayectoria.nombre,
                                                                    estadoorden: req.body.optionorden.trayectoria.estadoorden,
                                                                    idform		: req.body.optionorden.trayectoria.idform,
                                                                    salioorden:req.body.optionorden.trayectoria.salioorden,
                                                                    tipoform	:req.body.optionorden.trayectoria.tipoform,
                                                                    tipo2form	:req.body.optionorden.trayectoria.tipo2form,
                                                                    ejecuta: req.body.optionorden.trayectoria.ejecuta,
                                                                    categoriaform	: req.body.optionorden.trayectoria.categoriaform,
                                                                    idactividad		: req.body.optionorden.trayectoria.idactividad,
                                                                    actoractividad		:req.body.optionorden.trayectoria.actoractividad,
                                                                    claseactividad		: req.body.optionorden.trayectoria.claseactividad,
                                                                    nombreactividad		: req.body.optionorden.trayectoria.nombreactividad,
                                                                    tipoactividad		: req.body.optionorden.trayectoria.tipoactividad,
                                                                    etapaactividad		:req.body.optionorden.trayectoria.etapaactividad,
                                                                    idaccion		: req.body.optionorden.trayectoria.idaccion,
                                                                    tipoaccion		: req.body.optionorden.trayectoria.tipoaccion,
                                                                    subtipoaccion		: req.body.optionorden.trayectoria.subtipoaccion,
                                                                    nombreaccion		: req.body.optionorden.trayectoria.nombreaccion,
                                                                    estadoaccion		: req.body.optionorden.trayectoria.estadoaccion,
                                                                    actividadsiguienteaccion		:  req.body.optionorden.trayectoria.actividadsiguienteaccion
                                                                }  , function(err, todo330) {
                                                                    if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                                 //   res.json(todo330);
            
                                                                 resolve(todo3); 
            
                                                           
            
            
                                                                });
                                                            }
                                                            else
                                                            {
                                                                resolve(todo3); 
                                                            }
                                                        
                                                            });
                                                    
    
                                                           
                                    
    
                                                }
                                                else
                                                {
    
                                                           
                                                frmtt.create(req.body.optionorden,estructura
                                                    , function(err, todo3) {
                                                    if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                        
                                                    if(req.body.tipo==='proceso')
                                                    {//crea trayectoria
                                                        formulariotrayectoria.create({
                                                            idempresa		:  req.body.optionorden.trayectoria.idempresa,
                                                            idorden	: todo3._id,
                                                            sequencia:todo3.sequencia,
                                                            sequenciag:todo3.sequenciag,
                                                            papaorigen: req.body.itemsx._id,
                                                            secuenciagants:req.body.optionorden.trayectoria.secuenciagants,
                                                            idanst:req.body.optionorden.trayectoria.idanst,
                                                            fecha:req.body.optionorden.trayectoria.fecha,
                                                            usuariocreador		: req.body.optionorden.trayectoria.usuariocreador,
                                                            procedimiento:req.body.optionorden.trayectoria.procedimiento,

                                                            estadoxxx:req.body.optionorden.trayectoria.estadoxxx,
                                                            enviadoporxxx:req.body.optionorden.trayectoria.enviadoporxxx,
                                                            info:req.body.optionorden.trayectoria.info,
                                                            email:req.body.optionorden.trayectoria.email,
                                                            minutos		:0,
                                                            dias:0,
                                                            horas:0,
                                                            segundos:0,
                                                            tipocreacionorden		:req.body.optionorden.trayectoria.tipocreacionorden,
                                                            nombre		:req.body.optionorden.trayectoria.nombre,
                                                            estadoorden: req.body.optionorden.trayectoria.estadoorden,
                                                            idform		: req.body.optionorden.trayectoria.idform,
                                                            salioorden:req.body.optionorden.trayectoria.salioorden,
                                                            tipoform	:req.body.optionorden.trayectoria.tipoform,
                                                            tipo2form	:req.body.optionorden.trayectoria.tipo2form,
                                                            ejecuta: req.body.optionorden.trayectoria.ejecuta,
                                                            categoriaform	: req.body.optionorden.trayectoria.categoriaform,
                                                            idactividad		: req.body.optionorden.trayectoria.idactividad,
                                                            actoractividad		:req.body.optionorden.trayectoria.actoractividad,
                                                            claseactividad		: req.body.optionorden.trayectoria.claseactividad,
                                                            nombreactividad		: req.body.optionorden.trayectoria.nombreactividad,
                                                            tipoactividad		: req.body.optionorden.trayectoria.tipoactividad,
                                                            etapaactividad		:req.body.optionorden.trayectoria.etapaactividad,
                                                            idaccion		: req.body.optionorden.trayectoria.idaccion,
                                                            tipoaccion		: req.body.optionorden.trayectoria.tipoaccion,
                                                            subtipoaccion		: req.body.optionorden.trayectoria.subtipoaccion,
                                                            nombreaccion		: req.body.optionorden.trayectoria.nombreaccion,
                                                            estadoaccion		: req.body.optionorden.trayectoria.estadoaccion,
                                                            actividadsiguienteaccion		:  req.body.optionorden.trayectoria.actividadsiguienteaccion
                                                        }  , function(err, todo330) {
                                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                                         //   res.json(todo330);
    
                                                         resolve(todo3); 
    
                                                   
    
    
                                                        });
                                                    }
                                                    else
                                                    {
                                                        resolve(todo3); 
                                                    }
                                                
                                                    });
    
                                                }
    
    
                                         
    
                                           }
                                         
                                         
                                       });
                              
                                   }
    
                                });
                            }); 
                      
    
            }
        });
        });
    }

  function stringToObject(JSONString) {
    var jsonObject = JSON.parse(JSONString);
    return jsonObject;
}
function dafiltrocad(todos,id2,id3,norequerido) {
    var cad=''
    var cadxx=''
    var cadxxx=''
    var norequerido2=norequerido;
    if(norequerido2===undefined)
    {
        norequerido2=''
    }


    for(var i = 0; i < todos.length;i++){
                                      
     
        switch(todos[i].type) {
            case 'Rango':  
            if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + '' ;cadxxx=id2+'¬' +id3 + '¬'; }
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
            {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
            }
            else
            {
                cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
            }
            break;
             case 'Fecha': //ISODate("2018-08-08T15:00:56.875Z"),
             if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;
              case 'Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Fecha y Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Check': 
              if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
               case 'Imagen': 
               if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
               else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
               if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
               {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
               }
               else
               {
                  
                   cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
               }
                break;
                case 'Documento': 
                if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
                else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
                if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
                {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
                }
                else
                {
                   
                    cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
                }
                 break;
         case 'Alfanumerico': 
         if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
         else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
         if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
         {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
         }
         else
         {
            
             cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
         }
          break;
          case 'Componente': 
          if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;

           
           case 'Visualizar query': 
           if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
           else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
           if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
           {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
           }
           else
           {
              
               cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
           }
            break;

        case 'Numerico':  
        if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'Moneda':  
        if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'TextArea':  
        if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
        else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
//        if(todos[i].name==id2){cadxx='"' +id2 + '":"' +id3 + '"'  }
   
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
          break;
        case 'Etiqueta':   
         break;
         case 'Firma Electronica': 
         if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
         else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
         if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
         {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
         }
         else
         {
            
             cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
         }
          break;
          case 'Codigo Qr': 
          if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;
           case 'Firma Digital': 
           if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
           else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
           if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
           {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
           }
           else
           {
              
               cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
           }
            break;
            case 'Geoposicionamiento automatico': 
            if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
            else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
            {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
            }
            else
            {
               
                cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
            }
             break;

             case 'Pais': 
             if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;
             case 'Tarjeta de credito': 
             if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;
             case 'Telefono':  
             if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;
             case 'Correo electronico':  
             if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;


        case 'Lista de valores': 
        if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
         else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
             {cad=cad+'"'+todos[i].name+'":{"type" : "String"},';
                 //cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String"},   "label"	: { "type" : "String" }},';
             }
             else
             {cad=cad+'"'+todos[i].name+'":{"type" : "String", "required" : "true"},';
                //     cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String", "required" : "true" },   "label"	: { "type" : "String", "required" : "true" }},';
             }

          break;
          case 'Check List': 
          if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
           else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
               {cad=cad+'"'+todos[i].name+'":{"type" : "String"},';
                   //cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String"},   "label"	: { "type" : "String" }},';
               }
               else
               {cad=cad+'"'+todos[i].name+'":{"type" : "String", "required" : "true"},';
                  //     cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String", "required" : "true" },   "label"	: { "type" : "String", "required" : "true" }},';
               }
  
            break;
            case 'Check List Detalle': 
            if(todos[i].name==id2){cadxxx=id2+'¬' +id3 + '¬';if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
             else{cadxxx=cadxxx + 'like';cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
     return cad +'°'+cadxx + '°' + cadxxx
}

var getImagesruta= function(op){
    if((op).indexOf('/')>=0)
    {

        var aar=op.split('/');
        return aar[3]
    }
    else
    {
        return ''
    }
}



var dahorautf= function(data) {
    let re = '';
    var fecha= new Date(data)
var datatt= fecha.toUTCString().split(' ');
var data2=datatt[4].split(':')
if(Number(data2[0]>12))
{
    re=data2[0] + ':' + data2[1] + ' PM'
}
else
{
    re=data2[0] + ':' + data2[1] + ' AM'
}


 
  // DD/MM/YYYY hh:mm A
  return re;

 }

var dahora= function(data) {
    let re = '';
    const aa = data.split('T');
    if (aa[0]) {
    const bb = (aa[1]).split(':');
    if (bb[0]) {
    re = bb[0] + ':' + bb[1];
   

      }


    }
  // DD/MM/YYYY hh:mm A
  return re;

 }

 var dafechatodate = function(ff) {
    var fecha= new Date(ff).toISOString().substr(0,10);   
    var  ffa=fecha.split('-')
  
  return ffa[2] + '-' + ffa[1] + '-' + ffa[0];
};


  var dafecha= function(data) {
  let  re = '';
  if (data) {
    re = data.substr(0, 10);
    const aa = re.split('-');
    if (aa[0]) {
    re = aa[2] + '-' + aa[1] + '-' + aa[0];
    }
  }
   return re;
  }

 var  dafechacompleta= function(data) {
    let  re = '';

      const aa = data.split('T');
      if (aa[0]) {
      re = this.dafecha(aa[0]) + ' ' + this.dahora(data);
      }
     return re;
    }

    var  daimagen=  function(data) {
        let  re = '';
       var fecha=data
          const aa = fecha
          re = aa
          
         return re;
        }
    
 var  dafechastring= function(data) {
    let  re = '';
   var fecha= new Date(data)
      const aa = fecha.toISOString().substr(0,10)
      re = aa
      
     return re;
    }

    var  dafalso= function(data) {
        let  re = '';
if(data==='true')
{re='Si'}
else
{
    re='No'
}
         return re;
        }
    var cuantasVecesAparece= function(cadena, caracter){
        var indices = [];
        for(var i = 0; i < cadena.length; i++) {
          if (cadena[i].toLowerCase() === caracter) indices.push(i);
        }
        return indices.length;
      }
      function formatNumber(num) {
        return 'Q.' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
      
      function numberWithCommas(x) {
      
      
        return formatNumber(Number(x))
      }


      var procesahtmlrecordproceso = function(objetox,todos2,sicampovalida)
      {
          var keys = Object.keys(objetox);
          var datafinal=[]
          var cad=''
          var cad2=''
          var cad3=''
              for(var i = 0; i < todos2.length;i++){
              //console.log(todos2[i])
                
                   
             for (let ii = 0; ii < keys.length; ii++) {
                 var arreglo=(objetox[keys[ii]] ).split('°')
  
                
                 
                 var valorxx=todos2[i][keys[ii]]
                 var validacampo=arreglo[2]
                 if(sicampovalida==='si')
                 {
                  validacampo='true'
                 }
  
                 if(valorxx===undefined)
                 {
                     valorxx=''
                 }
               if(validacampo==='true')
               {
                 if(arreglo[1]==='Fecha')
                 {
                     cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechastring(valorxx) + '<br>'
                 }
                 else
                 {
                     if(arreglo[1]==='Fecha y Hora')
                     {
                         cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechacompleta(valorxx) + '<br>'
                     }
                     else
                     {
                         if(arreglo[1]==='Hora')
                     {
                         cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dahora(valorxx) + '<br>'
                     }
                     else
                     {
                        if(arreglo[1]==='Check List')
                        {
                            if (valorxx.indexOf('¬') > 0) {
                                cad=cad + '<br><strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx.split('¬')[1]) + ''
                            }
                            else
                            {
                                if (valorxx.indexOf('¬') > 0) {
     
                                  
                                    cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                                }
                                else
                                {
                                    cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                                }
     
                            }
     
                           
                        }
                        else
                        {
                     if(arreglo[1]==='Lista de valores')
                     {
                         if (valorxx.indexOf('°') > 0) {
                             cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx) + ''
                         }
                         else
                         {
                             if (valorxx.indexOf('¬') > 0) {
  
                               
                                 cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                             }
                             else
                             {
                                 cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                             }
  
                         }
  
                        
                     }
                     else
                     {
                         if(arreglo[1]==='Moneda')
                         {
                             cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + numberWithCommas(valorxx) + '<br>'
                         }
                         else
                         {
                             if(arreglo[1]==='Imagen')
                             {
                                 /*
                                 keyst.push('<strong>' +  this.getKeys3(this.cmpver, aa,0)  + '</strong> :  <img src="' + this.apifoto +  this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> '  );
                                 */
                               //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //daimagen(todos2[i][keys[ii]]) + '<br>'
  
                             }
                             else
                             {
                                 cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                             }
                             
                         }
                         
                     }}}}
                 }
             } 
                    
                                 
                         
                     
                 }
  
                 /*
                  cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
  data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
  + '</a> ' ;  break;
                 */
              
                if(sicampovalida==='si')
                {
                  datafinal.push({item:todos2[i],_id:todos2[i]._id,nombre2:'tico',nombre:cad,item:todos2[i],usuario:''})
                 cad='';
                }
                else{
                    var comt1=''
                    var comt2=''
                    var comt=''
                  if(todos2[i].comentariocerrado!=='' && todos2[i].comentariocerrado!==undefined)
                  {
                      comt='<br> Comentario cerrado: ' + todos2[i].comentariocerrado
                  }
                  if(todos2[i].comentarioanulado!=='' && todos2[i].comentarioanulado!==undefined)
                  {
                      comt2='<br> Comentario anulado: ' + todos2[i].comentarioanulado
                  }
   

                  var cadenabusqueda=todos2[i].actorxxx + ' ' + todos2[i].sequenciag+ ' ' + todos2[i].sequencia+ ' ' + todos2[i].actividadxxx+ ' ' + todos2[i].enviadoporxxx
                  
                  if(todos2[i].estadointerno ==='activo')
                  {
                      datafinal.push({item:todos2[i],_id:todos2[i]._id,          nombre2:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' +
                      dafechastring(todos2[i]['createdAt'])+','  + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                       dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:blue;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>',
                      nombre:cad+ ' ' +cadenabusqueda +  ' <div style="font-size: 10px;text-transform: capitalize;">Crea: [' +
                       dafechastring(todos2[i]['createdAt'])+','  + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                        dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:blue;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>'
                        ,item:todos2[i],usuario:''})
                  }
                  else
                  {
                      datafinal.push({item:todos2[i],_id:todos2[i]._id,    nombre2:cad + ' ' +cadenabusqueda + ' <div style="font-size: 10px;text-transform: capitalize;">Crea: [' + 
                      dafechastring(todos2[i]['createdAt'])+',' +      dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2'])+ ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                       dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) +  '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:red;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>'
                  ,
                      nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + 
                      dafechastring(todos2[i]['createdAt'])+',' +      dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2'])+ ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                       dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) +  '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:red;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>'
                       ,item:todos2[i],usuario:''}) 
                  }
                   cad='';
    
                  }
    
    
                     
               }
           return datafinal;
      }
  
      var dausuariobita=function(correo,usuario)
      {
          if(usuario!==undefined)
          {
            return usuario +' (' +correo +') ' 
          }
          else
          {
            return  correo 
          }
          
      }
    var procesahtmlrecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
              
       //     cad=cad + '<strong>Codigo interno</strong>: ' +todos2[i].sequencia+ '<br>'
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
             if(validacampo==='true')
             {
               if(arreglo[1]==='Fecha')
               {
                   cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechastring(valorxx) + '<br>'
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechacompleta(valorxx) + '<br>'
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dahorautf(valorxx) + '<br>'
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx) + ''
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                             
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }

                       }

                      
                   }
                   else
                   {

                    if(arreglo[1]==='Check List')
                    {
                        if (valorxx.indexOf('¬') > 0) {
                            cad=cad + '<br><strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx.split('¬')[1]) + ''
                        }
                        else
                        {
                            if (valorxx.indexOf('¬') > 0) {
 
                              
                                cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                            }
                            else
                            {
                                cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                            }
 
                        }
 
                       
                    }
                    else
                    {
                       if(arreglo[1]==='Moneda')
                       {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + numberWithCommas(valorxx) + '<br>'
                       }
                       else
                       {
                           if(arreglo[1]==='Imagen')
                           {
                               /*
                               keyst.push('<strong>' +  this.getKeys3(this.cmpver, aa,0)  + '</strong> :  <img src="' + this.apifoto +  this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> '  );
                               */
                             //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //daimagen(todos2[i][keys[ii]]) + '<br>'

                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }
                           
                       }
                       
                   }}}}
               }
           } 
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
var geopp=''
if(todos2[i].geoposicionxxx)
{
    geopp= '<br> <a href="https://www.google.com/maps/search/?api=1&query=' +
    todos2[i].geoposicionxxx.replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + todos2[i].geoposicionxxx.replace('¬', ',')
    + '</a> ' ; 
}

              if(sicampovalida==='si')
              {
                datafinal.push({_id:todos2[i]._id,nombre2:cad,nombre:cad,item:todos2[i],usuario:''})
               cad='';
              }
              else{
                  var comt1=''
                  var comt2=''
                  var comt=''
                if(todos2[i].comentariocerrado!=='' && todos2[i].comentariocerrado!==undefined)
                {
                    comt='<br> Comentario cerrado: ' + todos2[i].comentariocerrado
                }
                if(todos2[i].comentarioanulado!=='' && todos2[i].comentarioanulado!==undefined)
                {
                    comt2='<br> Comentario anulado: ' + todos2[i].comentarioanulado
                }
                var cadenabusqueda=todos2[i].actorxxx + ' ' + todos2[i].sequenciag+ ' ' + todos2[i].sequencia+ ' ' + todos2[i].actividadxxx+ ' ' + todos2[i].enviadoporxxx
                if(cadenabusqueda.indexOf('undefined')>=0){cadenabusqueda=''}
                if(todos2[i].estadointerno ==='activo')
                {
                    datafinal.push({item:todos2[i],_id:todos2[i]._id,          nombre2:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' +
                    dafechastring(todos2[i]['createdAt'])+','  + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                     dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:blue;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>',
                    nombre:cad+ ' ' +cadenabusqueda +  ' <div style="font-size: 10px;text-transform: capitalize;">Crea: [' +
                     dafechastring(todos2[i]['createdAt'])+','  + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                      dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:blue;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>'
                      ,item:todos2[i],usuario:''})
                }
                else
                {
                    datafinal.push({item:todos2[i],_id:todos2[i]._id,    nombre2:cad + ' ' +cadenabusqueda + ' <div style="font-size: 10px;text-transform: capitalize;">Crea: [' + 
                    dafechastring(todos2[i]['createdAt'])+',' +      dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2'])+ ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                     dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) +  '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:red;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>'
                ,
                    nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + 
                    dafechastring(todos2[i]['createdAt'])+',' +      dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2'])+ ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                     dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) +  '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:red;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>'
                     ,item:todos2[i],usuario:''}) 
                }

/*
                if(todos2[i].estadointerno ==='activo')
                {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' 
                    + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) +  ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +   
                    dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br></div><div style="font-size: 14px;text-transform: capitalize;color:blue;"> Estado interno: '+ todos2[i].estadointerno + comt + comt2 + geopp + '</div>',item:todos2[i],usuario:''})

                }
                else
                {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' 
                    + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) +  ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                    dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br></div><div style="font-size: 14px;text-transform: capitalize;color:red;"> Estado interno: '+ todos2[i].estadointerno + comt + comt2 + geopp+'</div>',item:todos2[i],usuario:''})

                }

*/

               cad='';

              }


                 
           }
       return datafinal;
    }

    
var sortByProperty= function(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }  
 }


    var procesaexcelrecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
              
                 
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
             if(validacampo==='true')
             {
               if(arreglo[1]==='Fecha')
               {
                   cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechastring(valorxx) + '<br>'
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechacompleta(valorxx) + '<br>'
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dahorautf(valorxx) + '<br>'
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx) + ''
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                             
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }

                       }

                      
                   }
                   else
                   {
                       if(arreglo[1]==='Moneda')
                       {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                       }
                       else
                       {
                           if(arreglo[1]==='Imagen')
                           {
                               /*
                               keyst.push('<strong>' +  this.getKeys3(this.cmpver, aa,0)  + '</strong> :  <img src="' + this.apifoto +  this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> '  );
                               */
                             //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //daimagen(todos2[i][keys[ii]]) + '<br>'

                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }
                           
                       }
                       
                   }}}
               }
           } 
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
            
              if(sicampovalida==='si')
              {
                datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad,item:todos2[i],usuario:''})
               cad='';
              }
              else{
                  if(todos2[i].estadointerno ==='activo')
                  {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' + 
                    dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) +  ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' 
                   + dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br></div> <div style="font-size: 14px;text-transform: capitalize;color:blue;">Estado interno: '+ todos2[i].estadointerno +'</div>',item:todos2[i],usuario:''})
                  }
                  else
                  {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' +
                     dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' + 
                     dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + + '] <br></div> <div style="font-size: 14px;text-transform: capitalize;color:red;">Estado interno: '+ todos2[i].estadointerno +'</div>',item:todos2[i],usuario:''})
                  }
              
               cad='';

              }


                 
           }
       return datafinal;
    }
    var procesacsvrecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
              
            var regt={}; 
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
          
               if(arreglo[1]==='Fecha')
               {
                regt[arreglo[0]]=  dafechastring(valorxx);
                  
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                      
                       regt[arreglo[0]]=  dafechacompleta(valorxx) 
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                      
                       regt[arreglo[0]]=   dahora(valorxx) 
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                        regt[arreglo[0]]= getKeyssrthtml(valorxx) 
                          
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                            regt[arreglo[0]]= valorxx.split('¬')[0] 
                              
                           }
                           else
                           {
                            regt[arreglo[0]]=valorxx
                              
                           }

                       }

                      
                   }
                   else
                   {

                    regt[arreglo[0]]= valorxx;
                       
                       
                   }}}
               }
           
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */

              datafinal.push(regt)
           


                 
           }
       return datafinal;
    }

    var procesatablauirecordpdf = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
        let jsonx= [];



var autox=[]

autox.push('auto')
for (let ii = 0; ii < keys.length; ii++) {
    var arreglo=(objetox[keys[ii]] ).split('°')
autox.push('auto')

}

jsonx.push({text:'   '})




            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
            var regt0=[];   
            var regt=[]; 

            regt.push({text:i,fontSize: 10});
            if(i===0){ regt0.push( {rowSpan: 2, text: 'No.', style: 'tableHeader', alignment: 'center',fontSize: 10})}
            

           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
          
               if(arreglo[1]==='Fecha')
               {
                regt.push({text:dafechastring(valorxx),fontSize: 10});
                if(i===0){ regt0.push( {rowSpan: 2, text: arreglo[0], style: 'tableHeader', alignment: 'center',fontSize: 10})}
                  
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                      
                    regt.push( {text:dafechacompleta(valorxx),fontSize: 10} )
                    if(i===0){ regt0.push( {rowSpan: 2, text: arreglo[0], style: 'tableHeader', alignment: 'center',fontSize: 10})}
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                      
                    regt.push({text:dahora(valorxx),fontSize: 10}  )
                    if(i===0){ regt0.push( {rowSpan: 2, text: arreglo[0], style: 'tableHeader', alignment: 'center',fontSize: 10})}
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                        regt.push({text:getKeyssrthtml(valorxx),fontSize: 10} )
                        if(i===0){ regt0.push( {rowSpan: 2, text: arreglo[0], style: 'tableHeader', alignment: 'center',fontSize: 10})}
                          
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                            regt.push( {text:valorxx.split('¬')[0],fontSize: 10} )
                            if(i===0){ regt0.push( {rowSpan: 2, text: arreglo[0], style: 'tableHeader', alignment: 'center',fontSize: 10})}
                              
                           }
                           else
                           {
                            regt.push({text:valorxx,fontSize: 10})
                            if(i===0){ regt0.push( {rowSpan: 2, text: arreglo[0], style: 'tableHeader', alignment: 'center',fontSize: 10})}
                              
                           }

                       }

                      
                   }
                   else
                   {

                    regt.push({text:valorxx,fontSize: 10});
                    if(i===0){ regt0.push( {rowSpan: 2, text: arreglo[0], style: 'tableHeader', alignment: 'center',fontSize: 10})}
                       
                       
                   }}}
               }
           
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
              if(i===0){datafinal.push(regt0)}
              datafinal.push(regt)
           


                 
           }

           jsonx.push
           (
             {
               table: 
               {
                 widths: autox,
                 headerRows: 2,
                 body: 
                datafinal
               }
              }
           );


       return jsonx;
    }

    

    
var daimagenxxx =  function(ruta,img)
{
    return new Promise(resolve => {


        var ii='iVBORw0KGgoAAAANSUhEUgAAABcAAAAZCAIAAABVQiKHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAkSURBVDhP7cwxAQAADIOw+TfNDHD2JAJyLLS4FtfiWlyLazHwVgW2nh0VrZ4AAAAASUVORK5CYII='

        imageToBase64(ruta) // Image URL
        .then(
            (response) => {
              
    
    
    if(img==='')
    {
        resolve(ii); 
    }
    else
    {
        resolve(response); 
    }
          
            //resolve(todos2); 
            
    
            }
        )
        .catch(
            (error) => {
                resolve([]); 
            }
        )

    });
}


var procesatablauirecordpdfuno =  function(objetox,todos2,sicampovalida,formulario)
{

    return new Promise(resolve => {

    var keys = Object.keys(objetox);
    var datafinal=[]
    var cad=''
    var cad2=''
    var cad3=''
    let jsonx= [];



var autox=[]

autox.push('auto')
for (let ii = 0; ii < keys.length; ii++) {
var arreglo=(objetox[keys[ii]] ).split('°')
autox.push('auto')

}

jsonx.push({text:'   '})

if(formulario==='6088435ae75c6616505521f0')
{
    (async () => {  
    
    jsonx.push({ text: 'Formulario', 	 italics: true,style: 'header', fontSize: 25 });
    jsonx.push({ text: 'Grupo Estratégico de Servicios  ', 	 italics: true,style: 'header', fontSize: 18  });
    
    jsonx.push({
		    
        table: {
            widths: [100,0,100,0,150,0,'*'],
         
            
            body: [
                [{ bold: true,text : 'Fecha'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Hora inicio'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'No. poliza'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Consignatario'}
                
                 ],
                [ {fillColor: '#eeeeee',text : dafechastring(todos2.fecha)},
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 	fillColor: '#eeeeee',text : dahorautf(todos2.horadeinicio)}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text : todos2.nopoliza}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text : String(todos2.consignatario).replaceAll('<strong>','').replaceAll('</strong>','').replaceAll('<br>','').split('Nit:')[0]}
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20]	
        
    });

    jsonx.push({
		    
        table: {
            widths: ['*',0,'*',0,'*',0,'*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Marchamo Origen'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Marchamo SAT'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Marchamo Nuevo'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Tipo de Mercancía'}
                
                 ],
                [ {fillColor: '#eeeeee',text : todos2.marchamoorigen},
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 	fillColor: '#eeeeee',text : todos2.marchamosat}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text : todos2.marchamonuevo}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text : todos2.tipodemercancia}
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });



    jsonx.push({
		    
        table: {
            widths: ['*',0,'*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Número de Bultos'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Documento de Embarque'}, 
               
                
                 ],
                [ {fillColor: '#eeeeee',text : todos2.bultos},
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 	fillColor: '#eeeeee',text : todos2.documentodeembarque}
             
               
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });

    jsonx.push({ text: 'Revisión SAT', 	 italics: true,style: 'header', fontSize: 18  });


    jsonx.push({
		    
        table: {
            widths: ['*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Tipo de Revisión'}	
              
             
               
                
                 ],
                 [ {fillColor: '#eeeeee',text : todos2.tipoderevision}
                
               
                 ],
           
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });



    jsonx.push({
		    
        table: {
            widths: ['*',0,'*',0,'*',0],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Se tomaron muestras?'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Cantidad de muestras SAT'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Nombre de persona que efectuó la revisión SAT'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] }
              
                
                 ],
                [ {fillColor: '#eeeeee',text : dafalso(todos2.setomaronmuestras)},
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 	fillColor: '#eeeeee',text : todos2.cantidaddemuestrassat}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text : todos2.nombresat}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] }
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    jsonx.push({ text: 'Revisión MAGA', 	 italics: true,style: 'header', fontSize: 18  });



    jsonx.push({
		    
        table: {
            widths: ['*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Tipo de Revisión'}	
               
             
               
                
                 ],
                 [ {fillColor: '#eeeeee',text : todos2.tipoderevision2}
                 
               
                 ]
           
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    jsonx.push({
		    
        table: {
            widths: ['*',0,'*',0,'*',0,'*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Se tomaron muestras?'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Cantidad de muestras MAGA'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Se encontró plaga?'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Tarimas con sello de fumigación de origen?'}
                
                 ],
                [ {fillColor: '#eeeeee',text :  todos2.setomaronmuestras2},
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 	fillColor: '#eeeeee',text :  todos2.cantidaddemuestrasmaga}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text :  todos2.seencontroplaga}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text :  todos2.tarimasconsello}
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    
    jsonx.push({
		    
        table: {
            widths: ['*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Nombre de persona que efectuó la revisión MAGA'}	
                
             
               
                
                 ],
                 [ {fillColor: '#eeeeee',text :  todos2.nombredepersonalges}
                 
               
                 ],
           
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    jsonx.push({ text: 'Revisión Antinarcoticos', 	 italics: true,style: 'header', fontSize: 18  });



    jsonx.push({
		    
        table: {
            widths: ['*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Tipo de Revisión'}	
               
             
               
                
                 ],
                 [ {fillColor: '#eeeeee',text :  todos2.tipoderevision3}
                 
               
                 ],
           
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });



    jsonx.push({
		    
        table: {
            widths: ['*',0,'*',0,'*'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Se tomaron muestras?'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Cantidad de muestras Antinarcoticos'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Nombre de persona que efectuó la revisión Antinarcoticos'}
              
                
                 ],
                [ {fillColor: '#eeeeee',text : todos2.setomaronmuestras3},
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 	fillColor: '#eeeeee',text : todos2.cantidaddemuestrasantinarcoticos}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text : todos2.nombredepersonalges}, 
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    jsonx.push({ text: 'FOTOS', 	 italics: true,style: 'header', fontSize: 18  });


    jsonx.push({ text: 'Apertura', 	 italics: true,style: 'header', fontSize: 18  });


    var ape1=await daimagenxxx('http://127.0.0.1:9090' + todos2.apertura01,todos2.apertura01)
    var ape2=await daimagenxxx('http://127.0.0.1:9090' + todos2.apertura02,todos2.apertura02)
    var ape3=await daimagenxxx('http://127.0.0.1:9090' + todos2.apertura03,todos2.apertura03)
    var ape4=await daimagenxxx('http://127.0.0.1:9090' + todos2.apertura04,todos2.apertura04)
    var ape5=await daimagenxxx('http://127.0.0.1:9090' + todos2.apertura05,todos2.apertura05)

    
    jsonx.push({
		    
        table: {
            widths: ['30%','1%','30%','1%','30%'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'apertura01'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'apertura02'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'apertura03'}
              
                
                 ],
                [ { image: 'data:image/jpeg;base64,'+ ape1 ,fit:[160,160]  },
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ ape2  ,fit:[160,160]  }, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ ape3  ,fit:[160,160]  }, 
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    jsonx.push({
		    
        table: {
            widths: ['30%','1%','30%'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'apertura04'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'apertura05'} 
               
                
                 ],
                [ { image: 'data:image/jpeg;base64,'+ ape4   ,fit:[160,160] },
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ ape5  ,fit:[160,160]  }, 
              
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });

    jsonx.push({ text: 'Mercancia', 	 italics: true,style: 'header', fontSize: 18  });
    
    var mer1=await daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia01,todos2.mercancia01)
    var mer2=await daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia02,todos2.mercancia02)
    var mer3=await daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia03,todos2.mercancia03)
    var mer4=await daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia04,todos2.mercancia04)
    var mer5=await daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia05,todos2.mercancia05)
    

    jsonx.push({
		    
        table: {
            widths: ['30%','1%','30%','1%','30%'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'mercancia01'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'mercancia02'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'mercancia03'}
              
                
                 ],
                [ { image: 'data:image/jpeg;base64,'+ mer1  ,fit:[160,160]  },
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ mer2   ,fit:[160,160] }, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ mer3   ,fit:[160,160] }, 
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });

    
    jsonx.push({
		    
        table: {
            widths: ['30%','1%','30%'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'mercancia04'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'mercancia05'}, 
              
                
                 ],
                [ { image: 'data:image/jpeg;base64,'+ mer4   },
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ mer5   }, 
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    jsonx.push({ text: 'Cierre', 	 italics: true,style: 'header', fontSize: 18  });
    

    var cierr1=await daimagenxxx('http://127.0.0.1:9090' + todos2.cierre01,todos2.cierre01)
    var cierr2=await daimagenxxx('http://127.0.0.1:9090' + todos2.cierre02,todos2.cierre02)
    var cierr3=await daimagenxxx('http://127.0.0.1:9090' + todos2.cierre03,todos2.cierre03)
    var cierr4=await daimagenxxx('http://127.0.0.1:9090' + todos2.cierre04,todos2.cierre04)
    var cierr5=await daimagenxxx('http://127.0.0.1:9090' + todos2.cierre05,todos2.cierre05)


    
    jsonx.push({
		    
        table: {
            widths: ['30%','1%','30%','1%','30%'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'cierre01'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'cierre02'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'cierre03'}
              
                
                 ],
                [ { image: 'data:image/jpeg;base64,'+ cierr1  ,fit:[160,160]  },
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ cierr2  ,fit:[160,160]  }, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ cierr3   ,fit:[160,160] }, 
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });

    jsonx.push({
		    
        table: {
            widths: ['30%','1%','30%'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'cierre04'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'cierre05'}
      
              
                
                 ],
                [ { image: 'data:image/jpeg;base64,'+ cierr4 ,fit:[160,160]   },
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 image: 'data:image/jpeg;base64,'+ cierr5   ,fit:[160,160] }
              
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    jsonx.push({
		    
        table: {
            widths: ['30%','1%','30%','1%','30%'],
             headerRows: 1,
            
            body: [
                [{ bold: true,text : 'Comentarios'},	
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Nombre de personal GES'}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                { bold: true,text : 'Hora de Finalización'}
              
                
                 ],
                [ {fillColor: '#eeeeee',text : todos2.comentarios},
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	 	fillColor: '#eeeeee',text : todos2.nombredepersonalges}, 
                { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                {	fillColor: '#eeeeee',text : todos2.horadefinalizacion}, 
              
                ],
            ]
        }
        ,layout: 'noBorders',
        margin: [0, 5, 0, 20],	columnGap: 20,
        
    });


    
    var firma=await daimagenxxx('http://127.0.0.1:9090' + todos2.firma, todos2.firma)

   jsonx.push({    image: 'data:image/jpeg;base64,'+ firma     });

      
   //resolve(todos2); 
   resolve(jsonx); 
 })();
   /*
    imageToBase64('http://127.0.0.1:9090' + todos2.apertura01) // Image URL
    .then(
        (response) => {
          


        jsonx.push({    image: 'data:image/jpeg;base64,'+ response     });

      
        //resolve(todos2); 
        resolve(jsonx); 

        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )

*/

   

    }


/*

       jsonx.push
       (
         {
           table: 
           {
             widths: autox,
             headerRows: 2,
             body: 
            regt
           }
          }
       );
       */
 

        
    });
}
    var procesatablauirecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
            var regt0=[];   
            var regt=[]; 
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
          
               if(arreglo[1]==='Fecha')
               {
                regt.push(dafechastring(valorxx));
                if(i===0){ regt0.push(arreglo[0])}
                  
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                      
                    regt.push( dafechacompleta(valorxx) )
                    if(i===0){ regt0.push(arreglo[0])}
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                      
                    regt.push( dahora(valorxx) )
                    if(i===0){ regt0.push(arreglo[0])}
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                        regt.push(getKeyssrthtml(valorxx) )
                        if(i===0){ regt0.push(arreglo[0])}
                          
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                            regt.push( valorxx.split('¬')[0] )
                            if(i===0){ regt0.push(arreglo[0])}
                              
                           }
                           else
                           {
                            regt.push(valorxx)
                            if(i===0){ regt0.push(arreglo[0])}
                              
                           }

                       }

                      
                   }
                   else
                   {

                    regt.push(valorxx);
                    if(i===0){ regt0.push(arreglo[0])}
                       
                       
                   }}}
               }
           
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
              if(i===0){datafinal.push(regt0)}
              datafinal.push(regt)
           


                 
           }
       return datafinal;
    }

    var procesatablauirecordfila = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
            var regt0=[];   
            var regt=[]; 
            cad=''
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
          
               if(arreglo[1]==='Fecha')
               {
                cad= cad + keys[ii] + ': ' + dafechastring(valorxx) + ' \n ';
              
                  
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                      
                    cad= cad + keys[ii] + ': ' +dafechacompleta(valorxx) + ' \n ';
                    
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                      
                    cad= cad + keys[ii] + ': ' +dahora(valorxx) + ' \n ';
                    
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                        cad= cad + keys[ii] + ': ' +getKeyssrthtml(valorxx) + ' \n ';
                        
                          
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                            cad= cad + keys[ii] + ': ' + valorxx.split('¬')[0] + ' \n ';
                            
                              
                           }
                           else
                           {
                            cad= cad + keys[ii] + ': ' +valorxx+ ' \n ';
                            
                              
                           }

                        }

                      
                   }
                   else
                   {

                    cad= cad + keys[ii] + ': ' +valorxx;+ ' \n';
                    
                       
                       
                   }}}
               }
           
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
regt=[]
regt.push(cad)
regt0=[]
regt0.push('Información')

              if(i===0){datafinal.push(regt0)}
              datafinal.push(regt)
           


                 
           }
       return datafinal;
    }

    var getKeyssrthtml = function(data) {
        var keys=[]
        let re = '';
        if (data !== '') {
        if (data.indexOf('°') < 0) {
          re = re + '<br>' +  data.split('¬')[0]  + ''; // &nbsp;
        } else {
        keys = data.split('°');
      
        re = '<br>';
        for (let i = 0; i < keys.length; i++) {
          const aa = keys[i].split(':');
          if (aa[0] !== '' && String(aa[0]).indexOf('¬') < 0) {
           if (aa[1] === undefined) {
              re = re + '' +  aa[0]  + '<br>'; // &nbsp;
            } else {
    
              if (String(aa[1]).indexOf('/') < 0) {
                re = re + '<strong>' +  aa[0]  + '</strong> : ' + aa[1] + '<br>'; // &nbsp;
              } else {
              
        
             
                if (cuantasVecesAparece(aa[1], '/') >= 3) {
                  re = re + '<strong>' +  aa[0]  + '</strong> : ' + '<img src="' + this.servertnube +  String(aa[1]).trim() + '"   class="circle-pic"  height="50 px" width="50 px"> ' + '<br>'; // &nbsp;
    
                } else {
                  re = re + '<strong>' +  aa[0]  + '</strong> : ' + aa[1] + '<br>'; // &nbsp;
                }
    
              }
    
              
            
            }
          }
            }
    
    
          }  
          }
    
        return re + '<br>';
      }
    
    


function dadatosformulariofinal  (namess,filtro,idempresa,namess2)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess,idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"actividadxxx"	: { "type" : "String" },"sequenciag"	: { "type" : "String" },"estadoxxx"	: { "type" : "String" },"idpapa"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}



function dadatosformularioidfinal  (namess,filtro,idempresa,namess2)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '  "sequenciag"	: { "type" : "String" }, "sequencia"	: { "type" : "String" },"idpapa"	: { "type" : "String" },"usuarionew"	: { "type" : "String" }, "usuarionew2"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.findById(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

function actualizaformularioidfinal  (namess,filtro,idempresa,namess2,est)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"usuarionew2"	: { "type" : "String" },      "usuarioup2"	: { "type" : "String" },   "usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"}, "geoposicionxxx":{"type":"String"},"comentarioanulado"	: { "type" : "String" },"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);

                                    frmtt.updateMany(filtro, est, function(err, todos2) {
                                   
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

function dadatosformulario(namess,filtro,idempresa)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "idpapa"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess];
                                    var  frmtt= mongoose.model(namess,tt);

                                 
                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

function dadatosformularioispapaarray(namess,idpapa,idempresa)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"idpapa"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },     "idpapa"	: { "type" : "String" },  "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess];
                                    var  frmtt= mongoose.model(namess,tt);

                             
                                    frmtt.find({idpapa:{$in:idpapa},idempresa:idempresa}).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

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

//var async = require("async");
function daformxid(namess,filtro, cadxx)
{
    return new Promise(resolve => { 
var re=''
                                var cad=''
                              
                                cad=cadxx + '     "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'

                                cad='{' + cad + '}'
                         
                                var jsonObject = stringToObject(cad);
                              
                                var mongoose = require("mongoose");
                                delete mongoose.connection.models[namess];
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                var  frmtt= mongoose.model(namess,tt);
                                
                                    frmtt.find(filtro ,function(err, todos2) {
                                        if (err){  res.send(err); }
                                      
                                    
                                      resolve(todos2); 
                                      
                                    });
                            
                             
                
        
    

                                });

}

  var getDaysArray = function(start, end) {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
      var fecha=new Date(dt)
        arr.push(fecha.toISOString() );
    }
    return arr;
};
  
 
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

var creafrmregistro= function(req, res, next,namess,idform,estructura,responde,datat,idpapa,idtipo){


   // Bitacora.create(req.body.bitacora);
    Frmmovild.find({idmovil:idform}).exec(function(err, todos) {
  
        if (err){ res.send(err); }
                            if(todos.length>0)   {  

                               //validar si ya existe algunos de los que son llave 
                                var validarcampos =[];
                                var filtrovalida=''
                               for(var i = 0; i <todos.length; i++) {
                                   if(todos[i].usarunaves==='true'  || todos[i].usarunaves2==='true' )
                                   {
                                   if(i===0)
                                   {
                                    filtrovalida=  '{"' +todos[i].name + '":"' + req.body.estructura[todos[i].name] + '"' 
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
                                var cad3=(dafiltrocad(todos,'','','')).split('°')
                                cad=cad3[0]
                              
                                if(idpapa)
                                {
                                    if(idtipo==='proceso')
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"}'
                                    }
                                    else
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    }
                                 
                                }
                                else
                                {
 
                                     if(idtipo==='proceso')
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"}'
                                       
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
 
    frmtt.create(estructura
        , function(err, todo3) {
        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
        console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll0000000000000000000000')
     
      
    
        });
  
  } catch(e) {
    
    console.log(e)
    //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
    //aqui tendria que se un sabe
    console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  
    var  frmtt= mongoose.model(namess);
  
 
    frmtt.create(estructura
        , function(err, todo3) {
        if (err){       res.status(500).send(err.message)    }
   
        if(responde==='siresponde'){     res.json(datat);}
        if(responde==='siregistro'){     res.json(todo3);}
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
                                var cad3=(dafiltrocad(todos,'','','')).split('°')
                                cad=cad3[0]
                                if(idpapa)
                                {
                                    if(idtipo==='proceso')
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"}'
                                    }
                                    else
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    }
                                 
                                }
                                else
                                {
 
                                     if(idtipo==='proceso')
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"}'
                                     }
                                     else
                                     {
                                         cad=cad + 'usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                     }
                                 
 
                                }
                                
                               
                               cad='{' + cad + '}'
                               var jsonObject = stringToObject(cad);
                             
                               var mongoose = require("mongoose");
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
                                
                                   frmtt.create(estructura
                                       , function(err, todo3) {
                                       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                           
                                       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
                                       });
                                 
                                 } catch(e) {
                                   
                                   console.log(e)
                                   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
                                   //aqui tendria que se un sabe
                                   var  frmtt= mongoose.model(namess);
                                  
                                   frmtt.create(estructura
                                       , function(err, todo3) {
                                       if (err){       res.status(500).send(err.message)    }
                                  
                                       if(responde==='siresponde'){     res.json(datat);}
                                       if(responde==='siregistro'){     res.json(todo3);}
                                   
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

   frmtt.create(estructura
       , function(err, todo3) {
       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
           
       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
   
       });
 
 } catch(e) {
   
   console.log(e)
   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
   //aqui tendria que se un sabe
   var  frmtt= mongoose.model(namess);
  
   frmtt.create(estructura
       , function(err, todo3) {
       if (err){       res.status(500).send(err.message)    }
  
       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
   
       });
 }
//FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------


                                           }
                                    
                                    });
                                 }

                               }
                         














                                
                  

        }
    });



}

function currencyFormatDE(num) {
  return (
    num
      .toFixed(2) // always two decimal digits
      .replace('.', ',') // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' Q.'
  ) // use . as a separator
}
function formatNumber(num) {
  return 'Q.' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function aplicacampo(cad,campo) {
 
    var re=0

    if(cad===undefined || cad==='')
    {
        var re=0
    }
    else
    {
    var cad2=cad.split('°')

    for(var i = 0; i < cad2.length;i++){
        if(cad2[i]===campo)
        {
            re=1;
            break;
        }
    }
    }

    return re;
}
function dafiltrocadvalidaconbosy(todos,id2,id3,req) {
    var cad=''
    registrorep=''

    for(var i = 0; i < todos.length;i++){
        if(aplicacampo(req.nocambio,todos[i].name)===0)
        {
              if(todos[i].usarunaves==='true'  || todos[i].usarunaves2==='true' )
        {
            
            
            registrorep=registrorep + todos[i].name + '  '
        switch(todos[i].type) {
           
        
     
        case 'Numerico':  
        if(cad===''){  cad=  '"' +todos[i].name + '":' + req.estructura[todos[i].name] + ''  }
        else { cad= cad + ',"' +todos[i].name + '":' + req.estructura[todos[i].name]  + '' }
         
        break;
        case 'Moneda':  
        if(cad===''){  cad=  '"' +todos[i].name + '":' + req.estructura[todos[i].name] + ''  }
        else { cad= cad + ',"' +todos[i].name + '":' + req.estructura[todos[i].name]  + '' }
         
        break;
      
          
         default:
            if(cad===''){  cad=  '"' +todos[i].name + '":"' + req.estructura[todos[i].name] + '"'  }
            else { cad= cad + ',"' +todos[i].name + '":"' + req.estructura[todos[i].name]  + '"' }
             
       }
    }
}
     
     }
     return cad 
}
function dafiltrocadvalida(todos,id2,id3,req) {
    var cad=''
    registrorep=''

    for(var i = 0; i < todos.length;i++){
        if(aplicacampo(req.body.nocambio,todos[i].name)===0)
        {
              if(todos[i].usarunaves==='true'  || todos[i].usarunaves2==='true' )
        {
            
            
            registrorep=registrorep + todos[i].name + '  '
        switch(todos[i].type) {
           
        
     
        case 'Numerico':  
        if(cad===''){  cad=  '"' +todos[i].name + '":' + req.body.estructura[todos[i].name] + ''  }
        else { cad= cad + ',"' +todos[i].name + '":' + req.body.estructura[todos[i].name]  + '' }
         
        break;
        case 'Moneda':  
        if(cad===''){  cad=  '"' +todos[i].name + '":' + req.body.estructura[todos[i].name] + ''  }
        else { cad= cad + ',"' +todos[i].name + '":' + req.body.estructura[todos[i].name]  + '' }
         
        break;
      
          
         default:
            if(cad===''){  cad=  '"' +todos[i].name + '":"' + req.body.estructura[todos[i].name] + '"'  }
            else { cad= cad + ',"' +todos[i].name + '":"' + req.body.estructura[todos[i].name]  + '"' }
             
       }
    }
}
     
     }
     return cad 
}
function numberWithCommas(x) {


  return formatNumber(Number(x))
}

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}



function sequenceGenerator(id){



    Contador.findOneAndUpdate({tipo:id}, { $inc: { sequence_value: 1 } }, function(err, seq){
      if(err) { throw(err); }
   
      return seq.sequence_value;
    });


}
  
function dafechapago1(mes,ano)//'2018-08'
{re=''
if(mes<10)
{
  re=ano + '-0' + mes
}
else
{
 re=ano + '-' + mes
}
return re;
}
function dafechapago2(mes,ano)//08-2018
{re=''
if(mes<10)
{
  re='0' + mes + '-' + ano
}
else
{
 re=mes + '-' + ano
}
return re;
}
 



function davalorvv(vec, valor)
{var re=''
    for(var i = 0; i < vec.length;i++){
        var aa=vec[i].split('°')
       if(aa[0]===valor)
       { re=aa[1]
        break;

       }
    }

    return re;
}



function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }



  function daidformreg(namess,filtro,orden,idempresa,tabla)
  {
  
       
      return new Promise(resolve => { 
          Frmmovild.find({idmovil:tabla, idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
              if (err){ res.send(err); }
            
   
                                  if(todos.length>0)   {  
                                 
                                      var cad=''
                                      var cadxx=''
                                      var cad3=(dafiltrocad(todos,'','','')).split('°')
                                    
                                
                                   
                                      cad=cad3[0]
                                      cadxx='{'+ cad3[1] + '}'
                                      cad=cad + ' "ordenhijas": { "type" : "String" },"idpapa"	: { "type" : "String" },"usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                      cad='{' + cad + '}'
                                      cadxx='{' + cadxx + '}'
  
                                 //  console.log(cad)
                                      var jsonObject = stringToObject(cad);
                                    
                                      var mongoose = require("mongoose");
                                      var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      delete mongoose.connection.models[namess];
                                      var  frmtt= mongoose.model(namess,tt);
  
                                      frmtt.find(filtro).sort(orden).exec(function(err, todos2) {
                                          if (err){  res.send(err); }
                                          
                                          
  
   resolve(todos2); 
  
  
                                      });
                                  }
  
  
      });
          
                                      
                                     
                               
                  
          
      
  
                                  });
  
  
  
  }
  
  

function dadatosformulariocombo(namess,filtro,idempresa, myDatavector)
{
    
    return new Promise(resolve => { 
        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
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
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "estadointerno"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess];
                                    var  frmtt= mongoose.model(namess,tt);

                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }
                                        
                                        

 var datafinal = procesahtmlrecord(objetox,todos2,'si')
                                                  
 //res.json(datafinal);
 resolve(datafinal); 
 /*
                                        var myData = [];
                                        for(var i = 0; i < todos2.length;i++){
                                          var nombret ='';
                                          for(var j = 0; j < myDatavector.length;j++){
                                              nombret = nombret + myDatavector[j].split('°')[1] + ': ' +  todos2[i][myDatavector[j].split('°')[0]]  + '°'
                                          }
                                          myData.push({_id:todos2[i]._id , nombre: nombret })
    
                                           
                                        }
                                         


                                        resolve(myData); 
                                        */
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}




function eliminaformulario(namess,recordID,idempresa)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess];
                                    var  frmtt= mongoose.model(namess,tt);

                                    frmtt.findByIdAndRemove({ _id: recordID }, function(err, todo) {
                                        resolve(todo); 
                                    });
                                 
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}


function dadatosformulariogruposuma(namess,filtro,idempresa,namess2,filtrogrupo,filtrosuma,limitx,sortx)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);

                                    frmtt.aggregate( [
                                        { $limit: limitx},
                                        {   $match: filtro},
                                                          {
                                                           
                                                                "$group" : filtrogrupo
                                                            }, 
                                                            { 
                                                                "$project" : filtrosuma
                                                            },
                                                            { $sort : sortx }
                                    ]).exec(function(err, todos2) {
                                        if (err){ console.log(err);  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}
function dadatosformulariogrupo(namess,filtro,idempresa,namess2,campo)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.aggregate( [
                                        { $match: filtro},
                                        { 
                                            "$group" : {
                                                "_id" : {
                                                    "nombre" : campo
                                                }, 
                                                "COUNT(*)" : {
                                                    "$sum" : 1
                                                }
                                            }
                                        }, 
                                        { 
                                            "$project" : {
                                                "nombre" : "$_id.nombre", 
                                                "cantidad" : "$COUNT(*)", 
                                                "_id" :0
                                            }
                                        }
                                    ]).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}


function dadatosformulariosort(namess,filtro,idempresa,namess2,ss)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "idpapa"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.find(filtro).sort(ss).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

function dafiltrocadsolouno(todos,id2,id3,norequerido) {
    var cad=''
    var cadxx=''
    var cadxxx=''
    var norequerido2=norequerido;
    if(norequerido2===undefined)
    {
        norequerido2=''
    }


    for(var i = 0; i < todos.length;i++){
                                      
        if(todos[i].name==id2 && todos[i].display==='false'){
            cadxxx=id2+'¬'+id3+'¬'
        switch(todos[i].type) {
            case 'Rango':  
            if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
            {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
            }
            else
            {
                cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
            }
            break;
             case 'Fecha': //ISODate("2018-08-08T15:00:56.875Z"),
             if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;
              case 'Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Fecha y Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Check': 
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
               case 'Imagen': 
               if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
               else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
               if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
               {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
               }
               else
               {
                  
                   cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
               }
                break;
                case 'Documento': 
                if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
                else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
                if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
                {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
                }
                else
                {
                   
                    cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
                }
                 break;
         case 'Alfanumerico': 
         if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
         else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
         if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
         {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
         }
         else
         {
            
             cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
         }
          break;
          case 'Componente': 
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;

           
           case 'Visualizar query': 
           if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
           else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
           if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
           {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
           }
           else
           {
              
               cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
           }
            break;

        case 'Numerico':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'Moneda':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'TextArea':  
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
        else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
//        if(todos[i].name==id2){cadxx='"' +id2 + '":"' +id3 + '"'  }
   
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
          break;
        case 'Etiqueta':   
         break;
         case 'Firma Electronica': 
         if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
         else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
         if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
         {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
         }
         else
         {
            
             cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
         }
          break;
          case 'Pais':  
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;
          case 'Tarjeta de credito': 
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break; 
          case 'Telefono':  
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;
          case 'Correo electronico': 
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;

          case 'Codigo Qr': 
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;
           case 'Firma Digital': 
           if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
           else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
           if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
           {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
           }
           else
           {
              
               cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
           }
            break;
            case 'Geoposicionamiento automatico': 
            if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
            else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
            {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
            }
            else
            {
               
                cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
            }
             break;
        case 'Lista de valores': 
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
         else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
           else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
             else{cadxxx=cadxxx+'like';cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
       if(todos[i].name==id2){
           break
    }

     
     }
     return cad +'°'+cadxx + '°' + cadxxx
}



function dadatosformularioproceso(namess,filtro,idempresa,namess2)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"asignadoxxx":{"type":"String"},"grupoasignado":{ "type" :"Array"},"estadoordenxxx":{"type":"String"},  "secuenciagants": { "type" :"Array"},"idanst": { "type" :"Array"},  "pmodulo": { "type" :"Array"}'

                                    
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}


function dacualquiertabla(namess,filtro,idempresa)
{
    return new Promise(resolve => { 

        switch(namess) {
            case 'frmactorgrupo':

                frmactorgrupo.find(filtro,function(err, todos2) {
                    if (err){ res.send(err); }
                    resolve(todos2); 

                    });

                break;
                case 'bitacoraxxx':

                    Bitacoraxxx.find(filtro,function(err, todos2) {
                        if (err){ res.send(err); }
                        resolve(todos2); 
    
                        });
    
                    break;
        }


    });

}

function dadatosformulariogruposuma0(namess,filtro,idempresa,namess2,filtrogrupo,filtrosuma)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.aggregate( [
                                        { $match: filtro},
                                        { 
                                            "$group" : filtrogrupo
                                        }, 
                                        { 
                                            "$project" : filtrosuma
                                        }
                                    ]).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

module.exports = {
    objectFindByKey:objectFindByKey,
    objectToString:objectToString,
    getImagesruta: getImagesruta,
    dafechacompleta:dafechacompleta,
    dafecha:dafecha,
    ejecutasql:ejecutasql,

    padLeadingZeros:padLeadingZeros,
    formatNumber:formatNumber,
    numberWithCommas:numberWithCommas,
    currencyFormatDE:currencyFormatDE,
    creafrmregistro:creafrmregistro,
    getDaysArray:getDaysArray,
    daarreglo:daarreglo,
    dafecha:dafecha,
    dafiltrocad:dafiltrocad,
    datipo2:datipo2,
    datipo:datipo,
    dadatosformulariogruposuma:dadatosformulariogruposuma,
    dadatosformulariogruposuma0:dadatosformulariogruposuma0,
    dadatosformulariogrupo:dadatosformulariogrupo,
    dadatosformularioispapaarray:dadatosformularioispapaarray,
    dadatosformulario:dadatosformulario,
    actualizaformularioidfinal:actualizaformularioidfinal,
    daformxid:daformxid,
    dadatosformulariofinal:dadatosformulariofinal,
    dafechapago1:dafechapago1,
    dafechapago2:dafechapago2,
    procesatablauirecordpdfuno:procesatablauirecordpdfuno,
    onlyUnique:onlyUnique,
daconectaorden:daconectaorden,
    dahora:dahora,
    dafechastring:dafechastring,
    dafechatodate:dafechatodate,
    daimagen:daimagen,
    getKeyssrthtml:getKeyssrthtml,
    procesahtmlrecord:procesahtmlrecord,
    procesahtmlrecordproceso:procesahtmlrecordproceso,
    procesatablauirecord:procesatablauirecord,
    sortByProperty:sortByProperty,
    procesaexcelrecord:procesaexcelrecord,
    procesacsvrecord:procesacsvrecord,
    dafiltrocadvalida:dafiltrocadvalida,
    creafrmregistroproceso:creafrmregistroproceso,
    replaceAll:replaceAll,
    graficatiposubtipocantidad:graficatiposubtipocantidad,
    removeDups:removeDups,
    dacodigocliente:dacodigocliente,
    ejecutaaccess:ejecutaaccess,
    dafiltrocadsolouno:dafiltrocadsolouno,
    actualizatrayectoria:actualizatrayectoria,
    sequenceGenerator:sequenceGenerator,
    daactividadsegunfrm:daactividadsegunfrm,
    procesatablauirecordfila:procesatablauirecordfila,
    daidformreg:daidformreg,
    dacualquiertabla:dacualquiertabla,
    stringToObject:stringToObject,
    aplicacampo:aplicacampo,
    daconectasql:daconectasql,
    procesatablauirecordpdf:procesatablauirecordpdf,
    davalorvv:davalorvv,
    validawarning:validawarning,
    creatrayectoriatoid:creatrayectoriatoid,
    dadatosformulariosort:dadatosformulariosort,
    dadatosformularioidfinal: dadatosformularioidfinal,
    dadatosformulariocombo:dadatosformulariocombo,
    eliminaformulario:eliminaformulario,
    dadatosformularioproceso:dadatosformularioproceso
   
      }