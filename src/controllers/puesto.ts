import { Request, Response } from 'express';
import Puesto from '../models/puesto'

export const getPuestos = async (req: Request, res: Response) => {
    try {
        const listPuestos = await Puesto.findAll();
        res.json(listPuestos);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        })
    }
}

export const getPuesto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const puesto = await Puesto.findByPk(id);
        if(puesto) {
            res.json(puesto)
        } else {
            res.status(404).json({msg: `No existe el puesto con la id: ${id}`})
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        })
    }
}


export const deletePuesto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const puesto = await Puesto.findByPk(id);
        if(!puesto) {
            res.status(404).json({msg: `No existe el puesto con la id: ${id}`})
        } else {
            await puesto.destroy();
            res.json({
                msg: 'Fue eliminado con exito'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        })
    } 
}


export const postPuesto = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Puesto.create(body);
        res.json({
            msg: 'Fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updatePuesto = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const puesto = await Puesto.findByPk(id);
    try {
        if(puesto) {
            await puesto.update(body);
            res.json({
                msg: 'Fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe el puesto con la id: ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}