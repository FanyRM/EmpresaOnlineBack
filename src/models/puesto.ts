import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Puesto = db.define('Puesto', {
    nom_Psto: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Puesto;