const { DataTypes } = require("sequelize")

const tableName = 'coupons'
const attr = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  code: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
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
