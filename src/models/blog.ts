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
},
  {
    timestamps: true,
    underscored: true,
    paranoid: true, // Enable soft deletes
  }
);


export default blogs;
