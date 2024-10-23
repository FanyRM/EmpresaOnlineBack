import { Request, Response } from 'express';
import Rol from '../models/role';


export const getRoles = async (req: Request, res: Response) => {
    try {
        const listRoles = await Rol.findAll();
        res.json(listRoles);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error en el get'
        })
    }
    
}

export const getRol = async (req: Request, res: Response) => {
    const { id } = req.params;
    const rol = await Rol.findByPk(id);

    if(rol) {
        res.json(rol)
    } else {
        res.status(404).json({msg: `No existe la sucursal con la id: ${id}`})
    }
}


export const deleteRol = async (req: Request, res: Response) => {
    const { id } = req.params;
    const rol = await Rol.findByPk(id);

    if(!rol) {
        res.status(404).json({msg: `No existe el rol con la id: ${id}`})
    } else {
        await rol.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito'
        })
    }
}


export const postRol = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Rol.create(body);

        res.json({
            msg: 'El rol fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updateRol = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const rol = await Rol.findByPk(id);
    try {
        if(rol) {
            await rol.update(body);
            res.json({
                msg: 'El rol fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe la rol con la id: ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }

}