const { DataTypes } = require('sequelize');
const {sequelize} = require('./../config/db.js');

const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type:DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty:{msg:'El nombre no puede estar vacio'}
    }
  },
  email: DataTypes.STRING,
  dni: { 
    type:DataTypes.INTEGER, 
    allowNull: false,
    unique: {
      msg: 'El DNI ya esta registrado'
    },
    validate: {
      notEmpty: {
        msg:'El DNI no puede estar vacio'
      },
      isNumeric: {
      msg:'El DNI debe contener solo numeros'
      }
    }
  }
});

module.exports = Paciente;