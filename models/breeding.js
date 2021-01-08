module.exports = (sequelize, DataTypes) => {
  const breeding = sequelize.define(
    "breeding",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      methodName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      genusFeatureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaulValue: true,
      },
    },
    {
      scopes: {
        ms1: {},
      },
    }
  );
  breeding.associate = (models) => {
    breeding.hasOne(models.genusFeature, {
      foreignKey: "id",
      sourceKey: "genusFeatureId",
    });
  };
  return breeding;
};
