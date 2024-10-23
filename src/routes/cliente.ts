import { Router } from 'express';
import { deleteCliente, getCliente, getClientes, postCliente, updateCliente } from '../controllers/cliente';


const routerCliente = Router();

routerCliente.get('/', getClientes);
routerCliente.get('/:id', getCliente);
routerCliente.delete('/:id', deleteCliente);
routerCliente.post('/', postCliente);
routerCliente.put('/:id', updateCliente);

export default routerCliente;