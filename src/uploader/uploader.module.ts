import { ConfigurableModuleBuilder, Module, Scope } from '@nestjs/common';
import { LocalUploaderService } from './local-uploader/local-uploader.service';
import { S3UploaderService } from './s3-uploader/s3-uploader.service';
import { UPLOADER } from './uploader.token';
import { REQUEST } from '@nestjs/core';
import { UploaderFactory } from './uploader.factory';
import { S3Module } from 'src/s3/s3.module';

export interface UploaderModuleOptions {
  key?: string;
  useBody?: boolean;
}

const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<UploaderModuleOptions>().build();

export const UPLOADER_MODULE_OPTIONS = MODULE_OPTIONS_TOKEN;

@Module({
  imports: [S3Module],
  providers: [
    LocalUploaderService,
    S3UploaderService,
    {
      provide: UPLOADER,
      useFactory: UploaderFactory.getUploader,
      inject: [
        UPLOADER_MODULE_OPTIONS,
        REQUEST,
        LocalUploaderService,
        S3UploaderService,
      ],
      scope: Scope.REQUEST,
    },
  ],
  exports: [UPLOADER],
})
export class UploaderModule extends ConfigurableModuleClass {}
