//especialidades
var mongoose = require('mongoose');
var DBEspecialidad = mongoose.model('Especialidad');

//POST - Insert a new Especialidad in the DB
exports.addEspecialidad = function(req, res) {
	console.log('POST Especialidad');
	console.log(req.body);

	var especialidad = new DBEspecialidad({
		nombre:    req.body.nombre
	});

	especialidad.save(function(err, especialidad) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(especialidad);
	});
};

//GET - Return all Especialidad in the DB
exports.findAllEspecialidades = function(req, res) {
	DBEspecialidad.find(function(err, especialidades) {
    if(err) res.send(500, err.message);

    console.log('GET /especialidades')
		res.status(200).jsonp(especialidades);
	});
};

//GET - Return a Especialidades with specified ID
exports.findById = function(req, res) {
	DBEspecialidad.findById(req.params.id, function(err, especialidad) {
    if(err) return res.send(500, err.message);

    console.log('GET /especialidad/' + req.params.id);
		res.status(200).jsonp(especialidad);
	});
};

//PUT - Update a register already exists
exports.updateEspecialidad = function(req, res) {
	DBEspecialidad.findById(req.params.id, function(err, especialidad) {
		especialidad.nombre		= req.body.nombre;
		especialidad.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(especialidad);
		});
	});
};

//DELETE - Delete a doctor with specified ID
exports.deleteEspecialidad = function(req, res) {
	DBEspecialidad.findById(req.params.id, function(err, especialidad) {
		especialidad.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp("Se borro bien");
		})
	});
};