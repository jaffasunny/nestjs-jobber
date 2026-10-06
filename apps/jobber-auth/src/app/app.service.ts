import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { User } from '@prisma-clients/jobber-auth';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getData(): Promise<{ message: string, users: User[] }> {
    const users = await this.prisma.user.findMany();
    
    return { message: 'Hello API', users };
  }
}
