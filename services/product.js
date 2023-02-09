const getAll = async (ProductsModel, Operators, filters = { category: '' }) => {
  const filter = {}
  if (filters.category !== '') {
    filter.categories = { [Operators.iLike]: `%${filters.category}%` }
  }
  return await ProductsModel.findAll({
    where: { ...filter },
  })
}

export { getAll }
