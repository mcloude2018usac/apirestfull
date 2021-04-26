var mongoose =require("mongoose");
var DcursoSchema = new mongoose.Schema({
    idcurso: {    type: String,    required: true, ref: 'Curso'  },
    tipo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Dcurso', DcursoSchema);