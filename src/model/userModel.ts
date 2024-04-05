
import { Model, DataTypes } from "sequelize";

import db from "../config/dataBaseConfig";

export interface UserAttribute{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passWord: string
    phoneNumber: string;
    age: number
}

export class UserInstance extends Model<UserAttribute> { }

UserInstance.init(
    {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        },
         firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
          lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
           email: {
        type: DataTypes.STRING,
       unique:true,
        allowNull: false,
        },
        passWord: {
        type: DataTypes.STRING,
        },
        phoneNumber: {
         type: DataTypes.STRING,
        allowNull: false,
        },
        age: {
        type: DataTypes.STRING,
        allowNull: false,
                    
        }    
    },

{sequelize: db, tableName: 'users',}

)