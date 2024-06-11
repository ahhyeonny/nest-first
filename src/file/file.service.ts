import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  async getFileContent(filePath: string): Promise<string> {
    const resolvedPath = path.resolve(filePath);
    try {
      const fileContent = await fs.promises.readFile(resolvedPath, 'utf8');
      return fileContent;
    } catch (err) {
      throw new Error('Error reading file');
    }
  }
}
