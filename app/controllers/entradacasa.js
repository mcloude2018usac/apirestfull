var Entradacasa = require('../models/entradacasa');
var Bitacora = require('../models/bitacora');
var Personalhis = require('../models/suscriptorhis');
const PDFDocument = require('pdfkit')


function roundxx(value, decimals) {
    //parseFloat(Math.round(num3 * 100) / 100).toFixed(2);

    return Number(Math.round(value+'e'+decimals)+'e-'+decimals).toFixed(2);
  }


  function generateInvoiceTable(doc, invoice) {
    let i,
      invoiceTableTop = 330;
      const position = invoiceTableTop + (1) * 30;
  
    //for (i = 0; i < invoice.items.length; i++) {    const item = invoice.items[i];    const position = invoiceTableTop + (i + 1) * 30;
      generateTableRow(
        doc,
        position,
       "1",
        "Cobro de parqueo",
        invoice[0].monto,
        "1",
        invoice[0].monto
      );
    //}
  }

  function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
    doc
      .fontSize(10)
      .text(c1, 50, y)
      .text(c2, 150, y)
      .text(c3, 280, y, { width: 90, align: "right" })
      .text(c4, 370, y, { width: 90, align: "right" })
      .text(c5, 0, y, { align: "right" });
  }

  function generateCustomerInformation(doc, invoice) {
    const shipping = invoice.shipping;
  
    doc
      .text('No: '+invoice[0]._id, 50, 200)
      .text('Nit: '+ invoice[0].nitfactura, 50, 215)
      .text('Nombre: '+invoice[0].nombrefactura, 50, 230)
      .text('Direccion: '+invoice[0].direccionfactura, 50, 245)
      .moveDown();
  }

  function generateHeader(doc) {
    var d =new Date().toISOString().substr(0,10);   
    doc
      .image("./fonts/sampleimage.jpg", 50, 45, { width: 50 })
      .fillColor("#444444")
      .fontSize(16)
      .text("EMPRESA xxx", 110, 57)
      .fontSize(10)
      .text("Fecha " + d, 200, 65, { align: "right" })
      .text("Guatemala, Guatemala", 200, 80, { align: "right" })
      .moveDown();
  }

  function generateFooter(doc) {
    doc
      .fontSize(10)
      .text(
        "Gracias por su pago, esperamos que regrese pronto.",
        50,
        700,
        { align: "center", width: 500 }
      );
  }

exports.getEntradacasa = function(req, res, next){

    if(req.params.id3)
    { if(req.params.id3=='todos')
      {

        Entradacasa.find(function(err, todos) {
            if (err){  res.send(err);  }
             res.json(todos);
         });
      }
      else
      {
        if(req.params.id3=='filtro')
        {
                var cad= req.params.id;
                var cuit=req.params.id2;

                var aa=cad.split('.');
                var f1 = aa[0]
                var f2 = aa[1]
                var nombret=aa[2]
                var filtro;


// createdAt: { "$gte": new Date('2019-05-01T00:00:00.000Z'),"$lt": new Date('2019-06-01T24:00:00.000Z')}
//2019-05-01T00:00:00.000Z   2019-06-01T24:00:00.000Z
              
                if(nombret=='undefined' &&  cuit=='undefined')
                {
                    filtro={
                        "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                        "$lt": new Date(f2 +'T24:00:00.000Z')}
                    };
                }
                else
                {
                                if(nombret=='undefined')
                                {
                                    
                                    filtro={cui:cuit,
                                        "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                                        "$lt": new Date(f2 +'T24:00:00.000Z')}
                                    };
                                   
                                }
                                else
                                {  
                                            if(cuit=='undefined')
                                            {
                                                filtro={nombre:{ "$regex" : nombret, "$options" : "i" } ,
                                                    "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                                                    "$lt": new Date(f2 +'T24:00:00.000Z')}
                                                };
                                            }
                                            else{

                                                filtro={nombre:{ "$regex" : nombret, "$options" : "i" } ,cui:cuit,
                                                    "createdAt": {"$gte": new Date(f1 +'T00:00:00.000Z'),
                                                    "$lt": new Date(f2 +'T24:00:00.000Z')}
                                                };
                                            }
                                }
                }
               




            Entradacasa.find(filtro).sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
               
             });

        }
      
  

      }



    }
    else
    {
    if(req.params.id2)
    {    if(req.params.id2=='CUI')
        { 
            Entradacasa.find({'cui':req.params.id}).limit(5).sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
                
               
                if(todos.length>0)
                {
                    if(todos[0].estado=='Entrada')
                    {
                        res.json([{es:'saliendo'}]);   
                    }

                    if(todos[0].estado=='Salisa exitosa')
                    {
                        res.json([{es:'entrando'}]);   
                    }
                    
                    
                }
                else{

                    res.json([{es:'entrando'}]);   


                }
                   
                
            });
      

        }
        else
        {
            if(req.params.id2=='PDF')
            { 
               
            /*
                Entradacasa.find({'_id':req.params.id}).exec(function(err, todos) {
                    if (err){ res.send(err); }


                    const doc = new PDFDocument({ margin: 50 })
                    let filename ="NOMBRE" //req.body.filename
                    // Stripping special characters
                    filename = encodeURIComponent(filename) + '.pdf'
                    // Setting response to 'attachment' (download).
                    // If you use 'inline' here it will automatically open the PDF
                    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
                    res.setHeader('Content-type', 'application/pdf')
                  
                    generateHeader(doc);
    
                    generateCustomerInformation(doc, todos);
                    generateInvoiceTable(doc, todos);
                    generateFooter(doc);
    
                    doc.pipe(res)
                    doc.end()


                    
                });
      
                
                */
         
          
    
            }
            else
            {
            Entradacasa.find({},function(err, todos) {
                if (err){ res.send(err); }
               
                   res.json(todos);   
                
            });
        }   
        }
       
    }
    else
    {
        if(req.params.id)
        {  
                 Entradacasa.find({'cui':req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        { Entradacasa.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }}
 
}
exports.deleteEntradacasa = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina entrada casa'});
    Entradacasa.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaEntradacasa2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    console.log(req.params.recordID)
    Entradacasa.find({cui:req.params.recordID,estado:'Entrada'},function(err, todos1) {
        if (err){ res.send(err); }
    
        if(todos1.length>0)   {  
            
            console.log(todos1)
            Entradacasa.findById({ _id: todos1[0]._id }, function (err, todo)  {
                if (err) {  res.send(err);  }
                else
                {  
                    
                    todo.estado=	req.body.estado        	||	todo.estado        	;
                    todo.fotos=	req.body.fotos        	||	todo.fotos       	;
                    todo.tsalida=	req.body.tsalida        	||	todo.tsalida        	;
                    todo.horas=	req.body.horas        	||	todo.horas        	;
        
                    todo.usuarioup=req.body.bitacora.email;
        
                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                        res.json(todo);
                    });
                }
            });

            
        
        }
        else
        {  res.status(500).send('Error, No existe entrada realizada.');      }
        
    });


  
}
else{
   
    Entradacasa.create({ idempresa        	: req.body.idempresa        	,
        idempresa0        	: req.body.idempresa0        	,
        nombre        	: req.body.nombre        	,
        cui	: req.body.cui 	,
        direccion    	: req.body.direccion    	,
        telefo   	: req.body.telefo  	,
        fechanac   	: req.body.fechanac  	,
        idpersonal   	: req.body.idpersonal  	,
        estado    	: req.body.estado   	,
        fotoe    	: req.body.fotoe   	,
        usuarionew:req.body.bitacora.email,
        horas:0,
        tentrada:req.body.tentrada,
        dircasa:req.body.dircasa,
        contactocasa:req.body.contactocasa,
        nodispositivo:req.body.nodispositivo,
        noprov:req.body.noprov
        }
        , function(err, todo) {
        if (err){ 
          
            res.status(500).send(err.message)    }
    
        res.json(todo);

     
        

    });


    
   
 
}

}



