/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsArray, ValidateNested, IsEmail, IsPhoneNumber, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class TicketDto {
  @IsString()
  @IsNotEmpty()
  film: string;

  @IsString()
  @IsNotEmpty()
  session: string;

  @IsInt()
  @IsNotEmpty()
  row: number;

  @IsInt()
  @IsNotEmpty()
  seat: number;

  @IsInt()
  @IsNotEmpty()
  price: number;
}

export class CreateOrderDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber() 
  @IsNotEmpty()
  phone: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TicketDto)
  tickets: TicketDto[];
}