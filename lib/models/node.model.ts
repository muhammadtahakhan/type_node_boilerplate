import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class Node extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  export interface NodeInterface {
    name: string;
  }

 
  Node.init(
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
      tableName: "nodes",
      sequelize: database // this bit is important
    }
  );
  
   //blow code will create table once appliation started
  Node.sync({ force: false }).then(() => console.log("Node table created"));