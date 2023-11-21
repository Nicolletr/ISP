import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Vacuna {
  @Field()
  @Prop({ required: true })
  id_mascota: string;

  @Field()
  @Prop({ required: true })
  id_veterinario: string;

  @Field()
  @Prop({ required: true })
  id_producto: string;

  @Field()
  @Prop({ required: true })
  fecha_aplicacion: string;

  @Field()
  @Prop({ required: true })
  dosis: string;

  @Field()
  @Prop({ required: true })
  active: boolean;
  default:true;
}

export const VacunaSchema = SchemaFactory.createForClass(Vacuna);

export type VacunaDocument = Vacuna & Document;
export const VacunaModel = mongoose.model<VacunaDocument>(
  'vacunas',
  VacunaSchema,
);
