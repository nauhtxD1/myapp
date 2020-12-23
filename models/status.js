module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define("status", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaulValue: true,
    },
  });
  return status;
};
