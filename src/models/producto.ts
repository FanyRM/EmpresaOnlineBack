import db from '../db/connection';
import{DataTypes} from 'sequelize'
const Producto = db.define('Producto', {
    prci_Prod : {
        type: DataTypes.DOUBLE
    },
    nom_Prod: {
        type: DataTypes.STRING
    },
    des_Prod: {
        type: DataTypes.STRING
    },
    edo_Prod : {
        type: DataTypes.STRING
    },
    img_Prod: {
        type: DataTypes.STRING
    },
    id_Descuento: {
        type: DataTypes.INTEGER
    },
    
},
{
    createdAt:false,
    updatedAt:false
});

export default Producto;
