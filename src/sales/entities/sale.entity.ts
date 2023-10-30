import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateSaleDto } from '../dto/create-sale.dto';
export type SaleDocument = HydratedDocument<Sale>;

@Schema()
export class Sale extends CreateSaleDto {}

export const SaleScheme = SchemaFactory.createForClass(Sale);
