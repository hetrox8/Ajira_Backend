const sequelize = require('../config/database');
const User = require('./user');
const DailyAttendance = require('./dailyAttendance');
const TrainingAttendance = require('./trainingAttendance');

User.hasMany(DailyAttendance, { foreignKey: 'userId' });
User.hasMany(TrainingAttendance, { foreignKey: 'userId' });

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { User, DailyAttendance, TrainingAttendance };
