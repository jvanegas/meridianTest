import { Sequelize } from 'sequelize'
import UserInit from './user.js'
import ProductInit from './product.js'
import CouponInit from './coupon.js'
import CartItemInit from './cartItem.js'
import ProductSaleInit from './productSale.js'
import SaleInit from './sale.js'

const InitFunctions = [
  UserInit,
  ProductInit,
  CouponInit,
  CartItemInit,
  ProductSaleInit,
  SaleInit,
]

const Models = []

async function dbConnector(config) {
  const sequelize = new Sequelize(config)
  await sequelize.authenticate()

  // Init models
  InitFunctions.forEach((model) => {
    Models.push(model(sequelize))
  })

  // Associate models
  Models.forEach((modelClass) => {
    if (modelClass.associate) {
      modelClass.associate(sequelize.models)
    }
  })

  return { sequelize, Sequelize }
}

export { dbConnector }
