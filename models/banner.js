module.exports = (sequelize, DataTypes) => {
  const banner = sequelize.define(
    "banner",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaulValue: true,
      },
    },
    {
      scopes: {
        ms1: {},
      },
    }
  );
  return banner;
};
