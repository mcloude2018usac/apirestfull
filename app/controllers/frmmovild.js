
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');

exports.getFrmmovild = function(req, res, next){
    if(req.params.id4)
    {   
        if(req.params.id2=='camposdetalle')
        { //,"Check list detalle"
            Frmmovild.find({idempresa:req.params.id3,idmovil:req.params.id,  "type" : {$in :  ["Formulario detalle","Check List Detalle"]}}).sort({'order': 1}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
             });
        }
        else
        {
            if(req.params.id2=='todos')
            { 
                Frmmovild.find({idempresa:req.params.id3,idmovil:req.params.id4}).sort({'order': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            {
                Frmmovild.find({idempresa:req.params.id3,estado:req.params.id2,idmovil:req.params.id4}).sort({'order': 1}).exec(function(err, todos) {
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
            case 'estado':
                    Frmmovild.find({estado:req.params.id},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'tipoformulario':
              Frmmovild.find({idmovil:req.params.id}).populate('type').sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
               
                
            });
            case 'camposformulario':
                console.log({idmovil:req.params.id})
                Frmmovild.find({idmovil:req.params.id}).populate('type').sort([['order', 1]]).exec(function(err, todos) {
                  if (err){ res.send(err); }
                 
                  var myData = [];
                  for(var i = 0; i < todos.length;i++){
                    myData.push({_id:todos[i]._id ,nombre:todos[i].name  })
                  }

                 res.json(myData);   
                 
                  
              });
            break;
            case 'tipofrmorden':
            Frmmovild.find({idmovil:req.params.id}).sort([['order', -1]]).exec(function(err, todos) {
              if (err){ res.send(err); }
           
              if(todos.length>0)   {    res.json({orden:todos[0].order});   }
             
              
          });
          break;
            default:
              // code block
          }


        
    }
    else
    { Frmmovild.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }}
}
exports.deleteFrmmovild = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    Frmmovild.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaFrmmovild2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.id!=='crea')
{ 
    Frmmovild.findById({ _id: req.params.id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 

           
            var rr= req.body.display 
            var rr2= req.body.required
            if(req.body.tipo=="Etiqueta")
            {rr='false';rr2='false'}


          
            todo.required		=	rr2         	    	;
            todo.placeholder		=	req.body.placeholder        	||	todo.placeholder        	;
            todo.display		=	    rr        	   	||	todo.display   	;
            todo.selected		=	req.body.selected           	;
            todo.default		=	req.body.default        	||	todo.default        	;
            todo.disabled		=	req.body.disabled        		;
            todo.hidden		=	    req.body.hidden             	;
            todo.position		=	req.body.position        	||	todo.position        	;
            todo.labelsizefondt		=	req.body.labelsizefondt        	||	todo.labelsizefondt        	;
            todo.blike=req.body.blike                	;
            todo.fondoetiqueta= req.body.fondoetiqueta        	||	todo.fondoetiqueta        ,
            todo.coloretiqueta=  req.body.coloretiqueta        	||	todo.coloretiqueta       ,

            todo.categoria   			=	req.body.categoria        	||	todo.categoria        	;
           
            todo.idformdetalle   		 ={id:req.body.idformdetalle.id,nombre:req.body.idformdetalle.nombre   }   	;

            todo.usarunaves   			=	req.body.usarunaves             	;
            
            todo.verregistros   			=	req.body.verregistros      	||	todo.verregistros       	;
            
            todo.combofijo   			=	req.body.combofijo        	   	;
            todo.rangomin=req.body.rangomin        	||	todo.rangomin        	;
            todo.rangomax=req.body.rangomax        	||	todo.rangomax        	;
            todo.rangostep=req.body.rangostep        	||	todo.rangostep        	;
            todo.alfatypo=req.body.alfatypo        	||	todo.alfatypo        	;
            todo.respuesta=req.body.respuesta        	||	todo.respuesta        	;
            todo.geoposicion=req.body.geoposicion        	       	;
            

            todo.maxnumregistros=req.body.maxnumregistros        	||	todo.maxnumregistros        	;
            

            todo.valor=req.body.valor        	||	todo.valor        	;
            todo.idfrmconsultaorigen =req.body.idfrmconsultaorigen        	||	todo.idfrmconsultaorigen        	;
            todo.idfrmconsulta2origen=req.body.idfrmconsulta2origen        	||	todo.idfrmconsulta2origen        	;
            todo.nombreconsulta2origen=req.body.nombreconsulta2origen        	||	todo.nombreconsulta2origen        	;
            todo.idcampofiltro=req.body.idcampofiltro        	||	todo.idcampofiltro        	;
            todo.idcampofiltropapa=req.body.idcampofiltropapa        	||	todo.idcampofiltropapa        	;
            todo.idcampofiltromanual=req.body.idcampofiltromanual        	||	todo.idcampofiltromanual        	;
            todo.idfrmconsultaorigenpapa =req.body.idfrmconsultaorigenpapa        	||	todo.idfrmconsultaorigenpapa        	;
            todo.idfrmconsulta=req.body.idfrmconsulta        	||	todo.idfrmconsulta        	;
          
            todo.idfrmconsulta2=req.body.idfrmconsulta2        	||	todo.idfrmconsulta2        	;
            todo.nombreconsulta2=req.body.nombreconsulta2        	||	todo.nombreconsulta2        	;
            
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
  
    var nombret=req.body.name 	    
    nombret=(nombret).toLowerCase().replace(' ','').replace(/[|&;$%@"<>()+,]/g,'');

    Frmmovild.find({ idmovil	:req.body.idmovil 	,
       
        name   	:nombret
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un tipo campo con este nombre : ' + nombret); }
        else
        {   var rr='true'
            if(req.body.type=="5c86c965eddda7022c5d3443")
            {rr='false'}

                    Frmmovild.create({ 
                        idempresa      	: req.body.idempresa     	,
                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                        name   	:nombret 	,
                        nombre:	nombret  + ' ' + req.body.title  + ' ' +req.body.type	,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,
                        default 	: '' 	,
                        
                        idfrmconsultaorigen:req.body.idfrmconsultaorigen,
                        idfrmconsulta2origen:req.body.idfrmconsulta2origen,
                        nombreconsulta2origen:'',
                        idfrmconsultaorigen:req.body.idfrmconsultaorigenpapa,
                        idfrmconsulta:req.body.idfrmconsulta,
                        idfrmconsulta2:req.body.idfrmconsulta2,
                        nombreconsulta2:'',
                        required :rr	,
                        placeholder :'Ingrese un '+ req.body.title+'  Valido'	,
                        display :rr,
                        selected :true 	,
                        disabled :'false' 	,
                        hidden :'false' 	,
                        geoposicion :'false' 	,
                        blike:  'false',
                        usarunaves:  'false',
                        fondoetiqueta: 'cbg117',
                        coloretiqueta:  'cco104',
                        idformdetalle:'',
                        idcampofiltro:'',
                        idcampofiltropapa:'',
                        idcampofiltromanual:'',
                        position : req.body.position 	,
                        labelsizefondt :'14'	,
                        categoria:'' ,
                        combofijo:'true',
                        verregistros:'Ver Todos',
                        rangomin:	 0,
                        rangomax:	 1000,
                        rangostep:	 100,
                        alfatypo: 'text',
                        respuesta:'',
                        maxnumregistros:0,
                        valor:0,
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


exports.creaFrmmovild3s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
    console.log( req.params)
if(req.params.id!=='crea')
{ 
   
    Frmmovild.findById({ _id: req.params.id }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        { 
        
            todo.name       	=	req.body.name        	||	todo.name;    
            todo.nombre       	=	req.body.name + ' '+  req.body.title   + ' '+req.body.type;    
            
            todo.order       	=	req.body.order        	||	todo.order;    
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
  
    var nombret=req.body.name 	    
    nombret=(nombret).toLowerCase().replace(' ','').replace(/[|&;$%@"<>()+,]/g,'');

    Frmmovild.find({ idmovil	:req.body.idmovil 	,
       
        name   	:nombret
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un tipo campo con este nombre : ' + nombret); }
        else
        {   var rr='true'
            if(req.body.type=="5c86c965eddda7022c5d3443")
            {rr='false'}

                    Frmmovild.create({ 
                        idempresa      	: req.body.idempresa     	,
                        idmovil	:req.body.idmovil 	,
                        type   	:req.body.type 	,
                        name   	:nombret 	,
                        nombre:	nombret  + ' ' + req.body.title  + ' ' +req.body.type	,
                        order   :req.body.order 	,
                        title :req.body.title 	,
                        estado 	: req.body.estado 	,
                        default 	: '' 	,

                        required :rr	,
                        placeholder :'Ingrese un '+ req.body.title+'  Valido'	,
                        display :rr,
                        selected :true 	,
                        disabled :'false' 	,
                        hidden :'false' 	,
                        blike:  'false',
                        fondoetiqueta: 'cbg117',
                        coloretiqueta:  'cco104',

                        position :'fixed' 	,
                        labelsizefondt :'14'	,
                        categoria:'' ,
                        combofijo:'true',
                        idformdetalle:'',
                    
                        rangomin:	 0,
                        rangomax:	 1000,
                        rangostep:	 100,
                        alfatypo: 'text',
                        respuesta:'',
                        valor:0,
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


