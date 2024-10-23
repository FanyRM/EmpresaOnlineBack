import { Request, Response } from 'express';
import UsuariosCliente from '../models/usuario_cliente';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const getUsuariosClientes = async (req: Request, res: Response) => {
    try {
        const listUsuariosClientes = await UsuariosCliente.findAll();
        res.json(listUsuariosClientes);
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const getUsuarioCliente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const usuarioCliente = await UsuariosCliente.findByPk(id);
        if (usuarioCliente) {
            res.json(usuarioCliente);
        } else {
            res.status(404).json({ msg: `No existe el usuario cliente con la id: ${id}` });
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al traer la información, consulte con su administrador'
        });
    }
};

export const deleteUsuarioCliente = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const usuarioCliente = await UsuariosCliente.findByPk(id);
        if (!usuarioCliente) {
            res.status(404).json({ msg: `No existe el usuario cliente con la id: ${id}` });
        } else {
            await usuarioCliente.destroy();
            res.json({ msg: 'Usuario cliente eliminado con éxito' });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Error al eliminar el usuario cliente, consulte con su administrador' });
    }
};


export const nuevoUsuarioC = async (req: Request, res: Response) => {
    try {
        const {cor_Elec, nom_UsuC, cont_UsuC} = req.body;
        const hashedPass = await bcrypt.hash(cont_UsuC, 10);

        //Validar existencia del correo en base de datos
        const usuario = await UsuariosCliente.findOne({where: {cor_Elec: cor_Elec}})
        if (usuario) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el correo ${cor_Elec}`
            })
        }

        //Guarda usuario en la base de datos
        await UsuariosCliente.create({
            cor_Elec: cor_Elec, 
            nom_UsuC: nom_UsuC, 
            cont_UsuC: hashedPass
        }) 
        res.json ({
            msg: `Usuario ${nom_UsuC} creado  exitosamente`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error',
            error
        })
    }

}

export const loginUserC = async (req: Request, res: Response) => {
    try {
        const { cor_Elec, cont_UsuC } = req.body;

        //Validamos que el usuario si existe
        const usuario: any = await UsuariosCliente.findOne({where: {cor_Elec: cor_Elec}})
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con el correo ${cor_Elec}`
            })
        }
        //Validamos password
        const passValida = await bcrypt.compare(cont_UsuC, usuario.cont_UsuC)
        if(!passValida) { 
            return res.status(400).json({
                msg: 'La contraseña no es correcta, vuelva a intentarlo'
            })
        }

        //Generar token
        const token = jwt.sign({
            nom_UsuC: usuario
        }, process.env.SECRET_KEY || 'somosUN@5Chic@51ind@$')

        return res.json({
            id: usuario.get('id'),
            nom_Usu: usuario.get('nom_Usu'),
            token
        });
        
    } catch (error) {
        res.status(400).json({
            msg: 'Acaba de suceder un error, consultar a su administrador'
        })
    }
}
