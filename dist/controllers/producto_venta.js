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
exports.updateProductoVenta = exports.postProductoVenta = exports.deleteProductoVenta = exports.getProductoVenta = exports.getProductosVentas = void 0;
const producto_venta_1 = __importDefault(require("../models/producto_venta"));
const getProductosVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listProductosVentas = yield producto_venta_1.default.findAll();
        res.json(listProductosVentas);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getProductosVentas = getProductosVentas;
const getProductoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productoVenta = yield producto_venta_1.default.findByPk(id);
        if (productoVenta) {
            res.json(productoVenta);
        }
        else {
            res.status(404).json({ msg: `No existe el producto de venta con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getProductoVenta = getProductoVenta;
const deleteProductoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productoVenta = yield producto_venta_1.default.findByPk(id);
        if (!productoVenta) {
            res.status(404).json({ msg: `No existe el producto de venta con la id: ${id}` });
        }
        else {
            yield productoVenta.destroy();
            res.json({ msg: 'Producto de venta eliminado con éxito' });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el producto de venta, consulte con su administrador' });
    }
});
exports.deleteProductoVenta = deleteProductoVenta;
const postProductoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield producto_venta_1.default.create(body);
        res.json({ msg: 'Producto de venta agregado con éxito' });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar el producto de venta' });
    }
});
exports.postProductoVenta = postProductoVenta;
const updateProductoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const productoVenta = yield producto_venta_1.default.findByPk(id);
    try {
        if (productoVenta) {
            yield productoVenta.update(body);
            res.json({ msg: 'Producto de venta actualizado con éxito' });
        }
        else {
            res.status(404).json({ msg: `No existe el producto de venta con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar el producto de venta' });
    }
});
exports.updateProductoVenta = updateProductoVenta;
