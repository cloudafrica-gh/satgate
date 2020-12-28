import { Test, TestingModule } from '@nestjs/testing';
import { MazzumaService } from './mazzuma.service';

describe('MazzumaService', () => {
  let service: MazzumaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MazzumaService],
    }).compile();

    service = module.get<MazzumaService>(MazzumaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
