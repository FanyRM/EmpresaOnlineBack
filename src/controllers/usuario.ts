import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const nuevoUsuario = async (req: Request, res: Response) => {
    try {
        const {cor_Elec, nom_Usu, cont_Usu} = req.body;
        const hashedPass = await bcrypt.hash(cont_Usu, 10);

        //Validar existencia del correo en base de datos
        const usuario = await Usuario.findOne({where: {cor_Elec: cor_Elec}})
        if (usuario) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el correo ${cor_Elec}`
            })
        }

        //Guarda usuario en la base de datos
        await Usuario.create({
            cor_Elec: cor_Elec, 
            nom_Usu: nom_Usu, 
            cont_Usu: hashedPass
        }) 
        res.json ({
            msg: `Usuario ${nom_Usu} creado  exitosamente`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error',
            error
        })
    }

}

export const loginUserWC = async (req: Request, res: Response) => {
    try {
        const { cor_Elec, cont_Usu } = req.body;

        //Validamos que el usuario si existe
        const usuario: any = await Usuario.findOne({where: {cor_Elec: cor_Elec}})
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe un usuario con el correo ${cor_Elec}`
            })
        }
        //Validamos password
        const passValida = await bcrypt.compare(cont_Usu, usuario.cont_Usu)
        if(!passValida) { 
            return res.status(400).json({
                msg: 'La contraseña no es correcta, vuelva a intentarlo'
            })
        }

        //Generar token
        const token = jwt.sign({
            nom_Usu: usuario
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