import Fastify from 'fastify'
import config from './config/index.js'
import dbPlugin from './plugins/db.js'
import routes from './routes/index.js'

const main = async (configApp = {}) => {
  const app = Fastify(configApp)

  await app.register(dbPlugin, configApp)

  // Register a get route for health checks.
  app.get('/check', async () => {
    return { status: 'Ok' }
  })

  app.register(routes)

  return app
}

const server = await main(config)

try {
  await server.listen({ port: config.appPort })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}

export { main }
