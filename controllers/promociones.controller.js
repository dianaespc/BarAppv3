const Promociones = require('../models/promos.model');


exports.promociones_details = function (req, res) {
    Promociones.find({establecimiento: req.params.id}, function (err, promo) {
      if (err)
          res.send(err);
      //console.log('Este promociones se esta ejecutando.' + promo);
      res.json(promo);
    })
};
