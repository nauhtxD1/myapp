module.exports = (sequelize, DataTypes) => {
  const family = sequelize.define("family", {
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
      defaultValue: true,
    },
    define: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    },
    scienceName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return family;
};
