
var request = require('request');
var xml2js = require ('xml2js'); 



function remove_accents(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents =    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');

    return strAccentsOut;
}

//http://127.0.0.1:9090/api/siifs/1/2
exports.getsiif = function(req, res, next){

    if(req.params.id7)
    {  
//' + remove_accents(req.params.id2) + '
//this.cui+ '/'+this.nombre+'/' +this.monto +".00" + '/00/2020/22/1'
myXMLText=remove_accents("\n<Envelope xmlns=\"http://schemas.xmlsoap.org/soap/envelope/\"><Body><getData xmlns=\"urn:miserviciowsdl\"><carnet>"+ req.params.id +"</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>" +req.params.id2+ "</nombre><monto>" + req.params.id3 + "</monto><anio>"+ req.params.id5 +"</anio><rubro>"+ req.params.id6 +"</rubro><variante_rubro>"+ req.params.id7 +"</variante_rubro><subtotal>"+ req.params.id3 +"</subtotal></getData></Body></Envelope>")

console.log(myXMLText)
console.log(myXMLText.length)

let strLengthInBytes = Buffer.byteLength(myXMLText); 
console.log(strLengthInBytes)

var options = {
    'method': 'POST',
    gzip: true,
    'url': 'http://calusacvirtual.usac.edu.gt/app/api/order.php',
    'headers': {
      'Content-Type': 'text/xml;charset=UTF-8',
      'User-Agent': 'PostmanRuntime/7.22.0',
      'Accept': '*/*',
      'Cache-Control': 'no-cache',
      'Postman-Token': '40c97521-3534-4293-a411-6d48339c8328',
      'Host': 'calusacvirtual.usac.edu.gt',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Length': myXMLText.length,
      'Connection': 'keep-alive',
      'cache-control': 'no-cache'
    },
    body: myXMLText
  
  };
  request(options, function (error, response) { 
    if (error) throw new Error(error);
  //  console.log(response.body);
    res.send({cadena:response.body});
  //  res.send('error');
   
  });


     

        


    }
    else
    {
    if(req.params.id3)
    {  
      
        
        if(req.params.id3=='busca')
        {

            var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+req.params.id+ '</carnet><id_ordenpago>'+req.params.id2+'</id_ordenpago></getData></Body></Envelope>'


 console.log(myXMLText)

            request({
                url: "http://calusacvirtual.usac.edu.gt/app/api/validate_order.php",
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
               
            
                res.send({cadena:body});
    
    
    
            });
        }
        else
        {

            
        if(req.params.id2=='calusac')
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

          

        
       
    }
}


}