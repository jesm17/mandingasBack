import { Prop } from '@nestjs/mongoose';
import { ObjectId, isObjectIdOrHexString, isValidObjectId } from 'mongoose';

export class CreateSaleDto {
  @Prop({ required: true })
  boxCahsId: string;
  @Prop({ required: true })
  value: number;
  @Prop({ required: true })
  clientName: string;
  @Prop({ required: true })
  time: string;
}
