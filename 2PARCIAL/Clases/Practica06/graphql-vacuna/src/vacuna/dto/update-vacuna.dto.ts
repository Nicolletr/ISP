import { PartialType } from '@nestjs/mapped-types';
import { CreateVacunaDto } from './create-vacuna.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateVacunaDto extends PartialType(CreateVacunaDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_aplicacion?: string;
}
