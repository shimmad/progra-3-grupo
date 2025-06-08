const express = require('express');
const rutaLogin = express.Router();
const { procesarLogin } = require('../../controllers/auth.controller.js');
const { login } = require('../../controllers/home/home.controller.js');


rutaLogin.get('/login', login);

rutaLogin.post('/login', procesarLogin);
rutaLogin.post('/logout', (req, res) => res.clearCookie('token').redirect('/'));

module.exports = rutaLogin;