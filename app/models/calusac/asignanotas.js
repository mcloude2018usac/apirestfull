var mongoose =require("mongoose");

    var AsignanotasSchema 		=	new  mongoose.Schema({
        carne	: { type : String, required : true },
        ano	: { type : Number, required : true },
        tipo: { type : String},
        nocurso: { type : String},
        nonivel: { type : String},
        nota: { type : String},
        fechag: { type : String},
        estado: { type : String},

        usuarionew	: { type : String },      usuarioup	: { type : String }

        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Asignanotas', AsignanotasSchema);


