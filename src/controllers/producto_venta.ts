import { Request, Response } from 'express';
import ProductosVenta from '../models/producto_venta';

export const getProductosVentas = async (req: Request, res: Response) => {
    try {
        const listProductosVentas = await ProductosVenta.findAll();
        res.json(listProductosVentas);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getProductoVenta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const productoVenta = await ProductosVenta.findByPk(id);
        if (productoVenta) {
            res.json(productoVenta);
        } else {
            res.status(404).json({ msg: `No existe el producto de venta con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const deleteProductoVenta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const productoVenta = await ProductosVenta.findByPk(id);
        if (!productoVenta) {
            res.status(404).json({ msg: `No existe el producto de venta con la id: ${id}` });
        } else {
            await productoVenta.destroy();
            res.json({ msg: 'Producto de venta eliminado con éxito' });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el producto de venta, consulte con su administrador' });
    }
};

export const postProductoVenta = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await ProductosVenta.create(body);
        res.json({ msg: 'Producto de venta agregado con éxito' });
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al agregar el producto de venta' });
    }
};

export const updateProductoVenta = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const productoVenta = await ProductosVenta.findByPk(id);
    try {
        if (productoVenta) {
            await productoVenta.update(body);
            res.json({ msg: 'Producto de venta actualizado con éxito' });
        } else {
            res.status(404).json({ msg: `No existe el producto de venta con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al actualizar el producto de venta' });
    }
};