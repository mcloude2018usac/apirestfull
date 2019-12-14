var oracledb = require('oracledb');
var Indicadore = require('../models/segeplan/indicadores');


var connAttrs = {
    "user": "dbprocessges",
    "password": "S1t13n3$",
    "connectString": "181.174.122.180/xe"
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
case 'pggarea':
        qry="select id_area codigo, nombre        from PGG_AREA         where PGG_AREA.id_politica =  " + req.params.id2 + "   /* IPOL */        order by PGG_AREA.codigo      "
       break;

case 'pggareaindicador':
    qry="select PGG_AREA.id_area,INDICADOR.id_indicador codigo, INDICADOR.nombre     from PGG_AREA, PGG_AREA_X_INDICADOR, INDICADOR    where PGG_AREA.id_area = PGG_AREA_X_INDICADOR.id_area   and PGG_AREA_X_INDICADOR.id_indicador = INDICADOR.id_indicador  and PGG_AREA.id_politica =  " + req.params.id2 + "   /* IPOL */             order by PGG_AREA.codigo, INDICADOR.codigo    "
    break;
    
                  
case 'ind1m':
qry="select U.id_indicador, 'Q.' ||to_char(sum(U.asignado) , '999,999,999.00')   asignado, 'Q.' || to_char(sum(U.ejecutado) , '999,999,999.00')  ejecutado, round((sum(U.ejecutado)/sum(U.asignado))*100,2) || '%' porcentaje  from ( select T.id_indicador, T.id_producto, sum(T.asignado) asignado, sum(T.ejecutado) ejecutado from ( select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,        DS1.fecha, DS1.valor asignado, 0 ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador =  " + req.params.id2 + "    /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto  and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') and SERIE_EJECUCION.id_tipo_serie_ejec = 2 and SERIE_EJECUCION.id_concepto_ejec = 2 union select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,        DS1.fecha, 0 asignado, DS1.valor ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador =   " + req.params.id2 + " /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto  and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') and SERIE_EJECUCION.id_tipo_serie_ejec = 3 and SERIE_EJECUCION.id_concepto_ejec = 2  ) T group by id_indicador, id_producto ) U group by id_indicador "
console.log(qry)



break;
case 'ind1d':
qry=" select T.id_indicador, (select nombre from PRODUCTO where PRODUCTO.id_producto = T.id_producto) nombre, 'Q.' || to_char(sum(T.asignado) , '999,999,999.00')  asignado, 'Q.' || to_char(sum(T.ejecutado) , '999,999,999.00')  ejecutado,  round((sum(T.ejecutado)/sum(T.asignado))*100,0) || '%' porcentaje from ( select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,         DS1.fecha, DS1.valor asignado, 0 ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador = " + req.params.id2 + " /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec  and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') and SERIE_EJECUCION.id_tipo_serie_ejec = 2 and SERIE_EJECUCION.id_concepto_ejec = 2 union select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,         DS1.fecha, 0 asignado, DS1.valor ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador = 1 /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto  and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') and SERIE_EJECUCION.id_tipo_serie_ejec = 3 and SERIE_EJECUCION.id_concepto_ejec = 2 ) T group by id_indicador, id_producto order by id_indicador, id_producto  "
break;
  
case 'ind2m':
qry=" select U.id_indicador, sum(U.asignado) asignado, sum(U.ejecutado) ejecutado,  round((sum(U.ejecutado)/sum(U.asignado))*100,2) || '%' porcentaje from (select T.id_indicador, T.id_producto, sum(T.asignado) asignado, sum(T.ejecutado) ejecutado from ( select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,        DS1.fecha, DS1.valor asignado, 0 ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador = " + req.params.id2 + " /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') /* EN EL FUTURO SERA UN PARAMETRO */ and SERIE_EJECUCION.id_tipo_serie_ejec = 2 and SERIE_EJECUCION.id_concepto_ejec = 1 union select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,        DS1.fecha, 0 asignado, DS1.valor ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador = " + req.params.id2 + " /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') /* EN EL FUTURO SERA UN PARAMETRO */ and SERIE_EJECUCION.id_tipo_serie_ejec = 3 and SERIE_EJECUCION.id_concepto_ejec = 1 ) T group by id_indicador, id_producto) U group by id_indicador"
break;
case 'ind2d':
qry=" select T.id_indicador, (select nombre from PRODUCTO where PRODUCTO.id_producto = T.id_producto) nombre,  sum(T.asignado) asignado,  sum(T.ejecutado) ejecutado, round((sum(T.ejecutado)/sum(T.asignado))*100,2) || '%' porcentaje from ( select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,        DS1.fecha, DS1.valor asignado, 0 ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador = " + req.params.id2 + " /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto  and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') and SERIE_EJECUCION.id_tipo_serie_ejec = 2 and SERIE_EJECUCION.id_concepto_ejec = 1  union select INDICADOR_X_PRODUCTO.id_indicador,       PRODUCTO.id_producto,        DS1.fecha, 0 asignado, DS1.valor ejecutado from DATO_SERIE_EJEC DS1, SERIE_EJECUCION, PRODUCTO, INDICADOR_X_PRODUCTO where INDICADOR_X_PRODUCTO.id_indicador = 1 /* IND */ and INDICADOR_X_PRODUCTO.id_producto = PRODUCTO.id_producto and PRODUCTO.id_producto = SERIE_EJECUCION.id_producto  and DS1.id_serie_ejec = SERIE_EJECUCION.id_serie_ejec and fecha = TO_DATE('31/12/2019','DD/MM/YYYY') and SERIE_EJECUCION.id_tipo_serie_ejec = 3 and SERIE_EJECUCION.id_concepto_ejec = 1  ) T group by id_indicador, id_producto order by id_indicador, id_producto "
break;

        case 'marcos':
        qry='select id_marco codigo,nombre  from marco  where id_marco not in(4,0) order by 1 asc '      
        break;
        case 'marcos0':
                qry='select id_marco codigo,nombre  from marco  where id_marco  in(4) order by 1 asc '      
                break;
                case 'marcosf':
                    qry='select id_marco codigo,nombre  from marco  where id_marco  in(0) order by 1 asc '      
                    break;
        case 'indicadores':
        qry='select *  from indicador'      
        break;
        case 'tipoterritorios':
             
                qry=' select distinct NIVEL_TERRITORIAL.id_nivel_ter codigo, NIVEL_TERRITORIAL.nombre     from INDICADOR_X_TER_AGR, NIVEL_TERRITORIAL              where INDICADOR_X_TER_AGR.id_indicador =  ' + req.params.id2 + '               and INDICADOR_X_TER_AGR.id_nivel_ter = NIVEL_TERRITORIAL.id_nivel_ter                order by 1 '


                
                


        break;
        case 'tipoagrupaciones':
               
                qry=' select TIPO_AGRUPACION.id_tipo_agrupacion codigo, TIPO_AGRUPACION.nombre  from INDICADOR_X_TER_AGR, TIPO_AGRUPACION   where INDICADOR_X_TER_AGR.id_indicador =  ' +req.params.id2 + '     and INDICADOR_X_TER_AGR.id_tipo_agrupacion = TIPO_AGRUPACION.id_tipo_agrupacion            and INDICADOR_X_TER_AGR.id_nivel_ter =  ' +req.params.id3 + '               order by 1 '

                



        break;

        case 'territorios':
      


                qry='select  id_territorio as codigo,nombre  from Territorio  where Id_NIVEL_TER=' + req.params.id2 + ' order by 1'
        break;
        case 'agrupaciones':
              
                qry='  select  id_agrupacion as codigo,nombre  from Agrupacion  where Id_TIPO_Agrupacion    =  ' + req.params.id2
        break;
 
        case 'datosgraficaa':

                
                qry='   SELECT                SEMAFORO.NOMBRE,       SEMAFORO.VALOR_ACTUAL,     SEMAFORO.ID_TIPO_ALERTA      FROM INDICADOR_CONTROL,              SEMAFORO              WHERE SEMAFORO.ID_INDICADOR_CTRL        = INDICADOR_CONTROL.ID_INDICADOR_CTRL              AND INDICADOR_CONTROL.ID_MARCO          =  ' + req.params.id6 + '               AND INDICADOR_CONTROL.ID_INDICADOR_CTRL =  ' + req.params.id2 
              
          


        break;
        
        case 'datosgrafica':
          //  console.log(req.params)
       
             qry="    SELECT NVL(SERIE.ID_INDICADOR_CTRL, -1) indicador2,  SERIE.ID_SERIE, dato_serie.ETIQUETA_FECHA, dato_serie.VALOR,tipo_SERIE.NOMBRE || ' ' ||  AGRUPACION.NOMBRE nombre  FROM SERIE,  TIPO_SERIE,  AGRUPACION,  dato_serie WHERE SERIE.ID_TIPO_SERIE    = TIPO_SERIE.ID_TIPO_SERIE AND SERIE.ID_AGRUPACION      = AGRUPACION.ID_AGRUPACION AND dato_serie.ID_SERIE      = SERIE.ID_SERIE AND (SERIE.ID_MARCO          = 0 OR SERIE.ID_MARCO            = 4) AND SERIE.ID_INDICADOR       =  " + req.params.id2  + "    AND SERIE.ID_NIVEL_TER       = " + req.params.id3 + " AND SERIE.ID_TERRITORIO      = " + req.params.id4  + " AND SERIE.ID_TIPO_AGRUPACION = " + req.params.id5 



          

          


        break;
        case 'indicadorpolitica':
                qry= ' select Id_politica codigo,nombre  from PGG_POLITICA  ' 

break;
case 'indicadorpolitica2':
    qry= " select PGG_POLITICA.id_politica id_indicador_ctrl,PGG_POLITICA.nombre, SEMAFORO.id_semaforo,SEMAFORO.nombre   nombres, SEMAFORO.valor_actual, SEMAFORO.id_tipo_alerta    from PGG_POLITICA, INDICADOR_CONTROL, SEMAFORO   where PGG_POLITICA.id_indicador_ctrl = INDICADOR_CONTROL.id_indicador_ctrl   and INDICADOR_CONTROL.id_indicador_ctrl = SEMAFORO.id_indicador_ctrl order by PGG_POLITICA.codigo "

    

break;
case 'politicameta':
    qry= '  select PGG_META.id_meta codigo,PGG_META.nombre   from PGG_META   where PGG_META.id_politica = '+ req.params.id2+'  order by PGG_META.codigo  ' 

break;
case 'politicametan1':
    qry= '    select PGG_META.id_meta,      PGG_META.nombre,       INDICADOR.id_indicador,      INDICADOR.nombre nombres,          SEMAFORO.valor_actual valor,      SEMAFORO.id_tipo_alerta   from PGG_META, PGG_META_X_INDICADOR, INDICADOR, SERIE SPROY, SERIE HIST, SEMAFORO   where PGG_META.id_meta = PGG_META_X_INDICADOR.id_meta   and PGG_META_X_INDICADOR.id_indicador = INDICADOR.id_indicador   and SPROY.id_indicador = INDICADOR.id_indicador   and SEMAFORO.id_indicador_ctrl = SPROY.id_indicador_ctrl   and PGG_META.id_politica =  '+ req.params.id2+'  /* IPOL */   and SPROY.id_marco = 4 /* IMARCO */   and SPROY.id_territorio = 1  /* este valor el fijo (terrirotio nacional) */   and SPROY.id_agrupacion = 1  /* este valor el fijo (sin agrupacion) */   and SPROY.id_tipo_serie = 1  /* este valor el fijo (proyectado) */   and HIST.id_indicador = INDICADOR.id_indicador    and HIST.id_marco = 0  /* este valor el fijo (historio de indicadores)*/   and HIST.id_territorio = 1  /* este valor el fijo (terrirotio nacional) */   and HIST.id_agrupacion = 1  /* este valor el fijo (sin agrupacion) */   and HIST.id_tipo_serie = 2 order by PGG_META.codigo, INDICADOR.codigo    ' 

   
    


break;
        case 'indicadorcontrol':

              

                qry= ' select Id_Indicador_Ctrl codigo,nombre  from Pr_Prioridad_Nacional  ' 

break;

case 'prioridadn2':
        qry= ' select INDICADOR_CONTROL.id_indicador_ctrl, PR_PRIORIDAD_NACIONAL.nombre, SEMAFORO.id_semaforo, SEMAFORO.nombre nombres, SEMAFORO.valor_actual, SEMAFORO.id_tipo_alerta, INDICADOR_CONTROL.path_imagen from PR_PRIORIDAD_NACIONAL, INDICADOR_CONTROL, SEMAFORO where PR_PRIORIDAD_NACIONAL.id_indicador_ctrl = INDICADOR_CONTROL.id_indicador_ctrl and SEMAFORO.id_indicador_ctrl = INDICADOR_CONTROL.id_indicador_ctrl and INDICADOR_CONTROL.id_marco = ' +  req.params.id3  + ' and INDICADOR_CONTROL.id_indicador_ctrl =   ' + req.params.id2  


        

break;
        case 'prioridadn':
                qry= " select INDICADOR_CONTROL.id_indicador_ctrl, PR_PRIORIDAD_NACIONAL.nombre, SEMAFORO.id_semaforo, SEMAFORO.nombre || ' ' || SEMAFORO.valor_actual || '%'  nombres, SEMAFORO.valor_actual, SEMAFORO.id_tipo_alerta, INDICADOR_CONTROL.path_imagen from PR_PRIORIDAD_NACIONAL, INDICADOR_CONTROL, SEMAFORO where PR_PRIORIDAD_NACIONAL.id_indicador_ctrl = INDICADOR_CONTROL.id_indicador_ctrl and SEMAFORO.id_indicador_ctrl = INDICADOR_CONTROL.id_indicador_ctrl and INDICADOR_CONTROL.id_marco = " +  req.params.id3  + " and INDICADOR_CONTROL.id_indicador_ctrl =   " + req.params.id2  


                

break;

case 'politicadn':
    qry= "    select PGG_POLITICA.id_politica id_indicador_ctrl,PGG_POLITICA.nombre, SEMAFORO.id_semaforo,SEMAFORO.nombre || ' ' || SEMAFORO.valor_actual || '%'  nombres, SEMAFORO.valor_actual, SEMAFORO.id_tipo_alerta    from PGG_POLITICA, INDICADOR_CONTROL, SEMAFORO    where PGG_POLITICA.id_indicador_ctrl = INDICADOR_CONTROL.id_indicador_ctrl    and INDICADOR_CONTROL.id_indicador_ctrl = SEMAFORO.id_indicador_ctrl    and  PGG_POLITICA.id_politica =" + req.params.id2  + "  order by PGG_POLITICA.codigo"

    

break;
        case 'productos':

           


            qry= 'SELECT indicador_x_producto.ID_PRODUCTO codigo, producto.NOMBRE FROM indicador_x_producto, producto where indicador_x_producto.id_indicador = ' + req.params.id2 + ' and indicador_x_producto.id_producto = producto.id_producto ORDER BY producto.id_producto  ASC'
        break;

        case 'datosgrafica2a':
                

              
                qry=' select SEMAFORO.nombre,valor_actual, id_tipo_alerta  from SERIE_EJECUCION, SEMAFORO, INDICADOR_CONTROL  where SERIE_EJECUCION.id_serie_ejec = INDICADOR_CONTROL.id_serie_ejec  and SEMAFORO.id_indicador_ctrl = INDICADOR_CONTROL.id_indicador_ctrl  and SERIE_EJECUCION.id_tipo_serie_ejec = 2 and SERIE_EJECUCION.id_producto    =   ' + req.params.id2  



            break;
        case 'datosgrafica2':
            qry=' SELECT Serie_Ejecucion.ID_SERIE_EJEC ID_SERIE,    Dato_Serie_Ejec.ETIQUETA_FECHA,      Dato_Serie_Ejec.VALOR,       Tipo_Serie_Ejecucion.NOMBRE           FROM Tipo_Serie_Ejecucion              INNER JOIN Serie_Ejecucion              ON Serie_Ejecucion.ID_TIPO_SERIE_EJEC = Tipo_Serie_Ejecucion.ID_TIPO_SERIE_EJEC              INNER JOIN Dato_Serie_Ejec              ON Dato_Serie_Ejec.ID_SERIE_EJEC = Serie_Ejecucion.ID_SERIE_EJEC              INNER JOIN PRODUCTO              ON Serie_Ejecucion.ID_PRODUCTO = PRODUCTO.ID_PRODUCTO              WHERE  Serie_Ejecucion.id_concepto_ejec=2 and  PRODUCTO.ID_PRODUCTO     =   ' + req.params.id2  
        break;
        case 'datosgrafica2x':
            qry=' SELECT Serie_Ejecucion.ID_SERIE_EJEC ID_SERIE,    Dato_Serie_Ejec.ETIQUETA_FECHA,      Dato_Serie_Ejec.VALOR,       Tipo_Serie_Ejecucion.NOMBRE           FROM Tipo_Serie_Ejecucion              INNER JOIN Serie_Ejecucion              ON Serie_Ejecucion.ID_TIPO_SERIE_EJEC = Tipo_Serie_Ejecucion.ID_TIPO_SERIE_EJEC              INNER JOIN Dato_Serie_Ejec              ON Dato_Serie_Ejec.ID_SERIE_EJEC = Serie_Ejecucion.ID_SERIE_EJEC              INNER JOIN PRODUCTO              ON Serie_Ejecucion.ID_PRODUCTO = PRODUCTO.ID_PRODUCTO              WHERE  Serie_Ejecucion.id_concepto_ejec=1 and  PRODUCTO.ID_PRODUCTO     =   ' + req.params.id2  
        break;

        case 'participacion':
              
                qry='  select (select PRODUCTO.nombre from PRODUCTO where PRODUCTO.id_producto = PARTICIPACION.id_producto) producto,        DEPENDENCIA_GOBIERNO.siglas, DEPENDENCIA_GOBIERNO.nombre from PARTICIPACION, DEPENDENCIA_GOBIERNO, TIPO_PARTICIPACION, INDICADOR_X_PRODUCTO where PARTICIPACION.id_producto = INDICADOR_X_PRODUCTO.id_producto and PARTICIPACION.id_dependencia_gob = DEPENDENCIA_GOBIERNO.id_dependencia_gob and TIPO_PARTICIPACION.id_tipo_participacion = PARTICIPACION.id_tipo_participacion and INDICADOR_X_PRODUCTO.id_indicador =  ' + req.params.id2  

                



        break;
    }


//console.log(qry)

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
                case 'pggarea':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);

                            break;
                       
                
                case 'pggareaindicador':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({idarea:result.rows[i].ID_AREA,codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);

                            break;
                  
                case 'ind1m':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].ID_INDICADOR,nombre:'Ejecución presupuestaria 2019',asignado:result.rows[i].ASIGNADO,ejecutado:result.rows[i].EJECUTADO,porcentaje:result.rows[i].PORCENTAJE})
                        }
                        res.json(myData);

                break;
                case 'ind1d':
                var myData = [];
                for(var i = 0; i < result.rows.length;i++){
                myData.push({codigo:result.rows[i].ID_INDICADOR,nombre:result.rows[i].NOMBRE,asignado:result.rows[i].ASIGNADO,ejecutado:result.rows[i].EJECUTADO,porcentaje:result.rows[i].PORCENTAJE})
                }
                res.json(myData);

                break;
                case 'ind2m':
                var myData = [];
                for(var i = 0; i < result.rows.length;i++){
                myData.push({codigo:result.rows[i].ID_INDICADOR,nombre:'Ejecución presupuestaria 2019',asignado:result.rows[i].ASIGNADO,ejecutado:result.rows[i].EJECUTADO,porcentaje:result.rows[i].PORCENTAJE})
                }
                res.json(myData);

                break;
                case 'ind2d':
                var myData = [];
                for(var i = 0; i < result.rows.length;i++){
                myData.push({codigo:result.rows[i].ID_INDICADOR,nombre:result.rows[i].NOMBRE,asignado:result.rows[i].ASIGNADO,ejecutado:result.rows[i].EJECUTADO,porcentaje:result.rows[i].PORCENTAJE})
                }
                res.json(myData);

                break;
                case 'marcos':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);

                            break;
                break;
                case 'marcosf':
                    var myData = [];
                    for(var i = 0; i < result.rows.length;i++){
                        myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                    }
                    res.json(myData);

                        break;
            break;
                case 'marcos0':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);

                            break;
                break;
                case 'indicadorcontrol':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                        }
                        res.json(myData);

                            break;

                            case 'indicadorpolitica':
                                var myData = [];
                                for(var i = 0; i < result.rows.length;i++){
                                    myData.push({codigo:result.rows[i].CODIGO,nombre:result.rows[i].NOMBRE})
                                }
                                res.json(myData);
        
                                    break;
                case 'indicadores':
                        
                        Indicadore.find({idempresa:req.params.id3,usuarionew:req.params.id4}).exec(function(err, todos) {
                            if (err){  res.send(err);  }
                            var myData = [];
                            for(var i = 0; i < result.rows.length;i++){

                                var encuentra=0;
                                for(var ii = 0; ii < todos.length;ii++){
                                    
                                    if(todos[ii].idindicador==result.rows[i].ID_INDICADOR)
                                    {
                                        encuentra=1;
                                        break;
                                    }
                                }
                                if(encuentra==1)
                                {}
                                else{
                                    myData.push({codigo:result.rows[i].ID_INDICADOR,nombre:result.rows[i].NOMBRE})
                                }

                                
                            }
                            res.json(myData);

                           
                        });





                       

                break;
                case 'participacion':
                        var myData = [];
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push({producto:result.rows[i].PRODUCTO,nombre:result.rows[i].NOMBRE,siglas:result.rows[i].SIGLAS})
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
                case 'datosgraficaa':
                       
                        var myData2 = [];
                     
                       
                        if(result.rows.length==0)
                        {
                            res.json({nombre:'',valor:0,color:''});
                        }
                        else
                        {
                                    for(var i = 0; i < result.rows.length;i++){
                                        var color=''
                                        if(result.rows[i].ID_TIPO_ALERTA=='1'){color='green'}
                                        if(result.rows[i].ID_TIPO_ALERTA=='2'){color='blue'}
                                        if(result.rows[i].ID_TIPO_ALERTA=='3'){color='red'}

                                        myData2.push({nombre:result.rows[i].NOMBRE,valor:result.rows[i].VALOR_ACTUAL,color:color});
                                    }
console.log(myData2)
                                    res.json(myData2);
                        }
                break;
                case 'datosgrafica2a':
                       
                        var myData2 = [];
                     
                       
                        if(result.rows.length==0)
                        {
                            res.json({nombre:'',valor:0,color:''});
                        }
                        else
                        {
                                    for(var i = 0; i < result.rows.length;i++){
                                        var color=''
                                        if(result.rows[i].ID_TIPO_ALERTA=='1'){color='green'}
                                        if(result.rows[i].ID_TIPO_ALERTA=='2'){color='blue'}
                                        if(result.rows[i].ID_TIPO_ALERTA=='3'){color='red'}

                                        myData2.push({nombre:result.rows[i].NOMBRE,valor:result.rows[i].VALOR_ACTUAL,color:color});
                                    }
console.log(myData2)
                                    res.json(myData2);
                        }
                break;
             

                  case 'prioridadn':

                        var myData = [];
                        var myData2 = [];
                        var myData3 = [];
                        var imagent=''
                        //etiquetas
                        if(result.rows.length==0)
                        {
                            res.json({etiquetas:[],dataset:[]});
                        }
                        else
                        {
                        for(var i = 0; i < result.rows.length;i++){
                            myData.push(result.rows[i].NOMBRES)
                            imagent=result.rows[i].PATH_IMAGEN
                         
                        }

                        var ncolor=0;
                        for(var i = 0; i < result.rows.length;i++){
                             
                                myData2.push(
                                    result.rows[i].VALOR_ACTUAL,
                                  );

                                  var color=''
                                  if(result.rows[i].ID_TIPO_ALERTA=='1'){color='green'}
                                  if(result.rows[i].ID_TIPO_ALERTA=='2'){color='blue'}
                                  if(result.rows[i].ID_TIPO_ALERTA=='3'){color='red'}


                                  myData3.push(
                                color
                                  );

                                  
                                  
                            
                           

   
                        }

                 

                        res.json({etiquetas:myData,dataset:myData2,color:myData3,imagen:imagent});
                        }




                   break;   
                   
                   case 'indicadorpolitica2':
                    var myData = [];
                    var myData2 = [];
                    var myData3 = [];
                    var arre=['blue','green','red','purple','violet','turquoise']    
                    //etiquetas
                    var indicador2=''
                    if(result.rows.length==0)
                    {
                        res.json({});
                    }
                    else
                    {

                      
              
                   
                    var grupo=result.rows[0].ID_INDICADOR_CTRL
                    var nombret=result.rows[0].NOMBRE
                    var ncolor=0;
                    var j=0;
                    for(var i = 0; i < result.rows.length;i++){

                        if(grupo==result.rows[i].ID_INDICADOR_CTRL)
                        {
                            
                            myData3.push({idsemaforo:result.rows[i].ID_SEMAFORO,nombre:result.rows[i].NOMBRES,valor:result.rows[i].VALOR_ACTUAL,alarma:result.rows[i].ID_TIPO_ALARMA,codigo:result.rows[i].ID_INDICADOR_CTRL,nombret:result.rows[i].NOMBRE})
                       
                            j=j+1;

                         

                        }
                        else{
                            myData2.push({
                                idmeta: grupo,
                               nombre:nombret,
                                data: myData3
                               
                            });

                                ncolor=ncolor+1;

                                 myData3 = [];

                             
                              
                                grupo=result.rows[i].ID_INDICADOR_CTRL
                                var nombret=result.rows[i].NOMBRE
                                j=0;    
                                myData3.push({idsemaforo:result.rows[i].ID_SEMAFORO,nombre:result.rows[i].NOMBRES,valor:result.rows[i].VALOR_ACTUAL,alarma:result.rows[i].ID_TIPO_ALARMA ,codigo:result.rows[i].ID_INDICADOR_CTRL,nombret:result.rows[i].NOMBRE})
                       
                                j=j+1;
                           
                                //myData3.push(result.rows[i].VALOR)
                        }
                       


                    }




                    myData2.push({
                        idpolitica: grupo,
                       nombre:nombret,
                        data: myData3
                       
                    });
                
                    res.json(myData2);
                    }

                        break;



                   case 'politicametan1':
                    var myData = [];
                    var myData2 = [];
                    var myData3 = [];
                    var arre=['blue','green','red','purple','violet','turquoise']    
                    //etiquetas
                    var indicador2=''
                    if(result.rows.length==0)
                    {
                        res.json({});
                    }
                    else
                    {

                      
              
                   
                    var grupo=result.rows[0].ID_META
                    var nombret=result.rows[0].NOMBRE
                    var ncolor=0;
                    var j=0;
                    for(var i = 0; i < result.rows.length;i++){

                        if(grupo==result.rows[i].ID_META)
                        {
                            
                            myData3.push({idindicador:result.rows[i].ID_INDICADOR,nombre:result.rows[i].NOMBRES,valor:result.rows[i].VALOR})
                            j=j+1;

                         

                        }
                        else{
                            myData2.push({
                                idmeta: grupo,
                               nombre:nombret,
                                data: myData3
                               
                            });

                                ncolor=ncolor+1;

                                 myData3 = [];

                             
                              
                                grupo=result.rows[i].ID_META
                                var nombret=result.rows[i].NOMBRE
                                j=0;    
                                myData3.push({idindicador:result.rows[i].ID_INDICADOR,nombre:result.rows[i].NOMBRES,valor:result.rows[i].VALOR})
                       
                                j=j+1;
                           
                                //myData3.push(result.rows[i].VALOR)
                        }
                       


                    }




                    myData2.push({
                        idmeta: grupo,
                       nombre:nombret,
                        data: myData3
                       
                    });

                    res.json(myData2);
                    }


               break;   
                   case 'politicadn':

                    var myData = [];
                    var myData2 = [];
                    var myData3 = [];
                    var imagent=''
                    //etiquetas
                    if(result.rows.length==0)
                    {
                        res.json({etiquetas:[],dataset:[]});
                    }
                    else
                    {
                    for(var i = 0; i < result.rows.length;i++){
                        myData.push(result.rows[i].NOMBRES)
                        imagent=result.rows[i].PATH_IMAGEN
                     
                    }

                    var ncolor=0;
                    for(var i = 0; i < result.rows.length;i++){
                         
                            myData2.push(
                                result.rows[i].VALOR_ACTUAL,
                              );

                              var color=''
                              if(result.rows[i].ID_TIPO_ALERTA=='1'){color='green'}
                              if(result.rows[i].ID_TIPO_ALERTA=='2'){color='blue'}
                              if(result.rows[i].ID_TIPO_ALERTA=='3'){color='red'}


                              myData3.push(
                            color
                              );

                              
                              
                        
                       


                    }

             

                    res.json({etiquetas:myData,dataset:myData2,color:myData3,imagen:imagent});
                    }




               break;   
                   case 'prioridadn2':

                        var myData = [];
                        var myData2 = [];
                        var myData3 = [];
                        var imagent=''
                        //etiquetas
                        if(result.rows.length==0)
                        {
                            res.json({info:[]});
                        }
                        else
                        {
                                    for(var i = 0; i < result.rows.length;i++){
                                        var color=''
                                        if(result.rows[i].ID_TIPO_ALERTA=='1'){color='verde'}
                                        if(result.rows[i].ID_TIPO_ALERTA=='2'){color='amarillo'}
                                        if(result.rows[i].ID_TIPO_ALERTA=='3'){color='rojo'}

                                        imagent=result.rows[i].PATH_IMAGEN
                                        myData.push({nombres:result.rows[i].NOMBRES,valor:result.rows[i].VALOR_ACTUAL,color:color,imagen:imagent,codigo:req.params.id2 ,nombre:req.params.id4})
                                    
                                    
                                    }

                    

                 

                        res.json(myData);
                        }




                   break;   
                case 'datosgrafica':
                        var myData = [];
                        var myData2 = [];
                        var myData3 = [];
                        var arre=['blue','green','red','purple','violet','turquoise']    
                        //etiquetas
                        var indicador2=''
                        if(result.rows.length==0)
                        {
                            res.json({etiquetas:[],dataset:[]});
                        }
                        else
                        {

                        indicador2=result.rows[0].INDICADOR2
                        for(var i = 0; i < result.rows.length;i++){  myData.push(result.rows[i].ETIQUETA_FECHA)}
                        var myData=removeDups(myData);
                        for(var i = 0; i <myData.length;i++){    myData3.push(null)      }
                        var grupo=result.rows[0].NOMBRE
                        var ncolor=0;
                        var j=0;
                        for(var i = 0; i < result.rows.length;i++){
                            if(grupo==result.rows[i].NOMBRE)     {   
                                for(var r = 0; r < myData.length;r++){
                                    if(myData[r]==result.rows[i].ETIQUETA_FECHA)
                                    {
                                        myData3[r]=result.rows[i].VALOR;   

                                    }
                                }

                                  
                                
                                }
                            else{
                                myData2.push({
                                    label: grupo,
                                    fill: false,
                                    data: myData3,
                                    backgroundColor:'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                                    borderColor: arre[ncolor],// array should have same number of elements as number of dataset
                                    borderWidth: 1
                                });
                                    ncolor=ncolor+1;
                                     myData3 = [];
                                    j=0;
                                    for(var ii = 0; ii <  myData.length;ii++){
                                        myData3.push(null)
                                    }
                                    grupo=result.rows[i].NOMBRE

                                    for(var r = 0; r < myData.length;r++){
                                        if(myData[r]==result.rows[i].ETIQUETA_FECHA)
                                        {
                                            myData3[r]=result.rows[i].VALOR;   
    
                                        }
                                    }
    
                                
                                //    myData3[j]=result.rows[i].VALOR
                                //    j=j+1;
                               
                                   
                            }
                           

   
                        }




                        myData2.push({
                            label: grupo,
                            data: myData3,
                            backgroundColor:'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
                            borderColor: arre[ncolor],// array should have same number of elements as number of dataset
                            borderWidth: 1});

                        res.json({etiquetas:myData,dataset:myData2,indicador2:indicador2});
                        }
                break;
                case 'datosgrafica2':
                        var myData = [];
                        var myData2 = [];
                        var myData3 = [];
                        var arre=['blue','green','red','purple','violet','turquoise']    
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
                case 'datosgrafica2x':
                        var myData = [];
                        var myData2 = [];
                        var myData3 = [];
                        var arre=['blue','green','red','purple','violet','turquoise']    
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
