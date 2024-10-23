"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Venta = connection_1.default.define('Venta', {
    tot_vent: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    fec_vent: {
        type: sequelize_1.DataTypes.DATE
    },
    tip_pago: {
        type: sequelize_1.DataTypes.STRING
    },
    id_Corte: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Descuento: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Venta;
