import { Request } from 'express';
import { LocalUploaderService } from './local-uploader/local-uploader.service';
import { S3UploaderService } from './s3-uploader/s3-uploader.service';
import { UploaderModuleOptions } from './uploader.module';
import { Logger } from '@nestjs/common';
import * as chalk from 'chalk';

export class UploaderFactory {
  static logger = new Logger(UploaderFactory.name);

  static getUploader(
    options: UploaderModuleOptions,
    request: Request,
    localUploaderService: LocalUploaderService,
    s3UploaderService: S3UploaderService,
  ) {
    const useLocal =
      request[options.useBody ? 'body' : 'query'][options.key ?? 'isLocal'];
    const serviceName = `${useLocal ? 'Local' : 'S3'}UploaderService`;
    const service = useLocal ? localUploaderService : s3UploaderService;

    UploaderFactory.logger.debug(`using ${chalk.yellow(serviceName)}`);

    return service;
  }
}
