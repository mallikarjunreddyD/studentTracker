import { Injectable } from '@nestjs/common';
import { Role } from 'src/common/enums/role.enum';
import { randomUUID } from 'crypto';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

@Injectable()
export class UserRepository {
  private users: User[] = [
    {
      id: randomUUID(),
      name: 'Admin User',
      email: 'admin@univ.edu',
      role: Role.ADMIN,
    },
    {
      id: randomUUID(),
      name: 'Dr. Rao',
      email: 'rao@univ.edu',
      role: Role.FACULTY,
    },
    {
      id: randomUUID(),
      name: 'Amit Sharma',
      email: 'amit@univ.edu',
      role: Role.STUDENT,
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User | null {
    return this.users.find(user => user.id === id) || null;
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  update(id: string, updatedData: Partial<User>): User | null {
    const user = this.findById(id);
    if (!user) return null;

    Object.assign(user, updatedData);
    return user;
  }

  delete(id: string): boolean {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}