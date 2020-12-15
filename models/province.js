module.exports = (sequelize, DataTypes) => {
  const province = sequelize.define("province", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    provinceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    weatherId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    },
  });
  return province;
};
