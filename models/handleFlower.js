module.exports = (sequelize, DataTypes) => {
  const handleFlower = sequelize.define(
    "handleFlower",
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
      detail: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      genusFeatureId: {
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
  handleFlower.associate = (models) => {
    handleFlower.hasOne(models.genusFeature, {
      foreignKey: "id",
      sourceKey: "genusFeatureId",
    });
  };
  return handleFlower;
};
