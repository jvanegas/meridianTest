const addItem = async (CartItemModel, userId, body) => {
  return await CartItemModel.create({ ...body, userId })
}

const getUserCart = async (CartItemModel, userId) => {
  return await CartItemModel.findAll({
    where: { userId },
  })
}

export { addItem, getUserCart }
