import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { BoxCashService } from './box-cash.service';
import { CreateBoxCashDto } from './dto/create-box-cash.dto';
import { UpdateBoxCashDto } from './dto/update-box-cash.dto';

@Controller('boxCash')
export class BoxCashController {
  constructor(private readonly boxCashService: BoxCashService) {}

  @Post()
  create(@Body() createBoxCashDto: CreateBoxCashDto) {
    return this.boxCashService.create(createBoxCashDto);
  }

  @Get()
  findAll() {
    return this.boxCashService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.boxCashService.findOne(+id);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoxCashDto: UpdateBoxCashDto) {
    const updateBoxCash = this.boxCashService.update(id, updateBoxCashDto);
    return updateBoxCash;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boxCashService.remove(+id);
  }

  @Get('history')
  async getHistory(@Query('year') y: number, @Query('month') m: number) {
    return await this.boxCashService.getHistory(y, m);
  }
}
