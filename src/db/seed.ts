import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({path: path.join(__dirname + "../../.env")});

import { Turn } from "../models/turn";
import { User } from "../models/user";

Turn.sync({ force: true })
    .then(() => User.sync({ force: true }))
    .then(() => console.log('Database cleaned'))
    .then(() => {
        console.log('################ seeding completed ##############################');
    })
    .catch(console.error)