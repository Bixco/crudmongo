const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    edad: {
        type: String,
        require: true
    },
    color_pelo: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('mascota', userSchema);