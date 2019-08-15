
var request = require('request');
var xml2js = require ('xml2js'); 


http://127.0.0.1:9090/api/siifs/1/2
exports.getsiif = function(req, res, next){

    if(req.params.id2)
    {  
        var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>29993154</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>Carmen Maria Cante</nombre><monto>240</monto><anio>2019</anio><rubro>145</rubro><variante_rubro>1</variante_rubro><subtotal>240</subtotal></getData></Body></Envelope>'


     

        request({
            url: "http://calusacvirtual.usac.edu.gt/app/api/order.php",
            method: "POST",
            gzip: true,
            headers: {
                'Content-Type': 'text/xml;charset=UTF-8',
                'User-Agent': 'PostmanRuntime/7.15.2',
                'Accept': '*/*',
                'Cache-Control': 'no-cache',
                'Host': 'calusacvirtual.usac.edu.gt',
                'Accept-Encoding': 'gzip, deflate',
                'Content-Length': myXMLText.length,
                'Connection': 'keep-alive',
                'cache-control': 'no-cache',


                
            },
            body: myXMLText
        }, function (error, response, body){
   
            if (error){  console.log(error); res.send(error);  }
           
        

            var xml2js = require('xml2js');
            var parser = new xml2js.Parser({explicitArray: false, trim: true});
            parser.parseString(body, (err, result) => {
          
              res.send(result);
            });



        });

        
       
    }
   


}