import { Test, TestingModule } from '@nestjs/testing';
import { ImageResizerController } from './image-resizer.controller';

describe('ImageResizerController', () => {
  let controller: ImageResizerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageResizerController],
    }).compile();

    controller = module.get<ImageResizerController>(ImageResizerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
