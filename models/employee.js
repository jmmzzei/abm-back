module.exports = (sequelize, type) => {
  const employeeModel = sequelize.define(
    'employee',
    {
      first_name: {
        type: type.STRING(60),
        allowNull: false,
      },
      last_name: {
        type: type.STRING(60),
        allowNull: false,
      },
      age: {
        type: type.SMALLINT(),
        allowNull: false,
      },
      type: {
        type: type.ENUM('programador', 'diseñador'),
        allowNull: false,
      },
      language: {
        type: type.ENUM('python', 'php', 'net'),
      },
      role: {
        type: type.ENUM('gráfico', 'web'),
      },
    },
    { underscored: true },
  )
  employeeModel.associate = function (models) {
    employeeModel.belongsTo(models.company)
  }
  return employeeModel
}
