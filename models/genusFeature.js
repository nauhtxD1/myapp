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
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
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
