import { Test } from '@nestjs/testing';
import { PrismaService } from './prisma/prisma.service';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: PrismaService,
          useValue: { user: { findMany: vi.fn().mockResolvedValue([]) } },
        },
      ],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return the message and users', async () => {
      await expect(service.getData()).resolves.toEqual({
        message: 'Hello API',
        users: [],
      });
    });
  });
});
