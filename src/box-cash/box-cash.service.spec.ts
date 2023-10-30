import { Test, TestingModule } from '@nestjs/testing';
import { BoxCashService } from './box-cash.service';

describe('BoxCashService', () => {
  let service: BoxCashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoxCashService],
    }).compile();

    service = module.get<BoxCashService>(BoxCashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
