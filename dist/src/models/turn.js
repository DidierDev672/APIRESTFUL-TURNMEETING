"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("./../db/db");
const user_1 = require("./user");
class Turn extends sequelize_1.Model {
}
exports.Turn = Turn;
Turn.init({
    uid: { type: sequelize_1.DataTypes.STRING },
    n_turn: { type: sequelize_1.DataTypes.NUMBER },
    letter_turn: { type: sequelize_1.DataTypes.STRING },
    code_turn: { type: sequelize_1.DataTypes.STRING },
    status_turn: { type: sequelize_1.DataTypes.STRING }
}, {
    sequelize: db_1.sequelize,
    tableName: 'Course'
});
Turn.hasMany(user_1.User, { foreignKey: 'turnuid', as: 'users' });
user_1.User.belongsTo(Turn, { foreignKey: 'turnuid', as: 'turns' });
//# sourceMappingURL=turn.js.map