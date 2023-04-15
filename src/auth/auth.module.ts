import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { YandexStrategy } from '../strategies/yandex.strategy';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService, YandexStrategy, UserService],
})
export class AuthModule {}
