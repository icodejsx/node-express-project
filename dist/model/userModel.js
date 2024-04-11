"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const dataBaseConfig_1 = __importDefault(require("../config/dataBaseConfig"));
const todoModel_1 = require("./todoModel");
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    passWord: {
        type: sequelize_1.DataTypes.STRING,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, { sequelize: dataBaseConfig_1.default, tableName: 'users', });
UserInstance.hasMany(todoModel_1.TodoInstance, { foreignKey: "userId", as: 'users' });
todoModel_1.TodoInstance.belongsTo(UserInstance, { foreignKey: 'userId', as: 'todos' });
