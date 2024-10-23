import { Request, Response } from 'express';
import Descuento from '../models/descuento';

export const getDescuentos = async (req: Request, res: Response) => {
    try {
        const listDescuentos = await Descuento.findAll();
        res.json(listDescuentos);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getDescuento = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const descuento = await Descuento.findByPk(id);
        if (descuento) {
            res.json(descuento);
        } else {
            res.status(404).json({ msg: `No existe el descuento con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const postDescuento = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const descuento = await Descuento.create(body);
        res.json({
            msg: 'Descuento agregado con éxito',
            descuento
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar agregar el descuento'
        });
    }
};

export const deleteDescuento = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const descuento = await Descuento.findByPk(id);
        if (!descuento) {
            res.status(404).json({ msg: `No existe el descuento con la id: ${id}` });
        } else {
            await descuento.destroy();
            res.json({
                msg: 'Descuento eliminado con éxito'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al intentar eliminar el descuento, consulte con su administrador'
        });
    }
};

export const updateDescuento = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const descuento = await Descuento.findByPk(id);
        if (descuento) {
            await descuento.update(body);
            res.json({
                msg: 'Descuento actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe el descuento con la id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar actualizar el descuento'
        });
    }
};