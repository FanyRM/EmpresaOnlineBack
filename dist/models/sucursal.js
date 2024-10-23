"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Sucursale = connection_1.default.define('Sucursale', {
    nom_Suc: {
        type: sequelize_1.DataTypes.STRING,
    },
    loc_Suc: {
        type: sequelize_1.DataTypes.STRING,
    },
    des_Suc: {
        type: sequelize_1.DataTypes.TEXT,
    },
    img_Suc: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Sucursale;
