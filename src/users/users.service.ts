import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
            private rolesService: RolesService){

    }

    async createUsers(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.rolesService.getRoleByValue("USER");
        if (!role) {
            throw new Error('user role not found');
        }
        await user.$set('roles',[role.id]);
        return user;
    }

    async getUsers(){
        const users = await this.userRepository.findAll({include:{all:true}});
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
