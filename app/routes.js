var AuthenticationController = require('./controllers/authentication'), 
    OraController = require('./controllers/oraclesqlx'), 
    DatosfijosController = require('./controllers/datosfijos'),
    ParticipaController = require('./controllers/participa'),
    Participa2Controller = require('./controllers/participa2'),
    ConferenciaController = require('./controllers/conferencia'),
    DcatalogoController = require('./controllers/dcatalogo'),
    SuscriptorsaldoController = require('./controllers/suscriptorsaldo'),
    PersonalController = require('./controllers/personal'),
    EventoController = require('./controllers/eventos'),
    PerfilController = require('./controllers/perfil'),
    EmpresaController = require('./controllers/empresa'),
    ModuloController = require('./controllers/moduloxx'),
    CatalogoController = require('./controllers/catalogo'),
    TarifaController = require('./controllers/tarifa'),
    UserpostController = require('./controllers/user_post'),
    NuevosalonController = require('./controllers/nuevosalon'),
    SuscriptorController = require('./controllers/suscriptor'),
    busController = require('./controllers/bus'),
    PermisoController = require('./controllers/permiso'),
    Permiso2Controller = require('./controllers/permiso2'),
    EstudianteovController = require('./controllers/estudianteov'),
    EstudiantevtController = require('./controllers/estudiantevt'),
    EstudiantepcbController = require('./controllers/estudiantepcb'),
    DtarifaController = require('./controllers/dtarifa'),
    AfiliadoController = require('./controllers/afiliado'),
    ComprasaldoController = require('./controllers/comprasaldo'),
    MailController = require('./controllers/mail'),
    QrimagenController = require('./controllers/qrimagen'),
    AsignapcbController = require('./controllers/asignapcb'),
    TipounidadController = require('./controllers/tipounidad'),
    DepartamentoController = require('./controllers/departamento'),
    EdificiousacController = require('./controllers/unidadedificio'),
    PeriodousacController = require('./controllers/unidadperiodo'),
    EdificiosalonController = require('./controllers/unidadedificiosalon'),
    UnidadplanController = require('./controllers/unidadplan'),
    FacultadmateriaController = require('./controllers/facultadmateria'),
    UnidadacademicaController = require('./controllers/unidadacademica'),
    AsignaestudianteController = require('./controllers/asignaestudiante'),
    AutorizaController = require('./controllers/autoriza'),
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport'),
    PersonalController = require('./controllers/personal');
    //UserController = require('./controllers/sun_facultad');
 
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
 
  //  var EmpresaModel = require('./models/empresa');

module.exports = function(app){
 
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        participaRoutes = express.Router(),
        participa2Routes = express.Router(),
        conferenciaRoutes = express.Router(),
        dcatalogoRoutes = express.Router(),
        suscriptorsaldoRoutes = express.Router(),
        moduloRoutes = express.Router(),
        catalogoRoutes = express.Router(),
        tarifaRoutes = express.Router(),
        userpostRoutes = express.Router(),
        nuevosalonRoutes = express.Router(),
        datosfijosRoutes = express.Router(),
        eventoRoutes = express.Router(),
        perfilRoutes = express.Router(),
        mailRoutes = express.Router(),
        estudianteovRoutes = express.Router(),
        estudiantevtRoutes = express.Router(),
        estudiantepcbRoutes = express.Router(),
        empresaRoutes = express.Router(),
        permisoRoutes = express.Router(),
        permiso2Routes = express.Router(),
        oraRoutes = express.Router(),
        dtarifaRoutes = express.Router(),
        suscriptorRoutes = express.Router(),
        comprasaldoRoutes = express.Router(),
        qrimagenRoutes = express.Router(),
        busRoutes = express.Router(),
        afiliadoRoutes = express.Router(),
        departamentoRoutes = express.Router(),
        mailRoutes = express.Router(),
        personalRoutes = express.Router(),
        asignapcbRoutes = express.Router(),
        tipounidadRoutes = express.Router(),
        autorizaRoutes = express.Router(),
        edificiousacRoutes = express.Router(),
        periodousacRoutes = express.Router(),
        unidadacademicaRoutes = express.Router(),
        facultadmateriaRoutes = express.Router(),
        edificiosalonRoutes = express.Router(),
        unidadplanRoutes = express.Router(),
        asignaestudianteRoutes = express.Router();
        apiRoutes.use('/auth', authRoutes);
        authRoutes.post('/register', AuthenticationController.register);
        authRoutes.post('/register2', AuthenticationController.register2);
        authRoutes.post('/login', requireLogin, AuthenticationController.login);
        
        authRoutes.get('/protected', requireAuth, function(req, res){
            res.send({ content: 'Success'});
        });
 
   


//-----------------------------------PERSONAL
apiRoutes.use('/personals', personalRoutes);
personalRoutes.get('/',requireAuth, PersonalController.getPersonal);
personalRoutes.get('/:email/:id2',requireAuth, PersonalController.getPersonal);
personalRoutes.get('/:email',requireAuth, PersonalController.getPersonal);
personalRoutes.get('/:pagineo/:limit/:page',requireAuth,  PersonalController.getPersonal);

personalRoutes.post('/:recordID',requireAuth,  PersonalController.creaPersonal2s);
personalRoutes.delete('/:recordID/:userID',requireAuth,  PersonalController.deletePersonal);

//-------------------------------------------------
//-----------------------------------EMPRESA----------------------------------
/*
apiRoutes.use('/empresas', empresaRoutes);
empresaRoutes.get('/', requireAuth,EmpresaController.getEmpresa);
empresaRoutes.get('/:nit', requireAuth, EmpresaController.getEmpresa);
empresaRoutes.post('/:nit',requireAuth,  EmpresaController.creaEmpresas);
empresaRoutes.delete('/:nit', requireAuth, EmpresaController.deleteEmpresa);
*/
//-----------------------------------SUSCRIPTOR----------------------------------

apiRoutes.use('/suscriptors',suscriptorRoutes);
suscriptorRoutes.get('/',requireAuth, SuscriptorController.getSuscriptor);
suscriptorRoutes.get('/:nodpi',requireAuth,  SuscriptorController.getSuscriptor);
suscriptorRoutes.post('/:nodpi',requireAuth,  SuscriptorController.creaSuscriptors);
suscriptorRoutes.delete('/:nodpi',requireAuth,  SuscriptorController.deleteSuscriptor);


//----------------------------------suscriptor saldo
apiRoutes.use('/suscriptorsaldos', suscriptorsaldoRoutes);
suscriptorsaldoRoutes.get('/:id',requireAuth,  SuscriptorsaldoController.getSuscriptorsaldo);
suscriptorsaldoRoutes.get('/:id/:id2',requireAuth,  SuscriptorsaldoController.getSuscriptorsaldo);
suscriptorsaldoRoutes.post('/:id',requireAuth,  SuscriptorsaldoController.creaSuscriptorsaldo2s);
suscriptorsaldoRoutes.delete('/:id/:userID',requireAuth,  SuscriptorsaldoController.deleteSuscriptorsaldo);

//-----------------------------------SUSCRIPTOR----------------------------------
/*
apiRoutes.use('/afiliados', afiliadoRoutes);
afiliadoRoutes.get('/:id',requireAuth, AfiliadoController.getAfiliado);
afiliadoRoutes.get('/:id/:id2',requireAuth,  AfiliadoController.getAfiliado);
afiliadoRoutes.post('/:id',requireAuth,  AfiliadoController.creaAfiliados);
afiliadoRoutes.delete('/:id/:id2',requireAuth,  AfiliadoController.deleteAfiliado);
*/

apiRoutes.use('/afiliados', afiliadoRoutes);
afiliadoRoutes.get('/:id',requireAuth,  AfiliadoController.getAfiliado);
afiliadoRoutes.get('/:id/:id2',requireAuth,  AfiliadoController.getAfiliado);
afiliadoRoutes.post('/:id',requireAuth,  AfiliadoController.creaAfiliado2s);
afiliadoRoutes.delete('/:id/:userID',requireAuth,  AfiliadoController.deleteAfiliado);

//-----------------------------------BUS----------------------------------
/*
apiRoutes.use('/buss', busRoutes);
busRoutes.get('/:id/:id2',requireAuth, busController.getBus);
busRoutes.get('/:id/:id2/:id3',requireAuth,  busController.getBus);
busRoutes.post('/:id',requireAuth,  busController.creaBuss);
busRoutes.delete('/:id/:id2/:id3',requireAuth,  busController.deleteBus);
*/
apiRoutes.use('/buss',busRoutes);
busRoutes.get('/:id',requireAuth,  busController.getBus);
busRoutes.get('/:id2/:id3',  busController.getBus);
busRoutes.post('/:recordID', requireAuth, busController.creaBus2s);
busRoutes.delete('/:recordID/:userID',requireAuth,  busController.deleteBus);


//-----------------------------------COMPRA DE SALDO----------------------------------

apiRoutes.use('/comprasaldos', comprasaldoRoutes);
comprasaldoRoutes.get('/:id',requireAuth, ComprasaldoController.getComprasaldo);
comprasaldoRoutes.get('/:id/:id2',requireAuth,  ComprasaldoController.getComprasaldo);
comprasaldoRoutes.post('/:id',requireAuth,  ComprasaldoController.creaComprasaldos);
comprasaldoRoutes.delete('/:id/:id2',requireAuth,  ComprasaldoController.deleteComprasaldo);

//-----------------------------------EVENTOS
apiRoutes.use('/eventos', eventoRoutes);
eventoRoutes.get('/',requireAuth, EventoController.getEvento);
eventoRoutes.get('/:id', EventoController.getEvento);
eventoRoutes.post('/:recordID',  EventoController.creaEvento2s);
eventoRoutes.delete('/:recordID/:userID',requireAuth,  EventoController.deleteEvento);


//-----------------------------------PERFIL
apiRoutes.use('/perfils', perfilRoutes);
perfilRoutes.get('/', requireAuth,PerfilController.getPerfil);
perfilRoutes.get('/:id',requireAuth,  PerfilController.getPerfil);
perfilRoutes.get('/:id1/:id2',requireAuth,  PerfilController.getPerfil);
perfilRoutes.post('/:recordID',requireAuth,  PerfilController.creaPerfil2s);
perfilRoutes.delete('/:recordID/:userID',requireAuth,  PerfilController.deletePerfil);



//-----------------------------------CONFERENCIAS
apiRoutes.use('/conferencias', conferenciaRoutes);
conferenciaRoutes.get('/:id',requireAuth,  ConferenciaController.getConferencia);
conferenciaRoutes.get('/:id/:id2',requireAuth,  ConferenciaController.getConferencia);
conferenciaRoutes.post('/:id',requireAuth,  ConferenciaController.creaConferencia2s);
conferenciaRoutes.delete('/:id/:userID',requireAuth, ConferenciaController.deleteConferencia);



//-----------------------------------PERMISOS
apiRoutes.use('/permisos', permisoRoutes);
permisoRoutes.get('/:id',requireAuth,  PermisoController.getPermiso);
permisoRoutes.get('/:id/:id2',requireAuth,  PermisoController.getPermiso);
permisoRoutes.post('/:id',requireAuth,  PermisoController.creaPermiso2s);
permisoRoutes.delete('/:id/:userID',requireAuth,  PermisoController.deletePermiso);

//-----------------------------------PERMISOS
apiRoutes.use('/permiso2s', permiso2Routes);
permiso2Routes.get('/:id/:id2',requireAuth,  Permiso2Controller.getPermison2);
permiso2Routes.get('/:id/:id2/:id3',requireAuth,  Permiso2Controller.getPermison2);
permiso2Routes.post('/:id',requireAuth,  Permiso2Controller.creaPermison22s);
permiso2Routes.delete('/:id/:userID',requireAuth,  Permiso2Controller.deletePermison2);

//-----------------------------------MODULO
apiRoutes.use('/modulos', moduloRoutes);
moduloRoutes.get('/', requireAuth,ModuloController.getModuloxx);
moduloRoutes.get('/:id',requireAuth,  ModuloController.getModuloxx);
moduloRoutes.post('/:recordID',requireAuth,  ModuloController.creaModuloxx2s);
moduloRoutes.delete('/:recordID/:userID',requireAuth,  ModuloController.deleteModuloxx);

//-----------------------------------CATALOGO
apiRoutes.use('/catalogos', catalogoRoutes);
catalogoRoutes.get('/',requireAuth, CatalogoController.getCatalogo);
catalogoRoutes.get('/:id',requireAuth,  CatalogoController.getCatalogo);
catalogoRoutes.get('/:id/:id2',requireAuth,  CatalogoController.getCatalogo);
catalogoRoutes.post('/:recordID',requireAuth,  CatalogoController.creaCatalogo2s);
catalogoRoutes.delete('/:recordID/:userID',requireAuth,  CatalogoController.deleteCatalogo);
//-------------------------------------EMPRESA MONGO
apiRoutes.use('/empresas', empresaRoutes);
empresaRoutes.get('/',requireAuth, EmpresaController.getEmpresa);
empresaRoutes.get('/:id',requireAuth,  EmpresaController.getEmpresa);
empresaRoutes.get('/:id/:id2',requireAuth,  EmpresaController.getEmpresa);
empresaRoutes.post('/:recordID',requireAuth,  EmpresaController.creaEmpresa2s);
empresaRoutes.delete('/:recordID/:userID',requireAuth,  EmpresaController.deleteEmpresa);





//-----------------------------------Dcatalogo
apiRoutes.use('/dcatalogos', dcatalogoRoutes);
dcatalogoRoutes.get('/:id',requireAuth,  DcatalogoController.getDcatalogo);

dcatalogoRoutes.get('/:id/:id2',requireAuth,  DcatalogoController.getDcatalogo);
dcatalogoRoutes.post('/:id',requireAuth,  DcatalogoController.creaDcatalogo2s);
dcatalogoRoutes.delete('/:id/:userID',requireAuth,  DcatalogoController.deleteDcatalogo);

//-----------------------------------TARIFA
apiRoutes.use('/tarifas', tarifaRoutes);
tarifaRoutes.get('/',requireAuth, TarifaController.getTarifa);
tarifaRoutes.get('/:id',requireAuth,  TarifaController.getTarifa);
tarifaRoutes.post('/:recordID',requireAuth,  TarifaController.creaTarifa2s);
tarifaRoutes.delete('/:recordID/:userID', requireAuth, TarifaController.deleteTarifa);

//-----------------------------------user post
apiRoutes.use('/userposts', userpostRoutes);
userpostRoutes.get('/', UserpostController.getUserpost);
userpostRoutes.get('/:id',  UserpostController.getUserpost);
userpostRoutes.post('/:recordID',  UserpostController.creaUserpost2s);



//-----------------------------------DTARIFA
apiRoutes.use('/dtarifas', dtarifaRoutes);
dtarifaRoutes.get('/:id', requireAuth, DtarifaController.getDtarifa);
dtarifaRoutes.get('/:id/:id2', requireAuth, DtarifaController.getDtarifa);
dtarifaRoutes.post('/:id',requireAuth,  DtarifaController.creaDtarifa2s);
dtarifaRoutes.delete('/:id/:userID',requireAuth,  DtarifaController.deleteDtarifa);



//---------------------------------------estudiantes ov
apiRoutes.use('/estudianteov', estudianteovRoutes);
estudianteovRoutes.get('/', requireAuth, EstudianteovController.getEstudianteov);
estudianteovRoutes.get('/:codigo', requireAuth, EstudianteovController.getEstudianteov);

//---------------------------------------estudiantes vt
apiRoutes.use('/estudiantevt', estudiantevtRoutes);
estudiantevtRoutes.get('/', requireAuth, EstudiantevtController.getEstudiantevt);
estudiantevtRoutes.get('/:codigo', requireAuth, EstudiantevtController.getEstudiantevt);
estudiantevtRoutes.post('/:recordID', requireAuth, EstudiantevtController.creaEstudiantevts);

//---------------------------------------estudiantes PCB
apiRoutes.use('/estudiantepcb', estudiantepcbRoutes);
estudiantepcbRoutes.get('/', requireAuth, EstudiantepcbController.getEstudiantepcb);
estudiantepcbRoutes.get('/:codigo', requireAuth, EstudiantepcbController.getEstudiantepcb);

/*
apiRoutes.use('/oracle', userRoutes);
userRoutes.get('/', UserController.getUser);
userRoutes.get('/:id',  UserController.getUser);
userRoutes.post('/:recordID',  UserController.creaUser2s);
userRoutes.delete('/:recordID/:userID',  UserController.deleteUser);
*/
/*

apiRoutes.use('/oracle2', oraRoutes);
oraRoutes.get('/:txt',  OraController.getoraclesqlxx);
*/

//-----------------------------------TIPO UNIDAD
apiRoutes.use('/tipounidads', tipounidadRoutes);
tipounidadRoutes.get('/',requireAuth, TipounidadController.getTipounidad);
tipounidadRoutes.get('/:id', requireAuth, TipounidadController.getTipounidad);
tipounidadRoutes.post('/:recordID', requireAuth, TipounidadController.creaTipounidad2s);
tipounidadRoutes.delete('/:recordID/:userID',requireAuth,  TipounidadController.deleteTipounidad);


//-----------------------------------unidad academica
apiRoutes.use('/unidadacademicas', unidadacademicaRoutes);
unidadacademicaRoutes.get('/:id', requireAuth, UnidadacademicaController.getUnidadacademica);
unidadacademicaRoutes.get('/:id/:id2',requireAuth,  UnidadacademicaController.getUnidadacademica);
unidadacademicaRoutes.post('/:id', requireAuth, UnidadacademicaController.creaUnidadacademica2s);
unidadacademicaRoutes.delete('/:id/:userID',requireAuth,  UnidadacademicaController.deleteUnidadacademica);

//-----------------------------------ASIGNA PCB
apiRoutes.use('/asignapcbs', asignapcbRoutes);
asignapcbRoutes.get('/',requireAuth, AsignapcbController.getAsignapcb);
asignapcbRoutes.get('/:id',requireAuth,  AsignapcbController.getAsignapcb);
asignapcbRoutes.get('/:id/:id2',requireAuth,  AsignapcbController.getAsignapcb);
asignapcbRoutes.get('/:id/:id2/:id3',requireAuth,  AsignapcbController.getAsignapcb);
asignapcbRoutes.post('/:recordID', requireAuth, AsignapcbController.creaAsignapcb2s);
asignapcbRoutes.delete('/:recordID/:userID',requireAuth,  AsignapcbController.deleteAsignapcb);


//-----------------------------------unidad edificio 
apiRoutes.use('/unidadedificios',edificiousacRoutes);
edificiousacRoutes.get('/:id',requireAuth,  EdificiousacController.getUnidadedificio);
edificiousacRoutes.get('/:id2/:id3',requireAuth,  EdificiousacController.getUnidadedificio);
edificiousacRoutes.post('/:recordID', requireAuth, EdificiousacController.creaUnidadedificio2s);
edificiousacRoutes.delete('/:recordID/:userID',requireAuth,  EdificiousacController.deleteUnidadedificio);


//-----------------------------------unidad periodo
apiRoutes.use('/unidadperiodos',periodousacRoutes);
periodousacRoutes.get('/:id',requireAuth,  PeriodousacController.getUnidadperiodo);
periodousacRoutes.get('/:id2/:id3',requireAuth,  PeriodousacController.getUnidadperiodo);
periodousacRoutes.post('/:recordID', requireAuth, PeriodousacController.creaUnidadperiodo2s);
periodousacRoutes.delete('/:recordID/:userID',requireAuth,  PeriodousacController.deleteUnidadperiodo);



//-----------------------------------unidad edificio salon
apiRoutes.use('/unidadedificiosalons',edificiosalonRoutes);
edificiosalonRoutes.get('/:id', requireAuth, EdificiosalonController.getUnidadedificiosalon);
edificiosalonRoutes.get('/:id2/:id3/:id4', requireAuth, EdificiosalonController.getUnidadedificiosalon);
edificiosalonRoutes.post('/:recordID', requireAuth, EdificiosalonController.creaUnidadedificiosalon2s);
edificiosalonRoutes.delete('/:recordID/:userID',requireAuth,  EdificiosalonController.deleteUnidadedificiosalon);


//-----------------------------------unidad plan
apiRoutes.use('/unidadplans',unidadplanRoutes);
unidadplanRoutes.get('/:id',requireAuth,  UnidadplanController.getUnidadplan);
unidadplanRoutes.get('/:id2/:id3/:id4',requireAuth,  UnidadplanController.getUnidadplan);
unidadplanRoutes.post('/:recordID',  UnidadplanController.creaUnidadplan2s);
unidadplanRoutes.delete('/:recordID/:userID',requireAuth,  UnidadplanController.deleteUnidadplan);




//-----------------------------------FACULTAD MATERIA
apiRoutes.use('/facultadmaterias', facultadmateriaRoutes);
facultadmateriaRoutes.get('/',requireAuth, FacultadmateriaController.getFacultadmateria);
facultadmateriaRoutes.get('/:id/:id2',requireAuth,  FacultadmateriaController.getFacultadmateria);
facultadmateriaRoutes.post('/:recordID',requireAuth,  FacultadmateriaController.creaFacultadmateria2s);
facultadmateriaRoutes.delete('/:recordID/:userID', requireAuth, FacultadmateriaController.deleteFacultadmateria);


//-----------------------------------ASIGNA ESTUDIANTE
apiRoutes.use('/asignaestudiantes', asignaestudianteRoutes);
asignaestudianteRoutes.get('/:id',  AsignaestudianteController.getAsignaestudiante);

//-----------------------------------DEPARTAMENTO
apiRoutes.use('/Departamentos', departamentoRoutes);
departamentoRoutes.get('/',requireAuth, DepartamentoController.getDepartamento);
departamentoRoutes.get('/:id', requireAuth, DepartamentoController.getDepartamento);
departamentoRoutes.post('/:recordID', requireAuth, DepartamentoController.creaDepartamento2s);
departamentoRoutes.delete('/:recordID/:userID',requireAuth, DepartamentoController.deleteDepartamento);


//-----------------------------------NUEVO SALON
apiRoutes.use('/nuevosalons', nuevosalonRoutes);
nuevosalonRoutes.get('/',requireAuth, NuevosalonController.getNuevosalon);
nuevosalonRoutes.get('/:id',requireAuth,  NuevosalonController.getNuevosalon);
nuevosalonRoutes.post('/:recordID',requireAuth,  NuevosalonController.creaNuevosalon2s);
nuevosalonRoutes.delete('/:recordID/:userID',requireAuth,  NuevosalonController.deleteNuevosalon);


//-----------------------------------AUTORIZA
apiRoutes.use('/autorizar', autorizaRoutes);
autorizaRoutes.get('/:id',   AutorizaController.getAutoriza);

//-----------------------------------PARTICIPA
apiRoutes.use('/participas', participaRoutes);
participaRoutes.get('/:id',  ParticipaController.getParticipa);
participaRoutes.get('/:id/:id2',  ParticipaController.getParticipa);
participaRoutes.post('/:id',  ParticipaController.creaParticipa2s);
participaRoutes.delete('/:id/:userID',requireAuth,  ParticipaController.deleteParticipa);


//-----------------------------------PARTICIPA2
apiRoutes.use('/participa2s', participa2Routes);
participa2Routes.get('/:id',  Participa2Controller.getParticipa2);
participa2Routes.get('/:id/:id2',  Participa2Controller.getParticipa2);
participa2Routes.post('/:id',  Participa2Controller.creaParticipa22s);
participa2Routes.delete('/:id/:userID',requireAuth,  Participa2Controller.deleteParticipa2);

//-----------------------------------datos combo fijos
apiRoutes.use('/datosfijos', datosfijosRoutes);
datosfijosRoutes.get('/:id', DatosfijosController.getCombofijo);
datosfijosRoutes.get('/:id/:id2', DatosfijosController.getCombofijo);
datosfijosRoutes.get('/:id/:id2/:id3',  DatosfijosController.getCombofijo);

//-----------------------------------MAIL
apiRoutes.use('/mails', mailRoutes);
mailRoutes.post('/:id',  MailController.getMail);
mailRoutes.post('/:id',  MailController.getMail2);

//-----------------------------------QR
apiRoutes.use('/qrs',qrimagenRoutes);
qrimagenRoutes.get('/:key',  QrimagenController.getQR);
//autorizaRoutes.post('/:recordID',  AutorizaController.creaAutorizar);
/*
app.use(express.static(__dirname + '/www'));
app.set('views', __dirname + '/www/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



    app.use('/api', apiRoutes);

    app.route('/*')
.get(function(req, res) {
  res.render('index.html')
});
 */
}