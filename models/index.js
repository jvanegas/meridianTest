import { Sequelize } from 'sequelize'

async function dbConnector(config) {
  const sequelize = new Sequelize(config)
  await sequelize.authenticate()

  return sequelize
}

export { dbConnector }
