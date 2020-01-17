var mongoose =require("mongoose");
var AsignapapSchema = new mongoose.Schema({
    userId : {        type: String,        required: true  },
    idperiodo   		: {type : String, required : true},
    noboleta: {        type: String,        required: true    },
    cui: {        type: String,        required: true    },
    nombre: {        type: String,        required: true    },
    monto: {        type: Number,        required: true    },
    montodeuda: {        type: Number,        required: true    },
    cursosaplica: {        type: String,        required: true    },
    
    
    
    
    rubro   		: { type : String },
    llave   		: { type : String },

    
    
    nov   		: { type : String },
    carne   		: { type : String },



    lenguaje2	: { type : Boolean },


    idpago: { type : String },



    
    
    
    
    
    
    
    idjornada: {        type: String    },
  
    









    idjornada2: { type : String },
    idjornada3: { type : String },
    idjornada4: { type : String },
    idjornada5: { type : String },

    idhorario: { type : String },
    idhorario2: { type : String },
    idhorario3: { type : String },
    idhorario4: { type : String },
    idhorario5: { type : String },

    lenguaje	: { type : Boolean },
    matematica	: { type : Boolean },
    fisica	: { type : Boolean },
    biologia	: { type : Boolean },
    quimica	: { type : Boolean },
    nota: {        type: String,        required: true    },
    correo: {        type: String,        required: true    },
    estado: {        type: String,        required: true    },
 
  
    usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Asignapap', AsignapapSchema);
