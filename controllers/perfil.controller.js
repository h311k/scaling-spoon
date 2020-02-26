const Perfil = require('../models/perfil.model')

exports.create = (req,res, next) => {
    let perfil = new Perfil({
        usuarioId: req.body.usuario._id,
        descricao: req.body.descricao,
    })
    perfil.save((err) => {
        if(err) return next(err)
        err ? next(err) : res.send('Registo de perfil criado com sucesso')
    })
}