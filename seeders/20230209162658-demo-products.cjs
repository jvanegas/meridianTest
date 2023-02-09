'use strict';

const products = [
  {
    id: '4068ae18-a899-11ed-afa1-0242ac120002',
    name: 'Cargador',
    price: 25000,
    categories: 'electronica, celulares, computo, cargador'
  },
  {
    id: '4068afd0-a899-11ed-afa1-0242ac120002',
    name: 'Portaretratos',
    price: 12400,
    categories: 'fotos, decoracion, hogar'
  },
  {
    id: '4068b19c-a899-11ed-afa1-0242ac120002',
    name: 'Computador',
    price: 4_500_000,
    categories: 'electronica, computadores'
  },
  {
    id: '4068b35e-a899-11ed-afa1-0242ac120002',
    name: 'Vaso vidrio x 6 unidades',
    price: 45000,
    categories: 'hogar, vajilla'
  },
  {
    id: '4068b534-a899-11ed-afa1-0242ac120002',
    name: 'Airfryer',
    price: 450000,
    categories: 'hogar, electonica, electrodomesticos'
  },
]

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('products', products, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
