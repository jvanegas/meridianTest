import { Model, DataTypes } from 'sequelize'

class ProductSale extends Model {
  static associate(models) {
    models.ProductSale.belongsTo(models.Sale, { foreignKey: 'saleId' })
    models.ProductSale.belongsTo(models.Product, { foreignKey: 'productId' })
  }
}

function init(sequelize) {
  ProductSale.init(
    {
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
          model: 'Sale',
          key: 'id',
        },
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'product_id',
        references: {
          model: 'Product',
          key: 'id',
        },
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
    },
    {
      tableName: 'product_sales',
      paranoid: true,
      sequelize,
    },
  )

  return ProductSale
}

export default init
