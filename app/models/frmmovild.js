var mongoose =require("mongoose");
    var FrmmovildSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },    
        idmovil	: { type : String, required : true, ref:'Frmmovil' },
        type   		: { type : String, required : true  },
        name   		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        order:	 { type : Number, required : true },
        title:  { type : String, required : true },
        estado	: { type : String, required : true },
        required: 	 { type : String },
        placeholder: { type : String },
        display: { type : String },
        selected:  { type : String },
        disabled:  { type : String },
        hidden:  { type : String },
        position: { type : String },
        labelsizefondt: { type : String },
        categoria: { type : String },
        combofijo: { type : String },
        blike:  { type : String },
        geoposicion:  { type : String },
        fondoetiqueta:  { type : String },
        coloretiqueta:  { type : String },
        idformdetalle:  	{    id	: { type : String },   nombre	: { type : String }        },
        rangomin:	 { type : Number },
        rangomax:	 { type : Number },
        rangostep:	 { type : Number },
        alfatypo: { type : String },
        default: { type : String },
        default2: { type : String },
        default3: { type : String },
        respuesta: { type : String },
        valor: { type : Number },
        verregistros: { type : String },
        usarunaves:  { type : String },
        idfrmconsultaorigen:  { id	: { type : String },   nombre	: { type : String }   },
        idfrmconsulta2origen:[{   id	: { type : String, required : true },   nombre		: { type : String, required : true }}],
        nombreconsulta2origen		: { type : String },  
        idcampofiltro:  { type : String },
        idcampofiltro2:  { type : String },
        idcampofiltromanual:  { type : String },
        idfrmconsulta:  { id	: { type : String },   nombre	: { type : String }   },
        idfrmconsulta2:[{   id	: { type : String, required : true },   nombre		: { type : String, required : true }}],
        nombreconsulta2		: { type : String },  
        idfrmconsultaorigenpapa:  { id	: { type : String },   nombre	: { type : String }   },
        idcampofiltropapa:  { type : String },
        maxnumregistros: { type : Number },
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
        timestamps: true
        });


      


module.exports = mongoose.model('Frmmovild', FrmmovildSchema);