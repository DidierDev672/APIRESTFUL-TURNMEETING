"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class UserRepo {
    constructor() { }
    getAllUsers(options) {
        return user_1.User.findAll(options);
    }
    getUserByuid(uid) {
        return user_1.User.findByPk(uid);
    }
    getUserByTurn(uid) {
        return user_1.User.findAll({ where: { uid: uid } });
    }
    createUser(props) {
        return user_1.User.create(props);
    }
    updateUser(uid, props) {
        return user_1.User.update(props, { where: { uid: uid.toString() } });
    }
    deleteUser(uid) {
        return user_1.User.destroy({ where: { uid: uid.toString() } });
    }
}
exports.default = new UserRepo();
//# sourceMappingURL=UsersRepo.js.map