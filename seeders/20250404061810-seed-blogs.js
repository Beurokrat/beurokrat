'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blogs', [
      {
        title: 'Introduction to Next.js',
        content: 'Next.js is a powerful React framework...',
        blogImage: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sequelize ORM Basics',
        content: 'Sequelize is a great ORM for Node.js...',
        blogImage: 'https://media.istockphoto.com/id/2148788421/photo/online-shopping-home-and-person-with-phone-clothes-and-e-commerce-digital-and-browsing-for.jpg?s=1024x1024&w=is&k=20&c=lUnXdeVS0lohFVv5Mu36aw2DdGILmLIf_RmvY6R3CoY=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Building APIs with Express',
        content: 'Express makes API development easy...',
        blogImage: 'https://media.istockphoto.com/id/1420267165/photo/woman-in-clothing-store-and-holding-phone-clothes-on-wooden-hangers-background-shopping.jpg?s=2048x2048&w=is&k=20&c=fdWCSMOSD46BqURmGayj-TTN-GkRPFo1p727ruYO2Cc=',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('blogs', null, {});
  }
};
