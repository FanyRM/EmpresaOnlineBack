import { DataTypes } from 'sequelize';
import db from '../db/connection';

const CategoriaProducto = db.define('CategoriaProducto', {
    id_Categoria: {
        type: DataTypes.INTEGER
    },
    id_Producto: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default CategoriaProducto;