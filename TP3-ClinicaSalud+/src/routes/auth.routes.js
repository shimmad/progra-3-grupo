const express = require('express');
const rutaLogin = express.Router();
const { procesarLogin } = require('../controllers/home/auth.controller.js');
const { login } = require('../controllers/home/home.controller.js');


rutaLogin.get('/login', login);

rutaLogin.post('/login', procesarLogin);

module.exports = rutaLogin;