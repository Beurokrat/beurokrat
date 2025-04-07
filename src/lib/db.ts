import { Sequelize } from 'sequelize';
import pg from 'pg';

declare global {
  var sequelize: Sequelize | undefined;
}

let sequelize: Sequelize;

  if (!global.sequelize) {
    global.sequelize = new Sequelize(
      process.env.DB_NAME!,
      process.env.DB_USER!,
      process.env.DB_PASSWORD!,
      {
        host: process.env.DB_HOST!,
        dialect: 'postgres',
        dialectModule: pg, 
        logging: console.log,
      }
    );
  }
  sequelize = global.sequelize;


export default sequelize;