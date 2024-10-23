import { Router } from 'express';
import { getUsuariosClientes, getUsuarioCliente, postUsuarioCliente, updateUsuarioCliente, deleteUsuarioCliente } from '../controllers/usuario_cliente';

const routerUsuarioCliente = Router();

routerUsuarioCliente.get('/', getUsuariosClientes);
routerUsuarioCliente.get('/:id', getUsuarioCliente);
routerUsuarioCliente.post('/', postUsuarioCliente);
routerUsuarioCliente.put('/:id', updateUsuarioCliente);
routerUsuarioCliente.delete('/:id', deleteUsuarioCliente);

export default routerUsuarioCliente;