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
exports.updateDescuento = exports.deleteDescuento = exports.postDescuento = exports.getDescuento = exports.getDescuentos = void 0;
const descuento_1 = __importDefault(require("../models/descuento"));
const getDescuentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listDescuentos = yield descuento_1.default.findAll();
        res.json(listDescuentos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getDescuentos = getDescuentos;
const getDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const descuento = yield descuento_1.default.findByPk(id);
        if (descuento) {
            res.json(descuento);
        }
        else {
            res.status(404).json({ msg: `No existe el descuento con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getDescuento = getDescuento;
const postDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const descuento = yield descuento_1.default.create(body);
        res.json({
            msg: 'Descuento agregado con éxito',
            descuento
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar agregar el descuento'
        });
    }
});
exports.postDescuento = postDescuento;
const deleteDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const descuento = yield descuento_1.default.findByPk(id);
        if (!descuento) {
            res.status(404).json({ msg: `No existe el descuento con la id: ${id}` });
        }
        else {
            yield descuento.destroy();
            res.json({
                msg: 'Descuento eliminado con éxito'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al intentar eliminar el descuento, consulte con su administrador'
        });
    }
});
exports.deleteDescuento = deleteDescuento;
const updateDescuento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const descuento = yield descuento_1.default.findByPk(id);
        if (descuento) {
            yield descuento.update(body);
            res.json({
                msg: 'Descuento actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el descuento con la id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar actualizar el descuento'
        });
    }
});
exports.updateDescuento = updateDescuento;
