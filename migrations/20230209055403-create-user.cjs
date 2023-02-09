const { DataTypes } = require("sequelize")

const tableName = 'users'
const attr = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'full_name'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at'
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'deleted_at'
  },
}

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable(tableName, attr)
  },
  down: (queryInterface) => {
    return queryInterface.dropTable(tableName)
  }
}
