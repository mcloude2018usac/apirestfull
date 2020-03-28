
var Participa2 = require('../models/participa2');
var Bitacora = require('../models/bitacora');
var Aread_evento = require('../models/aread_evento');
var correop= require('../../app/controllers/mailprueba');
var Evento = require('../models/eventos');

exports.getParticipa2 = function(req, res, next){
   
        if(req.params.id2)
    { 
        
        if(req.params.id2=='correo')
        { 


            Aread_evento.find({'idtipoevento.codigo':'3'},function(err, todos) {
                if (err){  res.send(err);  }
                Participa2.find({'idtipoevento.id':'3'},function(err, todos10) {
                    if (err){ res.send(err); }
                         
                    
                            for (var i = 0; i < todos.length; i++) {

                                console.log(todos[i]._id + ' '+todos[i].nombre)
                                var aa='';
                                var cantidad=0;
                                var correo=[];
                                          html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>EL RECTOR DE LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p><strong>INGENIERO MURPHY PAIZ</strong></p><p><strong>Y LA COORDINADORA DE CURSOS LIBRES Y CURSOS ACTUALIZACIÓN</strong></p><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado participante</p><p></p><p>Gracias por suscribirte al curso de: <strong>' + todos[i].nombre + '.</strong></strong> </p><p></p><p>Periodo de clases del 30 marzo al 03 de Abril del 2020 en el horario establecido.</p><strong>Pasos para ingresar al curso:</strong></<strong><br>1.Curso será habilitado el primer día de clases. <br> <br> 2.Ingresa al link y escribe la contraseña. <br>' + todos[i].dia +'</br>    </td></tr></p><p>3.Tu diploma de participación se envía a final del curso.  <br></p><p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'

                                for (var ii = 0; ii < todos10.length; ii++) {
                                    if(todos[i]._id==todos10[ii].idevento)
                                    {
                                        aa=aa+todos10[ii].correo+';'
                                        correo.push(todos10[ii].correo)
                                        cantidad++;
                                        

                                    }
                                }
                                correo.push('mario.morales@mcloude.com')
                                correo.push('jggm.meph@gmail.com')
                                correop.sendMails(correo,html1,'Eventos cursos libres en linea',['mario.morales@mcloude.com'])
                                console.log(cantidad)
                                console.log(aa)
                               


                            }
                    


                });


        });


          


        }
        else
        {
            if(req.params.id2=='correo2')
        { 

//http://127.0.0.1:9090/api/participa2s/1/correo2
            Evento.find({ubicacion:'Virtual'},function(err, todos) {
                if (err){  res.send(err);  }
                Participa2.find({"idevento" :{
                    "$in" : [
                        "5e7a6d15187210001ea6e989","5e7a6d9d187210001ea6e98f","5e7a6e16187210001ea6e991"
                        ,"5e7a7a64187210001ea6e99d","5e7bcb0e737144004a13630f","5e7a79fc187210001ea6e99b","5e7b9e46cf97ea0029d5aa8c"
                    ]
                }},function(err, todos10) {
                    if (err){ res.send(err); }
                        
                    
                            for (var i = 0; i < todos.length; i++) {

                                console.log(todos[i]._id + ' '+todos[i].nombre)
                                var aa='';
                                var cantidad=0;
                                var correo=[];
                                          html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>EL RECTOR DE LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p><strong>INGENIERO MURPHY PAIZ</strong></p><p><strong>Y LA COORDINADORA DE CURSOS LIBRES Y CURSOS ACTUALIZACIÓN</strong></p><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado participante</p><p></p><p>Gracias por suscribirte al curso de: <strong>' + todos[i].nombre + '.</strong></strong> </p><p></p><p></p><strong>Pasos para ingresar al curso:</strong></<strong><br>1.Curso será habilitado el primer día de clases. <br> <br> 2.Ingresa a Facebook Live: https://www.facebook.com/CursosLibresUSAC  <br>' + todos[i].fecha +'</br>    </td></tr></p><p>3.Tu diploma de participación se envía a final del curso.  <br></p><p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos de Guatemala</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'

                                for (var ii = 0; ii < todos10.length; ii++) {
                                    if(todos[i]._id==todos10[ii].idevento)
                                    {
                                        aa=aa+todos10[ii].correo+';'
                                        cantidad++;
                                        

                                    }
                                }
                                correo.push('mario.morales@mcloude.com')
                                
                                correop.  sendEmail(correo,html1,'Eventos cursos libres en linea',['mario.morales@mcloude.com'])
                                console.log(cantidad)
                                console.log(aa)
                               


                            }
                    


                });


        });


          


        }
        else
        {
            Participa2.find({idevento:req.params.id,_id:req.params.id2},function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });


        }}
      
    }
    else
    { Participa2.find({idevento:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }


    
       
    
}
exports.deleteParticipa2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Participa2 '});
    Participa2.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaParticipa22s = function(req, res, next){
   
 
  if(req.params.id=='actualiza')
{ 
    Participa2.findById({ _id: req.body._id}, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  
            var d = new Date();

            todo.idtipoevento=todo.idtipoevento || todo.idtipoevento;

            todo.idarea= todo.idarea || todo.idarea;
            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.otros 	=	req.body.otros 	||	todo.otros 	;
            todo.cuenta 	=	Number(req.body.cuenta)+1 	||	Number(todo.cuenta)+1 	;
            todo.fecha 	=	d.toISOString()	;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Participa2.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
            todo.idtipoevento=todo.idtipoevento || todo.idtipoevento;

            todo.idarea= todo.idarea || todo.idarea;
                todo.idevento        	=	req.body.idevento        	||	todo.idevento;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.apellido 	=	req.body.apellido	||	todo.apellido 	;
                todo.genero 	=	req.body.genero	||	todo.genero 	;
                todo.edad 	=	req.body.edad	||	todo.edad 	;
                todo.correo 	=	req.body.correo	||	todo.correo 	;
                todo.telefono    	=	req.body.telefono    	||	todo.telefono    	;
                todo.unidad   	=	req.body.unidad    	||	todo.unidad   	;
                todo.otros   	=	req.body.otros    	||	todo.otros   	;
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


        Participa2.find({  idtipoevento	: req.body.idtipoevento       	,
            idarea	: req.body.idarea       	,
            idevento       	: req.body.idevento       	
         },function(err, todos100) {
            if (err){ res.send(err); }
       
            if(todos100.length>80)   {    res.status(500).send('Ya no existe cupo para este curso'); }
            else
            {   


        Participa2.find({  idtipoevento	: req.body.idtipoevento       	,
            idarea	: req.body.idarea       	,
            idevento       	: req.body.idevento       	,
            correo    	: req.body.correo   	
         },function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Ya existes asignado este curso con este correo electronico'); }
            else
            {   

                    Bitacora.create(req.body.bitacora);
                    var d = new Date();
                    Participa2.create({  
                    idtipoevento	: req.body.idtipoevento       	,
                    idarea	: req.body.idarea       	,
                    idevento       	: req.body.idevento       	,
                    nombre        	: req.body.nombre        	,
                    apellido    	: req.body.apellido    	,
                    genero    	: req.body.genero    	,
                    edad   	: req.body.edad 	,
                    correo    	: req.body.correo   	,
                    telefono 	: req.body.telefono 	,
                    unidad 	: req.body.unidad 	,
                    otros 	: req.body.otros 	,
                    estado 	: req.body.estado 	,
                    usuarionew:req.body.bitacora.email,
                    cuenta 	: '1' 	,
                    fecha:d.toISOString()	
                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });
            }
        });
    }

    });
}
}

}





