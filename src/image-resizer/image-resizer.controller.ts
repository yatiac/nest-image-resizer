import {
  Body,
  Controller,
  Header,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { ImageResizerService } from './image-resizer.service';

@Controller('image-resizer')
export class ImageResizerController {
  constructor(private readonly imageResizerService: ImageResizerService) {}
  @Post('resize')
  @UseInterceptors(FileInterceptor('file'))
  async resize(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
    @Body() body: any,
  ) {
    try {
      const resizedImage = await this.imageResizerService.downSizeImageToHalf(
        file.buffer,
        body.height,
        body.width,
      );
      res.set(
        'Content-disposition',
        'attachment; filename=' + 'resized_' + file.originalname,
      );
      res.send(resizedImage);
    } catch (error) {
      console.error(error);
    }
  }
}
