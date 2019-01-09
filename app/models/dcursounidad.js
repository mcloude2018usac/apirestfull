var mongoose =require("mongoose");
var DcursounidadSchema = new mongoose.Schema({
    idcurso: {
        type: String,     required: true, ref: 'Curso'   },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaini   		: { type : Date, required : true},
    fechafin   		: { type : Date, required : true},
    foto 	: { type : String, required : true },
    estado: {
        type: String,
        required: true
    }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Dcursounidad', DcursounidadSchema);