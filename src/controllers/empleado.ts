import { Request, Response } from 'express';
import Empleado from '../models/empleado';

export const getEmpleados = async (req: Request, res: Response) => {
    try {
        const listEmpleados = await Empleado.findAll();
        res.json(listEmpleados);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getEmpleado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);

    if(empleado) {
        res.json(empleado)
    } else {
        res.status(404).json({msg: `No existe el empleado con la id: ${id}`})
    }
}


export const deleteEmpleado = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findByPk(id);

        if (!empleado) {
            return res.status(404).json({ msg: `No existe el empleado con la id: ${id}` });
        }

        await empleado.destroy();
        res.json({ msg: 'El empleado fue eliminado con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al eliminar el empleado' });
    }
};



export const postEmpleado = async (req: Request, res: Response) => {
    const { body } = req;
    const { cor_Elec } = req.body;

    const email = await Empleado.findOne({where: {cor_Elec: cor_Elec}})
    if (email) {
        return res.status(400).json ({
            msg: 'El email ya esta registrado en la base de datos'
        });
    }

    try {
        await Empleado.create(body);

        res.json({
            msg: 'El empleado fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updateEmpleado = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);
    try {
        if(empleado) {
            await empleado.update(body);
            res.json({
                msg: 'El empleado fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe el empleado con la id: ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }

}

export const updateEstadoEmpleado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { edo_Emp } = req.body;

    try {
        const empleado = await Empleado.findByPk(id);

        if (!empleado) {
            return res.status(404).json({
                msg: `No existe el empleado con la id: ${id}`
            });
        }

        await empleado.update({ edo_Emp: edo_Emp });

        res.json({
            msg: 'El estado del empleado ha sido actualizado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar el estado del empleado'
        });
    }
};

export const updateSituacionEmp = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { sit_Emp } = req.body;

    try {
        const empleado = await Empleado.findByPk(id);

        if (!empleado) {
            return res.status(404).json({
                msg: `No existe el empleado con la id: ${id}`
            });
        }

        await empleado.update({ sit_Emp: sit_Emp });

        res.json({
            msg: 'El estado del empleado ha sido actualizado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar el estado del empleado'
        });
    }
};