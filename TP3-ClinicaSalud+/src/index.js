const Server = require('./server.js');
const {connectDB, sequelize} = require('./models/sqlite/config/db.js');
const {crearDatos, mostrarTurno} = require("./seed.js");

async function main() {
  try {
    await connectDB();
    await crearDatos();
    await mostrarTurno(1);
    await mostrarTurno(2);
    await mostrarTurno(3);

    const server = new Server("ejs");
    server.listen();

  } catch (err) {
    console.log("Error al sincronizar", err);
  }
};

main();
