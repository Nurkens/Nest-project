import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table,DataType } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/roles/roles.model";
import { BelongsToMany } from "sequelize-typescript";
import { UserRoles } from "src/roles/user-roles.model";
interface UserCreationAttrs{
    email:string;
    password:string;
}


@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs>{
    @ApiProperty({example:'1',description:"Unique identificator"})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number;

    @ApiProperty({example:'nurken@gmail.com',description:"Email"})
    @Column({
        type: DataType.STRING,
        unique:true,
        allowNull: false
    })
    declare email: string;

    @ApiProperty({example:'admin123',description:"Password"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare password: string;

    @ApiProperty({example:'true',description:"User banned or not "})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    declare banned: boolean;

    @ApiProperty({example:'banned for spamming',description:"Reason of banning"})
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    declare banReason: string;

    //это штука нужна чтобы sequelize знал , что юзер и роль связаны через таблицу мост - userroles
    @BelongsToMany(() =>Role,()=> UserRoles)
    roles:Role[];

}