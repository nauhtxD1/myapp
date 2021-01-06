module.exports = (sequelize, DataTypes) => {
  const document = sequelize.define(
    "document",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      publishAt: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      documentTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contactId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fieldId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      scopes: {
        ms1: { where: { isActive: true } },
      },
    }
  );

  document.associate = (models) => {
    document.hasOne(models.field, {
      foreignKey: "id",
      sourceKey: "fieldId",
    });
    document.hasOne(models.documentType, {
      foreignKey: "id",
      sourceKey: "documentTypeId",
    });
    document.hasOne(models.contact, {
      foreignKey: "id",
      sourceKey: "contactId",
    });
  };
  return document;
};
