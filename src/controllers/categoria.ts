import { Request, Response } from 'express';
import Categoria from '../models/categoria';

export const getCategorias = async (req: Request, res: Response) => {
    try {
        const listCategorias = await Categoria.findAll();
        res.json(listCategorias);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getCategoria = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ msg: `No existe la categoría con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const postCategoria = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Categoria.create(body);
        res.json({
            msg: 'Fue agregado con éxito'
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps, ocurrió un error'
        });
    }
};

export const deleteCategoria = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            res.status(404).json({ msg: `No existe la categoría con la id: ${id}` });
        } else {
            await categoria.destroy();
            res.json({
                msg: 'Fue eliminado con éxito'
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al eliminar la información, consulte con su administrador'
        });
    }
};

export const updateCategoria = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    try {
        if (categoria) {
            await categoria.update(body);
            res.json({
                msg: 'Fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe la categoría con la id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps, ocurrió un error'
        });
    }
};
