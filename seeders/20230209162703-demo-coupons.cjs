'use strict';

const coupons = [
  {
    id: '4068bb60-a899-11ed-afa1-0242ac120002',
    discount: 15,
    code: 'AXD98V',
    expiration_date: '2023-02-10'
  },
  {
    id: '4068bd5e-a899-11ed-afa1-0242ac120002',
    discount: 10,
    code: 'AGD988',
    expiration_date: '2023-03-24'
  },
  {
    id: '4068bf3e-a899-11ed-afa1-0242ac120002',
    discount: 30,
    code: 'BNR100',
    expiration_date: '2023-01-31'
  },
]

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('coupons', coupons, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('coupons', null, {});
  }
};
