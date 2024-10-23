"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInventario = exports.postInventario = exports.deleteInventario = exports.getInventario = exports.getInventarios = void 0;
const inventario_1 = __importDefault(require("../models/inventario"));
const getInventarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listInventarios = yield inventario_1.default.findAll();
        res.json(listInventarios);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getInventarios = getInventarios;
const getInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const inventario = yield inventario_1.default.findByPk(id);
        if (inventario) {
            res.json(inventario);
        }
        else {
            res.status(404).json({ msg: `No existe el inventario con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getInventario = getInventario;
const deleteInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const inventario = yield inventario_1.default.findByPk(id);
        if (!inventario) {
            res.status(404).json({ msg: `No existe el inventario con la id: ${id}` });
        }
        else {
            yield inventario.destroy();
            res.json({ msg: 'Inventario eliminado con éxito' });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el inventario, consulte con su administrador' });
    }
});
exports.deleteInventario = deleteInventario;
const postInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield inventario_1.default.create(body);
        res.json({ msg: 'Inventario agregado con éxito' });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar el inventario' });
    }
});
exports.postInventario = postInventario;
const updateInventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const inventario = yield inventario_1.default.findByPk(id);
    try {
        if (inventario) {
            yield inventario.update(body);
            res.json({ msg: 'Inventario actualizado con éxito' });
        }
        else {
            res.status(404).json({ msg: `No existe el inventario con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar el inventario' });
    }
});
exports.updateInventario = updateInventario;
