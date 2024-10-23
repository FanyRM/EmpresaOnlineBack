"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Usuario = connection_1.default.define('Usuario', {
    cor_Elec: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nom_Usu: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cont_Usu: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Usuario;
