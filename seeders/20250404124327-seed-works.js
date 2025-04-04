'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Works', [
      {
        title: 'AI-powered financial analytics platform',
        image: '/assets/img/project_1.png',
        description: 'A web-based application that provides AI-driven insights for financial decision-making.',
        tag: 'Finance',
        link: 'https://example.com/project-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Blockchain-based supply chain tracking system',
        image: '/assets/img/project_2.png',
        description: 'Developed a blockchain-based system to enhance transparency and security in supply chain management.',
        tag: 'Blockchain',
        link: 'https://example.com/project-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Real-time proximity sensing module for disease spread tracking',
        image: '/assets/img/project_3.png',
        description: 'Designed to track disease spread by monitoring the distance between individuals. This system provided valuable insights into interactions and helped enforce social distancing protocols.',
        tag: 'Electronics',
        link: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Works', null, {});
  },
};
