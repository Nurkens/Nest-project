import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User){

    }

    async createUsers(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getUsers(){
        const users = await this.userRepository.findAll();
        return users;
    }

    async getUserById(id: number){
        const user = await this.userRepository.findByPk(id);
        return user;
    }

    async deleteUser(id:number){
        const deletedRow = await this.userRepository.destroy({
            where : {id}
        });
        return deletedRow;
    }

    // async updateUser(id:number,dto:UpdateUserDto){
    //     const updatedUser = await this.userRepository.update(dto,{where:{id}});
    //     return this.getUserById(id);

    // }
}
