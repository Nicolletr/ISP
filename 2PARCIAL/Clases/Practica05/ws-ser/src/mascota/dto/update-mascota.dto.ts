import { PartialType } from '@nestjs/mapped-types';
import { CreateMascotaDto } from './create-mascota.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateMascotaDto extends PartialType(CreateMascotaDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
