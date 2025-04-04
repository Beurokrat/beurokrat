import { Sequelize } from 'sequelize';

// Extend the global namespace to include sequelize
declare global {
  var sequelize: Sequelize | undefined;
}

// Prevent multiple instances of Sequelize in development
let sequelize: Sequelize;


  // In development, we need to ensure we don't create multiple connections
  if (!global.sequelize) {
    global.sequelize = new Sequelize(
      process.env.DB_NAME!,
      process.env.DB_USER!,
      process.env.DB_PASSWORD!,
      {
        host: process.env.DB_HOST!,
        dialect: 'postgres',
        dialectModule: require('pg'), // Explicitly require pg module here
        logging: console.log,
      }
    );
  }
  sequelize = global.sequelize;


export default sequelize;