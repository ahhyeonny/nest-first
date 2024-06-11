import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { FileService } from './file.service';
import fs, { promises as promiseFs } from 'fs';
// import fs from 'fs';
import * as path from 'path';
import * as mime from 'mime-types';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get(':paths')
  async getFileContent(@Param('paths') paths: string, @Res() res: Response) {
    try {
      const rootPath = 'D:MMS\\testPWG_샘플_데이터_2차';
      console.log(paths);
      const testFilePath = path.join(
        `D:\\MMS\\test\\PWG_샘플_데이터_2차\\B7X034_3_DN5824125_106_PMR04639_02_siteNT_FB_26x33_1_8_2EE_20X1_V10_Chip_prod_KLARF_3Sigma_230608115119.JPG`,
      );
      const filePath = path.join(rootPath, paths);

      console.log(filePath);

      const fileExists = await promiseFs.access(testFilePath); ///js
      const fileExists2 = fs.existsSync(testFilePath);

      const fileStream = await promiseFs.readFile(filePath);
      const mimeType = mime.lookup(filePath) || 'application/octet-stream';

      res.setHeader('Content-Type', mimeType);
      res.send(fileStream);
    } catch (err) {
      throw new HttpException(
        'Error reading file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
