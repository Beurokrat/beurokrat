import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';

const blogs = sequelize.define('blogs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  blogImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deleted_at: {
    allowNull: true,
    type: DataTypes.DATE,
  },
},
  {
    timestamps: true,
    underscored: true,
    paranoid: true, // Enable soft deletes
  }
);


export default blogs;
