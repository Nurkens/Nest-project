import { Controller, Post,Get,Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create_user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() userDto: CreateUserDto){
        return this.usersService.createUsers(userDto);
    }
    
    @Get()
        getAllUsers(){
            return this.usersService.getUsers();
        }
    
}
