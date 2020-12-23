module.exports = (sequelize, DataTypes) => {
  const epidemicHistory = sequelize.define("epidemicHistory", {
    plantHistoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    epidemicId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    epidemicHistory.hasOne(models.plantHistory, {
      foreignKey: "id",
      sourceKey: "plantHistoryId",
    });
  };
  return epidemicHistory;
};
