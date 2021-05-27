
var Personal = require('../models/user');
var Suscriptorsaldo = require('../models/suscriptorsaldo');
var Personalsaldo = require('../models/suscriptorsaldo');
var Personalhis = require('../models/suscriptorhis');
var Bitacora = require('../models/bitacora');
var Tiposuscriptor = require('../models/tipo_suscriptor');
var Entradasdpi = require('../models/entradasdpi');
var Image = require('../models/image2');
var functool = require('../controllers/funcionesnode');

function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }


  function UniqueValue(d){
    var dat_e = new Date();
    var uniqu_e = ((Math.random() *1000) +"").slice(-4)

    dat_e = dat_e.toISOString().replace(/[^0-9]/g, "").replace(dat_e.getFullYear(),uniqu_e);
    if(d==dat_e)
        dat_e = UniqueValue(dat_e);
    return dat_e;
}


exports.getPersonal = function(req, res, next){


    if(req.params.id11)
    {///5f57d41f07c8795ae87297c2/5f6bd903e8e3885c9c1f386c%C2%B0busrojono234%C2%B05f57d5e507c8795ae87297c5/3/busrojono234@gmail.com/cobro_servicio_bus/5f5ebc3ca9d1cc40cc8f5a36/5f57d65a07c8795ae87297cb/5f57d0b407c8795ae8729761/5f57d0b407c8795ae8729761/1/cobraconqr

        switch(req.params.id11) {
            case 'cobraconqr':
                

                Personalsaldo.find({idempresa:req.params.id8,'idsuscriptor.id' : req.params.email
            }).populate('idsuscriptor.id').exec(function(err, todos) {
                    if (err){ res.send(err); }
                    var myData = [];
                    

                    if(todos.length>0)   { 
                   //     Tiposuscriptor.findById({ _id:todos[0].idsuscriptor.id.tiposuscriptor,idempresa:req.params.id8}, function (err, todo15)  {
                 //           if (err) {  res.send(err);  }                            else                            { 

                           //     req.params.id3=todo15.cobroparqueos;
                        Personalsaldo.findById({ _id:todos[0]._id }, function (err, todo)  {
                    if (err) {  res.send(err);  }
                    else
                    { 
                        
                        console.log(todos[0].saldoactual  + ' ' +Number(req.params.id3))
                        if(Number(todos[0].saldoactual)>=Number(req.params.id3))
                        {

                                    
                            todo.saldoactual        	=		Number(todos[0].saldoactual)-Number(req.params.id3)    	;
                        
                            todo.save(function (err, todo){
                                if (err)     {  console.log(err.message)   }
                                myData.push({tarifa:roundxx(Number(req.params.id3),2),
                                nombre:todos[0].idsuscriptor.id.nombre,cui:todos[0].idsuscriptor.id.cui
                                ,saldo:roundxx(todos[0].saldoactual,2),
                                    id:todos[0]._id,saldoactual:roundxx(Number(todos[0].saldoactual)-Number(req.params.id3) ,2)});
                    //  {    id	:todo[0].idsuscriptor.id ,   nombre	: todo[0].idsuscriptor.nombre       },
                    var cservicio='Cobro por servicio';
                                    if(req.params.id5=='cobro_parqueo' || req.params.id5=='cobro_servicio_bus' )
                                    {
                                            cservicio='Cobro de servicio de transporte,acceso (-)'
                                    }
                                    var  arr= req.params.id2.split('°')
                                    Personalhis.create({idsuscriptor :{    id	:todos[0].idsuscriptor.id._id, 
                                        nombre	: todos[0].idsuscriptor.id.nombre       },
                                        tipo   		: cservicio,descripcion   		: 'Pago por servicio utilizado, Pago de transporte (-)', 
                                        saldoanterior   		: roundxx(todos[0].saldoactual,2),
                                            monto   		: roundxx(Number(req.params.id3),2),                                  
                                            saldoactual   		: roundxx(Number(todos[0].saldoactual)-Number(req.params.id3) ,2),
                                            idtrans   		: todo._id,
                                            nodispositivo 		: req.params.id6,
                                            noprov 		: req.params.id7,
                                            idempresa:req.params.id8,
                                            idempresa0:req.params.id9,
                                            idasociado: arr[2],
                                            grupo1:'PAGO',
                                            grupo2:'COBRA',
                                            tipo2:'Cobro de trasporte (+)',
                                            descripcion2:'Operación de cobro de trasporte (+)',
                                            idsuscriptor2 : {
                                                "id" :  arr[0],
                                                "nombre" : arr[1]
                                            },
                                            
                                            
                                codigo1: req.params.id10, usuarionew	: req.params.id4,      usuarioup	: req.params.id4});

                                    res.json(myData);

                            
                            });
                            
                        }
                        else
                        {
                                myData.push({nombre:'Saldo insuficiente para poder realizar operación',cui:'',saldo:todos[0].saldoactual,
                                id:99999,saldoactual:0});
    
                                    res.json(myData);



                        }
                    
                    }
                });
           // }            });
                        
                    
                    }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
            break;
            case 'cobrarfid':
            break;
            case 'cobracondpi':
            break;
            case 'cobraconpasaporte':
            break;
        }
     
    }
    else
    {

    if(req.params.id10)
        {

                            if(req.params.id2=='parqueodpisalida')
                            {
                                                Entradasdpi.find({ cui: req.params.email
                                                ,estado:'PagoCancelado',estado2:'SalidaPendiente'}).sort([['_id', 1]]).limit(1).exec(function(err, todos10) {
                                                        if (err){ res.send(err); }
                                                        if(todos10.length>0)   { //obtienen el primero
                                                            //actualizar estado

                                                            Entradasdpi.findById({ _id:todos10[0]._id }, function (err, todo)  {
                                                            if (err) {  res.send(err);  }
                                                            else
                                                            { 
                                                            
                                                                            
                                                                    todo.estado2        	=		'SalidaCancelada';
                                                                
                                                                    todo.save(function (err, todo){
                                                                        if (err)     {  console.log(err.message)   }
                                                    
                                                                            Personalhis.create({idsuscriptor :{    id	:'5cce61cf84955d3c24507202', 
                                                                                nombre	:  req.params.id5.replace("-"," ")       },
                                                                                tipo   		: 'cobro_parqueo_dpi',descripcion   		: 'Cobro por servicio parqueo (dpi)', 
                                                                                saldoanterior   		: 0,
                                                                                    monto   		: 0,                                  
                                                                                    saldoactual   		: 0,
                                                                                    idtrans   		: todo._id,
                                                                                    nodispositivo 		: req.params.id6,
                                                                                    noprov 		: req.params.id7,
                                                                                    idempresa 		: String(req.params.id8).replace("-"," "),
                                                                        codigo1: req.params.email, usuarionew	: req.params.id4,      usuarioup	: req.params.id4});
                                    
                                                                        res.json([{exito:'ok'}]);
                                    
                                                                    
                                                                    });
                                                                    
                                                                
                                                            
                                                            }
                                                        });
                        
                                                        

                                                            

                                                        }
                                                        else
                                                        {//sin registro de entrada

                                                            res.json([{exito:'Error: Valide su salida...'}]);


                                                        }
                                                });
                                
                            }
                            else
                            {
                            if(req.params.id2=='parqueodpientrada')
                            {


                                
                                                Entradasdpi.find({ cui: req.params.email
                                                ,estado:'PagoPendiente', estado2:'SalidaPendiente'}).select({  "_id": 1}).exec(function(err, todos1) {
                                                        if (err){ res.send(err); }
                                                        if(todos1.length>0)   { //ya existe una pendiente 
                                                            
                                                            res.json([{exito:'Error,Valide su salida...'}]);

                                                            
                                                        }
                                                        else
                                                        {


                                                            Entradasdpi.find({ cui: req.params.email
                                                                ,estado:'PagoCancelado',estado2:'SalidaPendiente'}).select({  "_id": 1}).exec(function(err, todos10) {
                                                                        if (err){ res.send(err); }
                                                                        if(todos10.length>0)   {//saquelo
                                                                            
                                                                            
                                                                            Entradasdpi.findById({ _id:todos10[0]._id }, function (err, todo)  {
                                                                                if (err) {  res.send(err);  }
                                                                                else
                                                                                { 
                                                                            
                                                                                            
                                                                                    todo.estado2        	=		'SalidaCancelada';
                                                                                    
                                                                                    todo.save(function (err, todo){
                                                                                        if (err)     {  console.log(err.message)   }
                                                                    
                                                                                            Personalhis.create({idsuscriptor :{    id	:'5cce61cf84955d3c24507202', 
                                                                                                nombre	:  req.params.id5.replace("-"," ")       },
                                                                                                tipo   		: 'cobro_parqueo_dpi',descripcion   		: 'Cobro por servicio parqueo (dpi)', 
                                                                                                saldoanterior   		: 0,
                                                                                                    monto   		: 0,                                  
                                                                                                    saldoactual   		: 0,
                                                                                                    idtrans   		: todo._id,
                                                                                                    nodispositivo 		: req.params.id6,
                                                                                                    noprov 		: req.params.id7,
                                                                                                    idempresa 		: String(req.params.id8).replace("-"," "),
                                                                                                    idempresa0 		: req.params.id10,
                                                                                            codigo1: req.params.email, usuarionew	: req.params.id4,      usuarioup	: req.params.id4});
                                                    
                                                                                            res.json([{exito:'ok,** BUEN VIAJE **'}]);
                                                    
                                                                                        
                                                                                    });
                                                                                        
                                                                                
                                                                            
                                                                                }
                                                                            });


                                                                        }
                                                                        else
                                                                        {
                /*
                                                                            Entradasdpi.find({ cui: req.params.email
                                                                                ,estado:'PagoCancelado',estado2:'SalidaCancelada'}).select({  "_id": 1}).exec(function(err, todos2) {
                                                                                        if (err){ res.send(err); }
                                                                                        if(todos2.length>0)   {
                                                                                            res.json([{exito:'Error,Valide su salida...'}]);

                                                                                        
                                                                                        }
                                                                                        else
                                                                                        {
                    */
                                                                                            
                                                                                                                
                                                                                            Personalsaldo.find({  'idsuscriptor.cui': req.params.email
                                                                                                    }).select({  "_id": 1}).exec(function(err, todos) {
                                                                                                            if (err){ res.send(err); }
                                                                                                            if(todos.length>0)   { 
                                                                                                                Entradasdpi.create({
                                                                                                                    nombre	: req.params.id5.replace("-"," ")      ,
                                                                                                                    cui 	: req.params.email , 
                                                                                                                    tarifa  		: roundxx(req.params.id3 ,2),
                                                                                                                        idpersonal  		: todos[0]._id ,
                                                                                                                        estado 		: 'PagoPendiente',
                                                                                                                        estado2 		: 'SalidaPendiente',
                                                                                                                        nodispositivo 		: req.params.id6,
                                                                                                                        noprov 		: req.params.id7,
                                                                                                                    tentrada 		: req.params.id9,
                                                                                                                        idempresa 		:  String(req.params.id8).replace("-"," "),
                                                                                                                        monto: 0,
                                                                                                                        horasdescuento: 0,
                                                                                                                        montodescuento: 0,
                                                                                                                        idempresa0 		: req.params.id10,
                                                                                                                        usuarionew	: req.params.id4,      usuarioup	: req.params.id4
                                                                                                                        }
                                                                                                                        , function(err, todo22) {
                                                                                                                        if (err){ res.status(500).send(err.message)    }

                                                                                                                        Personalhis.create({idsuscriptor :{    id	:todos[0]._id , 
                                                                                                                        nombre	:  req.params.id5.replace("-"," ")       },
                                                                                                                        tipo   		: 'cobro_parqueo_dpi',descripcion   		: 'Entrada por servicio parqueo (dpi)', 
                                                                                                                        saldoanterior   		: 0,
                                                                                                                        monto   		: 0,                                  
                                                                                                                            saldoactual   		: 0,
                                                                                                                            idtrans   		: todo22._id,
                                                                                                                            nodispositivo 		: req.params.id6,
                                                                                                                            idempresa 		:  String(req.params.id8).replace("-"," "),
                                                                                                                            noprov 		: req.params.id7,
                                                                                                                            idempresa0 		: req.params.id10,
                                                                                                                codigo1: req.params.email, usuarionew	: req.params.id4,      usuarioup	: req.params.id4});
                                                                                                                        res.json([{exito:'ok,** PASE ADELANTE **'}]);
                                                                                                                    });
                                                                                                            }
                                                                                                            else
                                                                                                            { //no existe registro  crear transaccion en botacora
                                                                                                                Entradasdpi.create({
                                                                                                                    nombre	: req.params.id5.replace("-"," ")      ,
                                                                                                                    cui 	: req.params.email, 
                                                                                                                    tarifa  		: roundxx(req.params.id3 ,2),
                                                                                                                        idpersonal  		: '',
                                                                                                                        estado 		: 'PagoPendiente',
                                                                                                                        estado2 		: 'SalidaPendiente',
                                                                                                                        nodispositivo 		: req.params.id6,
                                                                                                                                noprov 		: req.params.id7,
                                                                                                                                tentrada 		: req.params.id9,
                                                                                                                                idempresa 		: String(req.params.id8).replace("-"," "),
                                                                                                                                monto: 0,
                                                                                                                                horasdescuento: 0,
                                                                                                                                montodescuento: 0,
                                                                                                                                idempresa0 		: req.params.id10,
                                                                                                                        usuarionew	: req.params.id4,      usuarioup	: req.params.id4
                                                                                                                        }
                                                                                                                        , function(err, todo22) {
                                                                                                                        if (err){ res.status(500).send(err.message)    }
                                                                                                                        Personalhis.create({idsuscriptor :{    id	:'5cce61cf84955d3c24507202', 
                                                                                                                        nombre	:  req.params.id5.replace("-"," ")       },
                                                                                                                        tipo   		: 'cobro_parqueo_dpi',descripcion   		: 'Entrada por servicio parqueo (dpi)', 
                                                                                                                        saldoanterior   		: 0,
                                                                                                                        monto   		: 0,                                  
                                                                                                                            saldoactual   		: 0,
                                                                                                                            idtrans   		: todo22._id,
                                                                                                                            nodispositivo 		: req.params.id6,
                                                                                                                            idempresa 		: String(req.params.id8).replace("-"," "),
                                                                                                                            noprov 		: req.params.id7,
                                                                                                                            idempresa0 		: req.params.id10,
                                                                                                                codigo1: req.params.email, usuarionew	: req.params.id4,      usuarioup	: req.params.id4});
                                                                                                                        res.json([{exito:'ok,** PASE ADELANTE **'}]);
                                                                                                                    });
                                                                                                            }
                                                                                                        });   
                    
                    
                    
                                                                                    //      }
                    
                                                                                    //  });



                                                                


                                                                        }

                                                                    });


                                                            
                                                            
                                                            //sin registro de entrada
                                                            



                                                        }
                                                });
                                
                            }
                            else
                            {
                            
                            
                        

                            
                        
                        
                            }
                        
                            }
        }
        else{


            if(req.params.id9)
            {

console.log('entra 999999999999999999')

                Personalsaldo.find({idempresa:req.params.id8,  $or : [
                    { $and : [ { 'idsuscriptor.dpi' : req.params.email }] },
                    { $and : [ { codigo1 : req.params.email }] },
                    { $and : [ { codigo2 : req.params.email }] },
                    { $and : [ { codigo3 : req.params.email }] },
                    { $and : [ { codigo4 : req.params.email }] },
                    { $and : [ {codigo5 : req.params.email } ] }]
            }).populate('idsuscriptor.id').exec(function(err, todos) {
                    if (err){ res.send(err); }
                    var myData = [];
                    

                    if(todos.length>0)   { 
                   //     Tiposuscriptor.findById({ _id:todos[0].idsuscriptor.id.tiposuscriptor,idempresa:req.params.id8}, function (err, todo15)  {
                 //           if (err) {  res.send(err);  }                            else                            { 

                           //     req.params.id3=todo15.cobroparqueos;
                        Personalsaldo.findById({ _id:todos[0]._id }, function (err, todo)  {
                    if (err) {  res.send(err);  }
                    else
                    { 
                        
                        
                        if(Number(todos[0].saldoactual)>=Number(req.params.id3))
                        {

                                    
                            todo.saldoactual        	=		Number(todos[0].saldoactual)-Number(req.params.id3)    	;
                        
                            todo.save(function (err, todo){
                                if (err)     {  console.log(err.message)   }
                                myData.push({tarifa:roundxx(Number(req.params.id3),2),
                                nombre:todos[0].idsuscriptor.id.nombre,cui:todos[0].idsuscriptor.id.cui
                                ,saldo:roundxx(todos[0].saldoactual,2),
                                    id:todos[0]._id,saldoactual:roundxx(Number(todos[0].saldoactual)-Number(req.params.id3) ,2)});
                    //  {    id	:todo[0].idsuscriptor.id ,   nombre	: todo[0].idsuscriptor.nombre       },
                    var cservicio='Cobro por servicio';
                                    if(req.params.id5=='cobro_parqueo' || req.params.id5=='cobro_servicio_bus' )
                                    {
                                            cservicio='Cobro de servicio ,acceso (-)'
                                    }
                                    var  arr= req.params.id2.split('°')
                                    Personalhis.create({idsuscriptor :{    id	:todos[0].idsuscriptor.id._id, 
                                        nombre	: todos[0].idsuscriptor.id.nombre       },
                                        tipo   		: cservicio,descripcion   		: 'Pago por servicio utilizado', 
                                        saldoanterior   		: roundxx(todos[0].saldoactual,2),
                                            monto   		: roundxx(Number(req.params.id3),2),                                  
                                            saldoactual   		: roundxx(Number(todos[0].saldoactual)-Number(req.params.id3) ,2),
                                            idtrans   		: todo._id,
                                            nodispositivo 		: req.params.id6,
                                            noprov 		: req.params.id7,
                                            idempresa:req.params.id8,
                                            idempresa0:req.params.id9,
                                            idasociado: arr[2],
                                            grupo1:'PAGO',
                                            grupo2:'COBRA',
                                            tipo2:'Cobro de trasporte (+)',
                                            descripcion2:'Operación de cobro de trasporte (+)',
                                            idsuscriptor2 : {
                                                "id" :  arr[0],
                                                "nombre" : arr[1]
                                            },
                                            
                                            
                                codigo1: req.params.email, usuarionew	: req.params.id4,      usuarioup	: req.params.id4});

                                    res.json(myData);

                            
                            });
                            
                        }
                        else
                        {
                                myData.push({nombre:'Saldo insuficiente para poder realizar operación',cui:'',saldo:todos[0].saldoactual,
                                id:99999,saldoactual:0});
    
                                    res.json(myData);



                        }
                    
                    }
                });
           // }            });
                        
                    
                    }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
    


            }
            else
            {
        if(req.params.id4)
        {
     
            
            if(req.params.id2=='actualizauser')
            {
              


                console.log({idempresa:req.params.id4, $or : [
                    { $and : [ { email : req.params.email }] },
                    { $and : [ { nov : req.params.email }] },
                    { $and : [ { cui : req.params.email }] },
                    { $and : [ { codpersonal : req.params.email }] }
                 ]})

                Personal.find({idempresa:req.params.id4, $or : [
                        { $and : [ { email : req.params.email }] },
                        { $and : [ { nov : req.params.email }] },
                        { $and : [ { cui : req.params.email }] },
                        { $and : [ { codpersonal : req.params.email }] }
                     ]}).populate('unidad').populate('tiposuscriptor')
                .exec(function(err, todos) {
                    if (err){ res.send(err); }
                
                    if(todos.length>0)   {    res.json(todos);    }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
    
              
            }
            else{
     
                switch(req.params.id2) {
                    case 'empresatodoasociadodisp':
                      var arr=req.params.id4.split('°')
                        if(req.params.email==='todos')
                        { 
                            Personal.find({idempresa:req.params.id3,idsucursal:arr[0],iddispositivo:arr[1]},function(err, todos) {
                                if (err){  res.send(err);  }
                                    res.json(todos);
                                });
                        }
                        else
                        {
                            Personal.find({idempresa:req.params.id3,estado:req.params.email,idsucursal:req.params.id4,iddispositivo:arr[1]},function(err, todos) {
                                if (err){  res.send(err);  }
                                    res.json(todos);
                                });
                        }
                      
                         break;
                    case 'empresatodoasociado':
                      
                        if(req.params.email==='todos')
                        {
                            Personal.find({idempresa:req.params.id3,idsucursal:req.params.id4},function(err, todos) {
                                if (err){  res.send(err);  }
                                    res.json(todos);
                                });
                        }
                        else
                        {
                            Personal.find({idempresa:req.params.id3,estado:req.params.email,idsucursal:req.params.id4},function(err, todos) {
                                if (err){  res.send(err);  }
                                    res.json(todos);
                                });
                        }
                      
                         break;
                    case 'pagineo':  
                    
                       
                            var pagex=    Number(req.params.id3);
                            var limitx=    Number(req.params.email);
                            
                            Personal.paginate({idempresa:req.params.id4},{populate: ['unidad','tiposuscriptor'],lean:     false,page:pagex, limit:  limitx})
                            .then(function(err, todos) {
                                if (err){  res.send(err);  }
                                
                                    res.end(todos);
                                    res.end();
                                  //  next();
                                });
break;
case 'pagineo2x':  

   
        var pagex=    Number(req.params.id3);
        var limitx=    Number(req.params.email);
        var arr=(req.params.id4).split('°')

        if(arr[1]=='todos')
        {
 
            Personal.paginate({idempresa:arr[0]},{lean:     false,page:pagex, limit:  limitx})
            .then(function(err, todos) {
                if (err){  res.send(err);  }
                
                    res.end(todos);
                    res.end();
                  //  next();
                });
        }
        else
        {
             
        Personal.paginate({idempresa:arr[0],estado:arr[1]},{lean:     false,page:pagex, limit:  limitx})
        .then(function(err, todos) {
            if (err){  res.send(err);  }
            
                res.end(todos);
                res.end();
              //  next();
            });

        }
       
break;
                    case 'persona':

                            Personal.find({cui:req.params.email,APP:req.params.id3,idempresa:req.params.id4}).populate('unidad').populate('tiposuscriptor')
                            .exec(function(err, todos) {
                                if (err){ res.send(err); }
                            
                                if(todos.length>0)   {    res.json(todos);    }
                                else
                                {  res.status(500).send('NO EXISTE REGISTRO');      }
                                
                            });
                    break;
                    case 'unidad':
                  
                    Personal.find({unidad:req.params.email,idempresa:req.params.id4}).exec(function(err, todos) {
                        if (err){ res.send(err); }
                    
                         res.json(todos);    
                        
                    });
        
                    break;
                }

       
            }
        
        }
        else
        {

    if(req.params.id3)
    {
            switch(req.params.id2) {
                case 'personasaldito':

                                Personal.find({cui:req.params.email,idempresa:req.params.id3}).exec(function(err, todos1) {
                                    if (err){ res.send(err); }
                                
                                    if(todos1.length>0)   {   
                                Personalsaldo.find({'idsuscriptor.id':todos1[0]._id}).populate('idsuscriptor.id').exec(function(err, todos) {
                                    if (err){ res.send(err); }
                                
                                    if(todos.length>0)   {    res.json(todos);    }
                                    else
                                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                                    
                                });
                    
                            }
                            else
                            {  res.status(500).send('NO EXISTE REGISTRO');      }
                            
                        });
                break;
                case 'persona':
                        Personal.find({cui:req.params.email,idempresa:req.params.id3}).populate('unidad').populate('tiposuscriptor')
                        .exec(function(err, todos) {
                            if (err){ res.send(err); }
                        
                            if(todos.length>0)   {    res.json(todos);    }
                            else
                            {  res.status(500).send('NO EXISTE REGISTRO');      }
                            
                        });
                break;
                case 'personadispid':
                   
                    Personal.findById({_id:req.params.email}).exec(function(err, todos) {
                        if (err){ res.send(err); }
                
                       
                            
                            Personalsaldo.find({'idsuscriptor.id':todos._id  },function(err, todos4) {
                                if (err){ res.send(err); }

                            
                                var myData = [];
                                        if(todos4.length>0)   {  

                                            myData.push({_id:todos._id,email:todos.email,estado:todos.estado,cui:todos.cui,direccion:todos.direccion,nombre:todos.nombre,foto:todos.foto,telefono:todos.telefono,sexo:todos.sexo,fechanac:todos.fechanac
                                            ,tiposuscriptor:'',unidad:''
                                            ,saldo:roundxx(todos4[0].saldoactual,2),codigo1:todos4[0].codigo1,dispositivo1:todos4[0].dispositivo1
                                            ,codigo2:todos4[0].codigo2,dispositivo2:todos4[0].dispositivo2
                                            ,codigo3:todos4[0].codigo3,dispositivo3:todos4[0].dispositivo3
                                            ,codigo4:todos4[0].codigo4,dispositivo4:todos4[0].dispositivo4
                                            ,codigo5:todos4[0].codigo5,dispositivo5:todos4[0].dispositivo5,encuentra:'si',id2:todos4[0]._id});
                                            res.json(myData);

                                        }
                                        else
                                        {
                                           
console.log('crea')
                                                                               
                                            Suscriptorsaldo.create({  
                                                idempresa      	: todos.idempresa     	,
                                                idsuscriptor      	: {id:todos._id,nombre:todos.nombre,dpi:todos.cui ||'123'}    	,
                                                saldoactual        	: 0       	,
                                                codigo1        	: ''        	,
                                                codigo2        	: ''      	,
                                                codigo3        	: ''        	,
                                                codigo4        	: ''        	,
                                                codigo5        	: ''        	,
                                                dispositivo1        	: 'Tarjeta'        	,
                                                dispositivo2        	: ''        	,
                                                dispositivo3        	: ''        	,
                                                dispositivo4        	: ''        	,
                                                dispositivo5        	: ''        	,
                                                usuarionew:todos.email 	
                                            }
                                                , function(err, todo100aa) {
                                                    if (err){ console.log(err); res.send(err); }

                                                    myData.push({_id:todos._id,email:todos.email,estado:todos.estado,cui:todos.cui,direccion:todos.direccion,nombre:todos.nombre,foto:todos.foto,telefono:todos.telefono,sexo:todos.sexo,fechanac:todos.fechanac
                                                        ,tiposuscriptor:'',unidad:''
                                                        ,saldo:'0',codigo1:'',dispositivo1:''
                                                        ,codigo2:'',dispositivo2:''
                                                        ,codigo3:'',dispositivo3:''
                                                        ,codigo4:'',dispositivo4:''
                                                        ,codigo5:'',dispositivo5:'',encuentra:'no',id2:''});
        
                                                        res.json(myData);
                                                });

                                          
                                        }
                                       
                                       
                                    });


                      
                        
                    });
        break;
                case 'personadisp':
                            Personal.find({cui:req.params.email,idempresa:req.params.id3}).populate('unidad').populate('tiposuscriptor')
                            .exec(function(err, todos) {
                                if (err){ res.send(err); }

                                
                            
                                if(todos.length>0)   {   

                                    Personalsaldo.find({'idsuscriptor.id':todos[0]._id},function(err, todos4) {
                                        if (err){ res.send(err); }

                                    
                                        var myData = [];
                                                if(todos4.length>0)   {  

                                                    myData.push({_id:todos[0]._id,email:todos[0].email,estado:todos[0].estado,cui:todos[0].cui,direccion:todos[0].direccion,nombre:todos[0].nombre,foto:todos[0].foto,telefono:todos[0].telefono,sexo:todos[0].sexo,fechanac:todos[0].fechanac
                                                    ,tiposuscriptor:todos[0].tiposuscriptor.nombre,unidad:todos[0].unidad.nombre
                                                    ,saldo:'Q. '+roundxx(todos4[0].saldoactual,2),codigo1:todos4[0].codigo1,dispositivo1:todos4[0].dispositivo1
                                                    ,codigo2:todos4[0].codigo2,dispositivo2:todos4[0].dispositivo2
                                                    ,codigo3:todos4[0].codigo3,dispositivo3:todos4[0].dispositivo3
                                                    ,codigo4:todos4[0].codigo4,dispositivo4:todos4[0].dispositivo4
                                                    ,codigo5:todos4[0].codigo5,dispositivo5:todos4[0].dispositivo5,encuentra:'si',id2:todos4[0]._id});
                

                                                }
                                                else
                                                {

                                                    myData.push({_id:todos[0]._id,email:todos[0].email,estado:todos[0].estado,cui:todos[0].cui,direccion:todos[0].direccion,nombre:todos[0].nombre,foto:todos[0].foto,telefono:todos[0].telefono,sexo:todos[0].sexo,fechanac:todos[0].fechanac
                                                        ,tiposuscriptor:todos[0].tiposuscriptor.nombre,unidad:todos[0].unidad.nombre
                                                        ,saldo:'Q. 0.00',codigo1:'',dispositivo1:''
                                                        ,codigo2:'',dispositivo2:''
                                                        ,codigo3:'',dispositivo3:''
                                                        ,codigo4:'',dispositivo4:''
                                                        ,codigo5:'',dispositivo5:'',encuentra:'no',id2:''});

                                                }

                                                res.json(myData);
                                            });


                                }
                                else
                                {  res.status(500).send('NO EXISTE REGISTRO');      }
                                
                            });
                break;
                case 'tarjetadisp':

                                    Personalsaldo.find({ idempresa:req.params.id3, $or : [
                                        { $and : [ { codigo1 : req.params.email }] },
                                        { $and : [ { codigo2 : req.params.email }] },
                                        { $and : [ { codigo3 : req.params.email }] },
                                        { $and : [ { codigo4 : req.params.email }] },
                                        { $and : [ {codigo5 : req.params.email } ] }]
                                }).populate('idsuscriptor.id').exec(function(err, todos) {
                                        if (err){ res.send(err); }
                                        var myData = [];
                                        if(todos.length>0)   {  
                                            myData.push({nombre:todos[0].idsuscriptor.id.nombre,cui:todos[0].idsuscriptor.id.cui});

                                            res.json(myData);
                                        
                                        }
                                            else
                                        {  myData.push({nombre:'',cui:''});
                                        res.json(myData);  
                                        //    res.status(500).send('NO EXISTE REGISTRO');   
                                           }
                                        
                                    });

                break;
                case 'tarjetasaldoenlineabus':
                
                                Personalsaldo.find({ idempresa:req.params.id8, $or : [
                                    { $and : [ { codigo1 : req.params.email }] },
                                    { $and : [ { codigo2 : req.params.email }] },
                                    { $and : [ { codigo3 : req.params.email }] },
                                    { $and : [ { codigo4 : req.params.email }] },
                                    { $and : [ {codigo5 : req.params.email } ] }]
                            }).populate('idsuscriptor.id').exec(function(err, todos) {
                                    if (err){ res.send(err); }
                                    var myData = [];

                            
                                    if(todos.length>0)   { 
                                
                                        Personalsaldo.findById({ _id:todos[0]._id }, function (err, todo)  {
                                    if (err) {  res.send(err);  }
                                    else
                                    { 
                                    
                                    
                                        if(Number(todos[0].saldoactual)>=Number(req.params.id3))
                                        {

                                                
                                        todo.saldoactual        	=		Number(todos[0].saldoactual)-Number(req.params.id3)    	;
                                        
                                        todo.save(function (err, todo){
                                            if (err)     {  console.log(err.message)   }
                                            myData.push({tarifa:roundxx(Number(req.params.id3),2),nombre:todos[0].idsuscriptor.id.nombre,cui:todos[0].idsuscriptor.id.cui
                                                ,saldo:roundxx(todos[0].saldoactual,2),
                                                id:todos[0]._id,saldoactual:roundxx(Number(todos[0].saldoactual)-Number(req.params.id3) ,2)});
                                //  {    id	:todo[0].idsuscriptor.id ,   nombre	: todo[0].idsuscriptor.nombre       },
                                var cservicio='Cobro por servicio';
                                                    if(req.params.id5=='cobro_parqueo')
                                                    {
                                                            cservicio='Cobro de servicio ,acceso (-)'
                                                    }
                                                Personalhis.create({idsuscriptor :{    id	:todos[0].idsuscriptor.id._id, 
                                                    nombre	: todos[0].idsuscriptor.id.nombre       },
                                                    tipo   		: cservicio,descripcion   		: 'Cobro por servicio utilizado', 
                                                    saldoanterior   		: roundxx(todos[0].saldoactual,2),
                                                        monto   		: roundxx(Number(req.params.id3),2),                                  
                                                        saldoactual   		: roundxx(Number(todos[0].saldoactual)-Number(req.params.id3) ,2),
                                                        idtrans   		: todo._id,
                                                        nodispositivo 		: req.params.id6,
                                                        noprov 		: req.params.id7,

                                                        idempresa:req.params.id8,
                                                        idempresa0:req.params.id9,
                                                codigo1: req.params.email, usuarionew	: req.params.id4,      usuarioup	: req.params.id4});

                                                res.json(myData);

                                            
                                        });
                                            
                                        }
                                        else
                                        {
                                            myData.push({nombre:'Saldo insuficiente para poder realizar operación',cui:'',saldo:todos[0].saldoactual,
                                                id:99999,saldoactual:0});
                    
                                                res.json(myData);



                                        }
                                
                                    }
                                });
                    
                                    
                                    }
                                    else
                                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                                    
                                });
                break;
                
                case 'emailsolonuevo':
                 
                   
                   
                    if(req.params.email=='')
                    {
                    res.status(422).send('NO EXISTE REGISTRO');
                    }
                    else
                    {
                       

                        if(req.params.email)
                        {

                            if(String(req.params.email).indexOf('@')>=0) 
                            {
                                Personal.find({email:req.params.email,idempresa:req.params.id3}).populate('idempresa')
                                .then(todos => {
                           
                                    res.json(todos);  
                                    
                                })
                                .catch(err => {
                                  
                                    res.status(422).send(err.message);  
                                })
                            }
                            else
                            {
                                Personal.find({nombrealias:req.params.email,idempresa:req.params.id3}).populate('idempresa')
                                .then(todos => {
                           
                                    res.json(todos);  
                                    
                                })
                                .catch(err => {
                                   
                                    res.status(422).send(err.message);  
                                })
                            }   
                        

                        }
                        else
                        {
                            res.status(422).send('NO EXISTE REGISTRO');
                        }
                  
                }

                break;
                case 'emailsolo':
                 
                   
                   
                                        if(req.params.email=='')
                                        {
                                        res.status(422).send('NO EXISTE REGISTRO');
                                        }
                                        else
                                        {
                                           

                                            if(req.params.email)
                                            {
                                                Personal.find({email:req.params.email,idempresa:req.params.id3}).populate('unidad').populate('tiposuscriptor')
                                                .then(todos => {
                                              
                                                    res.json(todos);  
                                                    
                                                })
                                                .catch(err => {
                                                    console.log('entra cath')
                                                    res.status(422).send(err.message);  
                                                })

                                            }
                                            else
                                            {
                                                res.status(422).send('NO EXISTE REGISTRO');
                                            }
                                      
                                    }

                                    break;
                                    case 'emailsolorol':
                                        console.log('ENTRA A EMAILSOLOROL')
                                        
                                        if(req.params.email=='')
                                        {
                                        res.status(422).send('NO EXISTE REGISTRO');
                                        }
                                        else
                                        {
                                            if(req.params.email)
                                            {

                                                Personal.find({email:req.params.email,idempresa:req.params.id3}).populate('unidad').populate('tiposuscriptor')
                                                .then(todosper => {
                                              
                                                //    res.json(todos);  
        
                                                
                                                    
                                                })
                                                .catch(err => {
                                                    res.status(422).send(err.message);  
                                                })
                                            }
                                            else
                                            {
                                                res.status(422).send('NO EXISTE REGISTRO');
                                            }
                                      
                                    }

                                    break;
                    case 'emailsoloid':
                        console.log('ENTRA A EMAILSOLOID')
                        
                        if(req.params.email=='')
                        {
                        res.status(422).send('NO EXISTE REGISTRO');
                        }
                        else
                        {
                            if(req.params.email)
                            {
                                Personal.find({_id:req.params.email,idempresa:req.params.id3}).populate('unidad').populate('tiposuscriptor')
                                .then(todos => {
                                
                                    res.json(todos);  
                                    
                                })
                                .catch(err => {
                                    res.status(422).send(err.message);  
                                })

                            }
                            else
                            {
                                res.status(422).send('NO EXISTE REGISTRO');
                            }
                            
                       
                    }

                    break;
                    case 'emailsoloidnuevo':
                        console.log('ENTRA A EMAILSOLOID')
                        
                        if(req.params.email=='')
                        {
                        res.status(422).send('NO EXISTE REGISTRO');
                        }
                        else
                        {
                            if(req.params.email)
                            {
                                Personal.find({_id:req.params.email,idempresa:req.params.id3}).populate('idempresa').populate('unidad').populate('tiposuscriptor')
                                .then(todos => {
                                
                                    res.json(todos);  
                                    
                                })
                                .catch(err => {
                                    res.status(422).send(err.message);  
                                })

                            }
                            else
                            {
                                res.status(422).send('NO EXISTE REGISTRO');
                            }
                            
                       
                    }

                    break;
        
                    case 'keyunica':
                        var d=0;
                        var dat_e = new Date();
                        var uniqu_e = ((Math.random() *1000) +"").slice(-4)
                
                        dat_e = dat_e.toISOString().replace(/[^0-9]/g, "").replace(dat_e.getFullYear(),uniqu_e);
                        if(d==dat_e)
                            dat_e = UniqueValue(dat_e);
                      
                            Personal.findById({ _id: req.params.email}, function (err, todo)  {
                                if (err) {  res.send(err);  }
                                else
                                {  
                                    
                                    todo.controlacceso        	=dat_e	
                                 
                                    todo.save(function (err, todo){
                                        if (err)     {  res.status(500).send(err.message)   }
                                        res.json({code:dat_e	});
                                    });
                                }
                            });



                           
                        
                break;


               case 'unidadper':
               ;
               Personal.find({idempresa:req.params.id3,unidad:req.params.email},function(err, todos) {
                if (err){  res.send(err);  }
                    res.json(todos);
                });
                break;
                case 'Activo':
                    ;
                    Personal.find({idempresa:req.params.id3},function(err, todos) {
                     if (err){  res.send(err);  }
                         res.json(todos);
                     });
                     break;
     
                     case 'personasactivas':
                     
                        Personal.find({idempresa:req.params.id3,estado:req.params.email},function(err, todos) {
                         if (err){  res.send(err);  }
                        
                             res.json(todos);
                         });
                         break;
         
                         case 'personasactivasfiltro':
                     var arrr=req.params.id3.split('¬')
                     console.log(arrr)

                     var filtro=''
                     if(arrr[1]==='')
                     {
                        filtro='{' +  '"idempresa":' + '"' + arrr[0] + '",' + '"estado":' + '"' +  req.params.email+ '"' + '}'
                     }
                     else
                     {
                        filtro='{' + '"idempresa":' + '"' + arrr[0] + '",' + '"estado":' + '"' +  req.params.email+ '",' + arrr[1] +'}'
                     }
console.log(filtro)
                            Personal.find(JSON.parse(filtro),function(err, todos) {
                             if (err){  res.send(err);  }
                            
                                 res.json(todos);
                             });
                             break;
             
                         
                case 'empresatodo':
                    ;
                    if(req.params.email==='todos')
                    {
                        Personal.find({idempresa:req.params.id3},function(err, todos) {
                            if (err){  res.send(err);  }
                                res.json(todos);
                            });

                    }
                    else
                    {
                        Personal.find({idempresa:req.params.id3,estado:req.params.email},function(err, todos) {
                            if (err){  res.send(err);  }
                                res.json(todos);
                            });
                    }
        
                     break;
                   
            }
        
        
    }
 }}}}
}
exports.deletePersonal = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Usuario '});




    Personal.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        var arra1 = functool.getImagesruta (todo.foto);
        if(arra1!==''  &&   arra1!=='5f146aa48caa41db981e6830'){Image.findByIdAndRemove({_id:arra1 }, function(err, todo) {});}
    
        res.json(todo);
    });
}

exports.creaPersonal2s = function(req, res, next){
  
 
    Bitacora.create(req.body.bitacora);

if(req.params.recordID)
{
    if(req.params.recordID=='actualizanov')
    {  
        

        Personal.findById({ _id: req.body._id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   
               
             //   todo.nombre        	=	req.body.nombre          	;
              //  todo.cui 	=	req.body.cui 		;
                todo.nov 	=	(req.body.nov).trim() 		;
           
    
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err)  
                     }
               
                    res.json(todo);
                });
            }
        });

    }
    else
    {
 
    if(req.params.recordID=='actualiza2')
    {  
        

        Personal.findById({ _id: req.body._id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   
                  todo.email        	=	req.body.email            	;
                todo.nombre        	=	req.body.nombre          	;
                todo.cui 	=	req.body.cui 		;
                todo.direccion   	=	req.body.direccion   	 	;
                todo.telefono    	=	req.body.telefono      	;
                   todo.nov    	=	req.body.nov    	;
                todo.estadoemail=req.body.estadoemail;
           
    
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err)  
                     }
                 
                    res.json(todo);
                });
            }
        });

    }
    else
    {
        
    Personal.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
             todo.email        	=	req.body.email        	||	todo.email        	;
             todo.correonotifica        	=	req.body.correonotifica        	||	todo.correonotifica        	;
            todo.role        	=	req.body.role       	||	todo.role        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.nombrealias        	=	req.body.nombrealias        	||	todo.nombrealias        	;
            todo.cui 	=	req.body.cui 	||	todo.cui 	;
            todo.direccion   	=	req.body.direccion   	||	todo.direccion   	;
            todo.telefono    	=	req.body.telefono    	||	todo.telefono    	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.lenguaje    	=	req.body.lenguaje    	||	todo.lenguaje    	;
            todo.sexo    	=	req.body.sexo    	||	todo.sexo    	;
            todo.estado    	=	req.body.estado    	||	todo.estado    	;
            todo.nov    	=	req.body.nov    	||	todo.nov    	;
            todo.unidad    	=	req.body.unidad    	||	todo.unidad    	;
            todo.interno    	=	req.body.interno    	||	todo.interno    	;
            todo.accesohora    	=	req.body.accesohora    	||	todo.accesohora    	;
            todo.estadoemail=req.body.estadoemail  || todo.estadoemail;
            todo.codpersonal    	=	req.body.codpersonal    	||	todo.codpersonal    	;
            todo.fechanac    	=	req.body.fechanac    	||	todo.fechanac    	;
            todo.usuarioup=req.body.bitacora.email;
            todo.tiposuscriptor    	=	req.body.tiposuscriptor    	||	todo.tiposuscriptor    	;
            

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err)  
                 }
             
                res.json({ records: todo });
            });
        }
    });

}}}





}





