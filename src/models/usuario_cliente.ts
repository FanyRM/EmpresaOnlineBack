import { DataTypes } from 'sequelize';
import db from '../db/connection';

const UsuariosCliente = db.define('UsuariosCliente', {
    cor_Elec: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nom_UsuC: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cont_UsuC: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default UsuariosCliente;