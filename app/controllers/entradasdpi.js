var Entradasdpi = require('../models/entradasdpi');
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

exports.getEntradasdpi = function(req, res, next){
    if(req.params.id2)
    {    if(req.params.id2=='CUI')
        { console.log('entra')
            Entradasdpi.find({'cui':req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                   res.json(todos);   
                
            });
      

        }
        else
        {
            if(req.params.id2=='PDF')
            { 
                Entradasdpi.find({'_id':req.params.id}).exec(function(err, todos) {
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
      
                
                
         
          
    
            }
            else
            {
            Entradasdpi.find({},function(err, todos) {
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
                 Entradasdpi.find({'cui':req.params.id}).sort([['createdAt', -1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                    res.json(todos);
                });
             
           
        }
        else
        { Entradasdpi.find(function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

    }
 
}
exports.deleteEntradasdpi = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina entradadpi'});
    Entradasdpi.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaEntradasdpi2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    Entradasdpi.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {  console.log(req.body)
            
            todo.nombrefactura=	req.body.nombrefactura        	||	todo.nombrefactura        	;
            todo.nitfactura=	req.body.nitfactura        	||	todo.nitfactura        	;
            todo.direccionfactura=	req.body.direccionfactura        	||	todo.direccionfactura        	;
            todo.monto=	req.body.monto        	||	todo.monto        	;
            todo.horasdescuento=	req.body.horasdescuento        	||	todo.horasdescuento        	;
            todo.montodescuento=	req.body.montodescuento        	||	todo.montodescuento        	;
            todo.estado=	req.body.estado        	||	todo.estado        	;
            todo.tsalida=	req.body.tsalida        	||	todo.tsalida        	;
            todo.horascobradas=	req.body.horascobradas        	||	todo.horascobradas        	;
      
            todo.usuarioup=req.body.bitacora.email;

            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{



    
   
 
}

}



