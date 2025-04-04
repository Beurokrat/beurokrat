// src/models/admin.ts
import { DataTypes, Model } from 'sequelize';
import  sequelize from '../lib/db'; // You will create this in the next steps

export class Admin extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Pass the sequelize instance
    tableName: 'admin_details', // Table name
  }
);
