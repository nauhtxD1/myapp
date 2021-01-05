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
    },
    harvestTime: {
      type: DataTypes.TEXT,
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
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    define: {
      type: DataTypes.TEXT,
    },
    nutrition: {
      type: DataTypes.TEXT,
    },
    scienceName: {
      type: DataTypes.TEXT,
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
