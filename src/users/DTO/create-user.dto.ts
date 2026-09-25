import { isString } from "util";
import {Role} from "../../common/enums/role.enum"

export class CreateUserDTO {
    
    name: string;
    email:string;
    role: Role
}