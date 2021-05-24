var kardex = require('../../models/asociadoventa/kardexcorreos');
var Bitacora = require('../../models/bitacora');
var Frmmovil = require('../../models/frmmovil');
var Frmmovild = require('../../models/frmmovild');
var functool = require('../../controllers/funcionesnode');

var conecta1 = 'mssql://sa:$ertobar@192.168.34.5/stbd'
var conecta2 = 'mssql://sa:$ertobar@192.168.34.5/cielomarbd'
var conecta3 = 'mssql://sa:$ertobar@192.168.34.5/camposbd'



exports.getGes = async function(req, res, next){
    if(req.params.id3)
    { 
        if(req.params.id2==='getgastos')
        { 

            (async () => {
          //  producto = await functool.dadatosformulariofinal('5fc01bbba8d0a14888774579',{ },req.params.id3,'5fc01bbba8d0a14888774579',{fechadevencimiento:1}); 
            var datat= []
            var regt0=[];   

          
           var cad1="select ticket.aduana,ticket.Polizaaduana,clientes.Nombre,clientes.Nit,ticket.libretexto from ticket,clientes where ticket.idcliente=clientes.codigo and ticket.noticket= '"+req.params.id+"' "
           var cad1a="select noreq,ticketno,solicitadopor,nombrecliente,polizano,CONVERT(varchar,fechareq,103)  fechareq,descripcion1,Monto1,descripcion2,Monto2,descripcion3,Monto3,descripcion4,Monto4,descripcion5,Monto5,descripcion6,Monto6,descripcion7,Monto7,descripcion8,Monto8,descripcion9,Monto9,descripcion10,Monto10 ,montofact1 venta1,montofact2 venta2,montofact3 venta3,montofact4 venta4,montofact5 venta5,montofact6 venta6,montofact7 venta7,montofact8 venta8,montofact9 venta9,montofact10 venta10 from requisicion where ticketno='"+req.params.id+"' "
 
           
           var cad2="select ticket.aduana,ticket.Polizaaduana,clientes.Nombre,clientes.Nit,ticket.libretexto from ticket,clientes where ticket.idcliente=clientes.codigo and ticket.noticket= '"+req.params.id+"' "
           var cad2a=" select noreq,ticketno,solicitadopor,nombrecliente,polizano,CONVERT(varchar,fechareq,103) fechareq,descripcion1,Monto1,descripcion2,Monto2,descripcion3,Monto3,descripcion4,Monto4,descripcion5,Monto5,descripcion6,Monto6,descripcion7,Monto7,descripcion8,Monto8,descripcion9,Monto9,descripcion10,Monto10,montofact1 venta1,montofact2 venta2,montofact3 venta3,montofact4 venta4,montofact5 venta5,montofact6 venta6,montofact7 venta7,montofact8 venta8,montofact9 venta9,montofact10 venta10 from requisicion where ticketno='"+req.params.id+"' "
           
           var servicios1= "select '['+ CONVERT(VARCHAR(10),codigoinv) +'] ' + descripcioninv VALOR  from invemae  order by Descripcioninv"
           var servicios2= "select '['+ CONVERT(VARCHAR(10),codigoinv) +'] ' + descripcioninv VALOR  from invemae  order by Descripcioninv"



           var  cad3="select ticket.aduana,ticket.Polizaaduana,clientes.Nombre,clientes.Nit,ticket.libretexto from ticket,clientes where ticket.idcliente=clientes.codigo and ticket.noticket="+req.params.id+"' "
           
           var cad4=  " SELECT *  FROM (select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion1 Descripcion,Monto1 Costo,montofact1 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion2 Descripcion,Monto2 Costo,montofact2 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion3 Descripcion,Monto3 Costo,montofact3 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion4 Descripcion,Monto4 Costo,montofact4 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion5 Descripcion,Monto5 Costo,montofact5 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion6 Descripcion,Monto6 Costo,montofact6 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion7 Descripcion,Monto7 Costo,montofact7 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion8 Descripcion,Monto8 Costo,montofact8 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion9 Descripcion,Monto9 Costo,montofact9 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion10 Descripcion,Monto10 Costo,montofact10 Venta, moneda Moneda from requisicion where ticketno='"+req.params.id+"'     ) a  WHERE a.VENTA>0 AND a.moneda='Q' "
  	    	cad4=cad4 +  " union all SELECT '','','','','TOTAL',SUM(COSTO),SUM(VENTA),''  FROM (select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion1 Descripcion,Monto1 Costo,montofact1 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion2 Descripcion,Monto2 Costo,montofact2 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion3 Descripcion,Monto3 Costo,montofact3 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion4 Descripcion,Monto4 Costo,montofact4 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion5 Descripcion,Monto5 Costo,montofact5 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion6 Descripcion,Monto6 Costo,montofact6 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion7 Descripcion,Monto7 Costo,montofact7 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion8 Descripcion,Monto8 Costo,montofact8 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion9 Descripcion,Monto9 Costo,montofact9 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion10 Descripcion,Monto10 Costo,montofact10 Venta, moneda Moneda from requisicion where ticketno='"+req.params.id+"'     ) a  WHERE a.VENTA>0 AND a.moneda='Q'  "

              var cad5=" SELECT *  FROM (select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion1 Descripcion,Monto1 Costo,montofact1 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion2 Descripcion,Monto2 Costo,montofact2 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion3 Descripcion,Monto3 Costo,montofact3 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion4 Descripcion,Monto4 Costo,montofact4 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion5 Descripcion,Monto5 Costo,montofact5 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion6 Descripcion,Monto6 Costo,montofact6 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion7 Descripcion,Monto7 Costo,montofact7 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion8 Descripcion,Monto8 Costo,montofact8 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion9 Descripcion,Monto9 Costo,montofact9 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion10 Descripcion,Monto10 Costo,montofact10 Venta, moneda Moneda from requisicion where ticketno='"+req.params.id+"'     ) a  WHERE a.VENTA>0 AND a.moneda='$' "

cad5=cad5+" union all SELECT '','','','','TOTAL',SUM(COSTO),SUM(VENTA),''  FROM (select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion1 Descripcion,Monto1 Costo,montofact1 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion2 Descripcion,Monto2 Costo,montofact2 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion3 Descripcion,Monto3 Costo,montofact3 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion4 Descripcion,Monto4 Costo,montofact4 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion5 Descripcion,Monto5 Costo,montofact5 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion6 Descripcion,Monto6 Costo,montofact6 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion7 Descripcion,Monto7 Costo,montofact7 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion8 Descripcion,Monto8 Costo,montofact8 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"      union all      select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion9 Descripcion,Monto9 Costo,montofact9 Venta, moneda Moneda from requisicion where ticketno IN("+req.params.id+") "+"       union all       select comentarioreq,noreq Requisición,ticketno Ticket,polizano Poliza,descripcion10 Descripcion,Monto10 Costo,montofact10 Venta, moneda Moneda from requisicion where ticketno='"+req.params.id+"'     ) a  WHERE a.VENTA>0 AND a.moneda='$'  "

           var ejecuta1=await  functool.ejecutasql( cad1,conecta1)
           var ejecuta1a=await  functool.ejecutasql( cad1a,conecta1)
                
           var ejecuta2=await  functool.ejecutasql( cad2,conecta2)
           var ejecuta2a=await  functool.ejecutasql( cad2a,conecta2)

           var ejecuta3=await  functool.ejecutasql( servicios1,conecta1)
           var ejecuta3a=await  functool.ejecutasql( servicios2,conecta2)

           console.log({d1:ejecuta1.datat.recordset,d1a:ejecuta1a.datat.recordset,d2:ejecuta2.datat.recordset,d2a:ejecuta2a.datat.recordset})
             
            
     
            res.json({d1:ejecuta1.datat.recordset,d1a:ejecuta1a.datat.recordset,d2:ejecuta2.datat.recordset,d2a:ejecuta2a.datat.recordset,
                ss:ejecuta3.datat.recordset,ss2:ejecuta3a.datat.recordset});   
        })();


        }
       
      
    }
   
}

exports.creages2s = async function(req, res, next){
    if(req.body.operacion==='creagasto')
    { 




        var cad="    INSERT INTO [dbo].[requisicion]        ([noreq]   ,[fechareq]     ,[ticketno]       ,[polizano]      ,[montoreq]     ,[solicitadopor]      ,[descripcion1]           ,[Monto1]      ,[descripcion2]     ,[Monto2]      ,[descripcion3]      ,[Monto3]  ,[descripcion4]       ,[Monto4]     ,[descripcion5]         ,[Monto5]           ,[descripcion6]         ,[Monto6]          ,[descripcion7]         ,[Monto7]        ,[descripcion8]        ,[Monto8]        ,[descripcion9]         ,[Monto9]        ,[descripcion10]          ,[Monto10]         ,[fechaauto]          ,[autorizadopor]          ,[statusreq]          ,[nombrecliente]           ,[nitcliente]          ,[aduana]          ,[preautorizadopor]          ,[codigo1]         ,[codigo2]          ,[codigo3]          ,[codigo4]          ,[codigo5]          ,[codigo6]           ,[codigo7]           ,[codigo8]           ,[codigo9]           ,[codigo10]          ,[usado1]         ,[usado2]          ,[usado3]          ,[usado4]           ,[usado5]          ,[usado6]          ,[usado7]          ,[usado8]          ,[usado9]          ,[usado10]           ,[comentarioreq]           ,[montofact]           ,[montofact1]           ,[montofact2]           ,[montofact3]           ,[montofact4]           ,[montofact5]           ,[montofact6]          ,[montofact7]           ,[montofact8]           ,[montofact9]           ,[montofact10]           ,[moneda]           ,[ref])     VALUES " +
       " ((select max(noreq)+1 from requisicion),getdate(),     "+
        " " + req.body.ticketno + ",'" +      req.body.polizano+ "'," +            req.body.montoreq+ ",'"+      req.body.solicitadopor+ "','"+  req.body.descripcion1+ "',"+     req.body.Monto1+ ",'"+   
         req.body.descripcion2+ "', " +
                 req.body.Monto2 + ",'"+ req.body.descripcion3+ "',"+    req.body.Monto3+ ",'"+ req.body.descripcion4+ "'," +     req.body.Monto4+ ",'" +        req.body.descripcion5+ "'," +       req.body.Monto5+ ",'" +     req.body.descripcion6 + "'," +
                 req.body.Monto6+ ",'" +               req.body.descripcion7+ "'," +      req.body.Monto7+ ",'" +   req.body.descripcion8+ "'," +   
                     req.body.Monto8+ ",'" +       req.body.descripcion9+ "'," +      req.body.Monto9+ ",'" +
                 req.body.descripcion10+ "'," +          req.body.Monto10+ "," +        getdate()+ "," +            ''+ "," +          1+ "," +       req.body.nombrecliente+ "," +     req.body.nitcliente+ "," +             req.body.aduana+ "," +
               "  ''"+ "," +  req.body.codigo1+ "," +   req.body.codigo2+ "," +      req.body.codigo3+ "," +      req.body.codigo4+ "," +   req.body.codigo5+ "," +   req.body.codigo6+ "," +
                       req.body.codigo7+ "," +       req.body.codigo8+ "," +    req.body.codigo9+ "," +     req.body.codigo10+ "," +  
               "       null,null,null,null,null,null,null,null,null,null,'" +     req.body.comentarioreq+ "',0," +  req.body.montofact1+ "," +        req.body.montofact2+ "," +           req.body.montofact3+ "," +            req.body.montofact4+ "," +
                               req.body.montofact5+ "," +     req.body.montofact6+ "," +             req.body.montofact7+ "," +           req.body.montofact8+ "," +     
                                    req.body.montofact9+ "," +          req.body.montofact10+ ",'" +      req.body.moneda+ "'," +    "        '')" 


                                    if(req.body.tipo==='1')
                                    {//setobar
                                        var ejecuta2=await  functool.ejecutasql( cad,conecta1)
                                    }
                                    else
                                    {//cielomar
                                        var ejecuta2=await  functool.ejecutasql( cad,conecta2)
                                    }

                                    res.json({data:ejecuta2.datat.recordset})
      
    
    }

}