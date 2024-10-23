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
exports.updateCategoriaProducto = exports.deleteCategoriaProducto = exports.postCategoriaProducto = exports.getCategoriaProducto = exports.getCategoriaProductos = void 0;
const categoria_producto_1 = __importDefault(require("../models/categoria_producto"));
const getCategoriaProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listCategoriaProductos = yield categoria_producto_1.default.findAll();
        res.json(listCategoriaProductos);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getCategoriaProductos = getCategoriaProductos;
const getCategoriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const categoriaProducto = yield categoria_producto_1.default.findByPk(id);
        if (categoriaProducto) {
            res.json(categoriaProducto);
        }
        else {
            res.status(404).json({ msg: `No existe la categoría-producto con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getCategoriaProducto = getCategoriaProducto;
const postCategoriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield categoria_producto_1.default.create(body);
        res.json({
            msg: 'Fue agregado con éxito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps, ocurrió un error'
        });
    }
});
exports.postCategoriaProducto = postCategoriaProducto;
const deleteCategoriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const categoriaProducto = yield categoria_producto_1.default.findByPk(id);
        if (!categoriaProducto) {
            res.status(404).json({ msg: `No existe la categoría-producto con la id: ${id}` });
        }
        else {
            yield categoriaProducto.destroy();
            res.json({
                msg: 'Fue eliminado con éxito'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al eliminar la información, consulte con su administrador'
        });
    }
});
exports.deleteCategoriaProducto = deleteCategoriaProducto;
const updateCategoriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const categoriaProducto = yield categoria_producto_1.default.findByPk(id);
    try {
        if (categoriaProducto) {
            yield categoriaProducto.update(body);
            res.json({
                msg: 'Fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe la categoría-producto con la id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps, ocurrió un error'
        });
    }
});
exports.updateCategoriaProducto = updateCategoriaProducto;
