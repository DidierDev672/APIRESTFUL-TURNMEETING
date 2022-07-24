import { sequelize } from "../db/db";
import { Model, DataTypes } from "sequelize";

export class User extends Model {
    public uid!: string;
    public name_full!: string;
    public phone!: string;
    public email!: string;
    public pwd!: string;
}

User.init(
    {
        uid: { type: DataTypes.STRING },
        name_full: { type: DataTypes.STRING },
        phone: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        pwd: { type: DataTypes.STRING }
    },
    {
        sequelize,
        tableName: 'User'
    }
);

