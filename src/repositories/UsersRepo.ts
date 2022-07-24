import { User } from "../models/user";

class UserRepo {
    constructor() {}

    getAllUsers(options:any){
        return User.findAll(options);
    }

    getUserByuid(uid:string){
        return User.findByPk(uid);
    }

    getUserByTurn(uid:string){
        return User.findAll({ where: {uid: uid} });
    }

    createUser(props: any){
        return User.create(props);
    }

    updateUser(uid: string, props:any){
        return User.update(props, { where: { uid:uid.toString() } });
    }

    deleteUser(uid:string){
        return User.destroy({ where: { uid: uid.toString() } });
    }
}

export default new UserRepo();