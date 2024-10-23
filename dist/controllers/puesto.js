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
exports.updatePuesto = exports.postPuesto = exports.deletePuesto = exports.getPuesto = exports.getPuestos = void 0;
const puesto_1 = __importDefault(require("../models/puesto"));
const getPuestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listPuestos = yield puesto_1.default.findAll();
        res.json(listPuestos);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getPuestos = getPuestos;
const getPuesto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const puesto = yield puesto_1.default.findByPk(id);
        if (puesto) {
            res.json(puesto);
        }
        else {
            res.status(404).json({ msg: `No existe el puesto con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getPuesto = getPuesto;
const deletePuesto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const puesto = yield puesto_1.default.findByPk(id);
        if (!puesto) {
            res.status(404).json({ msg: `No existe el puesto con la id: ${id}` });
        }
        else {
            yield puesto.destroy();
            res.json({
                msg: 'Fue eliminado con exito'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.deletePuesto = deletePuesto;
const postPuesto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield puesto_1.default.create(body);
        res.json({
            msg: 'Fue agregado con exito',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.postPuesto = postPuesto;
const updatePuesto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const puesto = yield puesto_1.default.findByPk(id);
    try {
        if (puesto) {
            yield puesto.update(body);
            res.json({
                msg: 'Fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el puesto con la id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        });
    }
});
exports.updatePuesto = updatePuesto;
