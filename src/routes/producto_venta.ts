import { Router } from 'express';
import { getProductosVentas, getProductoVenta, postProductoVenta, updateProductoVenta, deleteProductoVenta } from '../controllers/producto_venta';

const routerProductoVenta = Router();

routerProductoVenta.get('/', getProductosVentas);
routerProductoVenta.get('/:id', getProductoVenta);
routerProductoVenta.post('/', postProductoVenta);
routerProductoVenta.put('/:id', updateProductoVenta);
routerProductoVenta.delete('/:id', deleteProductoVenta);

export default routerProductoVenta;