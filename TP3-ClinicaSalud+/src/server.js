const  express = require('express');
const  dotenv = require('dotenv');
const rutaPacientes = require('./routes/API/pacientes.route.js');
const rutaTurnos = require('./routes/API/turnos.route.js');
const rutaPacienteDB = require('./routes/home/pacienteDB.routes.js');
const rutaTurnosDB = require('./routes/home/turnoDB.routes.js');
const rutaHome = require('./routes/home/home.routes.js');
const rutaLogin = require('./routes/home/auth.routes.js');
const morgan = require('morgan');
require('dotenv').config();
const path = require('path');
const cookiesParser = require('cookie-parser'); //para verificar cookies, autenticacion de medico
const methodOverride = require('method-override');


class Server {
  constructor (template=process.env.TEMPLATE || 'ejs') {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middleware()
    this.engine(template)
    this.rutas()
  }

  engine (template) {
     try{
       require.resolve(template);
        
       this.app.set('view engine', template);
       this.app.set('views', path.join(__dirname, 'views','ejs'));
     }catch (error) {
        console.log('Error al configurar el motor de plantillas:',template);
        
      }

  }
  middleware () {
    this.host = process.env.HOST || 'localhost';
    this.app.use('/', express.static(path.join(__dirname, 'public')));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(methodOverride('_method'));
    this.app.use(cookiesParser());
    this.app.use(morgan('dev'));
    this.app.use('/img', express.static(path.join(__dirname, 'views', 'ejs', 'img')));
  }

  rutas () {
    //Rutas de la version online
    this.app.use('/api/v1/pacientes', rutaPacientes)
    this.app.use('/api/v1/turnos', rutaTurnos)

    //Rutas de las vistas renderizadas
    this.app.use('/',rutaHome)
    this.app.use('/',rutaLogin)
    this.app.use('/pacientes', rutaPacienteDB);
    this.app.use('/turnos', rutaTurnosDB);
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${this.host}:${this.port}`
      )
    })
  }
}

module.exports = Server