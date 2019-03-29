var mongoose =require("mongoose");
    var FrmmovildSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },    
        idmovil	: { type : String, required : true, ref:'Frmmovil' },
        type   		: { type : String, required : true ,ref:'Formcat' },
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
        fondoetiqueta:  { type : String },
        coloretiqueta:  { type : String },
       
        default: { type : String },
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
        timestamps: true
        });


      


module.exports = mongoose.model('Frmmovild', FrmmovildSchema);