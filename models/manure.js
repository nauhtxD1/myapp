module.exports = (sequelize, DataTypes) => {
  const manure = sequelize.define(
    "manure",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      stage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      method: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      genusFeatureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      scopes: {
        ms1: {},
      },
    }
  );
  manure.associate = (models) => {
    manure.hasOne(models.genusFeature, {
      foreignKey: "id",
      sourceKey: "genusFeatureId",
    });
  };
  return manure;
};
