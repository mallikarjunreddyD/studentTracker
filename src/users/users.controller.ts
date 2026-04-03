import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {UsersService} from './users.service'
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-user.dto';

@Controller('users')
export class UsersController {

constructor (private userService: UsersService) {}

// GET    /users
@Get()
findAll() {
    return this.userService.findAll();
}
// GET    /users/:id
@Get(':id')
findOne(@Param('id') id:string) {
    return this.userService.findOne(id);
}

// POST   /users
@Post()
create(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.create(createUserDTO);
}

@Put(':id')
update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
    return this.userService.update(updateUserDTO, id)
}
@Delete(':id')
remove(@Param('id') id: string){
    this.userService.remove(id)
}

}
