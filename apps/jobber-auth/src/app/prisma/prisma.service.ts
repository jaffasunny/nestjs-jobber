import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma-clients/jobber-auth';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const pool = new Pool({
            connectionString: process.env.AUTH_DATABASE_URL,
        });
        const adapter = new PrismaPg(pool);

        super({
            adapter,
        });
    }
}
