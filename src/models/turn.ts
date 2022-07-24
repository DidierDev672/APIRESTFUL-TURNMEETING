import { Model, DataTypes } from "sequelize";
import { sequelize } from "./../db/db";
import { User } from "./user";

export class Turn extends Model {
    public uid!: string;
    public n_turn!: number;
    public letter_turn!: string;
    public code_turn!: string;
    public status_turn!: string;
}

Turn.init(
    {
        uid: { type: DataTypes.STRING },
        n_turn: { type: DataTypes.NUMBER },
        letter_turn: { type: DataTypes.STRING },
        code_turn: { type: DataTypes.STRING },
        status_turn: { type: DataTypes.STRING }
    },
    {
        sequelize,
        tableName: 'Course'
    }
);

Turn.hasMany(User, { foreignKey: 'turnuid', as: 'users' });
User.belongsTo(Turn, {foreignKey: 'turnuid', as: 'turns'});