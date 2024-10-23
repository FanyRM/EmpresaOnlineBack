import { Request, Response } from 'express';
import Proveedor from '../models/proveedor';

export const getProveedores = async (req: Request, res: Response) => {
    try {
        const listProveedores = await Proveedor.findAll();
        res.json(listProveedores);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getProveedor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const proveedor = await Proveedor.findByPk(id);
        if (proveedor) {
            res.json(proveedor);
        } else {
            res.status(404).json({ msg: `No existe el proveedor con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const deleteProveedor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const proveedor = await Proveedor.findByPk(id);
        if (!proveedor) {
            res.status(404).json({ msg: `No existe el proveedor con la id: ${id}` });
        } else {
            await proveedor.destroy();
            res.json({ msg: 'Proveedor eliminado con éxito' });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el proveedor, consulte con su administrador' });
    }
};

export const postProveedor = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Proveedor.create(body);
        res.json({ msg: 'Proveedor agregado con éxito' });
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar el proveedor' });
    }
};

export const updateProveedor = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const proveedor = await Proveedor.findByPk(id);
    try {
        if (proveedor) {
            await proveedor.update(body);
            res.json({ msg: 'Proveedor actualizado con éxito' });
        } else {
            res.status(404).json({ msg: `No existe el proveedor con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar el proveedor' });
    }
};
