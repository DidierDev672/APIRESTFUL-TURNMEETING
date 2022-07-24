import { Turn } from "../models/turn";
import { User } from "../models/user";

class TurnRepo {
    constructor(){ }

    getAllTurns(options:any){
        return Turn.findAll(options)
    }

    getByuid(turnuid:string){
        return Turn.findByPk(turnuid, {
            include:[
                {
                    model: User,
                    as: 'users'
                },
            ],
        });
    }
}

export default new TurnRepo();