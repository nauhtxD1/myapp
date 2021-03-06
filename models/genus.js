module.exports = (sequelize, DataTypes) => {
  const genus = sequelize.define("genus", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    familyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    define: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    },
    scienceName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  genus.associate = (models) => {
    genus.hasOne(models.family, {
      foreignKey: "id",
      sourceKey: "familyId",
    });
  };
  return genus;
};
