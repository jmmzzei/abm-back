module.exports = (sequelize, type) => {
  const programmerModel = sequelize.define(
    'programmer',
    {
      first_name: {
        type: type.STRING(60),
        allowNull: false,
      },
      last_name: {
        type: type.STRING(60),
        allowNull: false,
      },
      birthdate: {
        type: type.DATE(),
        allowNull: false,
      },
      language_id: {
        type: type.SMALLINT,
        allowNull: false,
        references: {
          model: 'languages',
          key: 'id',
        },
      },
      company_id: {
        type: type.SMALLINT,
        allowNull: false,
        references: {
          model: 'companies',
          key: 'id',
        },
      },
    },
    { underscored: true },
  )
  programmerModel.associate = function (models) {
    programmerModel.belongsTo(models.company)
    programmerModel.belongsTo(models.language)
  }
  return programmerModel
}
