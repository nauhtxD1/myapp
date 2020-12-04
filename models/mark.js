module.exports = (sequelize, DataTypes) => {
  const mark = sequelize.define("mark", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    contactId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  mark.associate = (models) => {
    mark.hasOne(models.contact, {
      foreignKey: "id",
      sourceKey: "contactId",
    });
  };
  return mark;
};
