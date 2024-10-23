import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Categoria = db.define('Categoria', {
    nom_Cate: {
        type: DataTypes.STRING
    },
    des_Cate: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Categoria;