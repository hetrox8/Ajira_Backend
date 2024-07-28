const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DailyAttendance = sequelize.define('DailyAttendance', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = DailyAttendance;
