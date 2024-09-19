import { Module } from '@nestjs/common';
import { ResizeModule } from './resize/resize.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [ResizeModule, S3Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
