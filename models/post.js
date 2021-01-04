module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      subcategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
      },
      source: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      publishAt: {
        type: "TIMESTAMP",
        allowNull: false,
      },
      view: {
        type: DataTypes.INTEGER,
        defaulValue: 0,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      scopes: {
        ms1: {
          include: "subcategory",
          where: { isActive: true },
        },
      },
    }
  );
  post.associate = (models) => {
    post.hasOne(models.subcategory, {
      foreignKey: "id",
      sourceKey: "subcategoryId",
    });
  };
  return post;
};
