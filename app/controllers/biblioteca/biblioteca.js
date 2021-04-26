//http://biblos.usac.edu.gt/library/index.php?action=ajax&rs=getSolvencia&usuario=solvencia&pass=RR03ng41lsdt0r0&carnet=9419254



var http = require('http');
let xmlParser = require('xml2json');
exports.getBiblioteca = function(req, res, next){
/*
var parseString = require('xml2js').parseString;
var xml = '<?xml version="1.0" encoding="UTF-8" ?><business><company>Code Blog</company><owner>Nic Raboy</owner><employee><firstname>Nic</firstname><lastname>Raboy</lastname></employee><employee><firstname>Maria</firstname><lastname>Campos</lastname></employee></business>';
parseString(xml, function (err, result) {
    console.dir(JSON.stringify(result));
});
*/
    if(req.params.id)
    { 

        var options = {
            hostname: "biblos.usac.edu.gt",
            path: '/library/index.php?action=ajax&rs=getSolvencia&usuario=solvencia&pass=RR03ng41lsdt0r0&carnet='+req.params.id
        };
    
        var gsaReq = http.get(options, function (response) {
            var completeResponse = '';
            response.on('data', function (chunk) {
                completeResponse += chunk;
            });
            response.on('end', function() {
                
                res.json(xmlParser.toJson(completeResponse));

               
            })
        }).on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        



       
    }

}