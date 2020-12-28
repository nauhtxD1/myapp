module.exports = (sequelize, DataTypes) => {
  const characteristic = sequelize.define(
    "characteristic",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      root: {
        type: DataTypes.TEXT,
      },
      stem: {
        type: DataTypes.TEXT,
      },
      foliage: {
        type: DataTypes.TEXT,
      },
      flower: {
        type: DataTypes.TEXT,
      },
      fruit: {
        type: DataTypes.TEXT,
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
  characteristic.associate = (models) => {
    characteristic.hasOne(models.genusFeature, {
      foreignKey: "id",
      sourceKey: "genusFeatureId",
    });
  };
  return characteristic;
};
