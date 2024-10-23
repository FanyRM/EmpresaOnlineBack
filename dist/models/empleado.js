"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Empleado = connection_1.default.define('Empleado', {
    nom_Emp: {
        type: sequelize_1.DataTypes.STRING
    },
    ape_Pat_Emp: {
        type: sequelize_1.DataTypes.STRING
    },
    ape_Mat_Emp: {
        type: sequelize_1.DataTypes.STRING
    },
    nss_Emp: {
        type: sequelize_1.DataTypes.STRING
    },
    cor_Elec: {
        type: sequelize_1.DataTypes.STRING
    },
    fec_Nac: {
        type: sequelize_1.DataTypes.DATE
    },
    fec_Alta: {
        type: sequelize_1.DataTypes.DATE
    },
    edo_Emp: {
        type: sequelize_1.DataTypes.STRING
    },
    sit_Emp: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    id_Puesto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Sucursal: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Rol: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Usuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Empleado;
