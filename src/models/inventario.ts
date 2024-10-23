import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Inventario = db.define('Inventario', {
    exis_Prod: {
        type: DataTypes.INTEGER
    },
    id_Producto: {
        type: DataTypes.INTEGER
    },
    id_Almacen: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Inventario;