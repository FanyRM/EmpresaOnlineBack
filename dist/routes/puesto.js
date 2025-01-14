"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puesto_1 = require("../controllers/puesto");
const routerPuesto = (0, express_1.Router)();
routerPuesto.get('/', puesto_1.getPuestos);
routerPuesto.get('/:id', puesto_1.getPuesto);
routerPuesto.post('/', puesto_1.postPuesto);
routerPuesto.put('/:id', puesto_1.updatePuesto);
routerPuesto.delete('/:id', puesto_1.deletePuesto);
exports.default = routerPuesto;
