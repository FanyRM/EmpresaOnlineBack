import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Proveedore = db.define('Proveedore', {
    nom_Prov: {
        type: DataTypes.STRING
    },
    des_Prov: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Proveedore;