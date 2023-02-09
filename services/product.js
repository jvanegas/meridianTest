const getAll = (ProductsModel, Operators, filters = { category: '' }) => {
  const filter = {}
  if (filters.category !== '') {
    filter.categories = { [Operators.iLike]: `%${filters.category}%` }
  }
  return ProductsModel.findAll({
    where: { ...filter },
  })
}

export { getAll }
