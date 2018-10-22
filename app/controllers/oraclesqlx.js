/*var oracledb = require('oracledb');
var Bitacora = require('../models/bitacora');


var connAttrs = {
    "user": "sun",
    "password": "sundesarrollo123",
    "connectString": "10.50.40.31/test"
}


exports.getoraclesqlxx = function(req, res, next){
  "use strict";
  oracledb.getConnection(connAttrs, function (err, connection) {
    if (err) {
        // Error connecting to DB
        res.set('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify({
            status: 500,
            message: "Error connecting to DB",
            detailed_message: err.message
        }));
        return;
    }
    console.log(req.params.txt);

    if(req.params.txt)
    {

      connection.execute(req.params.txt, {},  {
        outFormat: oracledb.OBJECT // Return the result as Object
    }, function (err, result) {
        if (err || result.rows.length < 1) {
            res.set('Content-Type', 'application/json');
            var status = err ? 500 : 404;
            res.status(status).send(JSON.stringify({
                status: status,
                message: err ? "Error getting the user profile" : "User doesn't exist",
                detailed_message: err ? err.message : ""
            }));
        } else {
            res.contentType('application/json').status(200).send(JSON.stringify(result.rows));
        }
        // Release the connection
        connection.release(
            function (err) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log("GET /user_profiles/" + req.params.id + " : Connection released");
                }
            });
    });


    }
    else
    {



    } 

   

});


  
}
*/