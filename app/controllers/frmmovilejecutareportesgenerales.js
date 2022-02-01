
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var functool = require('../controllers/funcionesnode');
var kardex = require('../models/asociadoventa/kardexcorreos');
var kardexproducto = require('../models/asociadoventa/kardexcorreosproducto');


var dareportegeneral= async function(req, res, next,dataanterior){
    console.log(req.params)
    return new Promise(resolve => {
        var reportefrm=req.params.id.split('°')
        switch(req.params.id3) {
            case 'scep-dashboard': //REQUISICION
                (async () => {

                    var arr=reportefrm[0].split('-')
                    var periodost= await functool.dadatosformulariofinal('618eb169b28df824d4ccb4cd'
                    ,{ estado:'Activo',ano:arr[0],descripcion:arr[1]},
                    req.params.id2,'618eb169b28df824d4ccb4cds'); 

                    var duplicates = [];
                    periodost.forEach(function (doc) {duplicates.push(doc.idpapa);  });
                    
                
                    var todos20 = await functool.dadatosformulariofinal('618eaa2cb28df824d4ccb4b0',{ estado:'Activo',
                    _id: {$in: duplicates}},
                        req.params.id2,'618eaa2cb28df824d4ccb4b0'); 
                        resolve({estado:'exito',datos:todos20}); 
                    
                })();
            break;
            case 'scep-dashboard-periodofiltro': //REQUISICION
            (async () => {
                var todos20 = await functool.dadatosformulariofinal('618eb169b28df824d4ccb4cd',{ estado:'Activo'},
                    req.params.id2,'618eb169b28df824d4ccb4cds'); 
                    var datat=[]
                    for(var i = 0; i < todos20.length;i++){
                        datat.push({id:todos20[i].ano + '-' + todos20[i].descripcion})
                    }

                    const result = datat.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.id === thing.id 
  ))
)


                    resolve({estado:'exito',datos:result}); 
                
            })();
        break;
                default:
              // code block
              resolve({estado:'exito'}); 
          }
    });
}



module.exports = {

  

    dareportegeneral: dareportegeneral,
  
   
      }
