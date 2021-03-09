import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageResizerController } from './image-resizer/image-resizer.controller';
import { ImageResizerService } from './image-resizer/image-resizer.service';
import { ImageResizerModule } from './image-resizer/image-resizer.module';

@Module({
  imports: [ImageResizerModule],
  controllers: [AppController, ImageResizerController],
  providers: [AppService, ImageResizerService],
})
export class AppModule {}
