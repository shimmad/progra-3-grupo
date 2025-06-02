const express = require('express');
const rutaLogin = express.Router();
const { procesarLogin } = require('../controllers/home/auth.controller.js');


rutaLogin.get('/login', (req, res) => {
  res.render('login');
});

rutaLogin.post('/login', procesarLogin);

module.exports = rutaLogin;