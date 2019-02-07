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
        telefono   		: { type : String, required : true },
        fechanac   		: { type : Date, required : true},
        genero   		: { type : String, required : true },
        correo   		: { type : String, required : true },
        depto   		: { type : String, required : true },
        muni   		: { type : String, required : true },
        zona   		: { type : String, required : true },
        colonia   		: { type : String, required : true },
        calle   		: { type : String, required : true },
        nocasa   		: { type : String, required : true },
        graduanmedio   		: { type :  String, required : true },
        carreranmedio  		: { type : String, required : true },
       
        tipoestanmedio	: { type : String, required : true },
        nombreestamedio	: { type : String, required : true },
        deptoestamedio	: { type : String, required : true },
        muniestamedio	: { type : String, required : true },
        zonaestamedio	: { type : String, required : true },
       
        facultadins: { type : String, required : true },
        codcarrera: { type : String, required : true },
        unidad: { type : String, required : true },
        codunidad: { type : String, required : true },
        lenguaje2	: { type : Boolean },
        matematica	: { type : Boolean },
        fisica	: { type : Boolean },
        biologia	: { type : Boolean },
        quimica	: { type : Boolean },
        idjornada: { type : String, required : true },
        noboleta: { type : String, required : true },
        montoboleta: { type : String, required : true },
        emertipocontacto: { type : String, required : true },
       
        emernombrecontacto: { type : String, required : true },
        emertelefono: { type : String, required : true },
        emerpadre: { type : String, required : true },
        emerpadretel: { type : String, required : true },
        emermadre: { type : String, required : true },
        emermadretel: { type : String, required : true },
       
        vivecasa: { type : String, required : true },
        vehiculo: { type : String, required : true },
        tipovehiculo: { type : String, required : true },
        mediotransporte: { type : String, required : true },
        mediososten: { type : String, required : true },
        vivescon: { type : String, required : true },
        trabaja: { type : String, required : true },
     
        lenguaje: { type : String, required : true },
        usuarionew	: { type : String },      usuarioup	: { type : String },
        date 		: { type: Date, default: Date.now }}, {
        timestamps: true
        });



module.exports = mongoose.model('Userperfil', UserperfilSchema);
