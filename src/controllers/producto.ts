import { Request, Response } from 'express';
import Producto from '../models/producto';

export const getProductos = async (req: Request, res: Response) => {
    try {
        const listProductos = await Producto.findAll();
        res.json(listProductos);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ msg: `No existe el producto con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const deleteProducto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        if (!producto) {
            res.status(404).json({ msg: `No existe el producto con la id: ${id}` });
        } else {
            await producto.destroy();
            res.json({ msg: 'Producto eliminado con éxito' });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el producto, consulte con su administrador' });
    }
};

export const postProducto = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Producto.create(body);
        res.json({ msg: 'Producto agregado con éxito' });
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar el producto' });
    }
};

export const updateProducto = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    try {
        if (producto) {
            await producto.update(body);
            res.json({ msg: 'Producto actualizado con éxito' });
        } else {
            res.status(404).json({ msg: `No existe el producto con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar el producto' });
    }
};