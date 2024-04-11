"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoInstance = void 0;
const sequelize_1 = require("sequelize");
const dataBaseConfig_1 = __importDefault(require("../config/dataBaseConfig"));
class TodoInstance extends sequelize_1.Model {
}
exports.TodoInstance = TodoInstance;
TodoInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: false
    }
}, { sequelize: dataBaseConfig_1.default, tableName: 'todos', });
