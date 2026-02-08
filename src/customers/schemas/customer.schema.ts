import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ timestamps: true })
export class Customer {
    @Prop({ required: true })
    name: string;

    @Prop({ enum: ['MALE', 'FEMALE', 'UNKNOWN'] })
    gender: string;

    @Prop({ required: true, unique: true })
    phoneNumber: string;

    @Prop()
    identityCard: string;

    @Prop()
    address: string;

    @Prop()
    note: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);