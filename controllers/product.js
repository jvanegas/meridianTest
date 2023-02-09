import { getAll } from '../services/product.js'

const getAllProducts = async ({ db, dbUtils }, request, reply) => {
  const category = request.query.category ?? ''
  try {
    const products = await getAll(db.models.Product, dbUtils.Op, { category })
    reply.status(201).send(products)
  } catch (e) {
    reply.status(500).send({ message: e.message })
  }
}

export { getAllProducts }
