import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { Sale, SaleScheme } from './entities/sale.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleScheme }]),
  ],
})
export class SalesModule {}
