"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const role_enum_1 = require("../common/enums/role.enum");
const crypto_1 = require("crypto");
let UserRepository = class UserRepository {
    users = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Admin User',
            email: 'admin@univ.edu',
            role: role_enum_1.Role.ADMIN,
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Dr. Rao',
            email: 'rao@univ.edu',
            role: role_enum_1.Role.FACULTY,
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Amit Sharma',
            email: 'amit@univ.edu',
            role: role_enum_1.Role.STUDENT,
        },
    ];
    findAll() {
        return this.users;
    }
    findById(id) {
        return this.users.find(user => user.id === id) || null;
    }
    create(user) {
        this.users.push(user);
        return user;
    }
    update(id, updatedData) {
        const user = this.findById(id);
        if (!user)
            return null;
        Object.assign(user, updatedData);
        return user;
    }
    delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return false;
        this.users.splice(index, 1);
        return true;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)()
], UserRepository);
//# sourceMappingURL=users.repository.js.map