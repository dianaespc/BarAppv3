//const Product = require('../models/establecimiento.model');
const Establecimiento = require('../models/establecimiento.model');
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/products.js
exports.establecimiento_create = function (req, res, next) {

//console.log('Este rest se esta ejecutando.' + req.body);
//console.log('Este rest se esta el header.' + req.header);
    let estab = new Establecimiento(
        {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            dias: req.body.dias,
            horaApertura: req.body.horaApertura,
            horaCierre: req.body.horaCierre,
            generoSalsa:req.body.generoSalsa,
            generoVallenato:req.body.generoVallenato,
            generoRock:req.body.generoRock,
            generoPopular:req.body.generoPopular,
            generoCrossover:req.body.generoCrossover,
            urlFoto:req.body.urlFoto
        }
    );

    estab.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Establecimiento Created successfully')
    })
};

exports.establecimiento_details = function (req, res) {
    Establecimiento.findById(req.params.id, function (err, estab) {
      if (err){
          return next(err);
          }
      res.send(estab);
    })
};


exports.establecimiento_genero = function (req, res) {
  var genero = req.params.genero;
  console.log('genero.'+genero);
  //var variable = "genero"+genero;
  if (genero == "Salsa"){
    Establecimiento.find({generoSalsa:true}, function (err, estab) {
      if (err) return next(err);
      res.json(estab);
    })
  }if (genero == "Vallenato"){
    Establecimiento.find({generoVallenato:true}, function (err, estab) {
      if (err) return next(err);
      res.json(estab);
    })
  }if (genero == "Rock"){
    Establecimiento.find({generoRock:true}, function (err, estab) {
      if (err) return next(err);
      res.json(estab);
    })
  }if (genero == "Popular"){
    Establecimiento.find({generoPopular:true}, function (err, estab) {
      if (err) return next(err);
      res.json(estab);
    })
  }if (genero == "Crossover"){
    Establecimiento.find({generoCrossover:true}, function (err, estab) {
      if (err) return next(err);
      res.json(estab);
    })
  }
  //res.json({status: "Success", redirect: '/busqueda'});
};

exports.establecimiento_nombre = function (req, res) {

  var nombreBar=req.params.nombreBar;
  console.log('nombre.'+nombreBar);
  //var variable = "genero"+genero;

   Establecimiento.find({nombre: { $regex: '.*' + nombreBar + '.*' } },
     function(err,estab){
       if (err) return next(err);
       res.json(estab);
       console.log('data',estab);
    });

  //res.json({status: "Success", redirect: '/busqueda'});
};
exports.establecimiento_todos = function (req, res) {
    console.log('Este rest se esta ejecutando.');
    Establecimiento.find(function (err, estab) {
      if (err)
          res.send(err);
      console.log('Este rest se esta ejecutando.' + estab);
      res.json(estab);
    })
};


exports.establecimiento_update = function (req, res) {
    Establecimiento.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, estab) {
        if (err) return next(err);
        res.send('Establecimiento udpated.');
    });
};

exports.establecimiento_delete = function (req, res) {
    Establecimiento.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Establecimiento Deleted successfully!');
    })
};
