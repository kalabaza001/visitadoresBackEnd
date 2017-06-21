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