var mongoose =require("mongoose");
    var IndicadoresSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },   
        nombre   		: { type : String, required : true},
        idindicador  		: { type :String, required : true},
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
            timestamps: true
        });


module.exports = mongoose.model('Indicadores', IndicadoresSchema);
