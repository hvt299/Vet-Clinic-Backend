import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Customer } from '../../customers/schemas/customer.schema';

export type PetDocument = HydratedDocument<Pet>;

@Schema({ timestamps: true })
export class Pet {
    @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
    customerId: Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    species: string;

    @Prop({ enum: ['MALE', 'FEMALE', 'UNKNOWN'] })
    gender: string;

    @Prop()
    dob: Date;

    @Prop()
    weight: number;

    @Prop({ default: false })
    sterilization: boolean;

    @Prop()
    characteristic: string;

    @Prop()
    drugAllergy: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);