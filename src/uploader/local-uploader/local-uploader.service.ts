import { Injectable, Logger } from '@nestjs/common';
import { Uploader } from '../uploader.interface';

@Injectable()
export class LocalUploaderService implements Uploader {
  private readonly logger = new Logger(LocalUploaderService.name);

  async upload(fileName: string, contents: string | Buffer): Promise<void> {
    this.logger.debug(
      `uploading file '${fileName}' (new size is ${contents.length})`,
    );
  }
}
