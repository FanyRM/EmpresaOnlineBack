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
exports.updateCategoria = exports.deleteCategoria = exports.postCategoria = exports.getCategoria = exports.getCategorias = void 0;
const categoria_1 = __importDefault(require("../models/categoria"));
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listCategorias = yield categoria_1.default.findAll();
        res.json(listCategorias);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getCategorias = getCategorias;
const getCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const categoria = yield categoria_1.default.findByPk(id);
        if (categoria) {
            res.json(categoria);
        }
        else {
            res.status(404).json({ msg: `No existe la categoría con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getCategoria = getCategoria;
const postCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield categoria_1.default.create(body);
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
exports.postCategoria = postCategoria;
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const categoria = yield categoria_1.default.findByPk(id);
        if (!categoria) {
            res.status(404).json({ msg: `No existe la categoría con la id: ${id}` });
        }
        else {
            yield categoria.destroy();
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
exports.deleteCategoria = deleteCategoria;
const updateCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const categoria = yield categoria_1.default.findByPk(id);
    try {
        if (categoria) {
            yield categoria.update(body);
            res.json({
                msg: 'Fue actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe la categoría con la id: ${id}`
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
exports.updateCategoria = updateCategoria;
