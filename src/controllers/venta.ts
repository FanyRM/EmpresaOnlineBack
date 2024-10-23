import { Request, Response } from 'express';
import Venta from '../models/venta';

export const getVentas = async (req: Request, res: Response) => {
    try {
        const listVentas = await Venta.findAll();
        res.json(listVentas);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getVenta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const venta = await Venta.findByPk(id);
        if (venta) {
            res.json(venta);
        } else {
            res.status(404).json({ msg: `No existe la venta con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const deleteVenta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const venta = await Venta.findByPk(id);
        if (!venta) {
            res.status(404).json({ msg: `No existe la venta con la id: ${id}` });
        } else {
            await venta.destroy();
            res.json({ msg: 'Venta eliminada con éxito' });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar la venta, consulte con su administrador' });
    }
};

export const postVenta = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Venta.create(body);
        res.json({ msg: 'Venta agregada con éxito' });
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar la venta' });
    }
};

export const updateVenta = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const venta = await Venta.findByPk(id);
    try {
        if (venta) {
            await venta.update(body);
            res.json({ msg: 'Venta actualizada con éxito' });
        } else {
            res.status(404).json({ msg: `No existe la venta con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar la venta' });
    }
};