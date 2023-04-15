import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { YandexGuard } from '../guards/yandex.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('yandex/callback')
    @UseGuards(YandexGuard)
    authCallback(@Req() req, @Res() res: Response) {
        const { userWrite } = req;
        console.log(
            '🚀 ~ file: auth.controller.ts:20 ~ AuthController ~ authCallback ~ userWrite:',
            userWrite,
        );
        // res.cookie('access_token', 'token', {
        //     maxAge: 2592000000,
        //     sameSite: true,
        //     secure: false,
        // });
    }

    @Get('yandex')
    @UseGuards(YandexGuard)
    auth() {}
}
