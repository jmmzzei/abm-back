module.exports = (sequelize, type) => {
  const companyModel = sequelize.define(
    'company',
    {
      name: {
        type: type.STRING(60),
        allowNull: false,
      },
    },
    { underscored: true },
  )
  companyModel.associate = function (models) {
    companyModel.hasMany(models.employee)
  }
  return companyModel
}
