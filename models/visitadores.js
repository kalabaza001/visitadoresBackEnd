//Visitadores
var mongoose = require('mongoose');
var DB  = mongoose.model('Visitador');

//POST - Insert a new Doctor in the DB
//TEST COMMIT
exports.addVisitador = function(req, res) {
	console.log('POST Visitador');
	console.log(req.body);

	var visitador = new DB({
		nombre:    req.body.nombre,
		apellido: 	  req.body.apellido,
		cedula: 	req.body.cedula,
		mail:    req.body.mail,
		password:    req.body.password,
		foto:    req.body.foto,
		direccion:    req.body.direccion,
		latitud:  req.body.latitud,
		longitud:  req.body.longitud,
		telefono:   req.body.telefono,
		celular:  req.body.celularvisi
	});

	visitador.save(function(err, visitador) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(visitador);
	});
};



/*POST*/
/**
{
		"nombre":"594594e7fa5d70d40c000001",
		"apellido": "Juan Pablo 2do",
		"cedula": "Bv Artigas 1818",
		"mail" : "34.1589",
		"password" : "45.8982",
		"foto" : "2598459",
		"direccion" : "Rondeau 2120",
		"latitud" : "34.55",
		"longitud" : "35.55",
		"telefono" : "29244297",
		"celular" : "091244884"
		
}
*/