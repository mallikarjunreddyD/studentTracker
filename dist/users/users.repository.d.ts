import { Role } from 'src/common/enums/role.enum';
export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}
export declare class UserRepository {
    private users;
    findAll(): User[];
    findById(id: string): User | null;
    create(user: User): User;
    update(id: string, updatedData: Partial<User>): User | null;
    delete(id: string): boolean;
}
