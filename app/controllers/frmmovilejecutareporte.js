
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


    var dareporteexcel= async function(req, res, next,dataanterior){
        console.log(req.params)
        return new Promise(resolve => {
            var reportefrm=req.params.id.split('°')
            console.log('clase frmmovilejecutareporte --> add en la funcion dareporteexcel  case ' + reportefrm[1] + ':(async () => { })();')
            switch(reportefrm[1]) {
                case '5ff67ee82977bb360c526f8a': //REQUISICION

            (async () => {


                var markup =  '';

                master = await functool.dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
     
             
                if(master)
                {
                    markup =  '    ';
                    markup=markup+'<table id="excel-table" border="1"> <tr><td contenteditable="true" colspan="25"></td></tr><tr><td contenteditable="true" colspan="9">'+  master.departamento +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="11"></td> '

                    markup=markup+'<td contenteditable="true" colspan="5">'+  master.nombrejefesolicitante +'</td></tr> '

                    markup = markup + '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '  <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    
                    markup=markup+'<tr><td contenteditable="true" colspan="9">'+  master.cargodelsolicitante +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="11"></td> '

                    markup=markup+'<td contenteditable="true" colspan="5">'+  master.nombresolicitante +'</td></tr> '

                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '  <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';

                    markup=markup+'<tr><td contenteditable="true" colspan="9">'+  master.fecha +'</td> '
                    markup=markup+'<td contenteditable="true" colspan="11"></td> '
                    markup=markup+'<td contenteditable="true" colspan="5">'+  master.personaquerecibe +'</td></tr> '

                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';

                    detalle = await functool.dadatosformulariofinal('5fc03c79ab0f6448b877eb5c',{idpapa:'' + master._id},req.params.id3,'5fc03c79ab0f6448b877eb5cs'); 

                    markup=markup+''

                for(var i = 0; i < detalle.length;i++){
                    var articulon=detalle[i].articulo.split('<br>')
              

                    markup=markup+'<tr><td contenteditable="true" colspan="3">'+  detalle[i].cantidadsolicitada +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="1"></td> '

                    markup=markup+'<td contenteditable="true" colspan="4">'+  detalle[i].cantidaddespachada +'</td> '
                    markup=markup+'<td contenteditable="true" colspan="4">'+  articulon[3].split(':')[0] +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="11">'+ articulon[2].split(':')[1].trim() +'</td></tr>'


                    
                
                }

                markup=markup+'<tr><td contenteditable="true" colspan="3"></td> '

                markup=markup+'<td contenteditable="true" colspan="1"></td> '

                markup=markup+'<td contenteditable="true" colspan="4"></td> '
                markup=markup+'<td contenteditable="true" colspan="4"></td> '

                markup=markup+'<td contenteditable="true" style="font-weight:bold" colspan="11">ULTIMA LINEA</td></tr>'
                
                markup=markup+''
                markup=markup+'</table>'

                }
                

              
                resolve({estado:markup}); 

                
            })();
                break;
                case '5fc02f572fc3552d1014792f': //FORMULARIO 1-H

                (async () => {
    
    
                    var markup =  '';
    
                    master = await functool.dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
         console.log(master)
                
                    if(master)
                    {
                        markup =  '    ';
                        markup=markup+'<table id="excel-table" border="1"><tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="5">'+  master.dependencia +'</td></tr>'
    
                        markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="5">'+ master.programa +'</td> <td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">' + master.fecha +'</td></tr>'
    
                        markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="5">'+  master.proveedor.split('<br>')[1].split(':')[1].trim() +'</td></tr>'

    
                        detalle = await functool.dadatosformulariofinal('5fc0308c2fc3552d10147947',{idpapa:'' + master._id},req.params.id3,'5fc0308c2fc3552d10147947'); 

                        markup=markup+''

                        var grantotal=0
    
                    for(var i = 0; i < detalle.length;i++){
                        var articulon=detalle[i].articulo.split('<br>')
                        var preciou=0
                       
                        if(detalle[i].precioporunidadsegunfactura===undefined)
                        {
                            preciou=0
                        }
                        else
                        {
                             preciou=detalle[i].precioporunidadsegunfactura
                        }
                        
    
                        markup=markup+'<tr><td contenteditable="true" colspan="1">'+  detalle[i].unidadessegunfactura +'</td> '
    
                        markup=markup+'<td contenteditable="true" colspan="3">'+ detalle[i].descripciondelarticulaenfactura +'</td> '
    
                        markup=markup+'<td contenteditable="true" colspan="1">'+  detalle[i].codigogastoreglon +'</td> '

                        markup=markup+'<td contenteditable="true" colspan="1">'+  master.foliolibroalmacen +'</td> '
                        
                        markup=markup+'<td contenteditable="true" colspan="1">'+  preciou +'</td> '
                    
                        var tottal=0
                        total=preciou*detalle[i].unidadessegunfactura
                        markup=markup+'<td contenteditable="true" colspan="1">Q.'+ total +'</td></tr>'
                        grantotal=grantotal+total
    
                        
                    
                    }
    
                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td> '
    
                    markup=markup+'<td contenteditable="true" colspan="3">TOTAL</td> '

                    markup=markup+'<td contenteditable="true" colspan="1"></td> '

                    markup=markup+'<td contenteditable="true" colspan="1"></td> '
                    
                    markup=markup+'<td contenteditable="true" colspan="1"></td> '
                
                    
                    markup=markup+'<td contenteditable="true" colspan="1">Q.'+ grantotal +'</td></tr>'
                    

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td></tr> '
                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">FACTURA ELECTRONICA</td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">SERIE:'+ master.seriefactura +'</td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">No.'+  master.nofactura+'</td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">NIT:'+ master.proveedor.split('<br>')[2].split(':')[1].trim() +' FECHA:'+ String(master.fechafactura).substr(0,10) +'</td></tr> '

                    markup=markup+''
                    markup=markup+'</table>'
    
                    }
                    
    
                  
                    resolve({estado:markup}); 
    
                    
                })();
                    break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

    var dareportepdf= async function(req, res, next,dataanterior){
        console.log(req.params)
        return new Promise(resolve => {
            var reportefrm=req.params.id.split('°')
            //reportefrm this.nidformulario + '°' + this.idformulario  + '°'+item._id 
            console.log('clase frmmovilejecutareporte --> add en la funcion dareportepdf  case ' + reportefrm[1] + ':(async () => { })();')
            switch(reportefrm[1]) {
           
              case 'printgeneralprocesos': //IMPORTACIONES
//no ticke  req.params.id2    empresa req.params.id3
(async () => {


  var jsonObject = functool.stringToObject( functool.replaceAll( req.params.id5 ,'ë','/'));
  var jsonObject2 = functool.stringToObject( functool.replaceAll( req.params.id2 ,'ë','/'));

  let jsonx= [];

 // formulario = await functool.dadatosformularioidfinal(reportefrm[1],{ _id:reportefrm[2]},req.params.id3,reportefrm[1]); 

  
jsonx.push(jsonObject)

jsonx.push({text:'   '})
//BUENO
jsonx.push({
  style: 'tableExample',
  fontSize: 10,
  table: 
  {
    widths: ['auto', 150],
    heights: [15, 15],
    body: [
      ['No. Póliza', {text: ''}],
      ['Clase 36/37 ', '']
    ]
  }
});

jsonx.push({text:'   '})


jsonx.push( {
layout: 
  {
      fillColor: function (rowIndex, node, columnIndex) {
          return (rowIndex === 0) ? '#c2dec2' : null;
      }
  },
  fillColor: '#eeffee',
  table: 
  {
      widths: ['auto'],
      heights: [20,10],
      headerRows: 1,
      body: jsonObject2
      
  }
})

//BUENO
jsonx.push({text:'   '})
jsonx.push
(
  {
    table: 
    {
      widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
      headerRows: 2,
      body: 
      [
        [
          {rowSpan: 2, text: 'STATUS', style: 'tableHeader', alignment: 'center',fontSize: 10}, 
          {text: 'INICIAL', style: 'tableHeader',colSpan: 2,  alignment: 'center',fontSize: 10},
          {},
          {text: '2DA REV', style: 'tableHeader',colSpan: 2,  alignment: 'center',fontSize: 10},
          {},
          {text: 'CLASE 36 / 37', style: 'tableHeader',colSpan: 2,  alignment: 'center',fontSize: 10},
          {}
        ],
        [
          {text: '', style: 'tableHeader', alignment: 'center',fontSize: 10}, 
          {text: ' HORA ', style: 'tableHeader', alignment: 'center',fontSize: 10}, 
          {text: 'FECHA', style: 'tableHeader', alignment: 'center',fontSize: 10}, 
          {text: ' HORA ', style: 'tableHeader', alignment: 'center',fontSize: 10}, 
          {text: 'FECHA', style: 'tableHeader', alignment: 'center',fontSize: 10}, 
          {text: ' HORA ', style: 'tableHeader', alignment: 'center',fontSize: 10},
          {text: 'FECHA',  style: 'tableHeader', alignment: 'center',fontSize: 10},
        ],
        [{text:'RECIBIDO DE SERVICIO AL CLIENTE',fontSize: 10}, '', '','', '', '',''],
        [{text:'ENTREGA A CONTROL DE CALIDAD',fontSize: 10}, '', '','', '', '',''],
        [{text:'RECIBIDA DE CONTROL DE CALIDAD',fontSize: 10}, '', '','', '', '',''],
        [{text:'PREPOLIZA DE SERVICIO AL CLIENTE',fontSize: 10}, '', '','', '', '',''],
        [{text:'CONFIRMA A  SERVICIO AL CLIENTE',fontSize: 10}, '', '','', '', '',''],
        [{text:'A TRÁMITE',fontSize: 10}, '', '','', '', '',''],
      
      ]
    }
   }
);

jsonx.push({text:'   '})

jsonx.push({
  style: 'tableExample', 
  fontSize: 10,
  table: 
  {
    widths: ['auto', 50],
    heights: [25, 25, 25],
    body: 
    [
      ['Regimen', ''],
      ['Aduana Entrada ', ''],
      ['Aduana Salida', '']
    ]
  }
});
jsonx.push({text:'   '})

jsonx.push({	text: [{text:'Recibido por: ', bold: true,fontSize:10},{text: '______________________________'}	],  alignment: 'right'})



                resolve({estado:jsonx}); 

                
            })();
              break;
                case '5ff67ee82977bb360c526f8a': //REQUISICION

            (async () => {


                var markup =  '';
                let jsonx= [];

                master = await functool.dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
                if(master)
                {
                    
                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 380,
                                text:  master.departamento ,

                              },
                              {
                                // star-sized columns fill the remaining space
                                // if there's more than one star-column, available width is divided equally
                                width: 150,
                                text: master.nombrejefesolicitante,
                              },
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 25, 75, 10, 1 ] ,
                            fontSize: 8
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 100,
                                text:  master.cargodelsolicitante ,
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 280,
                                text:  ' ' ,
                              },
                              {
                                // star-sized columns fill the remaining space
                                // if there's more than one star-column, available width is divided equally
                                width: 150,
                                text: master.nombresolicitante ,
                              },
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 25, 40, 10, 1 ] ,
                            fontSize: 8
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 360,
                               
                                text: functool.dafechatodate( master.fecha) ,
                               
                              },
                              {
                                // star-sized columns fill the remaining space
                                // if there's more than one star-column, available width is divided equally
                                width: 150,
                             
                                text: master.personaquerecibe ,
                               
                              },
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 45, 45, 10, 1 ] ,
                            
                           
                            fontSize: 8
                          }
                        
                    ]);

                    jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 360,
                             
                              text: '' ,
                             
                            }
                           
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ 45, 83, 10, 1 ] ,
                          
                         
                          fontSize: 8
                        }
                      
                  ]);

                 

                    detalle = await functool.dadatosformulariofinal('5fc03c79ab0f6448b877eb5c',{idpapa:'' + master._id},req.params.id3,'5fc03c79ab0f6448b877eb5cs'); 

                    markup=markup+''

                    var cuantosreg=detalle.length;

                for(var i = 0; i < detalle.length;i++){
                    var articulon=detalle[i].articulo.split('<br>')
                  if(articulon[1].split(':')[1].trim()==='VIENEN DE LA')
                  {
                    jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 70,
                            
                              text:  '',
                             
                            },
                          
                            {
                              // auto-sized columns have their widths based on their content
                              width: 50,
                             
                              text:  '',
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 60,
                             
                              text: '',
                             
                            },

                            {
                              // auto-sized columns have their widths based on their content
                              width: 255,
                             
                              text:  articulon[1].split(':')[1].trim() + ' ' + detalle[i].notarjeta,
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 50,
                             
                              text:  '',
                             
                            },

                         
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ 30, 0, 10, 6 ] ,
                         
                         
                          fontSize: 8
                        }
                      
                  ]);
            

                  }
                  else
                  {
                    if(articulon[1].split(':')[1].trim()==='ULTIMA LINEA')
                    {

                      jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 70,
                              
                                text:  '',
                               
                              },
                            
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  '',
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 60,
                               
                                text: '',
                               
                              },

                              {
                                // auto-sized columns have their widths based on their content
                                width: 255,
                               
                                text:  articulon[1].split(':')[1].trim(),
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  '',
                               
                              },

                           
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 30, 0, 10, 6 ] ,
                           
                           
                            fontSize: 8
                          }
                        
                    ]);
              
                    }
                    else
                    {
                      jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 70,
                              
                                text:  detalle[i].cantidadsolicitada ,
                               
                              },
                            
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  detalle[i].cantidaddespachada,
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 60,
                               
                                text: articulon[3].split(':')[1].trim(),
                               
                              },

                              {
                                // auto-sized columns have their widths based on their content
                                width: 255,
                               
                                text:  articulon[1].split(':')[1].trim(),
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  detalle[i].notarjeta,
                               
                              },

                           
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 30, 0, 10, 6 ] ,
                           
                           
                            fontSize: 8
                          }
                        
                    ]);
              
                      
                    }

                  }
                    

                  
                    
                
                }

                if(cuantosreg<14)
                {

                  
                for(var i = cuantosreg; i < 15;i++){
                

                  jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 75,
                            
                              text:  '',
                             
                            },
                          
                            {
                              // auto-sized columns have their widths based on their content
                              width: 40,
                             
                              text:  '',
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 80,
                             
                              text:'',
                             
                            },

                            {
                              // auto-sized columns have their widths based on their content
                              width: 250,
                             
                              text:  '  ',
                             
                            },

                         
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ 45, 0, 10, 6 ] ,
                         
                         
                          fontSize: 8
                        }
                      
                  ]);
            

                
                  
              
              }

                }


                jsonx.push( [
                  { 
                      columns: [
                        {
                          // auto-sized columns have their widths based on their content
                          width: 350,
                         
                          text:  master.justificaciondeuso ,
                         
                        },
                      
                      ],
                      // optional space between columns
                      columnGap: 1,
                      margin: [ 120, 10, 10, 6 ] ,
                      
                     
                      fontSize: 8
                    }
                  
              ]);

              
              jsonx.push( [
                { 
                    columns: [
                      {
                        // auto-sized columns have their widths based on their content
                        width: 400,
                       
                        text:  master.observaciones ,
                       
                      },
                    
                    ],
                    // optional space between columns
                    columnGap: 1,
                    margin: [ 45, 10, 10, 6 ] ,
                    
                   
                    fontSize: 8
                  }
                
            ]);

                }
                

              
                resolve({estado:jsonx}); 

                
            })();
                break;
                case '5fc02f572fc3552d1014792f': //FORMULARIO 1-H

                (async () => {
    
    
                    var markup =  '';
    
                    master = await functool.dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
         
                    let jsonx= [];

        
                    
                    if(master)
                    {//border: [true, true, false, false],  width: 100,
                        /*
	{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
        },
        
        margin: [left, top, right, bottom]
                        */

                        var fechat=''
                        fechat=master.fecha

                        jsonx.push( [
                          {     text: '   ',   fontSize: 8,  colSpan: 1       }, 
                            {     text: '',   fontSize: 9,  colSpan: 1       }, 
                            {     text: '',   fontSize: 9,  colSpan: 1       }, 
                            { margin: [ 58, 40, 10, 1 ] ,
                                text: master.dependencia,
                                bold: true,
                                colSpan: 5,
                                fontSize: 10
                              
                            }
                            
                        ]);

                    


                        jsonx.push( [
                            { 
                                columns: [
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 300,
                                    bold: true,
                                    text: master.programa,
                                   
                                  },
                                  {
                                    // star-sized columns fill the remaining space
                                    // if there's more than one star-column, available width is divided equally
                                    width: 150,
                                    bold: true,
                                    text:functool.dafechatodate(fechat),
                                    margin: [ 90, 0, 0, 0 ] ,
                                   
                                  },
                                 
                                ],
                                // optional space between columns
                                columnGap: 1,
                                margin: [ 58, 5, 10, 1 ] ,
                                bold: true,
                               
                                fontSize: 10
                              }
                            
                        ]);

                        jsonx.push( [
                            { 
                                columns: [
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 350,
                                    bold: true,
                                    text:  master.proveedor.split('<br>')[1].split(':')[1].trim(),
                                   
                                  },
                                
                                 
                                ],
                                // optional space between columns
                                columnGap: 1,
                                margin: [ 58, 5, 10, 1 ] ,
                                bold: true,
                               
                                fontSize: 10
                              }
                            
                        ]);
                 
                        jsonx.push( [
                          { 
                              columns: [
                                {
                                  // auto-sized columns have their widths based on their content
                                  width: 350,
                                  bold: true,
                                  text:  '',
                                 
                                },
                              
                               
                              ],
                              // optional space between columns
                              columnGap: 1,
                              margin: [ 80, 32, 10, 1 ] ,
                              bold: true,
                             
                              fontSize: 10
                            }
                          
                      ]);
               
  

    
                        detalle = await functool.dadatosformulariofinal('5fc0308c2fc3552d10147947',{idpapa:'' + master._id},req.params.id3,'5fc0308c2fc3552d10147947'); 

                        markup=markup+''

                        var grantotal=0
    
                    for(var i = 0; i < detalle.length;i++){
                        var articulon=detalle[i].articulo.split('<br>')
                        var preciou=0
                       
                        if(detalle[i].precioporunidadsegunfactura===undefined)
                        {
                            preciou=0
                        }
                        else
                        {
                             preciou=detalle[i].precioporunidadsegunfactura
                        }
                        

                        var tottal=0
                        total=preciou*detalle[i].unidadessegunfactura
                        jsonx.push( [
                            { 
                                columns: [
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 35,
                                 
                                    text:  detalle[i].unidadessegunfactura,
                                   
                                  },
                                
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 175,
                                  
                                    text:  detalle[i].descripciondelarticulaenfactura,
                                   
                                  },
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 20,
                                  
                                    text: ' ',
                                   
                                  },
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 58,
                                  
                                    text: detalle[i].codigogastoreglon,
                                   
                                  },

                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 30,
                                  
                                    text:   master.foliolibroalmacen,
                                   
                                  },

                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 60,
                                   
                                    text:  functool.numberWithCommas(preciou) ,
                                   
                                  },
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 50,
                                  
                                    text: functool.numberWithCommas(total) ,
                                   
                                  }
                                 
                                ],
                                // optional space between columns
                                columnGap: 1,
                                margin: [ -10, 0, 1, 1 ] ,
                               
                               
                                fontSize: 8
                              }
                            
                        ]);
                 


    
                
                    
                      
                        grantotal=grantotal+total
    
                        
                    
                    }
    

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 35,
                              
                                text: ''
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 175,
                              
                                text: 'TOTAL'
                               
                              }, 
                              {
                                // auto-sized columns have their widths based on their content
                                width: 20,
                              
                                text: ' ',
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 58,
                               
                                text: ''
                               
                              }, {
                                // auto-sized columns have their widths based on their content
                                width: 30,
                               
                                text: ''
                               
                              }, {
                                // auto-sized columns have their widths based on their content
                                width: 60,
                               
                                text: ''
                               
                              }, {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                                decoration:'overline',
                               
                                bold:true,
                                text: functool.numberWithCommas(grantotal)
                               
                              },
                                ///hhhhh
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ -10, 0, 1, 1 ] ,
                          
                           
                            fontSize: 8
                          }
                        
                    ]);
             
            
                    jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 35,
                            
                              text: '      '
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 175,
                            
                              text: '        '
                             
                            }, {
                              // auto-sized columns have their widths based on their content
                              width: 58,
                             
                              text: ''
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 20,
                            
                              text: ' ',
                             
                            }, 
                            {
                              // auto-sized columns have their widths based on their content
                              width: 60,
                             
                              text: ''
                             
                            }, {
                              // auto-sized columns have their widths based on their content
                              width:80,
                             
                              text: '  '
                             
                            }, {
                              // auto-sized columns have their widths based on their content
                              width: 50,
                              decoration:'overline',
                              decorationStyle:'double',
                              bold:true,
                              text: '                            '
                             
                            },
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ -10, 0, 1, 1 ] ,
                        
                         
                          fontSize: 8
                        }
                      
                  ]);
           
                   
                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                               
                                text:   master.tipodefactura,
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 30, 10, 1 ] ,
                          
                           
                            fontSize: 10
                          }
                        
                    ]);



                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                              
                                text:  'SERIE:'+ master.seriefactura,
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 2, 10, 1 ] ,
                         
                           
                            fontSize: 10
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                               
                                text:  'No.'+master.nofactura,
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 2, 10, 1 ] ,
                           
                           
                            fontSize: 10
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                               
                                text: ' NIT:'+ master.proveedor.split('<br>')[2].split(':')[1].trim() +' FECHA:'+ functool.dafechatodate(master.fechafactura),
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 2, 10, 1 ] ,
                           
                           
                            fontSize: 10
                          }
                        
                    ]);


                 
    
                    }
                    
    
                  
                    resolve({estado:jsonx}); 
    
                    
                })();
                    break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }
  

module.exports = {

  

    dareporteexcel: dareporteexcel,
    dareportepdf: dareportepdf
   
      }
