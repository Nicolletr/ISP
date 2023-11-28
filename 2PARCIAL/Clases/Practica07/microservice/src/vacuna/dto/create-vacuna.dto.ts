import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateVacunaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  id_mascota: string;

  @IsString()
  @IsNotEmpty()
  id_veterinario: string;

  @IsString()
  @IsNotEmpty()
  id_producto: string;

  @IsString()
  @IsNotEmpty()
  fecha_aplicacion: string;

  @IsString()
  @IsNotEmpty()
  dosis: string;
}
