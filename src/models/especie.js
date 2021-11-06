const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('especie', userSchema);