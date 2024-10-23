import { Router } from 'express';
import { deleteCategoriaProducto, getCategoriaProducto, getCategoriaProductos, postCategoriaProducto, updateCategoriaProducto } from '../controllers/categoria_producto';


const routerCategoriaProducto = Router();

routerCategoriaProducto.get('/', getCategoriaProductos);
routerCategoriaProducto.get('/:id', getCategoriaProducto);
routerCategoriaProducto.delete('/:id', deleteCategoriaProducto);
routerCategoriaProducto.post('/', postCategoriaProducto);
routerCategoriaProducto.put('/:id', updateCategoriaProducto);

export default routerCategoriaProducto;