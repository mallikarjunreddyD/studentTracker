"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll(role) {
        const users = this.userRepository.findAll();
        if (role) {
            return users.filter(user => user.role === role);
        }
        return users;
    }
    findOne(id) {
        return this.userRepository.findById(id);
    }
    create(createUserDTO) {
        const newUser = {
            id: (0, crypto_1.randomUUID)(),
            name: createUserDTO.name,
            email: createUserDTO.email,
            role: createUserDTO.role,
        };
        return this.userRepository.create(newUser);
    }
    update(updateUserDTO, id) {
        return this.userRepository.update(id, updateUserDTO);
    }
    remove(id) {
        return this.userRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map