module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return user;
};
