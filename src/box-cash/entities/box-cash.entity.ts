import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateBoxCashDto } from '../dto/create-box-cash.dto';
export type BoxCashDocument = HydratedDocument<BoxCash>;

@Schema()
export class BoxCash extends CreateBoxCashDto {}

export const BoxCashScheme = SchemaFactory.createForClass(BoxCash);
