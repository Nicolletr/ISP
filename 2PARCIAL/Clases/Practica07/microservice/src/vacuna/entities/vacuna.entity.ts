import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';


@Schema()
export class Vacuna {
  @Prop({ required: true })
  id_mascota: string;

  @Prop({ required: true })
  id_veterinario: string;

  @Prop({ required: true })
  id_producto: string;

  @Prop({ required: true })
  fecha_aplicacion: string;

  @Prop({ required: true })
  dosis: string;

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
