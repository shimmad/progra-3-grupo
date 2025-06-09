const { DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db.js');


const Turno = sequelize.define("Turno",{   
    fecha: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    hora: {
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports = Turno;