'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('works', [
      {
        title: 'AI-powered financial analytics platform',
        image: '/assets/img/project_1.png',
        description: 'A web-based application that provides AI-driven insights for financial decision-making.',
        tag: 'Finance',
        link: 'https://example.com/project-1',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Blockchain-based supply chain tracking system',
        image: '/assets/img/project_2.png',
        description: 'Developed a blockchain-based system to enhance transparency and security in supply chain management.',
        tag: 'Blockchain',
        link: 'https://example.com/project-2',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Real-time proximity sensing module for disease spread tracking',
        image: '/assets/img/project_3.png',
        description: 'Designed to track disease spread by monitoring the distance between individuals. This system provided valuable insights into interactions and helped enforce social distancing protocols.',
        tag: 'Electronics',
        link: '',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'E-commerce platform with personalized recommendations',
        image: '/assets/img/project_4.png',
        description: 'Built an e-commerce platform that uses machine learning to provide personalized product recommendations.',
        tag: 'E-commerce',
        link: 'https://example.com/project-4',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'IoT-based smart home automation system',
        image: '/assets/img/project_5.png',
        description: 'Developed a smart home system that integrates IoT devices for seamless automation and control.',
        tag: 'IoT',
        link: 'https://example.com/project-5',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Mobile app for fitness tracking and health monitoring',
        image: '/assets/img/project_6.png',
        description: 'Created a mobile app that tracks fitness activities and monitors health metrics in real-time.',
        tag: 'Health',
        link: 'https://example.com/project-6',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'AI chatbot for customer support',
        image: '/assets/img/project_7.png',
        description: 'Developed an AI-powered chatbot to provide 24/7 customer support and improve user engagement.',
        tag: 'AI',
        link: 'https://example.com/project-7',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Augmented reality app for virtual furniture placement',
        image: '/assets/img/project_8.png',
        description: 'Built an AR app that allows users to visualize furniture in their homes before making a purchase.',
        tag: 'AR',
        link: 'https://example.com/project-8',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Online learning platform with interactive courses',
        image: '/assets/img/project_9.png',
        description: 'Created an online learning platform that offers interactive courses and real-time feedback.',
        tag: 'Education',
        link: 'https://example.com/project-9',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Weather forecasting system using machine learning',
        image: '/assets/img/project_10.png',
        description: 'Developed a weather forecasting system that uses machine learning to predict weather patterns.',
        tag: 'Weather',
        link: 'https://example.com/project-10',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Virtual reality training simulator for medical professionals',
        image: '/assets/img/project_11.png',
        description: 'Built a VR simulator to train medical professionals in performing complex procedures.',
        tag: 'VR',
        link: 'https://example.com/project-11',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'AI-powered fraud detection system for banking',
        image: '/assets/img/project_12.png',
        description: 'Developed a fraud detection system that uses AI to identify suspicious transactions in real-time.',
        tag: 'Finance',
        link: 'https://example.com/project-12',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Smart agriculture system for crop monitoring',
        image: '/assets/img/project_13.png',
        description: 'Created a smart agriculture system that uses IoT sensors to monitor crop health and optimize irrigation.',
        tag: 'Agriculture',
        link: 'https://example.com/project-13',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Real-time traffic management system',
        image: '/assets/img/project_14.png',
        description: 'Developed a traffic management system that uses real-time data to optimize traffic flow.',
        tag: 'Transportation',
        link: 'https://example.com/project-14',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Blockchain-based voting system',
        image: '/assets/img/project_15.png',
        description: 'Built a secure and transparent voting system using blockchain technology.',
        tag: 'Blockchain',
        link: 'https://example.com/project-15',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'AI-powered content moderation tool',
        image: '/assets/img/project_16.png',
        description: 'Developed a tool that uses AI to moderate user-generated content on social media platforms.',
        tag: 'AI',
        link: 'https://example.com/project-16',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Energy management system for smart grids',
        image: '/assets/img/project_17.png',
        description: 'Created an energy management system that optimizes energy distribution in smart grids.',
        tag: 'Energy',
        link: 'https://example.com/project-17',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Mobile app for mental health support',
        image: '/assets/img/project_18.png',
        description: 'Built a mobile app that provides mental health resources and connects users with therapists.',
        tag: 'Health',
        link: 'https://example.com/project-18',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'AI-powered recommendation engine for e-commerce',
        image: '/assets/img/project_19.png',
        description: 'Developed a recommendation engine that uses AI to suggest products based on user preferences.',
        tag: 'E-commerce',
        link: 'https://example.com/project-19',
        created_at: new Date(),
        updated_at: null
      },
      {
        title: 'Autonomous drone delivery system',
        image: '/assets/img/project_20.png',
        description: 'Created a drone delivery system that autonomously delivers packages to customers.',
        tag: 'Logistics',
        link: 'https://example.com/project-20',
        created_at: new Date(),
        updated_at: null
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Works', null, {});
  },
};
