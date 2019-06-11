var mongoose =require("mongoose");
    var DepartamentoSchema 		=	new  mongoose.Schema({
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Departamento', DepartamentoSchema);


