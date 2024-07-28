const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TrainingAttendance = sequelize.define('TrainingAttendance', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  trainingSession: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = TrainingAttendance;
