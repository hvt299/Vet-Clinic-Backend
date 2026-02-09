import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DoctorDocument = HydratedDocument<Doctor>;

@Schema({ timestamps: true })
export class Doctor {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    phoneNumber: string;

    @Prop()
    identityCard: string;

    @Prop({ enum: ['MALE', 'FEMALE', 'UNKNOWN'] })
    gender: string;

    @Prop()
    address: string;

    @Prop()
    note: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: '' })
    avatar: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);