import { addProduct, getUserCart } from '../controllers/cart.js'

async function routes(fastify) {
  fastify.post(
    '/',
    async (request, reply) => await addProduct(fastify, request, reply),
  )
  fastify.get(
    '/user/:userId',
    async (request, reply) => await getUserCart(fastify, request, reply),
  )
}

export default routes
