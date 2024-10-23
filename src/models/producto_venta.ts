import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ProductosVenta = db.define('ProductosVenta', {
    cant_Prod: {
        type: DataTypes.INTEGER
    },
    tot_Prod: {
        type: DataTypes.DOUBLE
    },
    id_Producto: {
        type: DataTypes.INTEGER
    },
    id_Venta: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default ProductosVenta;