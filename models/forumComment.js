module.exports = (sequelize, DataTypes) => {
  const forumComment = sequelize.define("forumComment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    forumPostId: {
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
  forumComment.associate = (models) => {
    forumComment.hasOne(models.forumPost, {
      foreignKey: "id",
      sourceKey: "forumPostId",
    });
    forumComment.hasOne(models.user, {
      foreignKey: "id",
      sourceKey: "userId",
    });
  };
  return forumComment;
};
