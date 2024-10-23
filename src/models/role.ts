import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Role = db.define('Role', {
    nom_Rol: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    
});

export default Role;