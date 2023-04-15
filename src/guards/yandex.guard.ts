import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class YandexGuard extends AuthGuard(['yandex']) {
    constructor(private configService: ConfigService) {
        super({
            accessType: 'offline',
        });
    }
}