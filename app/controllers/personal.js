
var Personal = require('../models/user');

var Personalsaldo = require('../models/suscriptorsaldo');
var Personalhis = require('../models/suscriptorhis');
var Bitacora = require('../models/bitacora');
var Tiposuscriptor = require('../models/tipo_suscriptor');
var Entradasdpi = require('../models/entradasdpi');

function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }

exports.getPersonal = function(req, res, next){


    if(req.params.page)
    {

     
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
                        Tiposuscriptor.findById({ _id:todos[0].idsuscriptor.id.tiposuscriptor,idempresa:req.params.id8}, function (err, todo15)  {
                            if (err) {  res.send(err);  }
                            else
                            { 

                                req.params.id3=todo15.cobroparqueos;
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

            });
                        
                    
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
  console.log(req.params)   
                switch(req.params.id2) {
                    case 'pagineo':  
                    console.log('entra')
                       
                            var pagex=    Number(req.params.id3);
                            var limitx=    Number(req.params.email);
                            
                            Personal.paginate({idempresa:req.params.id4},{populate: ['unidad','tiposuscriptor'],lean:     false,page:pagex, limit:  limitx})
                            .then(function(err, todos) {
                                if (err){  res.send(err);  }
                                console.log(todos)
                                    res.end(todos);
                                    res.end();
                                  //  next();
                                });
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
    {console.log(req.params.id2)
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
                case 'emailsolo':
                                        if(req.params.email=='')
                                        {
                                        res.status(500).send('NO EXISTE REGISTRO');
                                        }
                                        else
                                        {
                                           
                                        Personal.find({email:req.params.email,idempresa:req.params.id3}).populate('unidad').populate('tiposuscriptor')
                                        .then(todos => {
                                      
                                            res.json(todos);  
                                            
                                        })
                                        .catch(err => {
                                            res.status(500).send(err.message);  
                                        })
                                    }

                                    break;
        
               case 'unidadper':
               console.log(req.params);
               Personal.find({idempresa:req.params.id3,unidad:req.params.email},function(err, todos) {
                if (err){  res.send(err);  }
                    res.json(todos);
                });
                break;

            }
        
        
    }
 }}}}
}
exports.deletePersonal = function(req, res, next){
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Usuario '});
    Personal.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}

exports.creaPersonal2s = function(req, res, next){
  
 
    Bitacora.create(req.body.bitacora);

if(req.params.recordID)
{
    if(req.params.recordID=='actualizanov')
    {  
        console.log(req.body)

        Personal.findById({ _id: req.body._id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   
               
             //   todo.nombre        	=	req.body.nombre          	;
                todo.cui 	=	req.body.cui 		;
                todo.nov 	=	req.body.nov 		;
           
    
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
        console.log(req.body)

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
            todo.role        	=	req.body.role       	||	todo.role        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
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





