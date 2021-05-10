var kardex = require('../../models/asociadoventa/kardexcorreos');
var Bitacora = require('../../models/bitacora');
var Frmmovil = require('../../models/frmmovil');
var Frmmovild = require('../../models/frmmovild');
var functool = require('../../controllers/funcionesnode');





exports.getCorreos = async function(req, res, next){
    if(req.params.id3)
    { 
        if(req.params.id2==='reporteminimas')
        { 

            (async () => {
            producto = await functool.dadatosformulariofinal('5fc01bbba8d0a14888774579',{ },req.params.id3,'5fc01bbba8d0a14888774579',{fechadevencimiento:1}); 
            var datat= []
            var regt0=[];   
           
            var datafinal=[]

            regt0.push('CATEGORIA')
            regt0.push('CODIGO PRODUCTO')
            regt0.push('NOMBRE PRODUCTO')
            regt0.push('UNIDAD DE MEDIDA')
            regt0.push('EXISTENCIA ACTUAL')
            regt0.push('EXISTENCIA MINIMA')
            regt0.push('ESTADO')
            regt0.push('DEFERENCIA EXISTENCIA MINIMA')
            datafinal.push(regt0)
            
            for(var i = 0; i < producto.length;i++){
                var regt=[]; 
                var actual=Number(producto[i].existenciaactual)
                var min=Number(producto[i].existenciaminima)

                if(req.params.id==='0')
                {}
                else
                {
                    min=Number(req.params.id)
                }
              
          
                if(actual<=min)
                {
                    var ff3=new Date(producto[i].fechadevencimiento)
                    var ff4=new Date()
                    
        
                    var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
                    datat.push({categoria:producto[i].categoria,
                        codigo:producto[i].codigoarticulo,
                        nombre:producto[i].descripciondelarticulo,
                        unidad:producto[i].unidaddemedida,
                        actual:producto[i].existenciaactual,
                        minima:producto[i].existenciaminima,
                        estado:producto[i].estado,
                        diasvencimiento:diffDays,
                        vencimiento:producto[i].fechadevencimiento,
                        totalminima:Number(producto[i].existenciaactual)-Number(producto[i].existenciaminima)
                    
                    })

                    regt.push(producto[i].categoria)
            regt.push(producto[i].codigoarticulo)
            regt.push(producto[i].descripciondelarticulo)
            regt.push(producto[i].unidaddemedida)
            regt.push(producto[i].existenciaactual)
            regt.push(producto[i].existenciaminima)
            regt.push(producto[i].estado)
            regt.push(Number(producto[i].existenciaactual)-Number(producto[i].existenciaminima))
            datafinal.push(regt)


                }
             
            }
     
            res.json({d1:datat,d2:datafinal});   
        })();


        }
        else
        {
            if(req.params.id2==='reportegerencia')
            { 
                (async () => {


                    var fechat=req.params.id.split('°')
               
           
var filtro={createdAt:{"$gte": new Date(fechat[0]+'T00:00:00.000Z'),"$lt": new Date(fechat[1] +'T24:00:00.000Z')} };




var grupo= {
                    "_id" : {         fecha:{$dateToString: { format: "%m-%Y", date: "$createdAt" }}},
                    subtotal: { $sum: "$subtotal"  },"cantidad" : { "$sum" : "$cantidad" }
                }
var project= {"fecha" : "$_id.fecha","cantidad" : "$cantidad",       "subtotal" : "$subtotal",   "_id" :0  }


                h1 = await functool.dadatosformulariogruposuma('5fc0308c2fc3552d10147947',filtro,req.params.id3,'5fc0308c2fc3552d10147947', grupo ,project,500,  { fecha : -1 } ); 
                //fecha cantidaddespachada subtotal

var grupo= {
                    "_id" : {         fecha:{$dateToString: { format: "%m-%Y", date: "$createdAt" }}},
                    subtotal: { $sum: "$subtotal"  },"cantidaddespachada" : { "$sum" : "$cantidaddespachada" }
                }
var project={"fecha" : "$_id.fecha","cantidaddespachada" : "$cantidaddespachada",       "subtotal" : "$subtotal",   "_id" :0  }
            

                requi1 = await functool.dadatosformulariogruposuma('5fc03c79ab0f6448b877eb5c',filtro,req.params.id3,'5fc03c79ab0f6448b877eb5cs', grupo ,project,500,  { fecha : -1 } ); 


                

var grupo= {
    "_id" : {         articulo:"$articulo"},
    subtotal: { $sum: "$subtotal"  },"cantidad" : { "$sum" : "$cantidad" }
}
var project= {"articulo" : "$_id.articulo","cantidad" : "$cantidad",       "subtotal" : "$subtotal",   "_id" :0  }


h1a = await functool.dadatosformulariogruposuma('5fc0308c2fc3552d10147947',filtro,req.params.id3,'5fc0308c2fc3552d10147947', grupo ,project,21,  { cantidad : -1 } ); 
//fecha cantidaddespachada subtotal

var grupo= {
    "_id" : {          articulo:"$articulo"},
    subtotal: { $sum: "$subtotal"  },"cantidaddespachada" : { "$sum" : "$cantidaddespachada" }
}
var project={"articulo" : "$_id.articulo","cantidaddespachada" : "$cantidaddespachada",       "subtotal" : "$subtotal",   "_id" :0  }


requi1b = await functool.dadatosformulariogruposuma('5fc03c79ab0f6448b877eb5c',filtro,req.params.id3,'5fc03c79ab0f6448b877eb5cs', grupo ,project,21,  { cantidaddespachada : -1 } ); 



                var myData1 = [];
                var myData2 = [];
                var myData3 = [];
                for(var i = 0; i < h1.length;i++){
                    myData1.push(h1[i].fecha)
                    myData2.push(h1[i].cantidad)
                    myData3.push(h1[i].subtotal)
                }

           
             
                var myData1b = [];
                var myData2b = [];
                var myData3b = [];
                for(var i = 0; i < requi1.length;i++){
                    myData1b.push(requi1[i].fecha)
                    myData2b.push(requi1[i].cantidaddespachada)
                    myData3b.push(requi1[i].subtotal)
                }

           
    
                
                var myData1c = [];
                var myData2c = [];
                var myData3c = [];
                for(var i = 0; i < h1a.length;i++){
                    myData1c.push(h1a[i].articulo.split('<br>')[2].split(':')[1].trim() )
                    myData2c.push(h1a[i].cantidad)
                    myData3c.push(h1a[i].subtotal)
                }

           
             
                var myData1d = [];
                var myData2d = [];
                var myData3d = [];
                for(var i = 0; i < requi1b.length;i++){
                    myData1d.push(requi1b[i].articulo.split('<br>')[2].split(':')[1].trim() )
                    myData2d.push(requi1b[i].cantidaddespachada)
                    myData3d.push(requi1b[i].subtotal)
                }


          
              
    res.json({vgraf1:{labels:myData1,
    data:[{    label: 'Cantidad',  data: myData2, backgroundColor: '#F55555', borderColor: '#F55555',borderWidth: 1},
    { label: 'Monto', data: myData3,  backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]},
      
    vgraf2:{labels:myData1b,
    data:[{    label: 'Cantidad',   data: myData2b, backgroundColor: '#F55555',  borderColor: '#F55555',borderWidth: 1},{    label: 'Monto',  data: myData3b, backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]}

    ,vgraf1a:{labels:myData1c,
        data:[{    label: 'Cantidad',  data: myData2c, backgroundColor: '#F55555', borderColor: '#F55555',borderWidth: 1},
        { label: 'Monto', data: myData3c,  backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]},
          
        vgraf2a:{labels:myData1d,
        data:[{    label: 'Cantidad',   data: myData2d, backgroundColor: '#F55555',  borderColor: '#F55555',borderWidth: 1},{    label: 'Monto',  data: myData3d, backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]}
});
                
            })();
            }
            else
            {
        if(req.params.id2==='reportecaduca')
        { 
            (async () => {
            producto = await functool.dadatosformulariofinal('5fc01bbba8d0a14888774579',{ },req.params.id3,'5fc01bbba8d0a14888774579',{fechadevencimiento:1}); 

            var datat= []
            var regt0=[];   
            var datafinal=[]
        

            regt0.push('CATEGORIA')
            regt0.push('CODIGO PRODUCTO')
            regt0.push('NOMBRE PRODUCTO')
            regt0.push('UNIDAD DE MEDIDA')
            regt0.push('EXISTENCIA ACTUAL')
            regt0.push('EXISTENCIA MINIMA')
            regt0.push('ESTADO')
            regt0.push('FECHA CADUCIDAD')
            regt0.push('FECHA VENCIMIENTO')
            datafinal.push(regt0)
            
            regt0.push('DIAS VENCIMIENTO')

            for(var i = 0; i < producto.length;i++){
                var regt=[]; 
                var ff3=new Date(producto[i].fechadevencimiento)
                var ff4=new Date()

                if(req.params.id==='' || req.params.id===undefined)
                {
                   
                }
                else
                {
                    ff4=new Date(req.params.id)
                 
                }
                

    
                var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference

                if(diffDays<0)
                {
                
                    datat.push({categoria:producto[i].categoria,
                        codigo:producto[i].codigoarticulo,
                        nombre:producto[i].descripciondelarticulo,
                        unidad:producto[i].unidaddemedida,
                        actual:producto[i].existenciaactual,
                        minima:producto[i].existenciaminima,
                        estado:producto[i].estado,
                        fechaactual:ff4,
                        vencimiento:producto[i].fechadevencimiento,
                        diasvencimiento:(diffDays*-1),
                        totalminima:Number(producto[i].existenciaactual)-Number(producto[i].existenciaminima)
                    
                    })

                    regt.push(producto[i].categoria)
                    regt.push(producto[i].codigoarticulo)
                    regt.push(producto[i].descripciondelarticulo)
                    regt.push(producto[i].unidaddemedida)
                    regt.push(producto[i].existenciaactual)
                    regt.push(producto[i].existenciaminima)
                    regt.push(producto[i].estado)
                    regt.push(ff4)
                    regt.push(producto[i].fechadevencimiento)
                    regt.push((diffDays*-1))
                    datafinal.push(regt)



                }
                
             
            }
          
            res.json({d1:datat,d2:datafinal});  
            
        })();
        }
        else
        {
        if(req.params.id2==='kardex1')
        { 
            kardex.find({producto:req.params.id,idempresa :req.params.id3}).sort({_id:1}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {     var datat=[]
                    for(var i = 0; i < todos.length;i++){
                        var ee=todos[i].proveedor
                        var prov=ee
                        if(ee.indexOf('<br>')>0)
                        {
                            prov=ee.split('<br>')[1].split(':')[1]

                        }

                        if(todos[i].tipo==='Salida')
                        {
                            if(todos[i].accion==='Salida requisición' || todos[i].accion==='Inventario inicial')
                            {
                                datat.push({  "_id" : todos[i]._id,"idempresa" : todos[i].idempresa,                     "fecha" : todos[i].fecha,   "tipo" : todos[i].tipo,  "accion" : todos[i].accion,
                                "proveedor" : prov,     "nodoc" : todos[i].nodoc,
                                "s2" : prov,     "s1" : todos[i].nodoc,
                                "iddocumento" : todos[i].iddocumento,       "categoria" : todos[i].categoria,
                                "nodockardex" : todos[i].nodockardex,    "nodockardexlinea" : todos[i].nodockardexlinea,
                                "tarjetasanuladas" :todos[i].tarjetasnuladas,"estadoprint" : todos[i].estadoprint,
                                "anulacion" : todos[i].anulacion,             "producto" : todos[i].producto,
                                "idproducto" : todos[i].idproducto,       "producton" : todos[i].producton,
                                "unidad" : todos[i].unidad,      "saldoanterior" : todos[i].saldoanterior,
                                "ingreso" : todos[i].ingreso,      "obs" : todos[i].obs,
                                "egreso" : todos[i].egreso,        "saldoactual" : todos[i].saldoactual,
                                "precioanterior" :todos[i].precioanterior,            "precio" : Number(todos[i].precio).toFixed(2),
                                "total" : Number(todos[i].precio)*Number(todos[i].saldoactual)})
                            }
                            else
                            {
                                datat.push({  "_id" : todos[i]._id,"idempresa" : todos[i].idempresa,                     "fecha" : todos[i].fecha,   "tipo" : todos[i].tipo,  "accion" : todos[i].accion,
                                "proveedor" : prov,     "nodoc" : todos[i].nodoc,
                                "e2" : prov,     "e1" : todos[i].nodoc,
                                "iddocumento" : todos[i].iddocumento,       "categoria" : todos[i].categoria,
                                "nodockardex" : todos[i].nodockardex,    "nodockardexlinea" : todos[i].nodockardexlinea,
                                "tarjetasanuladas" :todos[i].tarjetasnuladas,"estadoprint" : todos[i].estadoprint,
                                "anulacion" : todos[i].anulacion,             "producto" : todos[i].producto,
                                "idproducto" : todos[i].idproducto,       "producton" : todos[i].producton,
                                "unidad" : todos[i].unidad,      "saldoanterior" : todos[i].saldoanterior,
                                "ingreso" : todos[i].ingreso,      "obs" : todos[i].accion,
                                "egreso" : todos[i].egreso,        "saldoactual" : todos[i].saldoactual,
                                "precioanterior" :todos[i].precioanterior,            "precio" : Number(todos[i].precio).toFixed(2),
                                "total" : Number(todos[i].precio)*Number(todos[i].saldoactual)})
                            }
                           
                        }
                        else
                        {
                            if(todos[i].accion==='Ingreso formulario 1-H' || todos[i].accion==='Inventario inicial')
                            {
                                datat.push({  "_id" : todos[i]._id,"idempresa" : todos[i].idempresa,                     "fecha" : todos[i].fecha,   "tipo" : todos[i].tipo,  "accion" : todos[i].accion,
                                "proveedor" : prov,     "nodoc" : todos[i].nodoc,
                                "e2" : prov,     "e1" : todos[i].nodoc,
                                "iddocumento" : todos[i].iddocumento,       "categoria" : todos[i].categoria,
                                "nodockardex" : todos[i].nodockardex,    "nodockardexlinea" : todos[i].nodockardexlinea,
                                "tarjetasanuladas" :todos[i].tarjetasnuladas,"estadoprint" : todos[i].estadoprint,
                                "anulacion" : todos[i].anulacion,             "producto" : todos[i].producto,
                                "idproducto" : todos[i].idproducto,       "producton" : todos[i].producton,
                                "unidad" : todos[i].unidad,      "saldoanterior" : todos[i].saldoanterior,
                                "ingreso" : todos[i].ingreso,      "obs" : todos[i].obs,
                                "egreso" : todos[i].egreso,        "saldoactual" : todos[i].saldoactual,
                                "precioanterior" :todos[i].precioanterior,            "precio" :  Number(todos[i].precio).toFixed(2),
                                "total" :  Number(todos[i].precio)*Number(todos[i].saldoactual)})
                            }
                            else
                            {
                                datat.push({  "_id" : todos[i]._id,"idempresa" : todos[i].idempresa,                     "fecha" : todos[i].fecha,   "tipo" : todos[i].tipo,  "accion" : todos[i].accion,
                                "proveedor" : prov,     "nodoc" : todos[i].nodoc,
                                "s2" : prov,     "s1" : todos[i].nodoc,
                                "iddocumento" : todos[i].iddocumento,       "categoria" : todos[i].categoria,
                                "nodockardex" : todos[i].nodockardex,    "nodockardexlinea" : todos[i].nodockardexlinea,
                                "tarjetasanuladas" :todos[i].tarjetasnuladas,"estadoprint" : todos[i].estadoprint,
                                "anulacion" : todos[i].anulacion,             "producto" : todos[i].producto,
                                "idproducto" : todos[i].idproducto,       "producton" : todos[i].producton,
                                "unidad" : todos[i].unidad,      "saldoanterior" : todos[i].saldoanterior,
                                "ingreso" : todos[i].ingreso,      "obs" : todos[i].accion,
                                "egreso" : todos[i].egreso,        "saldoactual" : todos[i].saldoactual,
                                "precioanterior" :todos[i].precioanterior,            "precio" :  Number(todos[i].precio).toFixed(2),
                                "total" : Number(todos[i].precio)*Number(todos[i].saldoactual)})

                            }
                        
                        }
                      
                    }
                     res.json(datat);  }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }
        else
        {
            console.log({nodockardex:req.params.id,idempresa :req.params.id3})
            kardex.find({nodockardex:req.params.id,idempresa :req.params.id3}).sort({_id:1}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {   
                    var datat=[]
                    for(var i = 0; i < todos.length;i++){
                        var ee=todos[i].proveedor
                        var prov=ee
                        if(ee.indexOf('<br>')>=0)
                        {
                            prov=ee.split('<br>')[1].split(':')[1]

                        }
                        datat.push({  "_id" : todos[i]._id,"idempresa" : todos[i].idempresa,                     "fecha" : todos[i].fecha,   "tipo" : todos[i].tipo,  "accion" : todos[i].accion,
                        "proveedor" : prov,     "nodoc" : todos[i].nodoc,
                        "iddocumento" : todos[i].iddocumento,       "categoria" : todos[i].categoria,
                        "nodockardex" : todos[i].nodockardex,    "nodockardexlinea" : todos[i].nodockardexlinea,
                        "tarjetasanuladas" :todos[i].tarjetasnuladas,"estadoprint" : todos[i].estadoprint,
                        "anulacion" : todos[i].anulacion,             "producto" : todos[i].producto,
                        "idproducto" : todos[i].idproducto,       "producton" : todos[i].producton,
                        "unidad" : todos[i].unidad,      "saldoanterior" : todos[i].saldoanterior,
                        "ingreso" : todos[i].ingreso,      "obs" : todos[i].obs,
                        "egreso" : todos[i].egreso,        "saldoactual" : todos[i].saldoactual,
                        "precioanterior" :todos[i].precioanterior,            "precio" :  Number(todos[i].precio).toFixed(2),
                        "total" : todos[i].total})
                    }
                     res.json(datat);
                    
                    }
                else
                {  res.status(500).send('NO EXISTE REGISTRO1');      }
                
            });

        }     }}}
      
    }
   
}

exports.creacorreos2s = function(req, res, next){
    if(req.body.operacion==='actualizalineakardexmasivo')
    { 

        console.log(req.body.id)
        kardex.updateMany({_id:{$in:req.body.id}}, {nodockardex :req.body.nodockardex    ,estadoprint
        :req.body.estadoprint,nodockardexlinea:req.body.nodockardexlinea,
        anulacion:req.body.anulacion}, function(err, todos) {
                                   
            if (err){  res.send(err); }
            console.log(todos)
            res.json(todos);

        });
      
    
    }
    else
    {

    if(req.body.operacion==='actualizalineakardex')
    { 
        kardex.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   todo.nodockardex        	=	req.body.nodockardex        	||	todo.nodockardex        	;
                todo.estadoprint        	=	req.body.estadoprint        	     	;
                todo.nodockardexlinea        	=	req.body.nodockardexlinea        	    	;
                todo.anulacion        	=	todo.anulacion + ' <br>'+ req.body.anulacion ;       	;
                
               
    
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

        if(req.body.operacion==='actualizalineakardexanula')
        { 
            kardex.findById({ _id: req.params.recordID }, function (err, todo)  {
                if (err) {  res.send(err);  }
                else
                {   
                    todo.tarjetasanuladas		=todo.tarjetasanuladas + ' ,' + todo.nodockardex
                    todo.nodockardex        	=	req.body.nodockardex        	||	todo.nodockardex        	;
                    todo.estadoprint        	=	req.body.estadoprint        	      	;
                    todo.nodockardexlinea        	=	req.body.nodockardexlinea        	       	;
 

                    todo.anulacion        	=	todo.anulacion + ' <br>'+ req.body.anulacion ;       	;
                    
                    
                   
        
                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                        res.json(todo);
                    });
                }
            });
        
        }
        else{
    
           
         
        }
       
     
    }}

}