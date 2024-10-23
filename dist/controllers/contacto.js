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
exports.updateContacto = exports.deleteContacto = exports.postContacto = exports.getContacto = exports.getContactos = void 0;
const contacto_1 = __importDefault(require("../models/contacto"));
const getContactos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listContactos = yield contacto_1.default.findAll();
        res.json(listContactos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getContactos = getContactos;
const getContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const contacto = yield contacto_1.default.findByPk(id);
        if (contacto) {
            res.json(contacto);
        }
        else {
            res.status(404).json({ msg: `No existe el contacto con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getContacto = getContacto;
const postContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const contacto = yield contacto_1.default.create(body);
        res.json({
            msg: 'Contacto agregado con éxito',
            contacto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar agregar el contacto'
        });
    }
});
exports.postContacto = postContacto;
const deleteContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const contacto = yield contacto_1.default.findByPk(id);
        if (!contacto) {
            res.status(404).json({ msg: `No existe el contacto con la id: ${id}` });
        }
        else {
            yield contacto.destroy();
            res.json({
                msg: 'Contacto eliminado con éxito'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al intentar eliminar el contacto, consulte con su administrador'
        });
    }
});
exports.deleteContacto = deleteContacto;
const updateContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const contacto = yield contacto_1.default.findByPk(id);
        if (contacto) {
            yield contacto.update(body);
            res.json({
                msg: 'Contacto actualizado con éxito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe el contacto con la id: ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar actualizar el contacto'
        });
    }
});
exports.updateContacto = updateContacto;
