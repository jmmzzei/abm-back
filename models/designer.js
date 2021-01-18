module.exports = (sequelize, type) => {
  const designerModel = sequelize.define(
    'designer',
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
      type_id: {
        type: type.SMALLINT,
        allowNull: false,
        references: {
          model: 'types',
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
  designerModel.associate = function (models) {
    designerModel.belongsTo(models.company)
    designerModel.belongsTo(models.type)
  }
  return designerModel
}
