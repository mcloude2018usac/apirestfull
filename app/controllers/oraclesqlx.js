
var oracledb = require('oracledb');


var connAttrs = {
    "user": "dbindicadores",
    "password": "N0tiene",
    "connectString": "52.90.195.238/xe"
}

function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
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

var qry=''
    switch(req.params.id) {
        case 'indicadores':
        qry='select *  from indicador'      
        break;
        case 'tipoterritorios':
             
                qry='SELECT distinct Nivel_Territorial.NOMBRE nombre,  Nivel_Territorial.ID_NIVEL_TER codigo FROM indicador i,  Indicador_X_Ter_Agr ind,  Nivel_Territorial WHERE i.ID_INDICADOR = ind.ID_INDICADOR AND ind.ID_NIVEL_TER = Nivel_Territorial.ID_NIVEL_TER AND i.ID_INDICADOR   =' + req.params.id2 + '  ORDER BY Nivel_Territorial.ID_NIVEL_TER ASC'
        break;
        case 'tipoagrupaciones':
               
                qry=' SELECT DISTINCT  Tipo_Agrupacion.NOMBRE AS nombre, Tipo_Agrupacion.ID_TIPO_AGRUPACION codigo fROM indicador i,  Indicador_X_Ter_Agr ind,  Tipo_Agrupacion WHERE i.ID_INDICADOR       = ind.ID_INDICADOR AND ind.ID_TIPO_AGRUPACION = Tipo_Agrupacion.ID_TIPO_AGRUPACION AND i.ID_INDICADOR         =  ' +req.params.id2 + ' ORDER BY Tipo_Agrupacion.ID_TIPO_AGRUPACION  ASC'
        break;

        case 'territorios':
              
                qry='select  id_territorio as codigo,nombre  from Territorio  where Id_NIVEL_TER=' + req.params.id2
        break;
        case 'agrupaciones':
              
                qry='  select  id_agrupacion as codigo,nombre  from Agrupacion  where Id_TIPO_Agrupacion    =  ' + req.params.id2
        break;
 
        case 'datosgrafica':
              
            qry=' SELECT  serie.ID_SERIE,Dato_Serie.ETIQUETA_FECHA,  Dato_Serie.VALOR,  tipo_serie.NOMBRE FROM tipo_serie INNER JOIN serie ON tipo_serie.ID_TIPO_SERIE = serie.ID_TIPO_SERIE INNER JOIN Dato_Serie  ON Dato_Serie.ID_SERIE   = serie.ID_SERIE WHERE serie.ID_INDICADOR = ' + req.params.id2 + '  AND serie.ID_TERRITORIO  =  ' + req.params.id3 + '  AND serie.ID_AGRUPACION  =  ' + req.params.id4 
        break;
        
        case 'productos':
            qry= 'SELECT indicador_x_producto.ID_PRODUCTO codigo, producto.NOMBRE FROM indicador_x_producto, producto where indicador_x_producto.id_indicador = ' + req.params.id2 + ' and indicador_x_producto.id_producto = producto.id_producto ORDER BY producto.id_producto  ASC'
        break;

        case 'datosgrafica2':
              
            qry=' SELECT Serie_Ejecucion.ID_SERIE_EJEC ID_SERIE,     Dato_Serie_Ejec.ETIQUETA_FECHA,        Dato_Serie_Ejec.VALOR,    Tipo_Serie_Ejecucion.NOMBRE     FROM Tipo_Serie_Ejecucion       INNER JOIN Serie_Ejecucion       ON Serie_Ejecucion.ID_TIPO_SERIE_EJEC = Tipo_Serie_Ejecucion.ID_TIPO_SERIE_EJEC        INNER JOIN Dato_Serie_Ejec     ON Dato_Serie_Ejec.ID_SERIE_EJEC = Serie_Ejecucion.ID_SERIE_EJEC     INNER JOIN Indicador_Ejecucion       ON Indicador_Ejecucion.ID_INDICADOR_EJEC = Serie_Ejecucion.ID_INDICADOR_EJEC           INNER JOIN PRODUCTO           ON PRODUCTO.ID_PRODUCTO    = Indicador_Ejecucion.ID_PRODUCTO       WHERE PRODUCTO.ID_PRODUCTO =  ' + req.params.id2  
        break;

        case 'participacion':
              
                qry=' SELECT PARTICIPACION.ID_PRODUCTO CODIGO,  Dependencia_Gobierno.NOMBRE,  Tipo_Participacion.NOMBRE AS NOMBRE1 FROM Tipo_Participacion INNER JOIN PARTICIPACION ON Tipo_Participacion.ID_TIPO_PARTICIPACION = PARTICIPACION.ID_TIPO_PARTICIPACION INNER JOIN Dependencia_Gobierno ON Dependencia_Gobierno.ID_DEPENDENCIA_GOB = PARTICIPACION.ID_DEPENDENCIA_GOB WHERE PARTICIPACION.ID_PRODUCTO             =  ' + req.params.id2  
        break;
    }


console.log(qry)

      connection.execute(qry, {},  {
        outFormat: oracledb.OBJECT // Return the result as Object
    }, function (err, result) {
        if (err || result.rows.length < 1) {
            res.set('Content-Type', 'application/json');
            var status = err ? 500 : 404;

           res.status(500).send('No existe informacion')  
/*
            switch(req.params.id) {
                case 'datosgrafica':
                        res.json({etiquetas:[],dataset:[]});
                    break;
                defaul:
                res.json([]);

            }
*/
           
        } else {


            switch(req.params.id) {
                case 'indicadores':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].ID_INDICADOR,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);

                break;
                case 'participacion':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE,nombre1:result.rows[i].NOMBRE1})
                        }
                        res.json(myData);

                break;
                case 'tipoterritorios':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);
                break;
                case 'tipoagrupaciones':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);
                break;
                case 'territorios':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);
                break;
                case 'agrupaciones':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);
                break;
                case 'productos':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);
                break;
                case 'datosgrafica':
                        var myData = [];
                        var myData2 = [];
                        var myData3 = [];
                        var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                        //etiquetas
                        if(result.rows.length==0)
                        {
                            res.json({etiquetas:[],dataset:[]});
                        }
                        else
                        {
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push(result.rows[i].ETIQUETA_FECHA)
                            myData3.push(null)
                        }

                        var grupo=result.rows[0].NOMBRE
                        var ncolor=0;
                        for(var i = 0; i < result.rows.length;i++){

                            if(grupo==result.rows[i].NOMBRE)
                            {
                                
                                myData3[i]=result.rows[i].VALOR
                             

                            }
                            else{
                                myData2.push({
                                    label: grupo,
                                    fill: false,
                                    data: myData3,
                                    backgroundColor:'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                                    borderColor: arre[ncolor],// array should have same number of elements as number of dataset
                                    borderWidth: 1});
                                    ncolor=ncolor+1;
                                     myData3 = [];
                                    for(var ii = 0; ii < result.rows.length;ii++){
                                        myData3.push(null)
                                    }
                                  
                                    grupo=result.rows[i].NOMBRE
                                    myData3[i]=result.rows[i].VALOR
                                    //myData3.push(result.rows[i].VALOR)
                            }
                           

   
                        }

                        myData2.push({
                            label: grupo,
                            data: myData3,
                            backgroundColor:'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                            borderColor: arre[ncolor],// array should have same number of elements as number of dataset
                            borderWidth: 1});

                        res.json({etiquetas:myData,dataset:myData2});
                        }
                break;
                case 'datosgrafica2':
                        var myData = [];
                        var myData2 = [];
                        var myData3 = [];
                        var arre=['yellow','red','green','blue','purple','violet','turquoise']    
                        //etiquetas
                        if(result.rows.length==0)
                        {
                            res.json({etiquetas:[],dataset:[]});
                        }
                        else
                        {
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push(result.rows[i].ETIQUETA_FECHA)
                          //  myData3.push(null)
                        }

                        var myData=removeDups(myData);
                        for(var i = 0; i <myData.length;i++){
                           
                            myData3.push(null)
                        }


                        var grupo=result.rows[0].NOMBRE
                        var ncolor=0;
                        var j=0;
                       
                        for(var i = 0; i < result.rows.length;i++){

                            if(grupo==result.rows[i].NOMBRE)
                            {
                                
                                myData3[j]=result.rows[i].VALOR
                                j=j+1;

                            }
                            else{
                                myData2.push({
                                    label: grupo,
                                    fill: false,
                                    data: myData3,
                                    backgroundColor:'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                                    borderColor: arre[ncolor],// array should have same number of elements as number of dataset
                                    borderWidth: 1});
                                    ncolor=ncolor+1;
                                     myData3 = [];
                                    for(var ii = 0; ii < myData.length;ii++){
                                        myData3.push(null)
                                    }
                                    
                                    grupo=result.rows[i].NOMBRE
                                    j=0;    
                                    myData3[j]=result.rows[i].VALOR
                                    j=j+1;
                                    //myData3.push(result.rows[i].VALOR)
                            }
                           

   
                        }
                        
                        myData2.push({
                            label: grupo,
                            data: myData3,
                            backgroundColor:'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                            borderColor: arre[ncolor],// array should have same number of elements as number of dataset
                            borderWidth: 1});

                        res.json({etiquetas:myData,dataset:myData2});
                        }
                break;
            }
       
        }
      
        connection.release(
            function (err) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log("GET /user_profiles/" + req.params.txt + " : Connection released");
                }
            });
    });


   

   

});


  
}
