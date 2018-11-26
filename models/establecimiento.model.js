const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EstablecimientoSchema = new Schema({
    nombre: {type: String, required: true, max: 100},
    direccion: {type: String, required: true},
    latitud:{type: Schema.Types.Decimal128, required: true},
    longitud:{type: Schema.Types.Decimal128, required: true},
    dias:{type: String, required: true},
    horaApertura:{type: String, required: true},
    horaCierre:{type: String, required: true},
    generoSalsa:{type:Boolean, required:true},
    generoVallenato:{type:Boolean, required:true},
    generoRock:{type:Boolean, required:true},
    generoPopular:{type:Boolean, required:true},
    generoCrossover:{type:Boolean, required:true},
    urlFoto:{type:String,required:true}
});


// Export the model
module.exports = mongoose.model('Establecimiento', EstablecimientoSchema);
