
import {ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example:'nurken@gmail.com',description:"Email"})
    readonly email: string;

    @ApiProperty({example:'admin123',description:"Password"})
    readonly password: string
}