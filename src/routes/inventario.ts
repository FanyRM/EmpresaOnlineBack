import { Router } from 'express';
import { getInventarios, getInventario, postInventario, updateInventario, deleteInventario } from '../controllers/inventario';

const routerInventario = Router();

routerInventario.get('/', getInventarios);
routerInventario.get('/:id', getInventario);
routerInventario.post('/', postInventario); 
routerInventario.put('/:id', updateInventario);    
routerInventario.delete('/:id', deleteInventario);  

export default routerInventario;