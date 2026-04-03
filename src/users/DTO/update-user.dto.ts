import {Role} from "../../common/enums/role.enum"

export class UpdateUserDTO {
    name: string;
    email:string;
    role: Role
}