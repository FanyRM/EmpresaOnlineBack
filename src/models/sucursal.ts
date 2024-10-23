import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Sucursale = db.define('Sucursale', {
    nom_Suc: {
        type: DataTypes.STRING,
    },
    loc_Suc: {
        type: DataTypes.STRING,
    },
    des_Suc: {
        type: DataTypes.TEXT,
    },
    img_Suc: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
});

export default Sucursale;