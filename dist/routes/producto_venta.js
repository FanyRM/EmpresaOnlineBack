"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_venta_1 = require("../controllers/producto_venta");
const routerProductoVenta = (0, express_1.Router)();
routerProductoVenta.get('/', producto_venta_1.getProductosVentas);
routerProductoVenta.get('/:id', producto_venta_1.getProductoVenta);
routerProductoVenta.post('/', producto_venta_1.postProductoVenta);
routerProductoVenta.put('/:id', producto_venta_1.updateProductoVenta);
routerProductoVenta.delete('/:id', producto_venta_1.deleteProductoVenta);
exports.default = routerProductoVenta;
