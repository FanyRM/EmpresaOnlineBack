import { Request, Response } from 'express';
import CategoriaProducto from '../models/categoria_producto';

export const getCategoriaProductos = async (req: Request, res: Response) => {
    try {
        const listCategoriaProductos = await CategoriaProducto.findAll();
        res.json(listCategoriaProductos);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getCategoriaProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const categoriaProducto = await CategoriaProducto.findByPk(id);
        if (categoriaProducto) {
            res.json(categoriaProducto);
        } else {
            res.status(404).json({ msg: `No existe la categoría-producto con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const postCategoriaProducto = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await CategoriaProducto.create(body);
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

export const deleteCategoriaProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const categoriaProducto = await CategoriaProducto.findByPk(id);
        if (!categoriaProducto) {
            res.status(404).json({ msg: `No existe la categoría-producto con la id: ${id}` });
        } else {
            await categoriaProducto.destroy();
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

export const updateCategoriaProducto = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const categoriaProducto = await CategoriaProducto.findByPk(id);
    try {
        if (categoriaProducto) {
            await categoriaProducto.update(body);
            res.json({
                msg: 'Fue actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe la categoría-producto con la id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps, ocurrió un error'
        });
    }
};
