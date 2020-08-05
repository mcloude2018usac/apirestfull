
var Participa2 = require('../models/participa2');
var Participa = require('../models/participa');
var Bitacora = require('../models/bitacora');
var Aread_evento = require('../models/aread_evento');
var correop= require('../../app/controllers/mailprueba');
var Evento = require('../models/eventos');
var Estudiantepcb =  require('../models/asignapcb');
var Estudiantepcb2 =  require('../models/asignaestudiante');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  } 

exports.getParticipa2 = function(req, res, next){
   
        if(req.params.id2)
        {
        if(req.params.id2=='correosFECHAS')
        { 

           console.log('entrea')

           

            Estudiantepcb.find({ "createdAt": {"$gte": new Date('2020-06-26T03:00:00.000Z')   , "$lt": new Date('2020-06-26T06:00:00.000Z')  }}).select({idestudiante:1}).exec(function(err, todos10) {
                if (err){  res.send(err);  }
                console.log('pasa')
     var     html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado Aspirante: </p><p></p><p> Hola, si te apareció la fecha de nacimiento en lugar de tu fecha de examen por favor ingresa nuevamente con tu usuario y contraseña, clic en SUN, luego asignación de exámenes de ubicación, asignación PCB. <br> En el cuadro que te sale en esa pantalla están los datos de tu asignación da clic en generar constancia de inscripción a PCB Te debe aparecer la fecha correcta de tu prueba de conocimientos básicos. <br>No debes volver a dar clic en el botón + únicamente generar tu constancia de inscripción a PCB.<br> <p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'
     var cantidad=0;
     var correo=[];
for (var ii = 0; ii < todos10.length; ii++) {

        
var aa='';


    aa=aa+todos10[ii].idestudiante+';'
    correo.push(todos10[ii].idestudiante)
    cantidad++;
    


}

console.log(todos10.length)
correo.push('mario.morales@mcloude.com')

                    
                setTimeout(
                    correop.sendMails,
                    7000,
                    correo,html1,'SUN',[]
                  )


                
res.json(todos10);  
              

                    
              



                           




        });


          


        }
        else
        {
    
    
        if(req.params.id2=='correosunUNDEFINED3')
        { 

           console.log('entrea')

           

         
     var     html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado Aspirante: </p><p></p><p>Te informamos que hemos revisado nuestra base de datos y queremos informarte que has ingresado datos incorrectos al realizar la inscripción a las Pruebas de Conocimientos Básicos PCB.  <br><br> Si tu nombre en la constancia de inscripción a PCB aparece como: UNDEFINED o en blanco  <br>   Te informamos que ESA INSCRIPCIÓN HA QUEDADO SIN EFECTO y con esos datos NO podrás examinarte de las Pruebas de Conocimientos Básicos ya que NO registraste un Número de Orientación Vocacional correcto o válido.    </p> <br>Toma en cuenta que NO podrás inscribirte a las Pruebas de Conocimientos Básicos. <br><br>o	Si no te has examinado de la Prueba de Orientación Vocacional <br> o	Si no te han entregado tus resultados de la Prueba de Orientación Vocacional <br> <br>Si ya te examinaste de la Prueba de Orientación Vocacional y ya cuentas con tus resultados de dicha prueba en tarjeta o en pdf descargado al final de dicha prueba entonces debes seguir estos pasos: <br> <br> 1.	Verifica en tu tarjeta o resultado en pdf de la Prueba de Orientación Vocacional el Número de Orientación Vocacional NOV el cual consta de 10 dígitos (ejemplo: 2020000001).  <br> 2.	Ingresa a la página https://usac-enlinea.web.app con tu usuario y contraseña registrados     <br> 3.	Ingresa a la opción SUN, luego asignación de exámenes de ubicación, luego asignación PCB. <br>  4.	En el cuadro que te aparece ingresa tu número de Orientación Vocacional correcto. NO debes ingresar otro número diferente al de Orientación Vocacional.   <br>5.	Si ingresas un número de Orientación Vocacional correcto, el sistema te indicará tu nombre y número ingresado. Debes dar clic en "si" ÚNICAMENTE si los datos que aparecen son los tuyos de lo contrario verifica el número e intenta nuevamente este paso. <br>6.	Selecciona “en donde vas a estudiar” y “Unidad Académica” e ingresa tu fecha de nacimiento. <br>7.	Clic en “asignar” <br>8.	Clic en “generar constancia en PDF”<br>9.	Revisa que tus datos estén correctos en tu constancia de inscripción<br> 10.	Listo, ya estas inscrito adecuadamente a las Pruebas de Conocimientos Básicos. <br><br> <p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'
     
     var correo=['kevinestuardo.garcia@gmail.com',
     'beatrizvasquez937@gmail.com',
     'Bybianaldana1999@gmail.com',
     'mdeleonmirand@gmail.com',
     'mariaisabelveterinaria8@gmail.com',
     'danielaprado488@gmail.com',
     'ludman.xitumul@gmail.com',
     'maldonadow89@hotmail.com',
     'o.liz1601@gmail.com',
     'praxidesmatheu@gmail.com',
     'lesliaguilo17@gmail.com',
     'tomasamica2017@gmail.com',
     'garciadavidgomez01@gmail.com',
     'apmartinez020@gmail.com',
     'julioalfredosantosagustin@gmail.com',
     'julymartinramirez89@gmail.com',
     'hrita3323@gmail.com',
     'gabytrejo201v@gmail.com',
     'meryhg4320@gmail.com',
     'jefaxicara@gmail.com',
     'karriola2017ig@gmail.com',
     'dabycaal@gmail.com',
     'danielaroblero28@gmail.com',
     'sofisalazar2312@gmail.com',
     'mazariegosalejaalvarez06@gmail.com',
     'xiomaraoliva356@gmail.com',
     'yessygalindo154@gmail.com',
     'garbo_flakis_16@hotmail.com',
     'carterbrigs9@gmail.com',
     'isabel.ramoslds17@gmail.com',
     'kristhemu16@gmail.com',
     'herrerafrancisco280@gmail.com',
     'ytak1997@gmail.com',
     'gaby11cola12@gmail.com',
     'riverapaola384@gmail.com',
     'avaloscristy2000@gmail.com',
     'Kairaestrada15@gmail.com',
     'yenifergaby728@hotmail.com',
     'venoni157@gmail.com',
     'sergiocruz.sc621@gmail.com',
     'yaelguerra0@Gmail.com',
     'ferodas2001@gmail.com',
     'joseguillermo888pg@gmail.com',
     'perezlupii18@gmail.com',
     'samayoahernandez982@gmail.com',
     'aleabigailg@gmail.com',
     'reykarla2000@gmail.com',
     'alexa84310@gmail.com',
     'roselins00@hotmail.com',
     'aledeleonsocoy123@gmail.com',
     'angelsolares03@gmail.com',
     'marioalvarezgcr7@gmail.com',
     'marjoriehernandez2867@gmail.com',
     'evelynbaltazar016@gmail.com',
     'puypuevelynguadalupe@gmail.com',
     'samayoa.jane@gmail.com',
     'alejososa2029@gmail.com',
     'mirellamendezg@gmail.com',
     'jakilary14@gmail.com',
     'joanncabrera200@gmail.com',
     'jppineda2014@gmail.com',
     'Juanyoc1969@gmail.com',
     'lisbettiquiram1999@gmail.com',
     'sharolyoc2000@gmail.com',
     'anadeliasimon50@gmail.com',
     'gonzalesjeferson5@gmail.com',
     'darlyndg13@gmail.com',
     'perezjackie429@gmail.com',
     'eugeniatoscano69@gmail.com',
     'jcrodas19f@gmail.com',
     'andreaalvarez280694@gmail.com',
     'angeleivaaa8900@gamil.com',
     'vivianherrera2003@gmail.com',
     'jeseniasajquin@gmail.com',
     'choffog502@gmail.com',
     'pinedacontre274@gmail.com',
     'dinavalvert30@gmail.com',
     'helenesmeraldacc@gmail.com',
     'gl1423264@gmail.com',
     'Franarroyo890@gmail.com',
     'carlosmayen2003l@gmail.com',
     'nathalielle36@gmail.com',
     'anibaljulio70@gmail.com',
     'abbndrea@gmail.com',
     'marcolopez.jml@gmail.com',
     'padillaf099@gmail.com',
     'katry2401@gmail.com',
     'pabimonroy@gmail.com',
     'jaquelynrivera974@gmail.com',
     'Alejaa.byun@gmail.com',
     'ixchelh506@gmail.com',
     'lissar145@gmail.com',
     'lissar145@gmail.com',
     'hiromygutierrez88@gmail.com',
     'perezpastoralejandro@gmail.com',
     'wilder02.a@gmail.com',
     'paobel308@gmail.com',
     'lilianchuc2846@gmail.com',
     'miguelcordero777@gmail.com',
     'hsteysi@gmail.com',
     'jesusjuarezlinzo@gmail.com',
     'martinezyasmin.eg@gmail.com',
     'josue0.324587@gmail.com',
     'estuardo364@gmail.com',
     'bertamendez1997@gmail.com',
     'vane27360@gmail.com',
     'seilymmz2@gmail.com',
     'dallanapaola2003.com@gmail.com',
     'gironvilla.25@gmail.com',
     '2002jaqui@gmail.com',
     'dfip119@gmail.com',
     'paolita.gamez@yahoo.es',
     'saraimunos23@gmail.com',
     'enriquebamaca25@gmail.com',
     'roquediana96@gmail.com',
     'wmezquitateo123456@gmail.com',
     'simonkatherine62@gmail.com',
     'melany.sarat@yahoo.com',
     'alejandraaleman1802@gmail.com',
     'bgih28@hotmail.com',
     'isaacgonzpe29@gmail.com',
     'ciindysanchez09@gmail.com',
     'mariobarraza9.mb@gmail.com',
     'iscagomez9@gmail.com',
     'caballeroskarla15@gmail.com',
     'josecatun2015@hotmail.com',
     'helenquel89@gmail.com',
     'kikelima69@gmail.com',
     'luciaaguilar2722@gmail.com',
     'mayerlyrojas2103@gmail.com',
     'SharonPerez510@gmail.com',
     'izabeldelcidmancilla@gmail.com',
     'sharon.aguirre0509@gmail.com',
     'andresyaquian0@gmail.com',
     'noheliamorales37@gmail.com'];



correo.push('mario.morales@mcloude.com')
console.log(correo)
                    
                setTimeout(
                    correop.sendMails,
                    7000,
                    correo,html1,'SUN',[]
                  )


                
res.json({estado:'si'});  
              

                    
              



                           






          


        }
        else
        {
        if(req.params.id2=='correosunUNDEFINED2')
        { 

           console.log('entrea')

           

            Estudiantepcb2.find({ }).select({idasigna:1}).exec(function(err, todos10) {
                if (err){  res.send(err);  }

                
                Estudiantepcb.find({ }).select({idasigna:1,_id:1,idestudiante:1}).exec(function(err, todos100) {
                if (err){  res.send(err);  }
                console.log('pasa')
   var encuentra=0;
for (var ii = 0; ii < todos100.length; ii++) {

       encuentra=0;
                        for (var ii2 = 0; ii2 < todos10.length; ii2++) {

                            if(todos100[ii]._id==todos10[ii2].idasigna){
                                encuentra=1;
                                break;
                            }

                        


                        }
if(encuentra==0)
{
    console.log(todos100[ii].idestudiante)
}


}



                
res.json(todos10);  
              

});
        });


          


        }
        else
        {
        if(req.params.id2=='correosunUNDEFINED')
        { 

           console.log('entrea')

           

            Estudiantepcb.find({  "nombre" : "udefined"}).select({idestudiante:1}).exec(function(err, todos10) {
                if (err){  res.send(err);  }
                console.log('pasa')
     var     html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado Aspirante: </p><p></p><p>Te informamos que hemos revisado nuestra base de datos y queremos informarte que has ingresado datos incorrectos al realizar la inscripción a las Pruebas de Conocimientos Básicos PCB.  <br><br> Si tu nombre en la constancia de inscripción a PCB aparece como: UNDEFINED o en blanco  <br>   Te informamos que ESA INSCRIPCIÓN HA QUEDADO SIN EFECTO y con esos datos NO podrás examinarte de las Pruebas de Conocimientos Básicos ya que NO registraste un Número de Orientación Vocacional correcto o válido.    </p> <br>Toma en cuenta que NO podrás inscribirte a las Pruebas de Conocimientos Básicos. <br><br>o	Si no te has examinado de la Prueba de Orientación Vocacional <br> o	Si no te han entregado tus resultados de la Prueba de Orientación Vocacional <br> <br>Si ya te examinaste de la Prueba de Orientación Vocacional y ya cuentas con tus resultados de dicha prueba en tarjeta o en pdf descargado al final de dicha prueba entonces debes seguir estos pasos: <br> <br> 1.	Verifica en tu tarjeta o resultado en pdf de la Prueba de Orientación Vocacional el Número de Orientación Vocacional NOV el cual consta de 10 dígitos (ejemplo: 2020000001).  <br> 2.	Ingresa a la página https://usac-enlinea.web.app con tu usuario y contraseña registrados     <br> 3.	Ingresa a la opción SUN, luego asignación de exámenes de ubicación, luego asignación PCB. <br>  4.	En el cuadro que te aparece ingresa tu número de Orientación Vocacional correcto. NO debes ingresar otro número diferente al de Orientación Vocacional.   <br>5.	Si ingresas un número de Orientación Vocacional correcto, el sistema te indicará tu nombre y número ingresado. Debes dar clic en "si" ÚNICAMENTE si los datos que aparecen son los tuyos de lo contrario verifica el número e intenta nuevamente este paso. <br>6.	Selecciona “en donde vas a estudiar” y “Unidad Académica” e ingresa tu fecha de nacimiento. <br>7.	Clic en “asignar” <br>8.	Clic en “generar constancia en PDF”<br>9.	Revisa que tus datos estén correctos en tu constancia de inscripción<br> 10.	Listo, ya estas inscrito adecuadamente a las Pruebas de Conocimientos Básicos. <br><br> <p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'
     var cantidad=0;
     var correo=[];
for (var ii = 0; ii < todos10.length; ii++) {

        
var aa='';


    aa=aa+todos10[ii].idestudiante+';'
    correo.push(todos10[ii].idestudiante)
    cantidad++;
    


}

console.log(todos10.length)
correo.push('mario.morales@mcloude.com')
console.log(correo)
                    
                setTimeout(
                    correop.sendMails,
                    7000,
                    correo,html1,'SUN',[]
                  )


                
res.json(todos10);  
              

                    
              



                           




        });


          


        }
        else
        {
        if(req.params.id2=='correosunhum1a1')
        { 

           console.log('entrea')

           

            Estudiantepcb2.find({"fexamen" : "Sat Jul 11 2020 00:00:00 GMT+0000 (Coordinated Universal Time)",  "nombre" : {         "$ne" : "udefined"        }}).select({idestudiante:1}).exec(function(err, todos10) {
                if (err){  res.send(err);  }
                console.log('pasa')
     var     html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado Aspirante: </p><p></p><p>Gracias por inscribirte a las Pruebas de Conocimientos Básicos PCB. <br><br> Te informamos que las fechas de aplicación de Pruebas de Conocimientos Básicos serán las siguientes:  <br>   Si vas a estudiar en las Sedes Departamentales FAHUSAC o Formación Inicial Docente FID:   </p>  Lenguaje  11-07-2020 <br> Matemática 11-07-2020<br><br> En los horarios establecidos en tu constancia de inscripción a PCB. <br><br> En tu constancia te deben aparecer únicamente las materias de las que te vas a examinar con estas fechas. <br><br><br> Si no te aparecen estas fechas en tu constancia de PCB entonces sigue estos pasos:  <br> <br> 1. Ingresa a la página https://usac-enlinea.web.app con tu usuario y contraseña registrados  <br>  Ingresa a la opción SUN, luego asignación de examenes de ubicación, luego asignación PCB    <br> 2. En el cuadro que te aparece vuelve a dar clic en generar tu constancia de inscripción a PCB.  <br>  3. Revisa que tus fechas ya aparezcan de manera correcta. <br>  4. Listo, espera las fechas que aparecen en tu constancia de inscripción a PCB para poder examinarte.  <br><br> NO debes volver a inscribirte, ÚNICAMENTE debes generar tu pdf para que las fechas te aparezcan correctas.  <br> <br> Si en la constancia que generaste al momento de inscribirte ya te aparecen las fechas correctas tal y como estan en este correo entonces no debes realizar estos pasos.  <p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'
                         var cantidad=0;
                         var correo=[];
                for (var ii = 0; ii < todos10.length; ii++) {
                 
                            
                    var aa='';
                 
                
                        aa=aa+todos10[ii].idestudiante+';'
                        correo.push(todos10[ii].idestudiante)
                        cantidad++;
                        

                   
                }

                console.log(todos10.length)
                correo.push('mario.morales@mcloude.com')
              //  correo.push('ambrosioaleman07@gmail.com');
              //  correo.push('jggm.meph@gmail.com')
console.log(correo)
                    
                setTimeout(
                    correop.sendMails,
                    7000,
                    correo,html1,'SUN',[]
                  )



                            res.json(todos10);  




        });


          


        }
        else
        {
        if(req.params.id2=='correosun')
        { 

           console.log('entrea')

            Estudiantepcb.find({  "fexamen" : {     "$ne" : "Sat Jul 11 2020 00:00:00 GMT+0000 (Coordinated Universal Time)"  },  "nombre" : {                 "$ne" : "udefined"            }}).select({idestudiante:1}).exec(function(err, todos10) {
                if (err){  res.send(err);  }
                console.log('pasa')
               var     html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado Aspirante: </p><p></p><p>Gracias por inscribirte a las Pruebas de Conocimientos Básicos PCB. <br><br> Te informamos que las fechas de aplicación de Pruebas de Conocimientos Básicos serán las siguientes:  <br>   Si vas a estudiar en el Campus Central o en Centros Universitarios Departamentales:  </p>  Lenguaje  06-07-2020 <br> Matemática 07-07-2020<br> Física 08-07-2020<br> Biología  09-07-2020   <br>  Química  10-07-2020 <br><br> En los horarios establecidos en tu constancia de inscripción a PCB. <br><br> En tu constancia te deben aparecer únicamente las materias de las que te vas a examinar con estas fechas. <br><br><br> Si no te aparecen estas fechas en tu constancia de PCB entonces sigue estos pasos:  <br> <br> 1. Ingresa a la página https://usac-enlinea.web.app con tu usuario y contraseña registrados  <br>  Ingresa a la opción SUN, luego asignación de examenes de ubicación, luego asignación PCB    <br> 2. En el cuadro que te aparece vuelve a dar clic en generar tu constancia de inscripción a PCB.  <br>  3. Revisa que tus fechas ya aparezcan de manera correcta. <br>  4. Listo, espera las fechas que aparecen en tu constancia de inscripción a PCB para poder examinarte.  <br><br> NO debes volver a inscribirte, ÚNICAMENTE debes generar tu pdf para que las fechas te aparezcan correctas.  <br> <br> Si en la constancia que generaste al momento de inscribirte ya te aparecen las fechas correctas tal y como estan en este correo entonces no debes realizar estos pasos.  <p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'
               var cantidad=0;
               var correo=[];
      for (var ii = 0; ii < todos10.length; ii++) {
       
                  
          var aa='';
       if(cantidad==300)
       {
          correo.push(todos10[ii].idestudiante)
          correo.push('mario.morales@mcloude.com')
          sleep(10000).then(() => {
            setTimeout(
                correop.sendMails,
                227000,
                correo,html1,'SUN',[]
              )
            // This will execute 10 seconds from now
          });

        
            console.log(correo);
            cantidad=0;
            correo=[];
            cantidad++

       }
       else
       {
        correo.push(todos10[ii].idestudiante)
           cantidad++
       }
    
      
            if(ii==todos10.length)
            {
              res.json(todos10);  
            }
      
              

         
      }


                       




        });


          


        }
        else
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
                                          html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>EL RECTOR DE LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p><strong>INGENIERO MURPHY PAIZ</strong></p><p><strong>Y LA COORDINADORA DE CURSOS LIBRES Y CURSOS ACTUALIZACIÓN</strong></p><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado participante</p><p></p><p>Gracias por suscribirte al curso de: <strong>' + todos[i].nombre + '.</strong></strong> </p><p></p><p>Periodo de clases del 30 marzo al 03 de Abril del 2020 en el horario establecido.</p><strong>Pasos para ingresar al curso:</strong></<strong><br>1.Curso será habilitado el primer día de clases. <br> <br> 2.Ingresa al link y escribe la contraseña. <br>' + todos[i].dia +'</br>    </td></tr></p><p>3.Tu diploma de participación se envía al final del curso.  <br></p><p>4.El horario podrás preguntarle al tutor cuando ingreses a la plataforma.  <br></p><p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'

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
                                setTimeout(
                                    correop.sendMails,
                                    7000,
                                    correo,html1,'Coordinadora IT - Eventos en línea',[]
                                  )

                                

                            //    correop.sendMails(correo,html1,'Eventos cursos libres en linea',['mario.morales@mcloude.com'])
                                console.log(cantidad)
                                console.log(aa)
                               


                            }
                            res.json(todos);  



                });


        });


          


        }
        else
        {
            if(req.params.id2=='correo2')
        { 

//http://127.0.0.1:9090/api/participa2s/1/correo2
            Evento.find({"_id" :{
                "$in" : [
                    "5e7a6d15187210001ea6e989","5e7a6d9d187210001ea6e98f","5e7a6e16187210001ea6e991"
                    ,"5e7a7a64187210001ea6e99d","5e7bcb0e737144004a13630f","5e7a79fc187210001ea6e99b","5e7b9e46cf97ea0029d5aa8c"
                ]
            }},function(err, todos) {
                if (err){  res.send(err);  }
                console.log
                Participa.find({"idevento" :{
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
                                          html1='<html><body> <div class="es-wrapper-color">      <table cellpadding="0" cellspacing="0" class="es-wrapper" width="100%">    <tbody><tr>    <td valign="top" class="esd-email-paddings"><table cellpadding="0" cellspacing="0" class="es-header esd-header-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-image"><a href="" target="_blank"><img src="http://52.90.195.238:8500/logousac1.png" alt="" width="124" style="display: block;"></a>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">    <tbody><tr>    <td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">    <tbody><tr>    <td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%">    <tbody><tr>    <td align="center" class="esd-block-text es-p15b"><h2 style="font-size: 16px; text-align: center;"><strong>EL RECTOR DE LA UNIVERSIDAD DE SAN CARLOS DE GUATEMALA</strong></h2><p><strong>INGENIERO MURPHY PAIZ</strong></p><p><strong>Y LA COORDINADORA DE CURSOS LIBRES Y CURSOS ACTUALIZACIÓN</strong></p><p></p><p><br></p><p style="text-align: left;"></p>    </td></tr><tr>    <td align="left" class="esd-block-text"><p><strong>Estimado participante</p><p></p><p>Gracias por suscribirte al curso de: <strong>' + todos[i].nombre + '.</strong></strong> </p><p></p><p></p><strong>Pasos para ingresar al curso:</strong></<strong><br>1.Curso será habilitado el primer día de clases. <br> <br> 2.Ingresa a Facebook Live: https://www.facebook.com/educacion.continua.usac/  <br>' + todos[i].fecha +'</br>    </td></tr></p><p>3.Tu diploma de participación se envía al final del curso.  <br></p><p>Atentamente,<br>Coordinadora IT<br>Universidad de San Carlos de Guatemala</br>      </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </td></tr>    </tbody></table>    </div> </body></html>'
                                var compara=6;  
                                for (var ii = 0; ii < todos10.length; ii++) {
                                    if(todos[compara]._id==todos10[ii].idevento)
                                    {
                                        aa=';'
                                        cantidad++;
                                        correo.push(todos10[ii].correo)
                                        

                                    }
                                }
                                correo.push('mario.morales@mcloude.com')
                                correo.push('jggm.meph@gmail.com')
                              

                                setTimeout(
                                    correop.sendMails,
                                    5000,
                                    correo,html1,'Coordinadora IT - Eventos en línea',[]
                                  )


                           //     correop.sendMails(correo,html1,'Eventos en linea',['mario.morales@mcloude.com'])
                                console.log(cantidad)
                                console.log(aa)
                                break;
                               


                            }

                     res.json(todos);  


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


        }    }}}}}}}
      
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





