module.exports = (sequelize, DataTypes) => {
  const plant = sequelize.define("plant", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    genusFeatureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publishAt: {
      type: "TIMESTAMP",
    },
    householdId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    root: {
      type: DataTypes.INTEGER,
    },
  });
  plant.associate = (models) => {
    plant.hasOne(models.household, {
      foreignKey: "id",
      sourceKey: "householdId",
    });
    plant.hasOne(models.genusFeature, {
      foreignKey: "id",
      sourceKey: "genusFeatureId",
    });
  };
  return plant;
};
