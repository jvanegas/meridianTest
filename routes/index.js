import productRoutes from './product.js'
import cartRoutes from './cart.js'

async function routes(fastify) {
  fastify.register(productRoutes, { prefix: '/product' })
  fastify.register(cartRoutes, { prefix: '/cart' })
}

export default routes
