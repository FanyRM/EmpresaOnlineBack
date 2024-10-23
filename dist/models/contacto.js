"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Contacto = connection_1.default.define('Contacto', {
    num_Cto: {
        type: sequelize_1.DataTypes.STRING
    },
    cor_Elec_Cto: {
        type: sequelize_1.DataTypes.STRING
    },
    nom_Cto: {
        type: sequelize_1.DataTypes.STRING
    },
    id_Proveedor: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Contacto;
