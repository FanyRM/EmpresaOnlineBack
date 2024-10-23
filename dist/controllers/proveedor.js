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
exports.updateProveedor = exports.postProveedor = exports.deleteProveedor = exports.getProveedor = exports.getProveedores = void 0;
const proveedor_1 = __importDefault(require("../models/proveedor"));
const getProveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listProveedores = yield proveedor_1.default.findAll();
        res.json(listProveedores);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getProveedores = getProveedores;
const getProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const proveedor = yield proveedor_1.default.findByPk(id);
        if (proveedor) {
            res.json(proveedor);
        }
        else {
            res.status(404).json({ msg: `No existe el proveedor con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getProveedor = getProveedor;
const deleteProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const proveedor = yield proveedor_1.default.findByPk(id);
        if (!proveedor) {
            res.status(404).json({ msg: `No existe el proveedor con la id: ${id}` });
        }
        else {
            yield proveedor.destroy();
            res.json({ msg: 'Proveedor eliminado con éxito' });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el proveedor, consulte con su administrador' });
    }
});
exports.deleteProveedor = deleteProveedor;
const postProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield proveedor_1.default.create(body);
        res.json({ msg: 'Proveedor agregado con éxito' });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar el proveedor' });
    }
});
exports.postProveedor = postProveedor;
const updateProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const proveedor = yield proveedor_1.default.findByPk(id);
    try {
        if (proveedor) {
            yield proveedor.update(body);
            res.json({ msg: 'Proveedor actualizado con éxito' });
        }
        else {
            res.status(404).json({ msg: `No existe el proveedor con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar el proveedor' });
    }
});
exports.updateProveedor = updateProveedor;
