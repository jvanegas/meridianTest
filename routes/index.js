import productRoutes from './product.js'

async function routes(fastify) {
  fastify.register(productRoutes, { prefix: '/product' })
}

export default routes
