import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): import("./users.repository").User[];
    findOne(id: string): import("./users.repository").User | null;
    create(createUserDTO: CreateUserDTO): import("./users.repository").User;
    update(id: string, updateUserDTO: UpdateUserDTO): import("./users.repository").User | null;
    remove(id: string): void;
}
