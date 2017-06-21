var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/visitadores', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/doctor')(app, mongoose);
var DoctorCtrl = require('./controllers/doctores');

var Mutualistamodel = require('./models/mutualista')(app, mongoose);
var MutualistaCtrl  = require('./controllers/mutualistas');

var EspecialidadModel = require('./models/especialidad')(app, mongoose);
var EspecialidadCtrl  = require('./controllers/especialidades');

// Example Route
/*var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);*/

// API routes
var visitadores = express.Router();

visitadores.route('/doctores')
  .get(DoctorCtrl.findAllDoctores)
  .post(DoctorCtrl.addDoctor);

visitadores.route('/doctor/:id')
  .get(DoctorCtrl.findById)
  .put(DoctorCtrl.updateDoctor)
  .delete(DoctorCtrl.deleteDoctor);

visitadores.route('/mutualistas')
  .get(MutualistaCtrl.findAllMutualistas)
  .post(MutualistaCtrl.addMutualista);

visitadores.route('/mutualista/:id')
 .get(MutualistaCtrl.findById)
 .put(MutualistaCtrl.updateMutualista)
 .delete(MutualistaCtrl.deleteMutualista);

visitadores.route('/especialidades')
  .post(EspecialidadCtrl.addEspecialidad);

app.use('/api', visitadores);
  
// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
