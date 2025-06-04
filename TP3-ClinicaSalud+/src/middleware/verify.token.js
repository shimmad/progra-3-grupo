const jwt = require('jsonwebtoken');
//para verificr si es medico

function verifyToken(req, res, next) {
  const token = req.cookies.token;
  res.locals.esMedico = false;

  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'claveSecreta');
    req.usuario = decoded; // esto lo uso en el renderizado en home.controller
    res.locals.esMedico = decoded.rol === 'medico';
  } catch (error) {
    console.error('Token inválido:', error.message);
  }

  next();
}

module.exports = verifyToken;


//middleware q decodifica token
//agrega esmedio=true al res.locals para q las vistas lo vean