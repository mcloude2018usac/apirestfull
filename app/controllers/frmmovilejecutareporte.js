
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
               
               
                    case '5fc02f572fc3552d1014792f':
                      break;
                    default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

    var dareportepdf= async function(req, res, next,dataanterior){
        console.log(req.params)
        var reportefrm=''
       
        return new Promise(resolve => {
          if(req.params.recordID==='moviltodo')
          {
            reportefrm=req.body.id.split('°')
          }
          else
          {
            reportefrm=req.params.id.split('°')
          }
            
            //reportefrm this.nidformulario + '°' + this.idformulario  + '°'+item._id 
            console.log('clase frmmovilejecutareporte --> add en la funcion dareportepdf  case ' + reportefrm[1] + ':(async () => { })();')
            switch(reportefrm[1]) {
           
              case 'printgeneralprocesos': //IMPORTACIONES
//no ticke  req.params.id2    empresa req.params.id3
(async () => {


  var jsonObject = req.body.id5 
  var jsonObject2 = req.body.id2 
  

  let jsonx= [];

 // formulario = await functool.dadatosformularioidfinal(reportefrm[1],{ _id:reportefrm[2]},req.params.id3,reportefrm[1]); 

  
jsonx.push(jsonObject)

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
      widths: ['100%'],
      heights: [20,10],
      headerRows: 1,
      body: jsonObject2
      
  }
})

//BUENO
jsonx.push({text:'   '})


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
                              margin: [ 25, 85, 10, 1 ] ,
                            
                             
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

    var dareportepdfgeneral= async function(req, res, next,dataanterior){
      console.log(req.params)
      var reportefrm=''
     
      return new Promise(resolve => {
        if(req.params.recordID==='moviltodo')
        {
          reportefrm=req.body.id.split('°')
        }
        else
        {
          reportefrm=req.params.id.split('°')
        }
          
          //reportefrm this.nidformulario + '°' + this.idformulario  + '°'+item._id 
          console.log('clase frmmovilejecutareporte --> add en la funcion dareportepdf  case ' + reportefrm[1] + ':(async () => { })();')
          switch(reportefrm[1]) {
         
         
           case '6088435ae75c6616505521f0':

            (async () => {


              var markup =  '';
    
              master = await functool.dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
   
              let jsonx= [];


               var todos2=master
              
              
              var autox=[]
              
              autox.push('auto')
            
              
              jsonx.push({text:'   '})
              
    
                  jsonx.push({ text: 'Formulario', 	 italics: true,style: 'header', fontSize: 25 });
                  jsonx.push({ text: 'Grupo Estratégico de Servicios  ', 	 italics: true,style: 'header', fontSize: 18  });
                  
                  jsonx.push({
                      
                      table: {
                          widths: [100,0,100,0,150,0,'*'],
                       
                          
                          body: [
                              [{ bold: true,text : 'Fecha'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Hora inicio'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'No. poliza'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Consignatario'}
                              
                               ],
                              [ {fillColor: '#eeeeee',text : functool.dafechastring(todos2.fecha)},
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 	fillColor: '#eeeeee',text : functool.dahorautf(todos2.horadeinicio)}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text : todos2.nopoliza}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text : String(todos2.consignatario).replaceAll('<strong>','').replaceAll('</strong>','').replaceAll('<br>','').split('Nit:')[0]}
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20]	
                      
                  });
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*',0,'*',0,'*',0,'*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Marchamo Origen'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Marchamo SAT'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Marchamo Nuevo'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Tipo de Mercancía'}
                              
                               ],
                              [ {fillColor: '#eeeeee',text : todos2.marchamoorigen},
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 	fillColor: '#eeeeee',text : todos2.marchamosat}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text : todos2.marchamonuevo}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text : todos2.tipodemercancia}
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*',0,'*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Número de Bultos'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Documento de Embarque'}, 
                             
                              
                               ],
                              [ {fillColor: '#eeeeee',text : todos2.bultos},
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 	fillColor: '#eeeeee',text : todos2.documentodeembarque}
                           
                             
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
                  jsonx.push({ text: 'Revisión SAT', 	 italics: true,style: 'header', fontSize: 18  });
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Tipo de Revisión'}	
                            
                           
                             
                              
                               ],
                               [ {fillColor: '#eeeeee',text : todos2.tipoderevision}
                              
                             
                               ],
                         
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*',0,'*',0,'*',0],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Se tomaron muestras?'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Cantidad de muestras SAT'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Nombre de persona que efectuó la revisión SAT'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] }
                            
                              
                               ],
                              [ {fillColor: '#eeeeee',text : functool.dafalso(todos2.setomaronmuestras)},
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 	fillColor: '#eeeeee',text : todos2.cantidaddemuestrassat}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text : todos2.nombresat}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] }
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  jsonx.push({ text: 'Revisión MAGA', 	 italics: true,style: 'header', fontSize: 18  });
              
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Tipo de Revisión'}	
                             
                           
                             
                              
                               ],
                               [ {fillColor: '#eeeeee',text : todos2.tipoderevision2}
                               
                             
                               ]
                         
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*',0,'*',0,'*',0,'*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Se tomaron muestras?'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Cantidad de muestras MAGA'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Se encontró plaga?'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Tarimas con sello de fumigación de origen?'}
                              
                               ],
                              [ {fillColor: '#eeeeee',text :  todos2.setomaronmuestras2},
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 	fillColor: '#eeeeee',text :  todos2.cantidaddemuestrasmaga}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text :  todos2.seencontroplaga}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text :  todos2.tarimasconsello}
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  
                  jsonx.push({
                      
                      table: {
                          widths: ['*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Nombre de persona que efectuó la revisión MAGA'}	
                              
                           
                             
                              
                               ],
                               [ {fillColor: '#eeeeee',text :  todos2.nombredepersonalges}
                               
                             
                               ],
                         
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  jsonx.push({ text: 'Revisión Antinarcoticos', 	 italics: true,style: 'header', fontSize: 18  });
              
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Tipo de Revisión'}	
                             
                           
                             
                              
                               ],
                               [ {fillColor: '#eeeeee',text :  todos2.tipoderevision3}
                               
                             
                               ],
                         
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['*',0,'*',0,'*'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Se tomaron muestras?'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Cantidad de muestras Antinarcoticos'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Nombre de persona que efectuó la revisión Antinarcoticos'}
                            
                              
                               ],
                              [ {fillColor: '#eeeeee',text : todos2.setomaronmuestras3},
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 	fillColor: '#eeeeee',text : todos2.cantidaddemuestrasantinarcoticos}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text : todos2.nombredepersonalges}, 
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  jsonx.push({ text: 'FOTOS', 	 italics: true,style: 'header', fontSize: 18  });
              
              
                  jsonx.push({ text: 'Apertura', 	 italics: true,style: 'header', fontSize: 18  });
              
              
                  var ape1=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.apertura01,todos2.apertura01)
                  var ape2=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.apertura02,todos2.apertura02)
                  var ape3=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.apertura03,todos2.apertura03)
                  var ape4=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.apertura04,todos2.apertura04)
                  var ape5=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.apertura05,todos2.apertura05)
              
                  
                  jsonx.push({
                      
                      table: {
                          widths: ['30%','1%','30%','1%','30%'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'apertura01'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'apertura02'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'apertura03'}
                            
                              
                               ],
                              [ { image: 'data:image/jpeg;base64,'+ ape1 ,fit:[160,160]  },
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ ape2  ,fit:[160,160]  }, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ ape3  ,fit:[160,160]  }, 
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['30%','1%','30%'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'apertura04'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'apertura05'} 
                             
                              
                               ],
                              [ { image: 'data:image/jpeg;base64,'+ ape4   ,fit:[160,160] },
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ ape5  ,fit:[160,160]  }, 
                            
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
                  jsonx.push({ text: 'Mercancia', 	 italics: true,style: 'header', fontSize: 18  });
                  
                  var mer1=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia01,todos2.mercancia01)
                  var mer2=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia02,todos2.mercancia02)
                  var mer3=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia03,todos2.mercancia03)
                  var mer4=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia04,todos2.mercancia04)
                  var mer5=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.mercancia05,todos2.mercancia05)
                  
              
                  jsonx.push({
                      
                      table: {
                          widths: ['30%','1%','30%','1%','30%'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'mercancia01'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'mercancia02'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'mercancia03'}
                            
                              
                               ],
                              [ { image: 'data:image/jpeg;base64,'+ mer1  ,fit:[160,160]  },
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ mer2   ,fit:[160,160] }, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ mer3   ,fit:[160,160] }, 
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
                  
                  jsonx.push({
                      
                      table: {
                          widths: ['30%','1%','30%'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'mercancia04'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'mercancia05'}, 
                            
                              
                               ],
                              [ { image: 'data:image/jpeg;base64,'+ mer4   },
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ mer5   }, 
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  jsonx.push({ text: 'Cierre', 	 italics: true,style: 'header', fontSize: 18  });
                  
              
                  var cierr1=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.cierre01,todos2.cierre01)
                  var cierr2=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.cierre02,todos2.cierre02)
                  var cierr3=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.cierre03,todos2.cierre03)
                  var cierr4=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.cierre04,todos2.cierre04)
                  var cierr5=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.cierre05,todos2.cierre05)
              
              
                  
                  jsonx.push({
                      
                      table: {
                          widths: ['30%','1%','30%','1%','30%'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'cierre01'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'cierre02'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'cierre03'}
                            
                              
                               ],
                              [ { image: 'data:image/jpeg;base64,'+ cierr1  ,fit:[160,160]  },
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ cierr2  ,fit:[160,160]  }, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ cierr3   ,fit:[160,160] }, 
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
                  jsonx.push({
                      
                      table: {
                          widths: ['30%','1%','30%'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'cierre04'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'cierre05'}
                    
                            
                              
                               ],
                              [ { image: 'data:image/jpeg;base64,'+ cierr4 ,fit:[160,160]   },
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 image: 'data:image/jpeg;base64,'+ cierr5   ,fit:[160,160] }
                            
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  jsonx.push({
                      
                      table: {
                          widths: ['30%','1%','30%','1%','30%'],
                           headerRows: 1,
                          
                          body: [
                              [{ bold: true,text : 'Comentarios'},	
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Nombre de personal GES'}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              { bold: true,text : 'Hora de Finalización'}
                            
                              
                               ],
                              [ {fillColor: '#eeeeee',text : todos2.comentarios},
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	 	fillColor: '#eeeeee',text : todos2.nombredepersonalges}, 
                              { text: ' ', borderColor: ['#fff','#fff', '#3c8f57', '#fff'] },
                              {	fillColor: '#eeeeee',text : todos2.horadefinalizacion}, 
                            
                              ],
                          ]
                      }
                      ,layout: 'noBorders',
                      margin: [0, 5, 0, 20],	columnGap: 20,
                      
                  });
              
              
                  
                  var firma=await functool.daimagenxxx('http://127.0.0.1:9090' + todos2.firma, todos2.firma)
              
                 jsonx.push({    image: 'data:image/jpeg;base64,'+ firma     });
              
                    
                 //resolve(todos2); 
             //    resolve(jsonx); 
              resolve({estado:jsonx}); 

            })();

           break;
              default:
                // code block
                resolve({estado:'exito'}); 
            }
      });
  }

  


    var dareportepdfsolo= async function(req, res, next,dataanterior){
      console.log(req.params)
      return new Promise(resolve => {
          var reportefrm=req.params.id.split('°')
          //reportefrm this.nidformulario + '°' + this.idformulario  + '°'+item._id 
          console.log('clase frmmovilejecutareporte --> add en la funcion dareportepdf  case ' + reportefrm[1] + ':(async () => { })();')
          switch(reportefrm[1]) {
         
               case '5fc02f572fc3552d1014792f': //FORMULARIO 1-H

                (async () => {
    
 
    var todos2=dataanterior.todos2;

                    let jsonx= [];
               
         
                  
                
                   
                
                    
                
                
              
                 
    
        
              
    
                  
                   
    
                    
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
    dareportepdf: dareportepdf,
    dareportepdfsolo: dareportepdfsolo
   
      }
