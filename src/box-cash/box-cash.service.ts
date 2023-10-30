import { Injectable } from '@nestjs/common';
import { CreateBoxCashDto } from './dto/create-box-cash.dto';
import { UpdateBoxCashDto } from './dto/update-box-cash.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BoxCash } from './entities/box-cash.entity';

@Injectable()
export class BoxCashService {
  constructor(
    @InjectModel(BoxCash.name) private boxCashModel: Model<BoxCash>,
  ) {}

  create(createBoxCashDto: CreateBoxCashDto) {
    const date = new Date();
    const createBoxCash = new this.boxCashModel(createBoxCashDto);
    createBoxCash.openTime =
      date.toLocaleDateString() + 'T' + date.toLocaleTimeString();
    return createBoxCash.save();
  }

  findAll(): Promise<BoxCash[]> {
    return this.boxCashModel.findOne({ isOpen: true });
  }

  findOne(id: number) {
    return `This action returns a #${id} boxCash`;
  }

  update(id: string, updateBoxCashDto: UpdateBoxCashDto) {
    const date = new Date();
    updateBoxCashDto.closedTime =
      date.toLocaleDateString() + 'T' + date.toLocaleTimeString();
    const updateBoxCash = this.boxCashModel.findOneAndUpdate(
      { _id: id },
      updateBoxCashDto,
    );
    //console.log(updateBoxCash);
    return updateBoxCash;
  }

  remove(id: number) {
    return `This action removes a #${id} boxCash`;
  }
}
