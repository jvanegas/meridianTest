const addItem = async (CartItemModel, userId, body) => {
  return await CartItemModel.create({ ...body, userId })
}

export { addItem }
