module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    idtk: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
    },
    matkhau: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sdt: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    trangthai: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    idlu: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return user;
};
