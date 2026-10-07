import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getData: vi.fn().mockResolvedValue({
              message: 'Hello API',
              users: [],
            }),
          },
        },
      ],
    }).compile();
  });

  describe('getData', () => {
    it('should return the message and users', async () => {
      const appController = app.get<AppController>(AppController);
      await expect(appController.getData()).resolves.toEqual({
        message: 'Hello API',
        users: [],
      });
    });
  });
});
