const mongoose = require('mongoose')

const Schema = mongoose.Schema

const perfil = new Schema({
    usuarioId: {type: String, required: true},
    descricao: {type: String, required: true, max: 250},
})

module.exports = mongoose.model('Perfis', perfil)