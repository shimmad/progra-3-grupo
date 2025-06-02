const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db.js');

const Medico = sequelize.define('Medico', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },  
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type:DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Medico;