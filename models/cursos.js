var mongoose =require("mongoose");
    var CursoSchema 		=	new  mongoose.Schema({
        nombre   		: { type : String, required : true },
        descripcion   		: { type : String, required : true },
        fechaini   		: { type : Date, required : true},
        fechafin   		: { type : Date, required : true},
        ubicacion	: { type : String, required : true },
        costo	: { type : String, required : true },
        foto 	: { type : String, required : true },
        estado	: { type : String, required : true },
        nomax: { type : Number },
        categoria: { type : String, required : true , ref: 'Dcatalogo'},
        usuarionew	: { type : String },      usuarioup	: { type : String },
        date 		: { type: Date, default: Date.now }}, {
        timestamps: true
        });



module.exports = mongoose.model('Curso', CursoSchema);

