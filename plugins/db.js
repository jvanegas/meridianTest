import fp from 'fastify-plugin'
import { dbConnector } from '../models/index.js'

const getDb = async (server, opts) => {
  const db = await dbConnector(opts)
  server.decorate('db', db)
}

export default fp(getDb)
