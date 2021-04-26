var mongoose =require("mongoose");
    var UserperfilSchema 		=	new  mongoose.Schema({
        userId   		: { type : String, required : true, ref: 'User' },
        cui   		: { type : String, required : true },
        nov   		: { type : String },
        carne   		: { type : String },
        nombre1   		: { type : String, required : true },
        nombre2   		: { type : String, required : true },
        nombre3   		: { type : String, required : true },
        nombre4  		: { type : String, required : true },
    
        correo   		: { type : String, required : true },
    
     
        lenguaje2	: { type : Boolean },
        matematica	: { type : Boolean },
        fisica	: { type : Boolean },
        biologia	: { type : Boolean },
        quimica	: { type : Boolean },
        idjornada: { type : String },
        idjornada2: { type : String },
        idjornada3: { type : String },
        idjornada4: { type : String },
        idjornada5: { type : String},

        idhorario: { type : String},
        idhorario2: { type : String },
        idhorario3: { type : String },
        idhorario4: { type : String },
        idhorario5: { type : String },

        noboleta: { type : String, required : true },
        montoboleta: { type : String, required : true },
    
        idpago: { type : String },
        usuarionew	: { type : String },      usuarioup	: { type : String },
        date 		: { type: Date, default: Date.now }}, {
        timestamps: true
        });



module.exports = mongoose.model('Userperfil', UserperfilSchema);
