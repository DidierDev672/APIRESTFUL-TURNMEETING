"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("../db/db");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    uid: { type: sequelize_1.DataTypes.STRING },
    name_full: { type: sequelize_1.DataTypes.STRING },
    phone: { type: sequelize_1.DataTypes.STRING },
    email: { type: sequelize_1.DataTypes.STRING },
    pwd: { type: sequelize_1.DataTypes.STRING }
}, {
    sequelize: db_1.sequelize,
    tableName: 'User'
});
//# sourceMappingURL=user.js.map