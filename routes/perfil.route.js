const express = require('express')
const router = express.Router()
const controller = require('../controllers/perfil.controller')

router.post('/create', controller.create)

module.exports = router