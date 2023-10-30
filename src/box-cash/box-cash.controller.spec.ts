import { Test, TestingModule } from '@nestjs/testing';
import { BoxCashController } from './box-cash.controller';
import { BoxCashService } from './box-cash.service';

describe('BoxCashController', () => {
  let controller: BoxCashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoxCashController],
      providers: [BoxCashService],
    }).compile();

    controller = module.get<BoxCashController>(BoxCashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
