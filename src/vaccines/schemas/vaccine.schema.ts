import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VaccineDocument = HydratedDocument<Vaccine>;

@Schema({ timestamps: true })
export class Vaccine {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;
}

export const VaccineSchema = SchemaFactory.createForClass(Vaccine);