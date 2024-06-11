import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.inferface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {} //private로 하면 선언과 초기화 동시에 됨
  //전체 목록 조회
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  //상세 목록 조회
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
  //정보 추가
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  //상세 정보 업데이트
  @Put(':id')
  update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    return `This cation updatas a #${id} cat`;
  }
  //삭제
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
