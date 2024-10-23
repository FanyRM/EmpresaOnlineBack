import db from '../db/connection';
import{DataTypes} from 'sequelize'
const Usuario = db.define('Usuario', {
    cor_Elec: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nom_Usu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cont_Usu: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    createdAt:false,
    updatedAt:false
});

export default Usuario;