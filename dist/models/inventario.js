"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Inventario = connection_1.default.define('Inventario', {
    exis_Prod: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Producto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Almacen: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Inventario;
