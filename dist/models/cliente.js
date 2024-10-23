"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cliente = connection_1.default.define('Cliente', {
    nom_Client: {
        type: sequelize_1.DataTypes.STRING
    },
    ape_Mat_Clie: {
        type: sequelize_1.DataTypes.STRING
    },
    ape_Pat_Clie: {
        type: sequelize_1.DataTypes.STRING
    },
    fec_Nac: {
        type: sequelize_1.DataTypes.DATE
    },
    id_UsuarioCliente: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_Rol: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Cliente;
