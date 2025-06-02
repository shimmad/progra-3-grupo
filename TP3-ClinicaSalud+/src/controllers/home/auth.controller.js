
//controlo funcion de procesar los datos de formulario con post
// valido datos con joi y creo token JWT

const Joi = require('joi');
const jwt = require('jsonwebtoken');



exports.procesarLogin = (req, res) => { //click en ingresar
  const { email, password } = req.body; //verifica con joi, si es valido crea token y lo devulve

  //valido con joi
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  const { error } = schema.validate({ email, password });

  if (error) {
    return res.status(400).render('login', { error: error.details[0].message["datos erroneos"] });
  }
  // esto es de prueba pero deberia ver como conecto con la base de datos
  //si el email es admin@clinica.com y la clave admin, se acepta
  if (email === 'admin@clinica.com' && password === 'admin1234') {
    const token = jwt.sign({ email }, 'claveSecreta', { expiresIn: '24h' });//crea token
    
    //guardo token en cookie para q las vistas lo puedan usar
    res.cookie('token', token, { httpOnly: true});
    return res.redirect('/turnos');
  }
  /*El token no se pide manualmente. Se guarda al hacer login y se usa automáticamente en el formulario de nuevos turnos */ 

  res.status(401).render('login', { error: 'Credenciales inválidas' });
};