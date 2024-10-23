import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Contacto = db.define('Contacto', {
    num_Cto: {
        type: DataTypes.STRING
    },
    cor_Elec_Cto: {
        type: DataTypes.STRING
    },
    nom_Cto: {
        type: DataTypes.STRING
    },
    id_Proveedor: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Contacto;