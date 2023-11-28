import { PartialType } from '@nestjs/mapped-types';
import { CreateVacunaDto } from './create-vacuna.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateVacunaDto extends PartialType(CreateVacunaDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_aplicacion?: string;
}
