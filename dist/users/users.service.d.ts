import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';
import { UserRepository } from './users.repository';
import { User } from './user.interface';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findAll(role?: string): User[];
    findOne(id: string): User | null;
    create(createUserDTO: CreateUserDTO): User;
    update(updateUserDTO: UpdateUserDTO, id: string): User | null;
    remove(id: string): boolean;
}
