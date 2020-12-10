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
  });
  return province;
};
