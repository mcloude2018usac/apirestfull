
var functool = require('../controllers/funcionesnode');
var Bitacora = require('../models/bitacora');

const frmmovilejecutareportesgenerales = require('../controllers/frmmovilejecutareportesgenerales');
exports.getReportes = async function(req, res, next){
console.log(req.params)
    if(req.params.id3)
    {
        switch(req.params.id3) {
            case 'scep-dashboard':
                      respuesta = await frmmovilejecutareportesgenerales.dareportegeneral(req, res, next,[]);
                    res.json(respuesta);
            break;
            case 'scep-dashboard-periodofiltro':
                      respuesta = await frmmovilejecutareportesgenerales.dareportegeneral(req, res, next,[]);
                    res.json(respuesta);
            break;
            default:    res.json([]);   
                }
      
      
    }
    }

