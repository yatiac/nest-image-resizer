import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class ImageResizerService {
  public async downSizeImageToHalf(fileBuffer: Buffer): Promise<Buffer> {
    const sharpImage = sharp(fileBuffer);
    const imageMetadata = await sharpImage.metadata();
    const resizedImage = await sharpImage
      .resize(imageMetadata.width / 2, imageMetadata.height / 2)
      .withMetadata()
      .toBuffer();
    return resizedImage;
  }
}
