import { DataTypes, Model } from 'sequelize';
import sequelize from '../lib/db';

class Blog extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public blogImage!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Blog.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Blog',
  }
);

export default Blog;
