import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cliente = db.define('Cliente', {
    nom_Client: {
        type: DataTypes.STRING
    },
    ape_Mat_Clie: {
        type: DataTypes.STRING
    },
    ape_Pat_Clie: {
        type: DataTypes.STRING
    },
    fec_Nac: {
        type: DataTypes.DATE
    },
    id_UsuarioCliente: {
        type: DataTypes.INTEGER
    },
    id_Rol: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false,
});

export default Cliente;