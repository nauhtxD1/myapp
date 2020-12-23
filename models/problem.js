module.exports = (sequelize, DataTypes) => {
  const problem = sequelize.define("problem", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaulValue: true,
    },
  });
  problem.associate = (models) => {
    problem.hasOne(models.user, {
      foreignKey: "id",
      sourceKey: "userId",
    });
    problem.hasOne(models.status, {
      foreignKey: "id",
      sourceKey: "statusId",
    });
  };
  return problem;
};
