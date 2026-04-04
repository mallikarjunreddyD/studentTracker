import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): import("./user.interface").User[];
    findOne(id: string): import("./user.interface").User | null;
    create(createUserDTO: CreateUserDTO): import("./user.interface").User;
    update(id: string, updateUserDTO: UpdateUserDTO): import("./user.interface").User | null;
    remove(id: string): void;
}
