
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

                    var periodottsuma = [];
                    for(var i = 0; i < periodost.length;i++){
                        periodottsuma.push({noreuniones:periodost[i].noreuniones,periodosidpapa:periodost[i].idpapa,periodostid:String(periodost[i]._id),
                          ano:periodost[i].ano,estado:periodost[i].estado,periodostnombre:periodost[i].descripcion
                          ,cuantos:0,avance:0,avg:0,plan:[],
                          cuantosr2:0, cuantosr:0,avgreunion:0,reuniones:[]})
                          
                    }



                    var comisionestt = [];
                    periodost.forEach(function (doc) {comisionestt.push(doc.idpapa);  });
                    
                    var periodostt = [];
                    periodost.forEach(function (doc) {periodostt.push(doc._id);  });
                
                // encuentra todas las comisiones que pertenecen a aese periodo
                    var todos20 = await functool.dadatosformulariofinal('618eaa2cb28df824d4ccb4b0',
                    { estado:'Activo',
                    _id: {$in: comisionestt}},req.params.id2,'618eaa2cb28df824d4ccb4b0'); 

//noreuniones
                    var comisiontsuma = [];
                    for(var i = 0; i < todos20.length;i++){
                        comisiontsuma.push({comisionid:String(todos20[i]._id),
                          nombre:todos20[i].nombre,foto:todos20[i].foto,estado:todos20[i].estado,cuantos:0,avance:0,avg:0,
                         cuantosr2:0, cuantosr:0,avgreunion:0,reuniones:[],
                          cuantosp:0,cuantosp2:0,avgparticipa:0,participa:[]
                          ,periodo:[]})
                          
                    }

//agarran todas las reuniones finalizadas
                    var agendaestra = await functool.dadatosformulariofinal('6190074fb28df824d4ccb59b',
                    {idpapa: {$in: periodostt},estado:'FINALIZADA'},req.params.id2,'6190074fb28df824d4ccb59bs'); 

                    var agendattsuma = [];
                    for(var i = 0; i < agendaestra.length;i++){
                     
                        agendattsuma.push({agendaidpapa:agendaestra[i].idpapa,agendaid:String(agendaestra[i]._id),
                          agendanombre:agendaestra[i].nombre,cuantos:0,avance:0,avg:0})
                          
                    }

                    

                        //encuentra todo los planes de trabajo
                        var plantrabajo = await functool.dadatosformulariofinal('619003a2b28df824d4ccb581',
                        {idpapa: {$in: periodostt}},req.params.id2,'619003a2b28df824d4ccb581'); 

                            var plantt = [];
                            plantrabajo.forEach(function (doc) {plantt.push(doc._id);  });
                       
                            plantrabajo = plantrabajo.filter((obj, pos, arr) => {
                                return arr
                                  .map(mapObj => mapObj._id)
                                  .indexOf(obj._id) == pos;
                              });
                              var planttsuma = [];
                              for(var i = 0; i < plantrabajo.length;i++){
                                plantt.push(plantrabajo[i]._id); 
                                planttsuma.push({plantrabajoidpapa:plantrabajo[i].idpapa,plantrabajoid:String(plantrabajo[i]._id),
                                    plantrabajonombre:plantrabajo[i].resultadoestrategico +  ' <br>' + plantrabajo[i].temaestrategico,cuantos:0,avance:0,avg:0,acciones:[]})
                                    
                              }



                            var acciones = await functool.dadatosformulariofinal('6190056db28df824d4ccb586',
                            {idpapa: {$in: plantt}},req.params.id2,'6190056db28df824d4ccb586'); 
    
                                var accionestt = [];
                                var accionttsuma = [];

                                acciones.forEach(function (doc) {accionestt.push(doc._id);  });
                           
                                for(var i = 0; i < acciones.length;i++){
                                    accionestt.push(acciones[i]._id); 
                                    accionttsuma.push({accionesidpapa:acciones[i].idpapa,accionesid:String(acciones[i]._id),
                                        accionesnombre:acciones[i].descripcion,cuantos:0,avance:0,avg:0,productos:[]})
                                        
                                  }



                                
                            var productos = await functool.dadatosformulariofinal('619005e9b28df824d4ccb58b',
                            {idpapa: {$in: accionestt}},req.params.id2,'619005e9b28df824d4ccb58bs'); 
    
                                var productostt = [];
                                var productosttsuma = [];
                                for(var i = 0; i < productos.length;i++){
                                    productostt.push(productos[i]._id); 
                                    productosttsuma.push({productoidpapa:productos[i].idpapa,productoid:String(productos[i]._id),
                                        productonombre:productos[i].descripcion,cuantos:0,avance:0,avg:0,fases:[]})
                                  }


                                var fases = await functool.dadatosformulariofinal('61981e30e305174cf41bf009',
                                {idpapa: {$in: productostt}},req.params.id2,'61981e30e305174cf41bf009'); 
        
                                 
                                for(var i = 0; i < fases.length;i++){
                                    for(var ii = 0; ii < productosttsuma.length;ii++){
                                        if(fases[i].idpapa===productosttsuma[ii].productoid)
                                        {
                                            productosttsuma[ii].cuantos=productosttsuma[ii].cuantos+1
                                            productosttsuma[ii].avance=Number(productosttsuma[ii].avance)+Number(fases[i].avance)
                                            productosttsuma[ii].fases.push({idfase:fases[i]._id,nombre:fases[i].descripcion,avance:fases[i].avance})

                                        }

                                    }}

                                    for(var ii = 0; ii < productosttsuma.length;ii++){
                                        if(productosttsuma[ii].cuantos===0)
                                        {
                                            productosttsuma[ii].avg=0
                                        }
                                        else
                                        {
                                            productosttsuma[ii].avg=Number(Number(productosttsuma[ii].avance)/Number(productosttsuma[ii].cuantos)).toFixed(2);
                                        }
                                      
                                    }

                                    for(var i = 0; i < accionttsuma.length;i++){

                                        for(var ii = 0; ii < productosttsuma.length;ii++){
                                            if(String(accionttsuma[i].accionesid)===productosttsuma[ii].productoidpapa)
                                            {
                                                accionttsuma[i].cuantos=accionttsuma[i].cuantos+1
                                                accionttsuma[i].avance=Number(accionttsuma[i].avance)+Number(productosttsuma[ii].avg)
                                                accionttsuma[i].productos.push(productosttsuma[ii])
                                            }
                                        }}

                                        for(var ii = 0; ii < accionttsuma.length;ii++){
                                            if(accionttsuma[ii].cuantos===0)
                                            {
                                                accionttsuma[ii].avg=0
                                            }
                                            else
                                            {
                                            accionttsuma[ii].avg=Number(Number(accionttsuma[ii].avance)/Number(accionttsuma[ii].cuantos)).toFixed(2);
                                            }
                                        }

                                    for(var i = 0; i < planttsuma.length;i++){

                                        for(var ii = 0; ii < accionttsuma.length;ii++){
                                            if(String(planttsuma[i].plantrabajoid)===accionttsuma[ii].accionesidpapa)
                                            {
                                                planttsuma[i].cuantos=planttsuma[i].cuantos+1
                                                planttsuma[i].avance=Number(planttsuma[i].avance)+Number(accionttsuma[ii].avg)
                                                planttsuma[i].acciones.push(accionttsuma[ii])
                                            }
                                        }}

                                        for(var ii = 0; ii < planttsuma.length;ii++){
                                            if(planttsuma[ii].cuantos===0)
                                            {
                                                planttsuma[ii].avg=0
                                            }
                                            else
                                            {
                                            planttsuma[ii].avg=Number(Number(planttsuma[ii].avance)/Number(planttsuma[ii].cuantos)).toFixed(2);
                                            }
                                        }
    


                             
                                            



                                        for(var i = 0; i < periodottsuma.length;i++){

                                            for(var ii = 0; ii < planttsuma.length;ii++){
                                                if(String(periodottsuma[i].periodostid)===planttsuma[ii].plantrabajoidpapa)
                                                {
                                                    periodottsuma[i].cuantos=periodottsuma[i].cuantos+1
                                                    periodottsuma[i].avance=Number(periodottsuma[i].avance)+Number(planttsuma[ii].avg)
                                                    periodottsuma[i].plan.push(planttsuma[ii])
                                                }
                                            }}
    
                                            for(var ii = 0; ii < periodottsuma.length;ii++){
                                                if(periodottsuma[ii].cuantos===0)
                                                {
                                                    periodottsuma[ii].avg=0
                                                }
                                                else
                                                {
                                                periodottsuma[ii].avg=Number(Number(periodottsuma[ii].avance)/Number(periodottsuma[ii].cuantos)).toFixed(2);
                                                }
                                            }
        

                                   
                                            for(var i = 0; i < periodottsuma.length;i++){

                                                for(var ii = 0; ii < agendattsuma.length;ii++){
                                                    if(String(periodottsuma[i].comisionid)===agendattsuma[ii].agendaidpapa)
                                                    {
                                                        periodottsuma[i].cuantosr=periodottsuma[i].cuantosr+1
                                                        
                                                     
                                                        periodottsuma[i].reuniones.push(agendattsuma[ii])
                                                    }
                                                }}
        
                                                for(var ii = 0; ii < periodottsuma.length;ii++){
                                                    if(periodottsuma[ii].cuantosr2===0)
                                                    {
                                                        periodottsuma[ii].avgreunion=0
                                                    }
                                                    else
                                                    {
                                                        periodottsuma[ii].avgreunion=Number((Number(periodottsuma[ii].cuantosr)/Number(periodottsuma[ii].noreuniones))*100).toFixed(2);
                                                    }
                                                }




                                            for(var i = 0; i < comisiontsuma.length;i++){

                                                for(var ii = 0; ii < periodottsuma.length;ii++){
                                                    if(String(comisiontsuma[i].comisionid)===periodottsuma[ii].periodosidpapa)
                                                    {
                                                        comisiontsuma[i].cuantos=comisiontsuma[i].cuantos+1
                                                        comisiontsuma[i].cuantosr2=periodottsuma[ii].noreuniones
                                                        comisiontsuma[i].cuantosr=comisiontsuma[i].cuantosr+periodottsuma[ii].cuantosr
                                                        comisiontsuma[i].reuniones=periodottsuma[ii].reuniones

                                                        
                                                        comisiontsuma[i].avance=Number(comisiontsuma[i].avance)+Number(periodottsuma[ii].avg)
                                                        comisiontsuma[i].periodo.push(periodottsuma[ii])
                                                    }
                                                }}
        
                                                for(var ii = 0; ii < comisiontsuma.length;ii++){
                                                    if(comisiontsuma[ii].cuantos===0)
                                                    {
                                                        comisiontsuma[ii].avg=0
                                                    }
                                                    else
                                                    {
                                                    comisiontsuma[ii].avg=Number(Number(comisiontsuma[ii].avance)/Number(comisiontsuma[ii].cuantos)).toFixed(2);
                                                    comisiontsuma[ii].avgreunion=Number(Number(comisiontsuma[ii].cuantosr)/Number(comisiontsuma[ii].cuantosr2)).toFixed(2);
                                                    }
                                                }
    

                                            

                                        
                                        
                                    

                            




                        resolve({estado:'exito',datos:comisiontsuma}); 
                    //encuentra todos 
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
