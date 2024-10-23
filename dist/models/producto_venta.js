"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ProductosVenta = connection_1.default.define('ProductosVenta', {
    cant_Prod: {
        type: sequelize_1.DataTypes.INTEGER
    },
    tot_Prod: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    id_Producto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Venta: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = ProductosVenta;
