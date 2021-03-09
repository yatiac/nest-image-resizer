import { Test, TestingModule } from '@nestjs/testing';
import { ImageResizerService } from './image-resizer.service';

describe('ImageResizerService', () => {
  let service: ImageResizerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageResizerService],
    }).compile();

    service = module.get<ImageResizerService>(ImageResizerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
