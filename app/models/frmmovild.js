var mongoose =require("mongoose");
    var FrmmovildSchema 		=	new  mongoose.Schema({
        idmovil	: { type : String, required : true, ref:'Frmmovil' },
        type   		: { type : String, required : true ,ref:'Formcat' },
        name   		: { type : String, required : true },
        nombre   		: { type : String, required : true },
        order:	 { type : Number, required : true },
        title:  { type : String, required : true },
        estado	: { type : String, required : true },

     
        required: 	 { type : String, required : true },
        placeholder: { type : String, required : true },
        display: { type : String, required : true },
        selected:  { type : String, required : true },
        disabled:  { type : String, required : true },
        hidden:  { type : String, required : true },
       
        position: { type : String, required : true },
        labelsizefondt: { type : String, required : true },
        categoria: { type : String },
        combofijo: { type : String },
        default: { type : String },
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
        timestamps: true
        });



module.exports = mongoose.model('Frmmovild', FrmmovildSchema);