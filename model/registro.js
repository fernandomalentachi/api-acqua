const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;

const RegistroSchema = new Schema({
    data: { type: Date, required: 'Obrigatorio', default: Date.now },
    temp: { type: Number },
    ph: { type: Number },
    std: { type: Number },
    oxigenio: { type: Number },
    turbidez: { type: Number }
});

module.exports = mongoose.model('Registro', RegistroSchema);
