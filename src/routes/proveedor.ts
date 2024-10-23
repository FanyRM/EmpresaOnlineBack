import { Router } from 'express';
import { getProveedores, getProveedor, postProveedor, updateProveedor, deleteProveedor } from '../controllers/proveedor';

const routerProveedor = Router();

routerProveedor.get('/', getProveedores);
routerProveedor.get('/:id', getProveedor);
routerProveedor.post('/', postProveedor);
routerProveedor.put('/:id', updateProveedor);
routerProveedor.delete('/:id', deleteProveedor);

export default routerProveedor;