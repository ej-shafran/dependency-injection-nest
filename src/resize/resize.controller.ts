import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ResizeService } from './resize.service';

@Controller('resize')
export class ResizeController {
  constructor(private readonly resizeService: ResizeService) {}

  @Get()
  get(
    @Query('fileName') fileName: string,
    @Query('size', new ParseIntPipe()) size: number,
  ) {
    return this.resizeService.updateSize(fileName, size);
  }
}
