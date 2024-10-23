import { Router } from 'express';
import { getPuestos, getPuesto, postPuesto, updatePuesto, deletePuesto } from '../controllers/puesto';

const routerPuesto = Router();

routerPuesto.get('/', getPuestos);
routerPuesto.get('/:id', getPuesto);
routerPuesto.post('/', postPuesto);
routerPuesto.put('/:id', updatePuesto);
routerPuesto.delete('/:id', deletePuesto);

export default routerPuesto;