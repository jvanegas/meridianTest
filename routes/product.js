import { getAllProducts } from '../controllers/product.js'

async function routes(fastify) {
  fastify.get(
    '/',
    async (request, reply) => await getAllProducts(fastify, request, reply),
  )
}

export default routes
