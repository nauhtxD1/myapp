module.exports = (sequelize, DataTypes) => {
  const mark = sequelize.define("mark", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    left: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    right: {
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
