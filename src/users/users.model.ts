import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table,DataType } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

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
    email: string;

    @ApiProperty({example:'admin123',description:"Password"})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @ApiProperty({example:'true',description:"User banned or not "})
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    banned: boolean;

    @ApiProperty({example:'banned for spamming',description:"Reason of banning"})
    @Column({
        type: DataType.STRING,
        allowNull:true
    })
    banReason: string;


}