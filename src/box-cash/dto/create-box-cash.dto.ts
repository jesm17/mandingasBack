import { Prop } from '@nestjs/mongoose';
export class CreateBoxCashDto {
  @Prop()
  isOpen: boolean;
  @Prop({ default: null })
  totalSales: number;
  @Prop()
  openTime: string;
  @Prop({ default: null })
  closedTime: string;
}
