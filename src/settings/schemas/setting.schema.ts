import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SettingDocument = HydratedDocument<Setting>;

@Schema({ timestamps: true })
export class Setting {
    @Prop({ required: true, default: 'Phòng khám Thú Y' })
    clinicName: string;

    @Prop({ default: '' })
    logo: string;

    @Prop({ default: '' })
    representativeName: string;

    @Prop({ default: '' })
    email: string;

    @Prop({ type: [String], default: [] })
    phoneNumbers: string[];

    @Prop({ type: [String], default: [] })
    addresses: string[];
}

export const SettingSchema = SchemaFactory.createForClass(Setting);