module.exports = (sequelize, DataTypes) => {
  const land = sequelize.define("land", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ph: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    performance: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return land;
};
