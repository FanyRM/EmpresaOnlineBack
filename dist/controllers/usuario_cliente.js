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
exports.loginUserC = exports.nuevoUsuarioC = exports.deleteUsuarioCliente = exports.getUsuarioCliente = exports.getUsuariosClientes = void 0;
const usuario_cliente_1 = __importDefault(require("../models/usuario_cliente"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsuariosClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listUsuariosClientes = yield usuario_cliente_1.default.findAll();
        res.json(listUsuariosClientes);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getUsuariosClientes = getUsuariosClientes;
const getUsuarioCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarioCliente = yield usuario_cliente_1.default.findByPk(id);
        if (usuarioCliente) {
            res.json(usuarioCliente);
        }
        else {
            res.status(404).json({ msg: `No existe el usuario cliente con la id: ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
});
exports.getUsuarioCliente = getUsuarioCliente;
const deleteUsuarioCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuarioCliente = yield usuario_cliente_1.default.findByPk(id);
        if (!usuarioCliente) {
            res.status(404).json({ msg: `No existe el usuario cliente con la id: ${id}` });
        }
        else {
            yield usuarioCliente.destroy();
            res.json({ msg: 'Usuario cliente eliminado con éxito' });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el usuario cliente, consulte con su administrador' });
    }
});
exports.deleteUsuarioCliente = deleteUsuarioCliente;
const nuevoUsuarioC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cor_Elec, nom_UsuC, cont_UsuC } = req.body;
        const hashedPass = yield bcrypt_1.default.hash(cont_UsuC, 10);
        //Validar existencia del correo en base de datos
        const usuario = yield usuario_cliente_1.default.findOne({ where: { cor_Elec: cor_Elec } });
        if (usuario) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el correo ${cor_Elec}`
            });
        }
        //Guarda usuario en la base de datos
        yield usuario_cliente_1.default.create({
            cor_Elec: cor_Elec,
            nom_UsuC: nom_UsuC,
            cont_UsuC: hashedPass
        });
        res.json({
            msg: `Usuario ${nom_UsuC} creado  exitosamente`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error',
            error
        });
    }
});
exports.nuevoUsuarioC = nuevoUsuarioC;
const loginUserC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cor_Elec, cont_UsuC } = req.body;
        //Validamos que el usuario si existe
        const usuario = yield usuario_cliente_1.default.findOne({ where: { cor_Elec: cor_Elec } });
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con el correo ${cor_Elec}`
            });
        }
        //Validamos password
        const passValida = yield bcrypt_1.default.compare(cont_UsuC, usuario.cont_UsuC);
        if (!passValida) {
            return res.status(400).json({
                msg: 'La contraseña no es correcta, vuelva a intentarlo'
            });
        }
        //Generar token
        const token = jsonwebtoken_1.default.sign({
            nom_UsuC: usuario
        }, process.env.SECRET_KEY || 'somosUN@5Chic@51ind@$');
        return res.json({
            id: usuario.get('id'),
            nom_Usu: usuario.get('nom_Usu'),
            token
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Acaba de suceder un error, consultar a su administrador'
        });
    }
});
exports.loginUserC = loginUserC;
