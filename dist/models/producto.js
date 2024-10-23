"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Producto = connection_1.default.define('Producto', {
    prci_Prod: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    nom_Prod: {
        type: sequelize_1.DataTypes.STRING
    },
    des_Prod: {
        type: sequelize_1.DataTypes.STRING
    },
    edo_Prod: {
        type: sequelize_1.DataTypes.STRING
    },
    img_Prod: {
        type: sequelize_1.DataTypes.STRING
    },
    id_Descuento: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Producto;
