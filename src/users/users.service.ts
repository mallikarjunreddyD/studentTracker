import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';
import { UserRepository, User } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll(role?: string): User[] {
    const users = this.userRepository.findAll();

    if (role) {
      return users.filter(user => user.role === role);
    }

    return users;
  }

  findOne(id: string): User | null {
    return this.userRepository.findById(id);
  }

  create(createUserDTO: CreateUserDTO): User {
    const newUser: User = {
      id: randomUUID(),
      name: createUserDTO.name,
      email: createUserDTO.email,
      role: createUserDTO.role,
    };

    return this.userRepository.create(newUser);
  }

  update(updateUserDTO: UpdateUserDTO, id: string): User | null {
    return this.userRepository.update(id, updateUserDTO);
  }

  remove(id: string): boolean {
    return this.userRepository.delete(id);
  }
}