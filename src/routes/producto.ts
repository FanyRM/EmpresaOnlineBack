import {Router} from 'express';
import { deleteProducto, getProducto, getProductos, postProducto, updateProducto } from '../controllers/producto';

const routerProducto = Router();

routerProducto.get('/',getProductos );
routerProducto.get('/:id',getProducto);
routerProducto.delete('/:id',deleteProducto);
routerProducto.post('/',postProducto);
routerProducto.put('/:id',updateProducto);

export default routerProducto;
