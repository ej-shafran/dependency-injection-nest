import { Inject, Injectable } from '@nestjs/common';
import { Uploader } from 'src/uploader/uploader.interface';
import { UPLOADER } from 'src/uploader/uploader.token';

@Injectable()
export class ResizeService {
  constructor(@Inject(UPLOADER) private readonly uploaderService: Uploader) {}

  async updateSize(fileName: string, size: number) {
    // actual logic should go here...
    await this.uploaderService.upload(fileName, ' '.repeat(size));
  }
}
