const Server = require('./server.js');
const {connectDB, sequelize} = require('./models/sqlite/config/db.js');
const {crearDatos, mostrarTurno} = require("./datos.js");

async function main() {
  try {
    await connectDB();
    await crearDatos();
    await mostrarTurno(1);

    const server = new Server("ejs");
    server.listen();

  } catch (err) {
    console.log("Error al sincronizar", err);
  }
};

main();
