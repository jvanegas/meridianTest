import { addProduct } from '../controllers/cart.js'

async function routes(fastify) {
  fastify.post(
    '/',
    async (request, reply) => await addProduct(fastify, request, reply),
  )
}

export default routes
