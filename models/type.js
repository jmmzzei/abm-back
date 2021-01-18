module.exports = (sequelize, type) => {
  const typeModel = sequelize.define(
    'type',
    {
      id: {
        type: type.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: type.STRING(20),
        allowNull: false,
      },
    },
    { underscored: true },
  )
  typeModel.associate = function (models) {
    typeModel.hasMany(models.designer)
  }
  return typeModel
}
