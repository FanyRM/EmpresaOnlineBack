import { Request, Response } from 'express';
import Contacto from '../models/contacto';

export const getContactos = async (req: Request, res: Response) => {
    try {
        const listContactos = await Contacto.findAll();
        res.json(listContactos);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const contacto = await Contacto.findByPk(id);
        if (contacto) {
            res.json(contacto);
        } else {
            res.status(404).json({ msg: `No existe el contacto con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const postContacto = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const contacto = await Contacto.create(body);
        res.json({
            msg: 'Contacto agregado con éxito',
            contacto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar agregar el contacto'
        });
    }
};

export const deleteContacto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const contacto = await Contacto.findByPk(id);
        if (!contacto) {
            res.status(404).json({ msg: `No existe el contacto con la id: ${id}` });
        } else {
            await contacto.destroy();
            res.json({
                msg: 'Contacto eliminado con éxito'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al intentar eliminar el contacto, consulte con su administrador'
        });
    }
};

export const updateContacto = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const contacto = await Contacto.findByPk(id);
        if (contacto) {
            await contacto.update(body);
            res.json({
                msg: 'Contacto actualizado con éxito'
            });
        } else {
            res.status(404).json({
                msg: `No existe el contacto con la id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Upps, ocurrió un error al intentar actualizar el contacto'
        });
    }
};