import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVacunaDto {
  @IsString()
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(1)
  id_mascota: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_veterinario: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_producto: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fecha_aplicacion: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  dosis: string;
}
