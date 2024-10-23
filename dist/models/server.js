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
//Herramientas
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//Base de datos
const connection_1 = __importDefault(require("../db/connection"));
//Importes de ruteo
const sucursal_1 = __importDefault(require("../routes/sucursal"));
const producto_1 = __importDefault(require("../routes/producto"));
const empleado_1 = __importDefault(require("../routes/empleado"));
const rol_1 = __importDefault(require("../routes/rol"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cliente_1 = __importDefault(require("../routes/cliente"));
const proveedor_1 = __importDefault(require("../routes/proveedor"));
const contacto_1 = __importDefault(require("../routes/contacto"));
const categoria_1 = __importDefault(require("../routes/categoria"));
const descuento_1 = __importDefault(require("../routes/descuento"));
const categoria_producto_1 = __importDefault(require("../routes/categoria_producto"));
const inventario_1 = __importDefault(require("../routes/inventario"));
const puesto_1 = __importDefault(require("../routes/puesto"));
const usuario_cliente_1 = __importDefault(require("../routes/usuario_cliente"));
const venta_1 = __importDefault(require("../routes/venta"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        this.app.use('/api/sucursales', sucursal_1.default);
        this.app.use('/api/productos', producto_1.default);
        this.app.use('/api/empleados', empleado_1.default);
        this.app.use('/api/roles', rol_1.default);
        this.app.use('/api/login', usuario_1.default);
        this.app.use('/api/clientes', cliente_1.default);
        this.app.use('/api/proveedores', proveedor_1.default);
        this.app.use('/api/contactos', contacto_1.default);
        this.app.use('/api/categorias', categoria_1.default);
        this.app.use('/api/descuentos', descuento_1.default);
        this.app.use('/api/categorias-productos', categoria_producto_1.default);
        this.app.use('/api/inventarios', inventario_1.default);
        this.app.use('/api/puestos', puesto_1.default);
        this.app.use('/api/usuarios-clientes', usuario_cliente_1.default);
        this.app.use('/api/ventas', venta_1.default);
    }
    midlewares() {
        //Parseamos el body
        this.app.use(express_1.default.json());
        //Cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectase a la base de datos');
            }
        });
    }
}
exports.default = Server;
