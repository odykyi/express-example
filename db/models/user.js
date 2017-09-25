module.exports = (sequelize, DataTypes) => (sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
  },
}));
