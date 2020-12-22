module.exports = (sequelize, DataTypes) => {
  const genusFeature = sequelize.define("genusFeature", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productivity: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    harvestTime: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    },
    genusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    provinceId: {
      type: DataTypes.INTEGER,
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
  });
  genusFeature.associate = (models) => {
    genusFeature.hasOne(models.genus, {
      foreignKey: "id",
      sourceKey: "genusId",
    });
    genusFeature.hasOne(models.province, {
      foreignKey: "id",
      sourceKey: "provinceId",
    });
  };
  return genusFeature;
};
