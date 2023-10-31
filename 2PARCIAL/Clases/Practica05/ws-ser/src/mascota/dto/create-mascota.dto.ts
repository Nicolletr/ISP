import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateMascotaDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    id_cliente:string;
    //
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    id_tipo_mascota:string;
    //
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    id_habito:string;
    //

    @IsString()
    @IsNotEmpty()
    nombre_mascota:string;

    @IsString()
    @IsNotEmpty()
    fecha_nacimiento:string;
    

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    genero:string[];

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    color:string[];

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    esterilizacion:string[];


}
