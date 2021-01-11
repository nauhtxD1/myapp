module.exports = (sequelize, DataTypes) => {
  const epidemicHistory = sequelize.define("epidemicHistory", {
    plantId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    epidemicId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  epidemicHistory.associate = (models) => {
    epidemicHistory.hasOne(models.epidemic, {
      foreignKey: "id",
      sourceKey: "epidemicId",
    });
    epidemicHistory.hasOne(models.plant, {
      foreignKey: "id",
      sourceKey: "plantId",
    });
  };
  return epidemicHistory;
};
