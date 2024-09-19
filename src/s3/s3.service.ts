import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Service {
  get bucketName() {
    return crypto.randomUUID();
  }
}
