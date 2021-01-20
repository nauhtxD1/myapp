module.exports = (sequelize, DataTypes) => {
  const household = sequelize.define(
    "household",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      landArea: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      landId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      scopes: { ms1: { where: { isActive: true } } },
    }
  );
  household.associate = (models) => {
    household.hasOne(models.user, {
      foreignKey: "id",
      sourceKey: "userId",
    });
    household.hasOne(models.land, {
      foreignKey: "id",
      sourceKey: "landId",
    });
    household.hasOne(models.province, {
      foreignKey: "id",
      sourceKey: "provinceId",
    });
  };
  return household;
};
