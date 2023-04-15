import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { YandexStrategy } from './strategies/yandex.strategy';
import { UserService } from './user/user.service';

@Module({
    imports: [AuthModule],
    controllers: [],
    providers: [AuthService, PrismaService, YandexStrategy, UserService],
})
export class AppModule {}
