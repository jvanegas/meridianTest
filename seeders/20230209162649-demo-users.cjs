'use strict';

const users = [
  {
    id: '4068a8dc-a899-11ed-afa1-0242ac120002',
    full_name: "Juan Camilo Vanegas Serna"
  },
  {
    id: '4068ac56-a899-11ed-afa1-0242ac120002',
    full_name: "Meridian Goup"
  },
]

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', users, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
