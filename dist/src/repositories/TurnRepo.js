"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const turn_1 = require("../models/turn");
const user_1 = require("../models/user");
class TurnRepo {
    constructor() { }
    getAllTurns(options) {
        return turn_1.Turn.findAll(options);
    }
    getByuid(turnuid) {
        return turn_1.Turn.findByPk(turnuid, {
            include: [
                {
                    model: user_1.User,
                    as: 'users'
                },
            ],
        });
    }
}
exports.default = new TurnRepo();
//# sourceMappingURL=TurnRepo.js.map