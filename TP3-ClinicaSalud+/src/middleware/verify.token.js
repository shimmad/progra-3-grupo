const jwt = require('jsonwebtoken');
//para verificr si es medico

function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.locals.esMedico = false;
    return next(); // permite ver los contenidos pero sin acciones
  }
  try	{
    const decoded = jwt.verify(token, 'claveSecreta');
    res.locals.esMedico = decoded.rol === 'medico';
    next();
  } catch (error) {
    res.locals.esMedico = false;
    next();
  }
}
module.exports = verifyToken;


//middleware q decodifica token
//agrega esmedio=true al res.locals para q las vistas lo vean