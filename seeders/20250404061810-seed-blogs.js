'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blogs', [
      {
        title: 'Introduction to Next.js',
        content: 'Next.js is a powerful React framework for building server-rendered and static web applications.',
        blogImage: 'https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sequelize ORM Basics',
        content: 'Sequelize is a great ORM for Node.js that simplifies database interactions.',
        blogImage: 'https://media.istockphoto.com/id/2148788421/photo/online-shopping-home-and-person-with-phone-clothes-and-e-commerce-digital-and-browsing-for.jpg?s=1024x1024&w=is&k=20&c=lUnXdeVS0lohFVv5Mu36aw2DdGILmLIf_RmvY6R3CoY=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Building APIs with Express',
        content: 'Express makes API development easy and efficient with its minimalistic approach.',
        blogImage: 'https://media.istockphoto.com/id/1420267165/photo/woman-in-clothing-store-and-holding-phone-clothes-on-wooden-hangers-background-shopping.jpg?s=2048x2048&w=is&k=20&c=fdWCSMOSD46BqURmGayj-TTN-GkRPFo1p727ruYO2Cc=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Understanding React Hooks',
        content: 'React Hooks simplify state management and lifecycle methods in functional components.',
        blogImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'CSS Grid vs Flexbox',
        content: 'Learn the differences between CSS Grid and Flexbox and when to use each.',
        blogImage: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'JavaScript ES6 Features',
        content: 'Explore the new features introduced in ES6, including arrow functions, destructuring, and more.',
        blogImage: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Introduction to TypeScript',
        content: 'TypeScript adds static typing to JavaScript, making it easier to catch errors during development.',
        blogImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Node.js Event Loop Explained',
        content: 'Understand how the Node.js event loop works and why it is non-blocking.',
        blogImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'REST vs GraphQL',
        content: 'Compare REST and GraphQL to understand their differences and use cases.',
        blogImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Deploying Applications with Docker',
        content: 'Learn how to containerize and deploy your applications using Docker.',
        blogImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('blogs', null, {});
  }
};
