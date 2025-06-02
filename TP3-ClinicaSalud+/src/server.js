const  express = require('express');
const  dotenv = require('dotenv');
const rutaPacientes = require('./routes/pacientes.route.js')
const rutaHome = require('./routes/home.routes.js');
const rutaLogin = require('./routes/auth.routes.js');
const morgan = require('morgan');
dotenv.config()
const rutaTurnos = require('./routes/turnos.route.js');
const path = require('path');
const cookiesParser = require('cookie-parser'); //para verificar cookies, autenticacion de medico



class Server {
  constructor (template=process.env.TEMPLATE || 'ejs') {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middleware()
    //this.cors()
    this.engine(template)
    this.rutas()
 
    
  }

/*   cors () {
    this.app.use(cors())
  } */

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
    // this.app.use('/', express.static('public'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookiesParser()) //agrego cookie parser
    this.app.use(morgan('dev'))
    this.app.use('/img', express.static(path.join(__dirname, 'views', 'ejs', 'img')));
    
    
  }

  rutas () {
    this.app.use('/api/v1/pacientes', rutaPacientes)
    this.app.use('/api/v1/turnos', rutaTurnos)
    this.app.use('/',rutaHome)
    this.app.use('/',rutaLogin)
   
  
    // aca van las otras rutas

  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      )
    })
  }
}

module.exports = Server