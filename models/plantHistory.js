module.exports = (sequelize, DataTypes) => {
  const plantHistory = sequelize.define("plantHistory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    plantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  plantHistory.associate = (models) => {
    plantHistory.hasOne(models.plant, {
      foreignKey: "id",
      sourceKey: "plantId",
    });
  };
  return plantHistory;
};
