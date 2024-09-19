import { Injectable, Logger } from '@nestjs/common';
import { Uploader } from '../uploader.interface';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class S3UploaderService implements Uploader {
  private readonly logger = new Logger(S3UploaderService.name);

  constructor(private readonly s3Service: S3Service) {}

  async upload(fileName: string, contents: string | Buffer): Promise<void> {
    this.logger.debug(
      `uploading to s3://${this.s3Service.bucketName}/${fileName} (new size is ${contents.length})`,
    );
  }
}
