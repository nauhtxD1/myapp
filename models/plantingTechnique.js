module.exports = (sequelize, DataTypes) => {
  const plantingTechnique = sequelize.define(
    "plantingTechnique",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      genusFeatureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      technique: {
        type: DataTypes.TEXT,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      seed: {
        type: DataTypes.TEXT,
      },
      time: {
        type: DataTypes.TEXT,
      },
      density: {
        type: DataTypes.TEXT,
      },
      soilPreparation: {
        type: DataTypes.TEXT,
      },
    },
    {
      scopes: {
        ms1: {},
      },
    }
  );
  plantingTechnique.associate = (models) => {
    plantingTechnique.hasOne(models.genusFeature, {
      foreignKey: "id",
      sourceKey: "genusFeatureId",
    });
  };
  return plantingTechnique;
};
