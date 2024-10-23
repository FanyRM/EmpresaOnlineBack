import { Router } from 'express';
import { deleteCategoria, getCategoria, getCategorias, postCategoria, updateCategoria } from '../controllers/categoria';


const routerCategoria = Router();

routerCategoria.get('/', getCategorias);
routerCategoria.get('/:id', getCategoria);
routerCategoria.delete('/:id', deleteCategoria);
routerCategoria.post('/', postCategoria);
routerCategoria.put('/:id', updateCategoria);

export default routerCategoria;