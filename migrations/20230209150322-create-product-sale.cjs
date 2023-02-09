const { DataTypes } = require("sequelize")

const tableName = 'product_sales'
const attr = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  salesId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'sales_id',
    references: {
      model: 'sales',
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'product_id',
    references: {
      model: 'products',
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'deleted_at',
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
