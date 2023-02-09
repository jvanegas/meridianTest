import { addItem } from '../services/cart.js'

const addProduct = async ({ db }, request, reply) => {
  const userId = request.query.user_id ?? 'aaa'
  const data = request.body
  try {
    const newItem = await addItem(db.models.CartItem, userId, data)
    reply.status(201).send(newItem)
  } catch (e) {
    reply.status(500).send({ message: e.message })
  }
}

export { addProduct }
