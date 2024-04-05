import { Model, DataTypes } from "sequelize";

import db from "../config/dataBaseConfig";

export interface UserAttribute{
    id: string;
    description: string;
    completed: boolean;
    
}
