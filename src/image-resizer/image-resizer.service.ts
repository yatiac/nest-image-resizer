import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class ImageResizerService {
  public async downSizeImageToHalf(
    fileBuffer: Buffer,
    height: number,
    width: number,
  ): Promise<Buffer> {
    const sharpImage = sharp(fileBuffer);
    const imageMetadata = await sharpImage.metadata();
    height = height ? +height : imageMetadata.height / 2;
    width = width ? +width : imageMetadata.width / 2;
    console.log(+height, +width);
    const resizedImage = await sharpImage
      .resize(width, height)
      .withMetadata()
      .toBuffer();
    return resizedImage;
  }
}
