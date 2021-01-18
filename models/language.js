module.exports = (sequelize, type) => {
  const languageModel = sequelize.define(
    'language',
    {
      name: {
        type: type.STRING(20),
        allowNull: false,
      },
    },
    { underscored: true },
  )
  languageModel.associate = function (models) {
    languageModel.hasMany(models.programmer)
  }
  return languageModel
}
