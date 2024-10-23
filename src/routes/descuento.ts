import { Router } from 'express';
import { deleteDescuento, getDescuento, getDescuentos, postDescuento, updateDescuento } from '../controllers/descuento';

const routerDescuento = Router();

routerDescuento.get('/', getDescuentos);
routerDescuento.get('/:id', getDescuento);
routerDescuento.delete('/:id', deleteDescuento);
routerDescuento.post('/', postDescuento);
routerDescuento.put('/:id', updateDescuento);

export default routerDescuento;