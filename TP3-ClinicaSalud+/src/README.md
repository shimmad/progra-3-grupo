# TP3 Práctico 3 - ( BackEnd Nodejs ) 
## Clínica Salud+ para desarrollar una aplicación web que permita la gestión de turnos médicos -----

## GRUPO 29, integrantes:

+Abarzua, Valentina
+Antunez, Agustin
+Folik, Hernan
+Martinez Arana, Jimena
+Zanconi, Gianluca

### instalar proyecto:

clonar repositorio: ***https://github.com/shimmad/progra-3-grupo.git***

en la carpeta TP3-ClinicaSalud+
instalar dependencias ya configuradas con: ***npm install***
iniciar sevidor: ***node ./src/index.js***


unico medico registrado:
vista local:
mail: admin@clinica.com
pswrd: admin1234

## **CRITERIOS DE EVALUACION**

### Separacion entre vistas de turnos online y locales

**version local**: utiliza plantillas EJS renderizadas desde el servidor,
 con vistas diferentes en caso de que sea un usuario o un medico logeado.
 Accede a la ***base de datos*** sqlite para manipular los datos.

**version online**: tiene endpoints REST para registrar, consultar y cancelar turnos
Accede a datos en memoria, desde mock, turnos.models y pacientes.models


### ruteo claro y estructurado

las rutas estan divididas
**API**: Online
**HOME**: Locales

Los controladores tambien estan divididos en: 
**API**: Online
**HOME**: Locales

Con el montaje de rutas en el server.js, rutas (){}

### Funcionalidad del sistema de turnos en EJS

Se diferencia bien la interfaz del medico de la del resto de usuarios
Si el medico se logea, tiene acceso a las acciones del sistema: agregar y borrar un turno o paciente. Tambien incluyen validaciones como: **Paciente ya existente**, **Turno ocupado**, **Campos obligatorios**, **Paciente no existente**.

Los datos que se ingresan en el formulario login tienen validacion con **joi**.
Se pide un email y password con requisitos especificos.

Por ahora hay solo un medico registrado con el mail mencionado. Entonces en **auth.controller**, se compara lo ingresado en el formulario de la plantilla login, y si coincide se genera el token con **jwt**. Si tiene token,entonces se la asiga rol:'Medico', generando una renderizacion distinta a las plantilas login, paciente, turnos.

La carpeta middleware contien un archivo **verifytoken** q decodifica el token
y agrega esMedico=true al res.locals para que las vistas lo vean.

los turnos incluyen datos de un medico predeterminado que ya fue creado y guardado en la ***base de datos***, tambien incluyen los datos del paciente que se gestionan con Sequelize.


### Funcionalidad del sistema de turnos Online



### uso de plantillas

las vistas estan en views y se estructuran con ejs. Las 4 principales son: home, login, turnos, pacientes.
Hay una carpeta partials donde se reutilizan componentes y mediante un include los agrego a las plantillas principales, 
Variables compo esMedico o usuario se envian desde el backend segun el rol del usuario logeado, que permite acceder a las acciones del sistema en la plantilla turnos y pacientes.
Se usa la carpeta public, donde se guardan archivos estaticos como .css o img. y se conectan a las plantillas desde el server.js en middleware.

### endpoints

**version local (vistas EJS)**

- GET	/ -> Home con mensaje de bienvenida e informacion de la clinica
- GET	/login -> Formulario de inicio de sesion
- POST /login -> Autenticacion con JWT
- POST /logout -> Cerrar sesion
- GET	/turnos -> Lista de turnos (con vistas)
- GET	/pacientes -> Lista de pacientes (con vistas)

**Versión online (API REST)**

- GET /api/v1/turnos/:idPaciente -> Obtener los turnos de un paciente con id
- POST /api/v1/turnos -> Crear nuevo turno medico (requiere token)
- DELETE /api/v1/turnos/:idTurno -> Cancelar turno (requiere token)

### dependencias usadas, de package.json

**"express": "^5.1.0"** :framework principal para crear servidor y manejar rutas

**"cookie-parser": "^1.4.7"**: lee y analiza cookies del navegador, util para manejar sesiones

**"dotenv": "^16.5.0"**: permite cargar datos de variable de entorno desde el archivo .env

**"ejs": "^3.1.10"** :Motor de plantillas para renderizar vistas HTML dinamicas

**"joi": "^17.13.3"**: valida datos del lado del servidor(formularios)

**"jsonwebtoken": "^9.0.2"**:crea y verifica tokens JWT para autenticacion

**"method-override": "^3.0.0"**: permite usar metodos HTTP como PUT o DELETE desde formularios HTML.

**"morgan": "^1.10.0"**: middelware q muestra logs de las peticiones HTTP en consola

**"sequelize": "^6.37.7"** :ORM que facilita interactuar con sqlite con objetos JS

**"sqlite": "^5.1.1" "sqlite3": "^5.1.7"**: motor de base de datos liviano que guarda info localmente en un archivo.








