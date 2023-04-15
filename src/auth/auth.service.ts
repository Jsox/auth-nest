import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
import { YandexStrategy } from '../strategies/yandex.strategy';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly yandexStrategy: YandexStrategy,
    ) {}

    authProvider(provider) {
        console.log(
            '🚀 ~ file: auth.service.ts:6 ~ AuthService ~ authProvider ~ provider:',
            provider,
        );

        switch (provider) {
            case 'yandex':
                break;

            default:
                throw new BadRequestException({
                    message: 'Неверный провайдер для входа',
                });
                break;
        }
    }

    authCallback(provider) {
        console.log(
            '🚀 ~ file: auth.service.ts:16 ~ AuthService ~ authCallback ~ provider:',
            provider,
        );
    }
}
