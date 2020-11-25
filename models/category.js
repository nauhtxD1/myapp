module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define("category", {
    iddm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tendm: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return category;
};
