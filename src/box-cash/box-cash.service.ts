import { Injectable } from '@nestjs/common';
import { CreateBoxCashDto } from './dto/create-box-cash.dto';
import { UpdateBoxCashDto } from './dto/update-box-cash.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BoxCash } from './entities/box-cash.entity';
import { Sale } from 'src/sales/entities/sale.entity';

@Injectable()
export class BoxCashService {
  constructor(
    @InjectModel(BoxCash.name) private boxCashModel: Model<BoxCash>,
    @InjectModel(Sale.name) private salesModel: Model<Sale>,
  ) {}

  monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  create(createBoxCashDto: CreateBoxCashDto) {
    const date = new Date();
    const month = date.getUTCMonth() + 1;
    const createBoxCash = new this.boxCashModel(createBoxCashDto);
    createBoxCash.openTime =
      date.toLocaleDateString() + ' ' + date.toLocaleTimeString('es-CO');

    createBoxCash.monthName = this.monthNames[month - 1];
    createBoxCash.monthNumber = month;
    createBoxCash.year = date.getFullYear();
    createBoxCash.day = date.getDate();
    return createBoxCash.save();
  }

  findAll(): Promise<BoxCash[]> {
    return this.boxCashModel.findOne({ isOpen: true });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} boxCash`;
  // }

  async update(id: string, updateBoxCashDto: UpdateBoxCashDto) {
    const date = new Date();
    updateBoxCashDto.closedTime =
      date.toLocaleDateString() + ' ' + date.toLocaleTimeString('es-CO');

    updateBoxCashDto.isOpen = false;
    const salesOfDay = await this.salesModel.find({ boxCahsId: id }).exec();
    let total = 0;
    salesOfDay.forEach((sale) => {
      total += sale.value;
    });

    updateBoxCashDto.totalSales = total;

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

  async getHistory(y: number, m: number) {
    const date = new Date();
    const year = y ? y : date.getFullYear();
    let query = `"isOpen": false,"year": ${year}`;
    if (m) {
      query = query + `, "monthNumber" : ${m}`;
    }

    query = '{' + query + '}';

    query = JSON.parse(query);

    const history = await this.boxCashModel.find().where(query).exec();

    return history;
  }
}
