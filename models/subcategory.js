module.exports = (sequelize, DataTypes) => {
  const subcategory = sequelize.define("subcategory", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  subcategory.associate = (models) => {
    subcategory.hasOne(models.category, {
      foreignKey: "id",
      sourceKey: "categoryId",
    });
  };
  return subcategory;
};
