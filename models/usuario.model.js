const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usuario = new Schema({
    email: {type: String, required: true, max: 120},
    nome: {type: String, required: true, max: 120},
    senha: {type: String, required: true, max: 120},
    dataCriacao: {type: Date, required: true}
})

module.exports = mongoose.model('Usuarios', usuario)