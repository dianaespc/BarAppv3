const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Establecimiento = require('../models/establecimiento.model');

let PromosSchema = new Schema({
    nombre: {type: String, required: true, max: 100},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: true},
    establecimiento: { type: Schema.ObjectId, ref: "Establecimiento" }
});


// Export the model
module.exports = mongoose.model('Promos', PromosSchema);
