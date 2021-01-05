module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define("comment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  comment.associate = (models) => {
    comment.hasOne(models.user, {
      foreignKey: "id",
      sourceKey: "userId",
    });
    comment.hasOne(models.post, {
      foreignKey: "id",
      sourceKey: "postId",
    });
  };
  return comment;
};
