import { addItem, getUserCart as getCart } from '../services/cart.js'

const addProduct = async ({ db }, request, reply) => {
  const userId = request.query.user_id ?? ''
  const data = request.body
  try {
    const newItem = await addItem(db.models.CartItem, userId, data)
    reply.status(201).send(newItem)
  } catch (e) {
    reply.status(500).send({ message: e.message })
  }
}

const getUserCart = async ({ db }, request, reply) => {
  const userId = request.params.userId ?? ''
  try {
    const userCart = await getCart(db.models.CartItem, userId)
    reply.status(201).send(userCart)
  } catch (e) {
    reply.status(500).send({ message: e.message })
  }
}

export { addProduct, getUserCart }
