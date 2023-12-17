import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exception/http-excetpion.filter';
import { SuccessInterceptor } from '../common/interceptor/success.interceptor';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  @UseInterceptors(SuccessInterceptor)
  getAllCat() {
    return { cats: 'get all cats api' };
  }

  @Get(':id')
  getByIdCat(@Param('id', ParseIntPipe) id: number) {
    return `${id}의 타입은 ${typeof id} = one cat`;
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Patch(':id')
  updateCat(@Param('id') id: string) {
    return `update cat ${id}`;
  }
}
