import { Router } from 'express';
import { deleteContacto, getContacto, getContactos, postContacto, updateContacto } from '../controllers/contacto';


const routerContacto = Router();

routerContacto.get('/', getContactos);
routerContacto.get('/:id', getContacto);
routerContacto.delete('/:id', deleteContacto);
routerContacto.post('/', postContacto);
routerContacto.put('/:id', updateContacto);

export default routerContacto;