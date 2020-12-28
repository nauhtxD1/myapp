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
      technique: DataTyoes.TEXT,
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
