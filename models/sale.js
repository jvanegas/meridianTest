import { Model, DataTypes } from 'sequelize'

class Sale extends Model {
  static associate(models) {
    models.Sale.belongsTo(models.User, { foreignKey: 'userId' })
    models.Sale.belongsTo(models.Coupon, { foreignKey: 'couponId' })
  }
}

function init(sequelize) {
  Sale.init(
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
          model: 'Sale',
          key: 'id',
        },
      },
      couponId: {
        type: DataTypes.UUID,
        allowNull: true,
        field: 'coupon_id',
        references: {
          model: 'Coupon',
          key: 'id',
        },
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
      tableName: 'sales',
      paranoid: true,
      sequelize,
    },
  )

  return Sale
}

export default init
