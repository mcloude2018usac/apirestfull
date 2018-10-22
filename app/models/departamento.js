var mongoose =require("mongoose");
    var DepartamentoSchema 		=	new  mongoose.Schema({
        nombre	: { type : String, required : true },
        codigo	: { type : Number, required : true },
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Departamento', DepartamentoSchema);


