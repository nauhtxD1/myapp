module.exports = (sequelize, DataTypes) => {
  const forumPost = sequelize.define("forumPost", {
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
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    replies: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
  forumPost.associate = (models) => {
    forumPost.hasOne(models.user, {
      foreignKey: "id",
      sourceKey: "userId",
    });
  };
  return forumPost;
};
