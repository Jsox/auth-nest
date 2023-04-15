import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-yandex';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../user/user.service';

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, 'yandex') {
    constructor(
        private readonly prisma: PrismaService,
        private readonly userService: UserService,
    ) {
        super({
            clientID: process.env.YANDEX_CLIENT_ID,
            clientSecret: process.env.YANDEX_CLIENT_SECRET,
            callbackURL: 'http://localhost:3400/auth/yandex/callback',
        });
    }

    async validate(
        accessToken,
        refreshToken,
        profile: Profile,
        done,
    ): Promise<any> {
        const writeStrategy = await this.prisma.passportStrategy.upsert({
            where: {
                name: 'yandex',
            },
            create: { name: 'yandex' },
            update: {},
        });

        const {
            real_name,
            login: username,
            default_email,
            default_phone,
        } = profile._json;

        const user = {
            email: default_email,
            name: real_name,
            username,
            avatar: profile?.photos[0].value || '',
            phone: default_phone?.number || '',
            lastLoginAt: new Date(),
            accessToken,
            refreshToken,
            ConnectedWith: {
                connect: {
                    id: writeStrategy.id,
                },
            },
        };

        const userWrite = this.userService.upsertUser(user);
        console.log('-> userWrite', userWrite);

        done(null, userWrite);
    }
}
