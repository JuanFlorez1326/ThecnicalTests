import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  currency: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  purchased_by?: string;

  @IsOptional()
  @IsDate()
  purchased_at?: string;

  @IsOptional()
  @IsString()
  for_sale_at?: string;

  @IsString()
  created_ad?: string;
}
