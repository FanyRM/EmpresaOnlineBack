//Herramientas
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

//Base de datos
import db from '../db/connection';

//Importes de ruteo
import routeSucursal from '../routes/sucursal';
import routerProducto from '../routes/producto';
import routerEmpleado from '../routes/empleado';
import routerRol from '../routes/rol';
import routerLogin from '../routes/usuario';
import routerCliente from '../routes/cliente';
import routerProveedor from '../routes/proveedor';
import routerContacto from '../routes/contacto';
import routerCategoria from '../routes/categoria';
import routerDescuento from '../routes/descuento';
import routerCategoriaProducto from '../routes/categoria_producto';
import routerInventario from '../routes/inventario';
import routerPuesto from '../routes/puesto';
import routerUsuarioCliente from '../routes/usuario_cliente';
import routerVenta from '../routes/venta';

class Server {
    private app: Application;
    private port: string;

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen () {
        this.app.listen(this.port, ()  => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request , res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/sucursales', routeSucursal)
        this.app.use('/api/productos',routerProducto)
        this.app.use('/api/empleados',routerEmpleado)
        this.app.use('/api/roles',routerRol)
        this.app.use('/api/login',routerLogin)
        this.app.use('/api/clientes',routerCliente)
        this.app.use('/api/proveedores',routerProveedor)
        this.app.use('/api/contactos',routerContacto)
        this.app.use('/api/categorias',routerCategoria)
        this.app.use('/api/descuentos',routerDescuento)
        this.app.use('/api/categorias-productos',routerCategoriaProducto)
        this.app.use('/api/inventarios',routerInventario)
        this.app.use('/api/puestos',routerPuesto)
        this.app.use('/api/usuarios-clientes',routerUsuarioCliente)
        this.app.use('/api/ventas',routerVenta)

    }

    midlewares() {
        //Parseamos el body
        this.app.use(express.json());
        //Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            console.log('Error al conectase a la base de datos');
        }
    }
    
}

export default Server;