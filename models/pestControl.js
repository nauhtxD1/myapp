module.exports = (sequelize, DataTypes) => {
  const pestControl = sequelize.define(
    "pestControl",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      genusFeatureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pesticides: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      epidemicId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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
  pestControl.associate = (models) => {
    pestControl.hasOne(models.genusFeature, {
      foreignKey: "id",
      sourceKey: "genusFeatureId",
    });
    pestControl.hasOne(models.epidemic, {
      foreignKey: "id",
      sourceKey: "epidemicId",
    });
  };
  return pestControl;
};
