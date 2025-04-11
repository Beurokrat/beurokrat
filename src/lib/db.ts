import { Sequelize } from 'sequelize';
import pg from 'pg';

const sequelize = new Sequelize(
      process.env.DB_NAME!,
      process.env.DB_USER!,
      process.env.DB_PASSWORD!,
      {
        host: process.env.DB_HOST!,
        dialect: 'postgres',
        dialectModule: pg, 
        logging: console.log,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false, // Supabase uses self-signed certs
          },
        },
      }
    );


export default sequelize;