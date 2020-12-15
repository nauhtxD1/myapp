module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define(
    "contact",
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
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fax: {
        type: DataTypes.TEXT,
      },
      phone: {
        type: DataTypes.TEXT,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isHeadquarters: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      scopes: {
        ms1: { where: { isActive: true } },
      },
    }
  );

  contact.associate = (models) => {
    contact.hasOne(models.province, {
      foreignKey: "id",
      sourceKey: "provinceId",
    });
  };
  return contact;
};
