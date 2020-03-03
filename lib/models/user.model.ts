import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class User extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  export interface UserInterface {
    name: string;
    password: string;
  }

 
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false
      }
    },
    {
      tableName: "users",
      sequelize: database // this bit is important
    }
  );
  
   //blow code will create table once appliation started
  User.sync({ force: false }).then(() => console.log("User table created"));