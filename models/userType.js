module.exports = (sequelize, DataTypes) => {
  const userType = sequelize.define("userType", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  });
  return userType;
};
