import { Request, Response } from 'express';
import Inventario from '../models/inventario';

export const getInventarios = async (req: Request, res: Response) => {
    try {
        const listInventarios = await Inventario.findAll();
        res.json(listInventarios);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getInventario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const inventario = await Inventario.findByPk(id);
        if (inventario) {
            res.json(inventario);
        } else {
            res.status(404).json({ msg: `No existe el inventario con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const deleteInventario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const inventario = await Inventario.findByPk(id);
        if (!inventario) {
            res.status(404).json({ msg: `No existe el inventario con la id: ${id}` });
        } else {
            await inventario.destroy();
            res.json({ msg: 'Inventario eliminado con éxito' });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el inventario, consulte con su administrador' });
    }
};

export const postInventario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Inventario.create(body);
        res.json({ msg: 'Inventario agregado con éxito' });
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar el inventario' });
    }
};

export const updateInventario = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const inventario = await Inventario.findByPk(id);
    try {
        if (inventario) {
            await inventario.update(body);
            res.json({ msg: 'Inventario actualizado con éxito' });
        } else {
            res.status(404).json({ msg: `No existe el inventario con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar el inventario' });
    }
};