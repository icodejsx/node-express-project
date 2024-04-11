import { Model, DataTypes } from "sequelize";

import db from "../config/dataBaseConfig";

export interface TodoAttribute{
    id: string;
    description: string;
    completed: boolean;
    userId?: string
    
}


export class TodoInstance extends Model<TodoAttribute> { }

TodoInstance.init(
    {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        },
         description: {
        type: DataTypes.STRING,
        allowNull: false,
        },
          completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        },
        userId: {
            type: DataTypes.UUIDV4,
            allowNull:false
          }
      
    },

{sequelize: db, tableName: 'todos',}

)
