import { Model, DataTypes } from 'sequelize'

class CartItem extends Model {
  static associate(models) {
    models.CartItem.belongsTo(models.User, { foreignKey: 'userId' })
    models.CartItem.belongsTo(models.Product, { foreignKey: 'productId' })
  }
}

function init(sequelize) {
  CartItem.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'User',
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
      tableName: 'carts_items',
      paranoid: true,
      sequelize,
    },
  )

  return CartItem
}

export default init
