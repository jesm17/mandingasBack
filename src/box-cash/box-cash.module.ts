import { Module } from '@nestjs/common';
import { BoxCashService } from './box-cash.service';
import { BoxCashController } from './box-cash.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoxCash, BoxCashScheme } from './entities/box-cash.entity';

@Module({
  controllers: [BoxCashController],
  providers: [BoxCashService],
  imports: [
    MongooseModule.forFeature([{ name: BoxCash.name, schema: BoxCashScheme }]),
  ],
})
export class BoxCashModule {}
