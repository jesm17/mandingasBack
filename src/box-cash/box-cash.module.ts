import { Module } from '@nestjs/common';
import { BoxCashService } from './box-cash.service';
import { BoxCashController } from './box-cash.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoxCash, BoxCashScheme } from './entities/box-cash.entity';
import { Sale, SaleScheme } from 'src/sales/entities/sale.entity';

@Module({
  controllers: [BoxCashController],
  providers: [BoxCashService],
  imports: [
    MongooseModule.forFeature([
      { name: BoxCash.name, schema: BoxCashScheme },
      { name: Sale.name, schema: SaleScheme },
    ]),
  ],
})
export class BoxCashModule {}
