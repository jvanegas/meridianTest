import fp from 'fastify-plugin'
import { dbConnector } from '../models/index.js'

const getDb = async (server, opts) => {
  const { sequelize, Sequelize } = await dbConnector(opts)
  server.decorate('db', sequelize)
  server.decorate('dbUtils', Sequelize)
}

export default fp(getDb)
