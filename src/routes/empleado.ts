import { Router } from 'express';
import { deleteEmpleado, getEmpleado, getEmpleados, postEmpleado, updateEmpleado, updateEstadoEmpleado, updateSituacionEmp } from '../controllers/empleado';


const routerEmpleado = Router();

routerEmpleado.get('/', getEmpleados);
routerEmpleado.get('/:id', getEmpleado);
routerEmpleado.delete('/:id', deleteEmpleado);
routerEmpleado.post('/', postEmpleado);
routerEmpleado.put('/:id', updateEmpleado);
routerEmpleado.put('/:id/estado', updateEstadoEmpleado);
routerEmpleado.put('/:id/situacion',updateSituacionEmp)

export default routerEmpleado;