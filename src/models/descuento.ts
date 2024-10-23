import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Descuento = db.define('Descuento', {
    cant_Dscu: {
        type: DataTypes.DOUBLE
    },
    nom_Dscu: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Descuento;