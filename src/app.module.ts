import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import * as dotenv from 'dotenv'; 
import { User } from "./users/users.model";
dotenv.config({ path: `.${process.env.NODE_ENV || 'development'}.env` });

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
            isGlobal: true,
        }),
        
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT), // Теперь тут будет 5433
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true
        }), 
        UsersModule
    ]
})
export class AppModule {}