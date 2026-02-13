import { Controller, Post,Get,Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create_user.dto';
import { ApiOperation ,ApiResponse, ApiTags} from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('USERS')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiOperation({summary:'Creating user'})
    @ApiResponse({status:200,type:User})
    @Post()
    createUser(@Body() userDto: CreateUserDto){
        return this.usersService.createUsers(userDto);
    }

    @ApiOperation({summary:'Get all users'})
    @ApiResponse({status:200,type:[User]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAllUsers(){
        return this.usersService.getUsers();
    }

}
