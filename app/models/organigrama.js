var mongoose =require("mongoose");

    var OrganigramaSchema 		=	new  mongoose.Schema({
        nivel1   		: { type : String, required : true,ref:'Catalogo' },
        nivel2	: { type : String, required : true ,ref:'Catalogo'},
        usuarionew	: { type : String },      usuarioup	: { type : String }
        }, {
        timestamps: true
        });

      

module.exports = mongoose.model('Organigrama', OrganigramaSchema);
