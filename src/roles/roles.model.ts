import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table,DataType } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.model";
import { BelongsToMany } from "sequelize-typescript";
import { UserRoles } from "./user-roles.model";
interface RoleCreationAttrs{
    value:string;
    description:string;
}


@Table({tableName:'roles'})
export class Role extends Model<Role,RoleCreationAttrs>{
    @ApiProperty({example:'1',description:"Unique identificator"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number;

    @ApiProperty({example:'ADMIN',description:"Unique value of user"})
    @Column({
        type: DataType.STRING,
        unique:true,
        allowNull: false
    })
    value: string;

    @ApiProperty({example:'admin',description:"Description of role"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @BelongsToMany(() =>User,()=> UserRoles)
    users: User[];

}