// src/models/admin.ts
import { DataTypes, Model } from 'sequelize';
import  sequelize from '../lib/db'; // You will create this in the next steps

const admin = sequelize.define('admin_details', {
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
  timestamps: true,
  underscored: true,
  paranoid: true, // Enable soft deletes
}
);
export default admin;
