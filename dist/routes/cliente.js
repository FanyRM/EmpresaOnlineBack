"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_1 = require("../controllers/cliente");
const routerCliente = (0, express_1.Router)();
routerCliente.get('/', cliente_1.getClientes);
routerCliente.get('/:id', cliente_1.getCliente);
routerCliente.delete('/:id', cliente_1.deleteCliente);
routerCliente.post('/', cliente_1.postCliente);
routerCliente.put('/:id', cliente_1.updateCliente);
exports.default = routerCliente;
