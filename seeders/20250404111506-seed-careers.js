'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('careers', [
      {
        title: 'Backend Developer',
        position: 'Contract',
        location: 'Remote',
        description: 'Develop and maintain backend services using modern frameworks. Optimize APIs for performance and scalability.',
        link: '/careers/backend-developer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Frontend Developer',
        position: 'Full-Time',
        location: 'New York, USA',
        description: 'Build intuitive and visually appealing UI components. Collaborate with designers and backend developers for seamless integration.',
        link: '/careers/frontend-developer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'UI/UX Designer',
        position: 'Part-Time',
        location: 'San Francisco, USA',
        description: 'Create engaging user interfaces and experiences. Conduct research and design wireframes for new features.',
        link: '/careers/ui-ux-designer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'DevOps Engineer',
        position: 'Full-Time',
        location: 'Remote',
        description: 'Manage CI/CD pipelines and infrastructure. Ensure system reliability, security, and scalability.',
        link: '/careers/devops-engineer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Product Manager',
        position: 'Full-Time',
        location: 'London, UK',
        description: 'Define product vision and strategy. Work closely with stakeholders to prioritize features and improvements.',
        link: '/careers/product-manager',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('careers', null, {});
  }
};
