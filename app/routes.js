var AuthenticationController = require('./controllers/authentication'), 
    OraController = require('./controllers/oraclesqlx'), 
    DatosfijosController = require('./controllers/datosfijos'),
   SiifController = require('./controllers/siif'),
   Unidadprofesor3Controller = require('./controllers/calusac/unidadprofesor3'),

   Unidadnivel3Controller = require('./controllers/calusac/unidadnivel3'),
   Unidadjornada3Controller = require('./controllers/calusac/unidadjornada3'),
   AsignanotasController = require('./controllers/calusac/asignanotas'),
   Unidadhorario3Controller = require('./controllers/calusac/unidadhorario3'),
   Unidadpago3Controller = require('./controllers/calusac/unidadpago3'),
   Unidaddia3Controller = require('./controllers/calusac/unidaddia3'),

    Datosfijo2sController = require('./controllers/datosfijos2'),
    UserperfilController = require('./controllers/userperfil'),
    ParticipaController = require('./controllers/participa'),
    Participa2Controller = require('./controllers/participa2'),
    Participa3Controller = require('./controllers/participa3'),
    Participa33Controller = require('./controllers/participa33'),
    Participa4Controller = require('./controllers/participa4'),
    MailmarketController = require('./controllers/marketmail'),
    ReglamentoController = require('./controllers/abogados/reglamento'),
    ReglamentodController = require('./controllers/abogados/reglamentod'),
    ConferenciaController = require('./controllers/conferencia'),
    DcatalogoController = require('./controllers/dcatalogo'),
    SuscriptorsaldoController = require('./controllers/suscriptorsaldo'),
    PersonalController = require('./controllers/personal'),
    EventoController = require('./controllers/eventos'),
    FrmmovilController = require('./controllers/frmmovil'),
    FrmcatController = require('./controllers/formcat'),
    Frmcat2Controller = require('./controllers/frmcat2'),
    FrmmovildController = require('./controllers/frmmovild'),
    PerfilController = require('./controllers/perfil'),
    EmpresaController = require('./controllers/empresa'),
    ModuloController = require('./controllers/moduloxx'),
    CatalogoController = require('./controllers/catalogo'),
    GaleriaimgController = require('./controllers/galeriaimg'),
    TiposuscriptorController = require('./controllers/tipo_suscriptor'),
    TarifaController = require('./controllers/tarifa'),
    OrganigramaController = require('./controllers/organigrama'),
    UserpostController = require('./controllers/user_post'),
    NuevosalonController = require('./controllers/nuevosalon'),
    SuscriptorController = require('./controllers/suscriptor'),
    busController = require('./controllers/bus'),
    PermisoController = require('./controllers/permiso'),
    Permiso2Controller = require('./controllers/permiso2'),
    EstudianteovController = require('./controllers/estudianteov'),
    CarneController = require('./controllers/carne'),
    EstudiantevtController = require('./controllers/estudiantevt'),
    EstudiantepcbController = require('./controllers/estudiantepcb'),
    DtarifaController = require('./controllers/dtarifa'),
    AfiliadoController = require('./controllers/afiliado'),
    ComprasaldoController = require('./controllers/comprasaldo'),
    EntradasdpiController = require('./controllers/entradasdpi'),
    EntradascasaController = require('./controllers/entradacasa'),
    ReversionsaldoController = require('./controllers/reversionsaldo'),
    SolcarneController = require('./controllers/solcarne'),
    AsignapapController = require('./controllers/asignapap'),
    RepcarneController = require('./controllers/repcarne'),
    UserchatController = require('./controllers/userchat'),
    UsermsgController = require('./controllers/usermsg'),
    CompratrasferenciaController = require('./controllers/compratrasferencia'),
    MailController = require('./controllers/mail'),
    QrimagenController = require('./controllers/qrimagen'),
    AsignapcbController = require('./controllers/asignapcb'),
    AsignacalusacController = require('./controllers/calusac/asignacalusac'),
    TipounidadController = require('./controllers/tipounidad'),
    Tipounidad2Controller = require('./controllers/tipounidad2'),
    DepartamentoController = require('./controllers/departamento'),
    MarketgrupoController = require('./controllers/marketgrupo'),
    MarketgrupodController = require('./controllers/marketgrupod'),
    DenunciaunidadController = require('./controllers/denunciaunidad'),
    CatusuarioController = require('./controllers/catusuario'),
    EdificiousacController = require('./controllers/unidadedificio'),
    PeriodousacController = require('./controllers/unidadperiodo'),
    EdificiosalonController = require('./controllers/unidadedificiosalon'),
    UnidadplanController = require('./controllers/unidadplan'),
    FacultadmateriaController = require('./controllers/facultadmateria'),
    UnidadacademicaController = require('./controllers/unidadacademica'),
    PivotemonsterController = require('./controllers/pivotmoster'),

    CostocalusacController = require('./controllers/calusac/calusaccostos'),

    Tipounidad3Controller = require('./controllers/calusac/tipounidad3'),
    OperadoresController = require('./controllers/calusac/operadores'),

    Edificiousac3Controller = require('./controllers/calusac/unidadedificio3'),
    Idiomausac3Controller = require('./controllers/calusac/unidadidioma3'),
    Unidadtipogrupo3Controller = require('./controllers/calusac/unidadtipogrupo3'),
    Unidadtipocurso3Controller = require('./controllers/calusac/unidadtipocurso3'),

    Periodousac3Controller = require('./controllers/calusac/unidadperiodo3'),
    Edificiosalon3Controller = require('./controllers/calusac/unidadedificiosalon3'),
    Unidadplan3Controller = require('./controllers/calusac/unidadplan3'),
    Facultadmateria3Controller = require('./controllers/calusac/facultadmateria3'),
    Unidadacademica3Controller = require('./controllers/calusac/unidadacademica3'),


      
    Edificiousac2Controller = require('./controllers/unidadedificio2'),
    Periodousac2Controller = require('./controllers/unidadperiodo2'),
    Edificiosalon2Controller = require('./controllers/unidadedificiosalon2'),
    Unidadplan2Controller = require('./controllers/unidadplan2'),
    Facultadmateria2Controller = require('./controllers/facultadmateria2'),
    Unidadacademica2Controller = require('./controllers/unidadacademica2'),

    AsignaestudiantecalusacController = require('./controllers/calusac/asignaestudiantecalusac'),
    AsignaestudianteController = require('./controllers/asignaestudiante'),
    AsignaestudiantepapController = require('./controllers/asignaestudiantepap'),

    PlantillaController = require('./controllers/plantilla'),
    PlantilladController = require('./controllers/plantillad'),
    PlantilladmController = require('./controllers/plantilladm'),
    PlantilladmcController = require('./controllers/plantilladmc'),
    PlantillamdrecController = require('./controllers/plantillamdrec'),
    PlantillamdevaController = require('./controllers/plantillamdeva'),

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
        pivotemonsterRoutes = express.Router(),
        organigramaRoutes = express.Router(),
        userperfilRoutes = express.Router(),
        participa2Routes = express.Router(),
        siifRoutes = express.Router(),
        participa3Routes = express.Router(),
        participa33Routes = express.Router(),
        mailmarketRoutes = express.Router(),
        reglamentoRoutes = express.Router(),
        reglamentodRoutes = express.Router(),
        participa4Routes = express.Router(),
        conferenciaRoutes = express.Router(),
        dcatalogoRoutes = express.Router(),
        suscriptorsaldoRoutes = express.Router(),
        moduloRoutes = express.Router(),
        catalogoRoutes = express.Router(),
        tiposuscriptorRoutes = express.Router(),
        tarifaRoutes = express.Router(),
        userpostRoutes = express.Router(),
        nuevosalonRoutes = express.Router(),
        datosfijosRoutes = express.Router(),
        datosfijo2sRoutes = express.Router(),
        eventoRoutes = express.Router(),
        frmmovilRoutes = express.Router(),
        frmcatRoutes = express.Router(),
        frmcat2Routes = express.Router(),
        frmmovildRoutes = express.Router(),
        perfilRoutes = express.Router(),
        mailRoutes = express.Router(),
        estudianteovRoutes = express.Router(),
        carneRoutes = express.Router(),
        estudiantevtRoutes = express.Router(),
        estudiantepcbRoutes = express.Router(),
        empresaRoutes = express.Router(),
        permisoRoutes = express.Router(),
        permiso2Routes = express.Router(),
        galeriaimgRoutes = express.Router(),
        oraRoutes = express.Router(),
        dtarifaRoutes = express.Router(),
        suscriptorRoutes = express.Router(),
        comprasaldoRoutes = express.Router(),
        entradasdpiRoutes = express.Router(),
        reversionsaldoRoutes = express.Router(),
        entradascasaRoutes = express.Router(),
        solcarneRoutes = express.Router(),
        asignapapRoutes = express.Router(),
        repcarneRoutes = express.Router(),
        userchatRoutes = express.Router(),
        usermsgRoutes = express.Router(),
        compratransferenciaRoutes = express.Router(),
        qrimagenRoutes = express.Router(),
        busRoutes = express.Router(),
        afiliadoRoutes = express.Router(),
        departamentoRoutes = express.Router(),
        marketgrupoRoutes = express.Router(),
        marketgrupodRoutes = express.Router(),
        denunciaunidadRoutes = express.Router(),
        catusuarioRoutes = express.Router(),
        mailRoutes = express.Router(),
        personalRoutes = express.Router(),
        asignapcbRoutes = express.Router(),
        asignacalusacRoutes = express.Router(),
        tipounidadRoutes = express.Router(),
        tipounidad2Routes = express.Router(),
        autorizaRoutes = express.Router(),
        edificiousacRoutes = express.Router(),
        periodousacRoutes = express.Router(),
        unidadacademicaRoutes = express.Router(),
        facultadmateriaRoutes = express.Router(),
        edificiosalonRoutes = express.Router(),
        unidadplanRoutes = express.Router(),

        unidadprofesor3Routes = express.Router(),

        unidadnivel3Routes = express.Router(),
        unidadjornada3Routes = express.Router(),
        asignanotasRoutes = express.Router(),
        unidadhorario3Routes = express.Router(),
        unidadpago3Routes = express.Router(),
        unidaddia3Routes = express.Router(),

        costocalusacRoutes = express.Router(),
        tipounidad3Routes = express.Router(),
        operadoresRoutes = express.Router(),
        edificiousac3Routes = express.Router(),
        idiomausac3Routes = express.Router(),
        unidadtipogrupo3Routes = express.Router(),
        unidadtipocurso3Routes = express.Router(),
        periodousac3Routes = express.Router(),
        unidadacademica3Routes = express.Router(),
        facultadmateria3Routes = express.Router(),
        edificiosalon3Routes = express.Router(),
        unidadplan3Routes = express.Router(),

        edificiousac2Routes = express.Router(),
        periodousac2Routes = express.Router(),
        unidadacademica2Routes = express.Router(),
        facultadmateria2Routes = express.Router(),
        edificiosalon2Routes = express.Router(),
        unidadplan2Routes = express.Router(),
        asignaestudianteRoutes = express.Router(),
        asignaestudiantecalusacRoutes = express.Router(),
        asignaestudiantepapRoutes = express.Router(),
        plantillaRoutes =  express.Router(),
        plantilladRoutes = express.Router(),
        plantilladmRoutes = express.Router(),
        plantilladmcRoutes = express.Router(),
        plantillamdrecRoutes = express.Router(),
        plantillamdevaRoutes = express.Router();
        

        apiRoutes.use('/auth', authRoutes);
        authRoutes.post('/register', AuthenticationController.register);
        authRoutes.post('/registera', AuthenticationController.registera);
        authRoutes.post('/register2', AuthenticationController.register2);
        authRoutes.post('/register3', AuthenticationController.register3);
        authRoutes.post('/register4', AuthenticationController.register4);
        authRoutes.post('/login', requireLogin, AuthenticationController.login);
        
        authRoutes.get('/protected', requireAuth, function(req, res){
            res.send({ content: 'Success'});
        });
 
   /*
SINNNNNNNNNNNNNN AUTORIZACION
   */



   //-----------------------------------SIIF----------------------------------


apiRoutes.use('/siifs', siifRoutes);
siifRoutes.get('/:id/:id2', SiifController.getsiif);



//-----------------------------------USER PERFIL----------------------------------


apiRoutes.use('/organigramas', organigramaRoutes);
organigramaRoutes.get('/:id/:id2', OrganigramaController.getOrganigrama);


//-----------------------------------ORGANIGRAMA----------------------------------


apiRoutes.use('/userperfils', userperfilRoutes);
userperfilRoutes.get('/:id',  UserperfilController.getUserperfil);
userperfilRoutes.post('/:recordID',requireAuth,  UserperfilController.creaUserperfil2s);
userperfilRoutes.delete('/:recordID/:userID',requireAuth,  UserperfilController.deleteUserperfil);






//---------------------------------------estudiantes ov
apiRoutes.use('/carne', carneRoutes);
carneRoutes.get('/', requireAuth, CarneController.getCarne);
carneRoutes.get('/:codigo', CarneController.getCarne);
carneRoutes.get('/:id/:codigo', CarneController.getCarne);


//---------------------------------------estudiantes ov
apiRoutes.use('/estudianteov', estudianteovRoutes);
estudianteovRoutes.get('/', requireAuth, EstudianteovController.getEstudianteov);
estudianteovRoutes.get('/:codigo',requireAuth, EstudianteovController.getEstudianteov);

//---------------------------------------estudiantes vt
apiRoutes.use('/estudiantevt', estudiantevtRoutes);
estudiantevtRoutes.get('/', requireAuth, EstudiantevtController.getEstudiantevt);
estudiantevtRoutes.get('/:codigo', EstudiantevtController.getEstudiantevt);
estudiantevtRoutes.post('/:recordID', requireAuth, EstudiantevtController.creaEstudiantevts);

//---------------------------------------estudiantes PCB
apiRoutes.use('/estudiantepcb', estudiantepcbRoutes);
estudiantepcbRoutes.get('/', requireAuth, EstudiantepcbController.getEstudiantepcb);
estudiantepcbRoutes.get('/:codigo', EstudiantepcbController.getEstudiantepcb);
estudiantepcbRoutes.get('/:codigo/:id2', EstudiantepcbController.getEstudiantepcb2);



//-----------------------------------AUTORIZA
apiRoutes.use('/pivotem1', pivotemonsterRoutes);
pivotemonsterRoutes.get('/:id/:id2/:id3/:id4/:id5',   PivotemonsterController.getPivotm);
pivotemonsterRoutes.get('/:id/:id2/:id3/:id4',   PivotemonsterController.getPivotm);

//-----------------------------------AUTORIZA
apiRoutes.use('/autorizar', autorizaRoutes);
autorizaRoutes.get('/:id',   AutorizaController.getAutoriza);

//-----------------------------------PARTICIPA  EVENTOS SARITA ASIGNACION
apiRoutes.use('/participas', participaRoutes);
participaRoutes.get('/:id',  ParticipaController.getParticipa);
participaRoutes.get('/:id/:id2',  ParticipaController.getParticipa);
participaRoutes.get('/:id/:id2/:id3',  ParticipaController.getParticipa);
participaRoutes.post('/:id',  ParticipaController.creaParticipa2s);
participaRoutes.delete('/:id/:userID',requireAuth,  ParticipaController.deleteParticipa);


//-----------------------------------PARTICIPA4  CURSOS PREUNIVERSITARIOS SARITA
apiRoutes.use('/participa4s', participa4Routes);
participa4Routes.get('/:id',requireAuth,  Participa4Controller.getParticipa4);
participa4Routes.get('/:id/:id2',  Participa4Controller.getParticipa4);
participa4Routes.post('/:id', Participa4Controller.creaParticipa42s);
participa4Routes.delete('/:id/:userID',requireAuth,  Participa4Controller.deleteParticipa4);



//-----------------------------------PARTICIPA2  CURSOS LIBRES SARITA
apiRoutes.use('/participa2s', participa2Routes);
participa2Routes.get('/:id',  Participa2Controller.getParticipa2);
participa2Routes.get('/:id/:id2',  Participa2Controller.getParticipa2);
participa2Routes.post('/:id',  Participa2Controller.creaParticipa22s);
participa2Routes.delete('/:id/:userID',requireAuth,  Participa2Controller.deleteParticipa2);





//-----------------------------------MAIL
apiRoutes.use('/mails', mailRoutes);
mailRoutes.post('/:id',  MailController.getMail);
//mailRoutes.post('/:id',  MailController.getMail2);

//-----------------------------------QR
apiRoutes.use('/qrs',qrimagenRoutes);
qrimagenRoutes.get('/:key',  QrimagenController.getQR);
app.use('/api', apiRoutes);






















//----------------------------------------------------------------------------------------------------

//-----------------------------------ENTRADAS DPI----------------------------------

apiRoutes.use('/Entradasdpis', entradasdpiRoutes);
entradasdpiRoutes.get('/:id',requireAuth, EntradasdpiController.getEntradasdpi);
entradasdpiRoutes.get('/:id/:id2',requireAuth,  EntradasdpiController.getEntradasdpi);

entradasdpiRoutes.post('/:recordID',requireAuth,  EntradasdpiController.creaEntradasdpi2s);
entradasdpiRoutes.delete('/:recordID/:userID',requireAuth,  EntradasdpiController.deleteEntradasdpi);

//-----------------------------------ENTRADAS CASA----------------------------------

apiRoutes.use('/Entradascasas', entradascasaRoutes);
entradascasaRoutes.get('/:id',requireAuth, EntradascasaController.getEntradacasa);
entradascasaRoutes.get('/:id/:id2',requireAuth,  EntradascasaController.getEntradacasa);
entradascasaRoutes.get('/:id/:id2/:id3',  EntradascasaController.getEntradacasa);

entradascasaRoutes.post('/:recordID',requireAuth,  EntradascasaController.creaEntradacasa2s);
entradascasaRoutes.delete('/:recordID/:userID',requireAuth,  EntradascasaController.deleteEntradacasa);


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
busRoutes.get('/:id2/:id3',requireAuth,  busController.getBus);
busRoutes.post('/:recordID', requireAuth, busController.creaBus2s);
busRoutes.delete('/:recordID/:userID',requireAuth,  busController.deleteBus);


//-----------------------------------categorias usuarios
apiRoutes.use('/catusuarios', catusuarioRoutes);
catusuarioRoutes.get('/',requireAuth, CatusuarioController.getCatusuario);
catusuarioRoutes.get('/:id',requireAuth,  CatusuarioController.getCatusuario);
catusuarioRoutes.get('/:id/:id2/:id3',requireAuth, CatusuarioController.getCatusuario);
catusuarioRoutes.post('/:recordID', requireAuth, CatusuarioController.creaCatusuario2s);
catusuarioRoutes.delete('/:recordID/:userID',requireAuth, CatusuarioController.deleteCatusuario);


//-----------------------------------REGLAMENTO
apiRoutes.use('/reglamentos', reglamentoRoutes);
reglamentoRoutes.get('/:id',requireAuth,  ReglamentoController.getReglamento);
reglamentoRoutes.get('/:id/:id2',requireAuth,  ReglamentoController.getReglamento);
reglamentoRoutes.get('/:id/:id2/:id3/:id4',requireAuth, ReglamentoController.getReglamento);
reglamentoRoutes.get('/:id/:id2/:id3', ReglamentoController.getReglamento);//help del menu  sin login
reglamentoRoutes.post('/:id',requireAuth, ReglamentoController.creaReglamento2s);
reglamentoRoutes.delete('/:id/:userID',requireAuth,  ReglamentoController.deleteReglamento);

//-----------------------------------REGLAMENTOD
apiRoutes.use('/reglamentods', reglamentodRoutes);
reglamentodRoutes.get('/:id',requireAuth,  ReglamentodController.getReglamentod);
reglamentodRoutes.get('/:id/:id2/:id3',requireAuth,  ReglamentodController.getReglamentod);

reglamentodRoutes.post('/:id',requireAuth, ReglamentodController.creaReglamentod2s);
reglamentodRoutes.delete('/:id/:userID',requireAuth,  ReglamentodController.deleteReglamentod);





//-----------------------------------MAILMARKET
apiRoutes.use('/mailmarkets', mailmarketRoutes);
mailmarketRoutes.get('/:id',requireAuth,  MailmarketController.getMarketemail);
mailmarketRoutes.get('/:id/:id2',requireAuth,  MailmarketController.getMarketemail);
mailmarketRoutes.get('/:id/:id2/:id3/:id4',requireAuth, MailmarketController.getMarketemail);
mailmarketRoutes.get('/:id/:id2/:id3', MailmarketController.getMarketemail);//help del menu  sin login
mailmarketRoutes.post('/:id',requireAuth, MailmarketController.creaMarketemail2s);
mailmarketRoutes.delete('/:id/:userID',requireAuth,  MailmarketController.deleteMarketemail);



//-----------------------------------DTARIFA
apiRoutes.use('/dtarifas', dtarifaRoutes);
dtarifaRoutes.get('/:id', requireAuth, DtarifaController.getDtarifa);
dtarifaRoutes.get('/:id/:id2', requireAuth, DtarifaController.getDtarifa);
dtarifaRoutes.post('/:id',requireAuth,  DtarifaController.creaDtarifa2s);
dtarifaRoutes.delete('/:id/:userID',requireAuth,  DtarifaController.deleteDtarifa);




//-----------------------------------PERSONAL
apiRoutes.use('/personals', personalRoutes);
personalRoutes.get('/',requireAuth, PersonalController.getPersonal);
personalRoutes.get('/:email/:id2/:id3/:id4',requireAuth, PersonalController.getPersonal);
personalRoutes.get('/:email/:id2/:id3',requireAuth, PersonalController.getPersonal);
personalRoutes.get('/:email/:id2/:id3/:id4/:id5/:id6/:id7/:id8/:id9/:id10', requireAuth,PersonalController.getPersonal);
personalRoutes.get('/:email/:id2/:id3/:id4/:id5/:id6/:id7', requireAuth,PersonalController.getPersonal);

personalRoutes.get('/:pagineo/:limit/:page/:idempresa',requireAuth,  PersonalController.getPersonal);

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
suscriptorRoutes.get('/:nodpi/:id2',requireAuth,  SuscriptorController.getSuscriptor);
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



//-----------------------------------GALERIA IMAGENES----------------------------------

apiRoutes.use('/galeriaimgs',galeriaimgRoutes);
galeriaimgRoutes.get('/:id',requireAuth,  GaleriaimgController.getGaleriaimg);
galeriaimgRoutes.get('/:id/:id2',requireAuth,  GaleriaimgController.getGaleriaimg);
galeriaimgRoutes.post('/:recordID', requireAuth, GaleriaimgController.creaGaleriaimg2s);
galeriaimgRoutes.delete('/:recordID/:userID',requireAuth,  GaleriaimgController.deleteGaleriaimg);





//-----------------------------------COMPRA DE SALDO----------------------------------

apiRoutes.use('/comprasaldos', comprasaldoRoutes);
comprasaldoRoutes.get('/:id',requireAuth, ComprasaldoController.getComprasaldo);
comprasaldoRoutes.get('/:id/:id2',requireAuth,  ComprasaldoController.getComprasaldo);
comprasaldoRoutes.get('/:id/:id2/:id3/:id4/:id5/:id6',requireAuth,  ComprasaldoController.getComprasaldo);
comprasaldoRoutes.post('/:recordID',requireAuth,  ComprasaldoController.creaComprasaldo2s);
comprasaldoRoutes.delete('/:recordID/:userID',requireAuth,  ComprasaldoController.deleteComprasaldo);

//-----------------------------------REVERSION DE SALDO----------------------------------

apiRoutes.use('/reversionsaldos', reversionsaldoRoutes);
reversionsaldoRoutes.get('/:id',requireAuth, ReversionsaldoController.getReversionsaldo);
reversionsaldoRoutes.get('/:id/:id2',requireAuth,  ReversionsaldoController.getReversionsaldo);
reversionsaldoRoutes.post('/:recordID',requireAuth,  ReversionsaldoController.creaReversionsaldo2s);
reversionsaldoRoutes.delete('/:recordID/:userID',requireAuth,  ReversionsaldoController.deleteReversionsaldo);

//-----------------------------------ASIGNA PAP----------------------------------

apiRoutes.use('/asignapaps', asignapapRoutes);
asignapapRoutes.get('/:id',requireAuth, AsignapapController.getAsignapap);
asignapapRoutes.get('/:id/:id2',requireAuth, AsignapapController.getAsignapap);
asignapapRoutes.get('/:id/:id2/:id3',requireAuth, AsignapapController.getAsignapap);
asignapapRoutes.post('/:recordID',requireAuth,  AsignapapController.creaAsignapap2s);
asignapapRoutes.delete('/:recordID/:userID',requireAuth,  AsignapapController.deleteAsignapap);

//-----------------------------------SOLICITUD DE SALDO----------------------------------

apiRoutes.use('/solcarnes', solcarneRoutes);
solcarneRoutes.get('/:id',requireAuth, SolcarneController.getSolcarne);
solcarneRoutes.post('/:recordID',requireAuth,  SolcarneController.creaSolcarne2s);
solcarneRoutes.delete('/:recordID/:userID',requireAuth,  SolcarneController.deleteSolcarne);

//-----------------------------------REPOSICION DE SALDO----------------------------------

apiRoutes.use('/repcarnes', repcarneRoutes);
repcarneRoutes.get('/:id',requireAuth, RepcarneController.getRepcarne);
repcarneRoutes.post('/:recordID',requireAuth,  RepcarneController.creaRepcarne2s);
repcarneRoutes.delete('/:recordID/:userID',requireAuth,  RepcarneController.deleteRepcarne);


//-----------------------------------USER CHATS----------------------------------

apiRoutes.use('/userchats', userchatRoutes);
userchatRoutes.get('/:id',requireAuth, UserchatController.getUserchat);
userchatRoutes.get('/:id/:id2',requireAuth,  UserchatController.getUserchat);
userchatRoutes.post('/:recordID',requireAuth,  UserchatController.creaUserchat2s);
userchatRoutes.delete('/:recordID/:userID',requireAuth,  UserchatController.deleteUserchat);



//-----------------------------------USER CHATS----------------------------------

apiRoutes.use('/usermsgs', usermsgRoutes);
usermsgRoutes.get('/:id',requireAuth, UsermsgController.getUsermsg);
usermsgRoutes.get('/:id/:id2',requireAuth,  UsermsgController.getUsermsg);
//usermsgRoutes.post('/:recordID',requireAuth,  UsermsgController.creaUsermsg2s);
usermsgRoutes.delete('/:recordID/:userID',requireAuth,  UsermsgController.deleteUsermsg);




//-----------------------------------trasferencia DE SALDO----------------------------------

apiRoutes.use('/compratransferencias', compratransferenciaRoutes);
compratransferenciaRoutes.get('/:id',requireAuth, CompratrasferenciaController.getCompratransferencia);
compratransferenciaRoutes.get('/:id/:id2',requireAuth,  CompratrasferenciaController.getCompratransferencia);
compratransferenciaRoutes.post('/:recordID',requireAuth,  CompratrasferenciaController.creaCompratransferencia2s);
compratransferenciaRoutes.delete('/:recordID/:userID',requireAuth,  CompratrasferenciaController.deleteCompratransferencia);

//-----------------------------------EVENTOS
apiRoutes.use('/eventos', eventoRoutes);
eventoRoutes.get('/',requireAuth, EventoController.getEvento);
eventoRoutes.get('/:id', EventoController.getEvento);
eventoRoutes.get('/:id/:id2', EventoController.getEvento);
eventoRoutes.get('/:id/:id2/:id3', EventoController.getEvento);

eventoRoutes.post('/:recordID',  EventoController.creaEvento2s);
eventoRoutes.delete('/:recordID/:userID',requireAuth,  EventoController.deleteEvento);


//-----------------------------------PERFIL
apiRoutes.use('/perfils', perfilRoutes);
perfilRoutes.get('/',requireAuth,PerfilController.getPerfil);
perfilRoutes.get('/:id',requireAuth,  PerfilController.getPerfil);
perfilRoutes.get('/:id1/:id2/:id3',requireAuth,  PerfilController.getPerfil);
perfilRoutes.post('/:recordID',requireAuth,  PerfilController.creaPerfil2s);
perfilRoutes.delete('/:recordID/:userID',requireAuth,  PerfilController.deletePerfil);



//-----------------------------------FRMCAT
apiRoutes.use('/frmcats', frmcatRoutes);
frmcatRoutes.get('/',requireAuth, FrmcatController.getFormcat);
frmcatRoutes.get('/:id',requireAuth,  FrmcatController.getFormcat);
frmcatRoutes.get('/:id/:id2/:id3', requireAuth,  FrmcatController.getFormcat);
frmcatRoutes.post('/:recordID', requireAuth,  FrmcatController.creaFormcat2s);
frmcatRoutes.delete('/:recordID/:userID',requireAuth,  FrmcatController.deleteFormcat);
 


//-----------------------------------FRMCAT2
apiRoutes.use('/frmcat2s', frmcat2Routes);
frmcat2Routes.get('/',requireAuth, Frmcat2Controller.getFormcat2);
frmcat2Routes.get('/:id/:id2/:id3', requireAuth,  Frmcat2Controller.getFormcat2);
frmcat2Routes.get('/:id', requireAuth,  Frmcat2Controller.getFormcat2);
frmcat2Routes.post('/:recordID', requireAuth,  Frmcat2Controller.creaFormcat22s);
frmcat2Routes.delete('/:recordID/:userID',requireAuth,  Frmcat2Controller.deleteFormcat2);



//-----------------------------------FRMMOVIL
apiRoutes.use('/frmmovils', frmmovilRoutes);
frmmovilRoutes.get('/',requireAuth, FrmmovilController.getFrmmovil);
frmmovilRoutes.get('/:id',requireAuth, FrmmovilController.getFrmmovil);
frmmovilRoutes.get('/:id/:id2',requireAuth, FrmmovilController.getFrmmovil);
frmmovilRoutes.get('/:id/:id2/:id3',requireAuth, FrmmovilController.getFrmmovil);
frmmovilRoutes.get('/:id/:id2/:id3/:id4',requireAuth, FrmmovilController.getFrmmovil);
frmmovilRoutes.post('/:recordID',requireAuth,  FrmmovilController.creaFrmmovil2s);
frmmovilRoutes.post('/:recordID/:recordID2',requireAuth,  FrmmovilController.creaFrmmovil3s);
frmmovilRoutes.delete('/:recordID/:userID',requireAuth,  FrmmovilController.deleteFrmmovil);
frmmovilRoutes.delete('/:recordID/:recordID2/:userID',requireAuth,  FrmmovilController.deleteFrmmovil2);


//-----------------------------------FRMMOVILD
apiRoutes.use('/frmmovilds', frmmovildRoutes);
frmmovildRoutes.get('/:id',requireAuth,  FrmmovildController.getFrmmovild);
frmmovildRoutes.get('/:id/:id2',requireAuth,  FrmmovildController.getFrmmovild);
frmmovildRoutes.post('/:id',requireAuth,  FrmmovildController.creaFrmmovild2s);
frmmovildRoutes.post('/:id/:id2',requireAuth,  FrmmovildController.creaFrmmovild3s);
frmmovildRoutes.delete('/:id/:userID',requireAuth, FrmmovildController.deleteFrmmovild);


//-----------------------------------CONFERENCIAS
apiRoutes.use('/conferencias', conferenciaRoutes);
conferenciaRoutes.get('/:id',requireAuth,  ConferenciaController.getConferencia);
conferenciaRoutes.get('/:id/:id2',requireAuth,  ConferenciaController.getConferencia);
conferenciaRoutes.post('/:id',requireAuth,  ConferenciaController.creaConferencia2s);
conferenciaRoutes.delete('/:id/:userID',requireAuth, ConferenciaController.deleteConferencia);



//-----------------------------------PERMISOS
apiRoutes.use('/permisos', permisoRoutes);
permisoRoutes.get('/:id',requireAuth,  PermisoController.getPermiso);
permisoRoutes.get('/:id/:id2/:id3',requireAuth,  PermisoController.getPermiso);
permisoRoutes.post('/:id',requireAuth,  PermisoController.creaPermiso2s);
permisoRoutes.delete('/:id/:userID',requireAuth,  PermisoController.deletePermiso);

//-----------------------------------PERMISOS
apiRoutes.use('/permiso2s', permiso2Routes);
permiso2Routes.get('/:id/:id2',requireAuth,  Permiso2Controller.getPermison2);
permiso2Routes.get('/:id/:id2/:id3/:id4',requireAuth,  Permiso2Controller.getPermison2);
permiso2Routes.post('/:id',requireAuth,  Permiso2Controller.creaPermison22s);
permiso2Routes.delete('/:id/:userID',requireAuth,  Permiso2Controller.deletePermison2);

//-----------------------------------MODULO
apiRoutes.use('/modulos', moduloRoutes);
moduloRoutes.get('/', requireAuth,ModuloController.getModuloxx);
moduloRoutes.get('/:id/:id2/:id3/:id4',requireAuth,  ModuloController.getModuloxx);
moduloRoutes.get('/:id',requireAuth,  ModuloController.getModuloxx);
moduloRoutes.post('/:recordID',requireAuth,  ModuloController.creaModuloxx2s);
moduloRoutes.delete('/:recordID/:userID',requireAuth,  ModuloController.deleteModuloxx);

//-----------------------------------CATALOGO
apiRoutes.use('/catalogos', catalogoRoutes);
catalogoRoutes.get('/',requireAuth, CatalogoController.getCatalogo);
catalogoRoutes.get('/:id',requireAuth,  CatalogoController.getCatalogo);
catalogoRoutes.get('/:id/:id2/:id3',requireAuth,  CatalogoController.getCatalogo);
catalogoRoutes.post('/:recordID',requireAuth,  CatalogoController.creaCatalogo2s);
catalogoRoutes.delete('/:recordID/:userID',requireAuth,  CatalogoController.deleteCatalogo);


//-----------------------------------tipo suscriptor
apiRoutes.use('/tiposuscriptors', tiposuscriptorRoutes);
tiposuscriptorRoutes.get('/',requireAuth, TiposuscriptorController.getTiposuscriptor);
tiposuscriptorRoutes.get('/:id',requireAuth,  TiposuscriptorController.getTiposuscriptor);
tiposuscriptorRoutes.get('/:id/:id2',requireAuth,  TiposuscriptorController.getTiposuscriptor);
tiposuscriptorRoutes.get('/:id/:id2/:id3',requireAuth,  TiposuscriptorController.getTiposuscriptor);
tiposuscriptorRoutes.post('/:recordID',requireAuth,  TiposuscriptorController.creaTiposuscriptor2s);
tiposuscriptorRoutes.delete('/:recordID/:userID',requireAuth,  TiposuscriptorController.deleteTiposuscriptor);




//-------------------------------------EMPRESA MONGO
apiRoutes.use('/empresas', empresaRoutes);
empresaRoutes.get('/',requireAuth, EmpresaController.getEmpresa);
empresaRoutes.get('/:id',requireAuth,  EmpresaController.getEmpresa);
empresaRoutes.get('/:id/:id2',requireAuth,  EmpresaController.getEmpresa);
empresaRoutes.post('/:recordID',requireAuth,  EmpresaController.creaEmpresa2s);
empresaRoutes.delete('/:recordID/:userID',requireAuth,  EmpresaController.deleteEmpresa);





//-----------------------------------Dcatalogo
apiRoutes.use('/dcatalogos', dcatalogoRoutes);
dcatalogoRoutes.get('/:id',  DcatalogoController.getDcatalogo);

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
userpostRoutes.get('/',requireAuth, UserpostController.getUserpost);
userpostRoutes.get('/:id',requireAuth,  UserpostController.getUserpost);
userpostRoutes.post('/:recordID',requireAuth,  UserpostController.creaUserpost2s);




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
periodousacRoutes.get('/:id2/:id3/:id4',requireAuth,  PeriodousacController.getUnidadperiodo);
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
unidadplanRoutes.post('/:recordID',requireAuth,  UnidadplanController.creaUnidadplan2s);
unidadplanRoutes.delete('/:recordID/:userID',requireAuth,  UnidadplanController.deleteUnidadplan);




//-----------------------------------FACULTAD MATERIA
apiRoutes.use('/facultadmaterias', facultadmateriaRoutes);
facultadmateriaRoutes.get('/',requireAuth, FacultadmateriaController.getFacultadmateria);
facultadmateriaRoutes.get('/:id/:id2',requireAuth,  FacultadmateriaController.getFacultadmateria);
facultadmateriaRoutes.post('/:recordID',requireAuth,  FacultadmateriaController.creaFacultadmateria2s);
facultadmateriaRoutes.delete('/:recordID/:userID', requireAuth, FacultadmateriaController.deleteFacultadmateria);



//----------------------------------OPERADORES
apiRoutes.use('/operadoress', operadoresRoutes);
operadoresRoutes.get('/',requireAuth, OperadoresController.getOperadores);
operadoresRoutes.get('/:id', requireAuth, OperadoresController.getOperadores);

//-----------------------------------TIPO UNIDAD3
apiRoutes.use('/tipounidad3s', tipounidad3Routes);
tipounidad3Routes.get('/',requireAuth, Tipounidad3Controller.getTipounidad3);
tipounidad3Routes.get('/:id', requireAuth, Tipounidad3Controller.getTipounidad3);
tipounidad3Routes.post('/:recordID', requireAuth, Tipounidad3Controller.creaTipounidad32s);
tipounidad3Routes.delete('/:recordID/:userID',requireAuth,  Tipounidad3Controller.deleteTipounidad3);

//-----------------------------------COSTO CALUSAC
apiRoutes.use('/costocalusacs', costocalusacRoutes);
costocalusacRoutes.get('/',requireAuth, CostocalusacController.getCalusaccosto);
costocalusacRoutes.get('/:id', requireAuth, CostocalusacController.getCalusaccosto);
costocalusacRoutes.get('/:id/:id2', requireAuth, CostocalusacController.getCalusaccosto);
costocalusacRoutes.post('/:recordID', requireAuth, CostocalusacController.creaCalusaccosto2s);
costocalusacRoutes.delete('/:recordID/:userID',requireAuth,  CostocalusacController.deleteCalusaccosto);



//-----------------------------------unidad academica3
apiRoutes.use('/unidadacademica3s', unidadacademica3Routes);
unidadacademica3Routes.get('/:id', requireAuth, Unidadacademica3Controller.getUnidadacademica3);
unidadacademica3Routes.get('/:id/:id2',requireAuth,  Unidadacademica3Controller.getUnidadacademica3);

unidadacademica3Routes.get('/:id/:id2/:id3',requireAuth,  Unidadacademica3Controller.getUnidadacademica3);

unidadacademica3Routes.post('/:id', requireAuth, Unidadacademica3Controller.creaUnidadacademica32s);
unidadacademica3Routes.delete('/:id/:userID',requireAuth,  Unidadacademica3Controller.deleteUnidadacademica3);

//-----------------------------------unidad edificio 3
apiRoutes.use('/unidadedificio3s',edificiousac3Routes);
edificiousac3Routes.get('/:id',requireAuth,  Edificiousac3Controller.getUnidadedificio3);
edificiousac3Routes.get('/:id2/:id3',requireAuth,  Edificiousac3Controller.getUnidadedificio3);
edificiousac3Routes.post('/:recordID', requireAuth, Edificiousac3Controller.creaUnidadedificio32s);
edificiousac3Routes.delete('/:recordID/:userID',requireAuth,  Edificiousac3Controller.deleteUnidadedificio3);



//-----------------------------------unidad idioma 3
apiRoutes.use('/unidadidioma3s',idiomausac3Routes);
idiomausac3Routes.get('/:id',requireAuth,  Idiomausac3Controller.getUnidadidioma3);
idiomausac3Routes.get('/:id2/:id3',requireAuth,  Idiomausac3Controller.getUnidadidioma3);
idiomausac3Routes.post('/:recordID', requireAuth, Idiomausac3Controller.creaUnidadidioma32s);
idiomausac3Routes.delete('/:recordID/:userID',requireAuth,  Idiomausac3Controller.deleteUnidadidioma3);



//-----------------------------------unidad tipogrupo 3
apiRoutes.use('/unidadtipogrupo3s',unidadtipogrupo3Routes);
unidadtipogrupo3Routes.get('/:id',requireAuth,  Unidadtipogrupo3Controller.getUnidadtipogrupo3);
unidadtipogrupo3Routes.get('/:id2/:id3',requireAuth,  Unidadtipogrupo3Controller.getUnidadtipogrupo3);
unidadtipogrupo3Routes.post('/:recordID', requireAuth, Unidadtipogrupo3Controller.creaUnidadtipogrupo32s);
unidadtipogrupo3Routes.delete('/:recordID/:userID',requireAuth,  Unidadtipogrupo3Controller.deleteUnidadtipogrupo3);


//-----------------------------------unidad tipocurso 3
apiRoutes.use('/unidadtipocurso3s',unidadtipocurso3Routes);
unidadtipocurso3Routes.get('/:id',requireAuth,  Unidadtipocurso3Controller.getUnidadtipocurso3);
unidadtipocurso3Routes.get('/:id2/:id3',requireAuth,  Unidadtipocurso3Controller.getUnidadtipocurso3);
unidadtipocurso3Routes.post('/:recordID', requireAuth, Unidadtipocurso3Controller.creaUnidadtipocurso32s);
unidadtipocurso3Routes.delete('/:recordID/:userID',requireAuth,  Unidadtipocurso3Controller.deleteUnidadtipocurso3);







//-----------------------------------unidad periodo3
apiRoutes.use('/unidadperiodo3s',periodousac3Routes);
periodousac3Routes.get('/:id',requireAuth,  Periodousac3Controller.getUnidadperiodo3);
periodousac3Routes.get('/:id2/:id3',requireAuth,  Periodousac3Controller.getUnidadperiodo3);
periodousac3Routes.get('/:id2/:id3/:id4',requireAuth,  Periodousac3Controller.getUnidadperiodo3);
periodousac3Routes.post('/:recordID', requireAuth, Periodousac3Controller.creaUnidadperiodo32s);
periodousac3Routes.delete('/:recordID/:userID',requireAuth,  Periodousac3Controller.deleteUnidadperiodo3);

//-----------------------------------unidad profesores 3
apiRoutes.use('/unidadprofesor3s',unidadprofesor3Routes);
unidadprofesor3Routes.get('/:id',requireAuth,  Unidadprofesor3Controller.getUnidadprofesor3);
unidadprofesor3Routes.get('/:id2/:id3',requireAuth,  Unidadprofesor3Controller.getUnidadprofesor3);
unidadprofesor3Routes.post('/:recordID', requireAuth, Unidadprofesor3Controller.creaUnidadprofesor32s);
unidadprofesor3Routes.delete('/:recordID/:userID',requireAuth, Unidadprofesor3Controller.deleteUnidadprofesor3);


//-----------------------------------unidad nivel 3
apiRoutes.use('/unidadnivel3s',unidadnivel3Routes);
unidadnivel3Routes.get('/:id',requireAuth,  Unidadnivel3Controller.getUnidadnivel3);
unidadnivel3Routes.get('/:id2/:id3',requireAuth,  Unidadnivel3Controller.getUnidadnivel3);
unidadnivel3Routes.get('/:id2/:id3/:id4',requireAuth,  Unidadnivel3Controller.getUnidadnivel3);
unidadnivel3Routes.post('/:recordID', requireAuth, Unidadnivel3Controller.creaUnidadnivel32s);
unidadnivel3Routes.delete('/:recordID/:userID',requireAuth, Unidadnivel3Controller.deleteUnidadnivel3);

//-------------------------------------------------------------------asigna notas
apiRoutes.use('/asignanotas',asignanotasRoutes);
asignanotasRoutes.get('/:id',requireAuth,  AsignanotasController.getAsignanotas);
asignanotasRoutes.get('/:id/:id2/:id3',requireAuth,  AsignanotasController.getAsignanotas);
asignanotasRoutes.post('/:recordID', requireAuth, AsignanotasController.creaAsignanotas2s);
asignanotasRoutes.delete('/:recordID/:userID',requireAuth, AsignanotasController.deleteAsignanotas);




//-----------------------------------unidad jornada 3
apiRoutes.use('/unidadjornada3s',unidadjornada3Routes);
unidadjornada3Routes.get('/:id',requireAuth,  Unidadjornada3Controller.getUnidadjornada3);
unidadjornada3Routes.get('/:id2/:id3',requireAuth,  Unidadjornada3Controller.getUnidadjornada3);
unidadjornada3Routes.post('/:recordID', requireAuth, Unidadjornada3Controller.creaUnidadjornada32s);
unidadjornada3Routes.delete('/:recordID/:userID',requireAuth, Unidadjornada3Controller.deleteUnidadjornada3);



//-----------------------------------unidad tipo costo
apiRoutes.use('/unidadpago3s',unidadpago3Routes);
unidadpago3Routes.get('/:id',requireAuth,  Unidadpago3Controller.getUnidadpago3);
unidadpago3Routes.get('/:id2/:id3/:id4/:id5',requireAuth,  Unidadpago3Controller.getUnidadpago3);
unidadpago3Routes.post('/:recordID', requireAuth, Unidadpago3Controller.creaUnidadpago32s);
unidadpago3Routes.delete('/:recordID/:userID',requireAuth, Unidadpago3Controller.deleteUnidadpago3);



//-----------------------------------unidad horario 3
apiRoutes.use('/unidadhorario3s',unidadhorario3Routes);
unidadhorario3Routes.get('/:id',requireAuth,  Unidadhorario3Controller.getUnidadhorario3);
unidadhorario3Routes.get('/:id2/:id3',requireAuth,  Unidadhorario3Controller.getUnidadhorario3);
unidadhorario3Routes.get('/:id/:id2/:id3',requireAuth,  Unidadhorario3Controller.getUnidadhorario3);
unidadhorario3Routes.post('/:recordID', requireAuth, Unidadhorario3Controller.creaUnidadhorario32s);
unidadhorario3Routes.delete('/:recordID/:userID',requireAuth, Unidadhorario3Controller.deleteUnidadhorario3);




//-----------------------------------unidad dia 3
apiRoutes.use('/unidaddia3s',unidaddia3Routes);
unidaddia3Routes.get('/:id',requireAuth,  Unidaddia3Controller.getUnidaddia3);
unidaddia3Routes.get('/:id2/:id3',requireAuth,  Unidaddia3Controller.getUnidaddia3);
unidaddia3Routes.post('/:recordID', requireAuth, Unidaddia3Controller.creaUnidaddia32s);
unidaddia3Routes.delete('/:recordID/:userID',requireAuth, Unidaddia3Controller.deleteUnidaddia3);




//-----------------------------------unidad edificio salon3
apiRoutes.use('/unidadedificiosalon3s',edificiosalon3Routes);
edificiosalon3Routes.get('/:id', requireAuth, Edificiosalon3Controller.getUnidadedificiosalon3);
edificiosalon3Routes.get('/:id2/:id3/:id4', requireAuth, Edificiosalon3Controller.getUnidadedificiosalon3);
edificiosalon3Routes.post('/:recordID', requireAuth, Edificiosalon3Controller.creaUnidadedificiosalon32s);
edificiosalon3Routes.delete('/:recordID/:userID',requireAuth,  Edificiosalon3Controller.deleteUnidadedificiosalon3);


//-----------------------------------unidad plan3
apiRoutes.use('/unidadplan3s',unidadplan3Routes);
unidadplan3Routes.get('/:id',requireAuth,  Unidadplan3Controller.getUnidadplan3);
unidadplan3Routes.get('/:id2/:id3/:id4',requireAuth,  Unidadplan3Controller.getUnidadplan3);
unidadplan3Routes.get('/:id/:id2/:id3/:id4/:id5',requireAuth,  Unidadplan3Controller.getUnidadplan3);
unidadplan3Routes.post('/:recordID',requireAuth,  Unidadplan3Controller.creaUnidadplan32s);
unidadplan3Routes.delete('/:recordID/:userID',requireAuth,  Unidadplan3Controller.deleteUnidadplan3);




//-----------------------------------FACULTAD MATERIA3
apiRoutes.use('/facultadmateria3s', facultadmateria3Routes);
facultadmateria3Routes.get('/',requireAuth, Facultadmateria3Controller.getFacultadmateria3);
facultadmateria3Routes.get('/:id/:id2',requireAuth,  Facultadmateria3Controller.getFacultadmateria3);
facultadmateria3Routes.post('/:recordID',requireAuth,  Facultadmateria3Controller.creaFacultadmateria32s);
facultadmateria3Routes.delete('/:recordID/:userID', requireAuth, Facultadmateria3Controller.deleteFacultadmateria3);



//-----------------------------------TIPO UNIDAD
apiRoutes.use('/tipounidad2s', tipounidad2Routes);
tipounidad2Routes.get('/',requireAuth, Tipounidad2Controller.getTipounidad2);
tipounidad2Routes.get('/:id', requireAuth, Tipounidad2Controller.getTipounidad2);
tipounidad2Routes.post('/:recordID', requireAuth, Tipounidad2Controller.creaTipounidad22s);
tipounidad2Routes.delete('/:recordID/:userID',requireAuth,  Tipounidad2Controller.deleteTipounidad2);


//-----------------------------------unidad academica
apiRoutes.use('/unidadacademica2s', unidadacademica2Routes);
unidadacademica2Routes.get('/:id', requireAuth, Unidadacademica2Controller.getUnidadacademica2);
unidadacademica2Routes.get('/:id/:id2',requireAuth,  Unidadacademica2Controller.getUnidadacademica2);
unidadacademica2Routes.post('/:id', requireAuth, Unidadacademica2Controller.creaUnidadacademica22s);
unidadacademica2Routes.delete('/:id/:userID',requireAuth,  Unidadacademica2Controller.deleteUnidadacademica2);

//-----------------------------------unidad edificio 
apiRoutes.use('/unidadedificio2s',edificiousac2Routes);
edificiousac2Routes.get('/:id',requireAuth,  Edificiousac2Controller.getUnidadedificio2);
edificiousac2Routes.get('/:id2/:id3',requireAuth,  Edificiousac2Controller.getUnidadedificio2);
edificiousac2Routes.post('/:recordID', requireAuth, Edificiousac2Controller.creaUnidadedificio22s);
edificiousac2Routes.delete('/:recordID/:userID',requireAuth,  Edificiousac2Controller.deleteUnidadedificio2);


//-----------------------------------unidad edificio 
apiRoutes.use('/unidadedificio2s',edificiousac2Routes);
edificiousac2Routes.get('/:id',requireAuth,  Edificiousac2Controller.getUnidadedificio2);
edificiousac2Routes.get('/:id2/:id3',requireAuth,  Edificiousac2Controller.getUnidadedificio2);
edificiousac2Routes.post('/:recordID', requireAuth, Edificiousac2Controller.creaUnidadedificio22s);
edificiousac2Routes.delete('/:recordID/:userID',requireAuth,  Edificiousac2Controller.deleteUnidadedificio2);



//-----------------------------------unidad periodo
apiRoutes.use('/unidadperiodo2s',periodousac2Routes);
periodousac2Routes.get('/:id',requireAuth,  Periodousac2Controller.getUnidadperiodo2);
periodousac2Routes.get('/:id/:id2',requireAuth,  Periodousac2Controller.getUnidadperiodo2);
periodousac2Routes.get('/:id/:id3',requireAuth,  Periodousac2Controller.getUnidadperiodo2);
periodousac2Routes.post('/:recordID', requireAuth, Periodousac2Controller.creaUnidadperiodo22s);
periodousac2Routes.delete('/:recordID/:userID',requireAuth,  Periodousac2Controller.deleteUnidadperiodo2);



//-----------------------------------unidad edificio salon
apiRoutes.use('/unidadedificiosalon2s',edificiosalon2Routes);
edificiosalon2Routes.get('/:id', requireAuth, Edificiosalon2Controller.getUnidadedificiosalon2);
edificiosalon2Routes.get('/:id2/:id3/:id4', requireAuth, Edificiosalon2Controller.getUnidadedificiosalon2);
edificiosalon2Routes.post('/:recordID', requireAuth, Edificiosalon2Controller.creaUnidadedificiosalon22s);
edificiosalon2Routes.delete('/:recordID/:userID',requireAuth,  Edificiosalon2Controller.deleteUnidadedificiosalon2);


//-----------------------------------unidad plan
apiRoutes.use('/unidadplan2s',unidadplan2Routes);
unidadplan2Routes.get('/:id',requireAuth,  Unidadplan2Controller.getUnidadplan2);
unidadplan2Routes.get('/:id/:id2/:id3/:id4/:id5',requireAuth,  Unidadplan2Controller.getUnidadplan2);
unidadplan2Routes.get('/:id2/:id3/:id4',requireAuth,  Unidadplan2Controller.getUnidadplan2);
unidadplan2Routes.post('/:recordID',requireAuth,  Unidadplan2Controller.creaUnidadplan22s);
unidadplan2Routes.delete('/:recordID/:userID',requireAuth,  Unidadplan2Controller.deleteUnidadplan2);




//-----------------------------------FACULTAD MATERIA
apiRoutes.use('/facultadmateria2s', facultadmateria2Routes);
facultadmateria2Routes.get('/',requireAuth, Facultadmateria2Controller.getFacultadmateria2);
facultadmateria2Routes.get('/:id/:id2',requireAuth,  Facultadmateria2Controller.getFacultadmateria2);
facultadmateria2Routes.post('/:recordID',requireAuth,  Facultadmateria2Controller.creaFacultadmateria22s);
facultadmateria2Routes.delete('/:recordID/:userID', requireAuth, Facultadmateria2Controller.deleteFacultadmateria2);



//-----------------------------------ASIGNA CALUSAC
apiRoutes.use('/asignacalusacs', asignacalusacRoutes);
asignacalusacRoutes.get('/',requireAuth, AsignacalusacController.getAsignacalusac);
asignacalusacRoutes.get('/:id',requireAuth,  AsignacalusacController.getAsignacalusac);
asignacalusacRoutes.get('/:id/:id2',requireAuth,  AsignacalusacController.getAsignacalusac);
asignacalusacRoutes.get('/:id/:id2/:id3', AsignacalusacController.getAsignacalusac);
asignacalusacRoutes.post('/:recordID', requireAuth, AsignacalusacController.creaAsignacalusac2s);
asignacalusacRoutes.delete('/:recordID/:userID',requireAuth,  AsignacalusacController.deleteAsignacalusac);



//-----------------------------------ASIGNA PCB
apiRoutes.use('/asignapcbs', asignapcbRoutes);
asignapcbRoutes.get('/',requireAuth, AsignapcbController.getAsignapcb);
asignapcbRoutes.get('/:id',requireAuth,  AsignapcbController.getAsignapcb);
asignapcbRoutes.get('/:id/:id2',requireAuth,  AsignapcbController.getAsignapcb);
asignapcbRoutes.get('/:id/:id2/:id3', AsignapcbController.getAsignapcb);
asignapcbRoutes.post('/:recordID', requireAuth, AsignapcbController.creaAsignapcb2s);
asignapcbRoutes.delete('/:recordID/:userID',requireAuth,  AsignapcbController.deleteAsignapcb);


//-----------------------------------ASIGNA ESTUDIANTE PAP

apiRoutes.use('/asignaestudiantepaps', asignaestudiantepapRoutes);
asignaestudiantepapRoutes.get('/:id',requireAuth,  AsignaestudiantepapController.getAsignaestudiantepap);
//noboleta,codigofactultad,monto,cui,jornada,TIPOUNIDAD,CODIGOUNIDAD
asignaestudiantepapRoutes.post('/:recordID',requireAuth,  AsignaestudiantepapController.creaAsignaestudiantepap2s);

//-----------------------------------ASIGNA ESTUDIANTE CALUSAC
apiRoutes.use('/asignaestudiantecalusacs', asignaestudiantecalusacRoutes);
asignaestudiantecalusacRoutes.get('/:id', AsignaestudiantecalusacController.getAsignaestudiantecalusac);//IMPRIMIR PDF SEGUN QR

//-----------------------------------ASIGNA ESTUDIANTE
apiRoutes.use('/asignaestudiantes', asignaestudianteRoutes);
asignaestudianteRoutes.get('/:id', AsignaestudianteController.getAsignaestudiante);//IMPRIMIR PDF SEGUN QR

//-----------------------------------DEPARTAMENTO
apiRoutes.use('/Departamentos', departamentoRoutes);
departamentoRoutes.get('/',requireAuth, DepartamentoController.getDepartamento);
departamentoRoutes.get('/:id', requireAuth, DepartamentoController.getDepartamento);
departamentoRoutes.post('/:recordID', requireAuth, DepartamentoController.creaDepartamento2s);
departamentoRoutes.delete('/:recordID/:userID',requireAuth, DepartamentoController.deleteDepartamento);


//-----------------------------------MARKETGRUPO
apiRoutes.use('/marketgrupos', marketgrupoRoutes);
marketgrupoRoutes.get('/',requireAuth, MarketgrupoController.getMarketgrupo);

marketgrupoRoutes.get('/:id/:id2/:id3', requireAuth, MarketgrupoController.getMarketgrupo);
marketgrupoRoutes.post('/:recordID', requireAuth, MarketgrupoController.creaMarketgrupo2s);
marketgrupoRoutes.delete('/:recordID/:userID',requireAuth, MarketgrupoController.deleteMarketgrupo);


//-----------------------------------MARKETGRUPOD
apiRoutes.use('/marketgrupods', marketgrupodRoutes);
marketgrupodRoutes.get('/',requireAuth, MarketgrupodController.getMarketgrupod);
marketgrupodRoutes.get('/:id/:id2/:id3', requireAuth, MarketgrupodController.getMarketgrupod);
marketgrupodRoutes.post('/:recordID', requireAuth, MarketgrupodController.creaMarketgrupod2s);
marketgrupodRoutes.delete('/:recordID/:userID',requireAuth, MarketgrupodController.deleteMarketgrupod);





//-----------------------------------DENUNCIA UNIDAD
apiRoutes.use('/denunciaunidads', denunciaunidadRoutes);
denunciaunidadRoutes.get('/',requireAuth, DenunciaunidadController.getDenunciaunidad);
denunciaunidadRoutes.get('/:id',requireAuth,  DenunciaunidadController.getDenunciaunidad);
denunciaunidadRoutes.get('/:id/:id2',requireAuth, DenunciaunidadController.getDenunciaunidad);
denunciaunidadRoutes.get('/:id/:id2/:id3/:id4/:id5',requireAuth,DenunciaunidadController.getDenunciaunidad);

denunciaunidadRoutes.post('/:recordID', requireAuth, DenunciaunidadController.creaDenunciaunidad2s);
denunciaunidadRoutes.delete('/:recordID/:userID',requireAuth, DenunciaunidadController.deleteDenunciaunidad);



//-----------------------------------NUEVO SALON
apiRoutes.use('/nuevosalons', nuevosalonRoutes);
nuevosalonRoutes.get('/',requireAuth, NuevosalonController.getNuevosalon);
nuevosalonRoutes.get('/:id',requireAuth,  NuevosalonController.getNuevosalon);
nuevosalonRoutes.post('/:recordID',requireAuth,  NuevosalonController.creaNuevosalon2s);
nuevosalonRoutes.delete('/:recordID/:userID',requireAuth,  NuevosalonController.deleteNuevosalon);



//-----------------------------------PARTICIPA3
apiRoutes.use('/participa3s', participa3Routes);
participa3Routes.get('/:id',requireAuth, Participa3Controller.getParticipa3);
participa3Routes.get('/:id/:id2',requireAuth,  Participa3Controller.getParticipa3);
participa3Routes.get('/:id/:id2/:id3',requireAuth,  Participa3Controller.getParticipa3);
participa3Routes.get('/:id/:id2/:id3/:id4',requireAuth,  Participa3Controller.getParticipa3);
participa3Routes.post('/:id',requireAuth, Participa3Controller.creaParticipa32s);
participa3Routes.delete('/:id/:userID',requireAuth,  Participa3Controller.deleteParticipa3);

//-----------------------------------PARTICIPA3
apiRoutes.use('/participa33s', participa33Routes);
participa33Routes.get('/:id',requireAuth,  Participa33Controller.getParticipa33);
participa33Routes.get('/:id/:id2',requireAuth,  Participa33Controller.getParticipa33);
participa33Routes.get('/:id/:id2/:id3',requireAuth,  Participa33Controller.getParticipa33);
participa33Routes.post('/:id',requireAuth, Participa33Controller.creaParticipa332s);
participa33Routes.delete('/:id/:userID',requireAuth,  Participa33Controller.deleteParticipa33);

//-----------------------------------datos combo fijos
apiRoutes.use('/datosfijos', datosfijosRoutes);
datosfijosRoutes.get('/:id', DatosfijosController.getCombofijo);
datosfijosRoutes.get('/:id/:id2', DatosfijosController.getCombofijo);
datosfijosRoutes.get('/:id/:id2/:id3',  DatosfijosController.getCombofijo);


//-----------------------------------datos combo fijos2
apiRoutes.use('/datosfijos2', datosfijo2sRoutes);
datosfijo2sRoutes.get('/:id',requireAuth, Datosfijo2sController.getCombofijo);
datosfijo2sRoutes.get('/:id/:id2', Datosfijo2sController.getCombofijo);
datosfijo2sRoutes.get('/:id/:id2/:id3',requireAuth,  Datosfijo2sController.getCombofijo);


//----------------------------------PLANTILLA
apiRoutes.use('/plantillas', plantillaRoutes);
plantillaRoutes.get('/',requireAuth, PlantillaController.getPlantilla);
plantillaRoutes.get('/:id/:id2',requireAuth, PlantillaController.getPlantilla);
plantillaRoutes.get('/:itd',requireAuth, PlantillaController.getPlantilla);
plantillaRoutes.post('/:recordID',  PlantillaController.creaPlantilla2s);
plantillaRoutes.delete('/:recordID/:userID',requireAuth,  PlantillaController.deletePlantilla);

//-----------------------------------PLANTILLAD

apiRoutes.use('/plantillads', plantilladRoutes);
plantilladRoutes.get('/',requireAuth, PlantilladController.getPlantillad);
plantilladRoutes.get('/:id/:id2',requireAuth, PlantilladController.getPlantillad);
plantilladRoutes.get('/:id/:id2/:id3',requireAuth, PlantilladController.getPlantillad);
plantilladRoutes.post('/:id',requireAuth,  PlantilladController.creaPlantillad2s);
plantilladRoutes.delete('/:id/:userID',requireAuth,  PlantilladController.deletePlantillad);


//-----------------------------------PLANTILLADM

apiRoutes.use('/plantilladms', plantilladmRoutes);
plantilladmRoutes.get('/',requireAuth, PlantilladmController.getPlantilladm);
plantilladmRoutes.get('/:id/:id2/:id3',requireAuth,  PlantilladmController.getPlantilladm);
plantilladmRoutes.post('/:id',requireAuth,  PlantilladmController.creaPlantilladm2s);
plantilladmRoutes.delete('/:id/:userID',requireAuth,  PlantilladmController.deletePlantilladm);



//-----------------------------------PLANTILLADMC

apiRoutes.use('/plantilladmcs', plantilladmcRoutes);
plantilladmcRoutes.get('/',requireAuth, PlantilladmcController.getPlantilladmc);
plantilladmcRoutes.get('/:id/:id2/:id3/:id4',requireAuth,  PlantilladmcController.getPlantilladmc);
plantilladmcRoutes.post('/:id',requireAuth,   PlantilladmcController.creaPlantilladmc2s);
plantilladmcRoutes.delete('/:id/:userID',requireAuth,  PlantilladmcController.deletePlantilladmc);




//-----------------------------------PLANTILLAMDEVA

apiRoutes.use('/plantillamdevas', plantillamdevaRoutes);
plantillamdevaRoutes.get('/',requireAuth, PlantillamdevaController.getPlantillamdeva);
plantillamdevaRoutes.get('/:id/:id2/:id3/:id4',requireAuth,  PlantillamdevaController.getPlantillamdeva);
plantillamdevaRoutes.post('/:id',requireAuth,   PlantillamdevaController.creaPlantillamdeva2s);
plantillamdevaRoutes.delete('/:id/:userID',requireAuth,  PlantillamdevaController.deletePlantillamdeva);



//-----------------------------------PLANTILLAMDrec

apiRoutes.use('/plantillamdrecs', plantillamdrecRoutes);
plantillamdrecRoutes.get('/',requireAuth, PlantillamdrecController.getPlantillamdrec);
plantillamdrecRoutes.get('/:id/:id2/:id3/:id4', requireAuth, PlantillamdrecController.getPlantillamdrec);
plantillamdrecRoutes.post('/:id',requireAuth,   PlantillamdrecController.creaPlantillamdrec2s);
plantillamdrecRoutes.delete('/:id/:userID',requireAuth,  PlantillamdrecController.deletePlantillamdrec);




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