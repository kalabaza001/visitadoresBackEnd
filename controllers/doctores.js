//Doctores
var mongoose = require('mongoose');
var DBDoctor  = mongoose.model('Doctor');

//POST - Insert a new Doctor in the DB
//TEST COMMIT
exports.addDoctor = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var doctor = new DBDoctor({
		nombre:    req.body.nombre,
		apellido: 	  req.body.apellido,
		telefono:   req.body.telefono,
		celular:  req.body.celular,
		direccion:    req.body.direccion,
		latitud:  req.body.latitud,
		longitud:  req.body.longitud,
		mail:    req.body.mail,
		visitasProgramadas:  req.body.visitasProgramadas,
		visible:  req.body.visible
	});

	doctor.save(function(err, doctor) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(doctor);
	});
};

//GET - Return all Doctors in the DB
exports.findAllDoctores = function(req, res) {
	DBDoctor.find(function(err, doctores) {
    if(err) res.send(500, err.message);

    console.log('GET /doctores')
		res.status(200).jsonp(doctores);
	});
};

//GET - Return a Docotors with specified ID
exports.findById = function(req, res) {
	DBDoctor.findById(req.params.id, function(err, doctor) {
    if(err) return res.send(500, err.message);

    console.log('GET /doctor/' + req.params.id);
		res.status(200).jsonp(doctor);
	});
};


//PUT - Update a register already exists
exports.updateDoctor = function(req, res) {
	DBDoctor.findById(req.params.id, function(err, doctor) {
		doctor.nombre		= req.body.nombre;
		doctor.apellido		= req.body.apellido;
		doctor.telefono		= req.body.telefono;
		doctor.celular		= req.body.celular;
		doctor.direccion	= req.body.direccion;
		doctor.latitud		= req.body.latitud;
		doctor.longitud 	= req.body.longitud;
		doctor.mail    		= req.body.mail;
		doctor.visitasProgramadas = req.body.visitasProgramadas;
		doctor.visible		= req.body.visible;

		doctor.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(doctor);
		});
	});
};


//DELETE - Delete a doctor with specified ID
exports.deleteDoctor = function(req, res) {
	DBDoctor.findById(req.params.id, function(err, doctor) {
		doctor.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp("Se borro bien");
		})
	});
};

/* POST example */
/* http://localhost:3000/api/doctores */
/*
{
		"nombre": "Mario",
		"apellido": "Fernandez",
		"telefono":   "28944697",
		"celular":  "091589735",
		"direccion":    "Blanes 1515",
		"latitud":  "1",
		"longitud":  "1",
		"mail":    "mario.fernandez@gmail.com",
		"visitasProgramadas":  "6",
		"visible":  "true"
}
*/

/*Get example */
// http://localhost:3000/api/doctores

/*Get example */
// http://localhost:3000/api/doctor/5941d42357324f8d1a000001

/*Put example*/
// http://localhost:3000/api/doctor/5941d42357324f8d1a000001

/*{
		"nombre": "LULU",
		"apellido": "LOSA",
		"telefono":   "28944697",
		"celular":  "091589735",
		"direccion":    "Blanes 1515",
		"latitud":  "1",
		"longitud":  "1",
		"mail":    "mario.fernandez@gmail.com",
		"visitasProgramadas":  "6",
		"visible":  "true"
}
*/