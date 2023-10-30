import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoxCashModule } from './box-cash/box-cash.module';
import { SalesModule } from './sales/sales.module';

const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = '123456789';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'mandingas';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot(
      `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
    ),
    BoxCashModule,
    SalesModule,
  ],
})
export class AppModule {}
