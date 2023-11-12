import { Prop } from '@nestjs/mongoose';
export class CreateBoxCashDto {
  @Prop({ default: true })
  isOpen: boolean;
  @Prop({ default: null })
  totalSales: number;
  @Prop()
  openTime: string;
  @Prop({ default: null })
  closedTime: string;
  @Prop()
  monthName: string;
  @Prop()
  monthNumber: number;
  @Prop()
  year: number;
  @Prop()
  day: number;
}
