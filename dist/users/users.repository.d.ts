import { User } from './user.interface';
export declare class UserRepository {
    private users;
    findAll(): User[];
    findById(id: string): User | null;
    create(user: User): User;
    update(id: string, updatedData: Partial<User>): User | null;
    delete(id: string): boolean;
}
