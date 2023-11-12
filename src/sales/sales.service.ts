import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SalesService {
  constructor(@InjectModel(Sale.name) private saleModel: Model<Sale>) {}
  create(createSaleDto: CreateSaleDto) {
    const newSale = new this.saleModel(createSaleDto);

    return newSale.save();
  }

  findAll(id: string) {
    const sales = this.saleModel.find({ boxCahsId: id });
    return sales;
  }

  async findOne(id: string) {
    const sale = await this.saleModel.findById(id);
    return sale;
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    await this.saleModel.findByIdAndUpdate(id, updateSaleDto);

    return { success: 'success', message: 'Registro actualizado', ok: true };
  }

  remove(id: string) {
    this.saleModel.findByIdAndDelete({ _id: id });
    return { success: 'success', message: 'Registro eliminado', ok: true };
  }
}
