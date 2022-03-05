//http://biblos.usac.edu.gt/library/index.php?action=ajax&rs=getSolvencia&usuario=solvencia&pass=RR03ng41lsdt0r0&carnet=9419254

const ULID = require('ulid')
var fs = require('fs');
var mysql = require('mysql')
var functool = require('../../controllers/funcionesnode');

connection = mysql.createConnection(
 { 
 host: '21.20.0.28', 
 port:'3333',
 user: 'bpm_desa',  
 password: 'Kb4xg$dHjMFppShkILO4nIM3PDjZS+PSe11', 
 database: 'bpm_catalogos'
 }
);


exports.getDnmquery = function(req, res, next){

    if(req.params.id2)
    { 
        if (connection) 
        {   var sql='';
         
        
        switch(req.params.id2) {
            case 'obtienejunta':  
            sql = " select junta ,id  from bpm_procesos.procesos p where id in(select id_proceso  from bpm_procesos.version_procesos                  WHERE  id = '"+  req.params.id +"'           )                order by id desc                 limit 1"
            
            break;
            case 'obtieneultimaversion':  
            sql = "select  id,codigo_version ,id_proceso  from bpm_procesos.version_procesos  where id_proceso in(                  select id  from bpm_procesos.procesos p where id in(select id_proceso  from bpm_procesos.version_procesos                  WHERE  id = '"+  req.params.id +"'           ))                order by id desc                 limit 1"
            
            break;
            case 'obtieneplantilla':  
            sql="select plantilla_resolucion,firmantes  from bpm_procesos.version_procesos  WHERE  id = '"+  req.params.id +"'"
            break;
            case 'obtienesolicitud':  
            sql="SELECT  numero_solicitud , datos_solicitud FROM bpm_procesos.instancia_procesos  WHERE id_version_proceso ='"+req.params.id +"' order by id desc"
            break;
        }
        connection.query(sql, function(error, rows) {
            if (error){ 
                res.status(500).send(error.sqlMessage);
             }
             res.json(rows);
         
    
    
    
        });

    }

       
    }

}


exports.creaDnmquery = function(req, res, next){
    if(req.params.recordID)
    { 
        if (connection) 
        {   var sql='';
         
        
        sql = req.body.query

        connection.query(sql, function(error, rows) {
            if (error){ 
                res.status(500).send(error.sqlMessage);
             }
             
           res.json({"msg":"update"});
    
    
    
        });

    }

       
    }
}