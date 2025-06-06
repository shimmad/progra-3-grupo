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

// Middleware para api, rechaza si no hay token
function verifyTokenAPI(req, res, next) {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ mensaje: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token inválido o expirado' });
  }
}


module.exports = {
  verifyToken,
  verifyTokenAPI
};


//middleware q decodifica token
//agrega esmedio=true al res.locals para q las vistas lo vean