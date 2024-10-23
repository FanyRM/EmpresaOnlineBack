import { Request, Response } from 'express';
import Cliente from '../models/cliente';

export const getClientes = async (req: Request, res: Response) => {
    try {
        const listClientes = await Cliente.findAll();
        res.json(listClientes);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la informacion'
        })
    }
    
}

export const getCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);

    if(cliente) {
        res.json(cliente)
    } else {
        res.status(404).json({msg: `No existe el cliente con la id: ${id}`})
    }
}


export const deleteCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ msg: `No existe el cliente con la id: ${id}` });
        }

        await cliente.destroy();
        res.json({ msg: 'El cliente fue eliminado con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al eliminar el cliente' });
    }
};



export const postCliente = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Cliente.create(body);

        res.json({
            msg: 'El empleado fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }
}

export const updateCliente = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    try {
        if(cliente) {
            await cliente.update(body);
            res.json({
                msg: 'El cliente fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe el cliente con la id: ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: `Upps, ocurrio un error`
        })
    }

}