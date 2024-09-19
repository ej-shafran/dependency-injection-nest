import { Module } from '@nestjs/common';
import { ResizeController } from './resize.controller';
import { ResizeService } from './resize.service';
import { UploaderModule } from 'src/uploader/uploader.module';

@Module({
  imports: [UploaderModule.register({})],
  controllers: [ResizeController],
  providers: [ResizeService],
})
export class ResizeModule {}
