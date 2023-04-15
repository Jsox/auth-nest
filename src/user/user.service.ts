import { Injectable, Res } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async upsertUser(user: Prisma.UserCreateInput): Promise<User> {
        return await this.prismaService.user.upsert({
            where: {
                email: user.email,
            },
            create: user,
            update: user,
        });
    }
}
