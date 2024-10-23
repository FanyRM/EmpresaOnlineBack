import db from '../db/connection';
import{DataTypes} from 'sequelize'

const Venta = db.define('Venta', {
    tot_vent: {
        type: DataTypes.DOUBLE
    },
    fec_vent: {
        type: DataTypes.DATE
    },
    tip_pago: {
        type: DataTypes.STRING
    },
    id_Corte: {
        type: DataTypes.INTEGER
    },
    id_Descuento: {
        type: DataTypes.INTEGER
    }
},
{
    createdAt:false,
    updatedAt:false
});

export default Venta;
