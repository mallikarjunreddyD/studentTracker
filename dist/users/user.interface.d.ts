import { Role } from 'src/common/enums/role.enum';
export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}
