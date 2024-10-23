import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empleado = db.define('Empleado', {
    nom_Emp : {
        type: DataTypes.STRING
    },
    ape_Pat_Emp : {
        type: DataTypes.STRING
    },
    ape_Mat_Emp : {
        type: DataTypes.STRING
    },
    nss_Emp : {
        type: DataTypes.STRING
    },
    cor_Elec : {
        type: DataTypes.STRING
    },
    fec_Nac: {
        type: DataTypes.DATE
    },
    fec_Alta : {
        type: DataTypes.DATE
    },
    edo_Emp : {
        type: DataTypes.STRING
    },
    sit_Emp : {
        type: DataTypes.BOOLEAN
    },
    id_Puesto : {
        type: DataTypes.INTEGER
    },
    id_Sucursal : {
        type: DataTypes.INTEGER
    },
    id_Rol : {
        type: DataTypes.INTEGER
    },
    id_Usuario : {
        type: DataTypes.INTEGER
    },
}, {
    createdAt: false,
    updatedAt: false,
});

export default Empleado;