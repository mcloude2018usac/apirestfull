const ULID = require('ulid')
var fs = require('fs');
var mysql = require('mysql')
var functool = require('../controllers/funcionesnode');

connection = mysql.createConnection(
 { 
 host: '21.20.0.28', 
 port:'3333',
 user: 'bpm_desa',  
 password: 'Kb4xg$dHjMFppShkILO4nIM3PDjZS+PSe11', 
 database: 'bpm_catalogos'
 }
);


var generauldi= function(cuantos){

    for(var i = 0; i < cuantos;i++){
        console.log(ULID.ulid().toLowerCase())
      }
      
}
/*
var cambiar(op)
{
var arr=[]
arr.push({codigo:'___replace.resolucion___fecha_horas',nombre:'___replace.resolucion___fecha_horas***'})


arr.push({codigo:'___replace.resolucion___fecha_horas',nombre:'___replace.resolucion___fecha_horas***'})
return ''

}
*/

var generaupdateplantilla= function(){
    if (connection) 
    {   var sql='';
     
    sql = "select vp.id as id, vp.plantilla_resolucion as plantilla ,  vp.firmantes firmantes from bpm_procesos.procesos pp ,bpm_procesos.version_procesos vp  where  pp.id=vp.id_proceso  and     vp.id in(   '01f7451wm8p46wvxx8r3sbsn4a',   '01exmqgmx6s4chtjsm84t7ndge',   '01exmqwbdt5sjvfr2mmtb2gtp6',   '01exj9x3hb7tzhnsfs2e9fay5j',   '01exja432cgs6eq19p0c8skkw3',   '01f4whjv7sw50xqgy44932ztn7',   '01exj91mjaht128x9mz9k5cr6a',   '01exj8c6taz0ctfp3v65q53fsx',   '01f7451wm8p46wvxx8r3sbsn4a',   '01exja432cgs6eq19p0c8skkw3',   '01f4whjv7sw50xqgy44932ztn7',   '01fk6hnm3mcr3te8f95rf08qys',   '01fgnnawnef5kastwdbkmspypv',   '01fg4g656njetz0xwmr6crgqes',   '01fg7fecmzmy3j0wd1550yjjh0',   '01fgcsrz96h8ypd06shf3qgpa3',   '01fgm2dhatnp8maye5d00mvw1t',   '01fgpfwxvfs8258hnm5erdv342',   '01fgme40wyzwyd7agnfvww8d09',   '01fgq9x2ngf9w8wgf220kwfavj',   '01fgpjtfg2apg7qmdpbhfb7k72',   '01f54edncjp25sk9hypa468mxm',   '01f54e6ncp00eb5gb84rrh5tc5',   '01fdjr91rn6b4kep81eeh21w6t',   '01fdsvkjpr2cr84wraaabbaex6',   '01fdt73bankqthj6hcgm4yp7jm',   '01fdt8e9gdtn34shs6bc0bsqx1',   '01fdw6bb4xdf3p8bg2txv9ksbh',   '01fdwcb0xhqy5z7y70zb5aqr7n',   '01fdwgmz11w9h5ejhpyj4y083j',   '01fdwrzrvm2241fcmxs63g7b19',   '01fdwwqrexkxbp2trcapnbhrwk',   '01fdx1vp93qj4nd8wvjpyvqxvm',  "+
     " '01fdwy4t4j9g4p07ep7tpdqtt9',   '01fdyzq20tzsfb5pyk2efb9nyh',   '01fdz1dz7fx1xkvv1a69fvrewm',   '01fdzdt89qtsdqpdy1ns4ebcr2',   '01fdzm3k6nge1pptw739trdqts',   '01fe23rerbt9qwv8w16rry1ep6',   '01fe4xd6kp252spvr85csm901z',   '01feewxjkfn0aw5fft31k2s33e',   '01feg4ag3fpjy8sjjkwgmm7nw6',   '01fdd3pdf87n0jfycyfzn2kt46',   '01fdwenj8k10s0fzjkde82nwgx',   '01femcfq4z2h9xegnbqcw4gdx7',   '01fqfjcwzcvwcmxa1kndrg4hkb',   '01fdg33c0f1gpkmebvc70s6nj9',   '01fdcx0fc9c4z7an7a7afx3jbd',   '01fdb2cexz19wgcsjzey5hpqnw',   '01fdd1y24cqe27a4yqe5t7v47r',   '01fddm3ncbtns4zf24m5bejnk4',   '01fdc2bm4jkabnvyan46sbx3qc',   '01fde999hbsh77tf4rx1gvtjcx',   '01fdg8cqyscrqbfwvxrk2t09wr',   '01fdjgns0r8e1895w8jrp46qsc',   '01fdfs2p83sns1z0sxr2jd5fk7',   '01fddhatbzzm9r29xakqdty9ft',   '01fdadf76w8d3z7yn6n0c80edg',   '01fdsb4jhse1h9wcn6gsd3zqzm',   '01fdjq2ajvh7ked84avczzbv0c',   '01fdw8e4g1bfdggkhrw19n97xs',   '01fdwth5agt8srtxndw3rxaz0r',   '01fe1hr6waxvvg7yshh4b7c9p2',   '01fe1np6yf41h2fy87aksyvcpv',   '01fe3ygdb2xhk2w5wcz8p2qp0h',   '01fdd0s39hr770v04fjtwqxvz6',   '01fecpbpf2456xvecx433h0ptw',   '01fdd3pdf87n0jfycyfzn2kt46',   '01fdd6vsjf8b4m5bn8rjvbgmst',   '01fdrrn0zjjffxvz71d1y1krfv',   '01fqf05nx8reyzp0b4md3zwbp0'      ) and vp.plantilla_resolucion is not null"
    connection.query(sql, function(error, rows) {
        if (error){ 
            res.status(500).send(error.sqlMessage);
         }
        console.log(rows);
        var  cad=''


        
        for(var i = 0; i < rows.length;i++){
            var firmante=rows[i].firmantes
            var jsonObject = functool.stringToObject(firmante);

            var plantilla= rows[i].plantilla

            plantilla=functool.replaceAll(plantilla,"responsable_temporal___","___replace.")
            plantilla=functool.replaceAll(plantilla,"responsable_temporal___","___replace.")
            plantilla=functool.replaceAll(plantilla,"responsable_temporal___","___replace.")
            plantilla=functool.replaceAll(plantilla,"responsable_temporal___","___replace.")
            plantilla=functool.replaceAll(plantilla,"responsable_temporal___","___replace.")
            plantilla=functool.replaceAll(plantilla,"responsable_temporal___","___replace.")
            

            cad=cad + " contador: " +i +" ---------------------------------------\n"
            cad=cad+ "update bpm_procesos.version_procesos SET    plantilla_resolucion = '" + plantilla + " <br><br><br><br> <span style=\"text-align:center\">	<p class=\"ql-align-center\"><b>___firmas."+ jsonObject[0].code +"</b><br></p>	</span> \"" +  "'" + ",updated_at = NOW(), updated_user = 'SYSTEM'  WHERE   id = '" + rows[i].id + "';" + "\n\n\n\n"

        }

        
        


    

        fs.writeFile('newfile.sql', cad, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
    });
}
}


module.exports = {
    generaupdateplantilla: generaupdateplantilla,
    generauldi:generauldi,
      }
