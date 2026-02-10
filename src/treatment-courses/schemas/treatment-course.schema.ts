import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Customer } from '../../customers/schemas/customer.schema';
import { Pet } from '../../pets/schemas/pet.schema';

export type TreatmentCourseDocument = HydratedDocument<TreatmentCourse>;

export enum TreatmentStatus {
    ONGOING = 'ONGOING',
    RECOVERED = 'RECOVERED',
}

@Schema({ timestamps: true })
export class TreatmentCourse {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Customer', required: true })
    customerId: Customer;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Pet', required: true })
    petId: Pet;

    @Prop({ required: true })
    diagnosisSummary: string;

    @Prop({ required: true, default: Date.now })
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop({ type: String, enum: TreatmentStatus, default: TreatmentStatus.ONGOING })
    status: TreatmentStatus;
}

export const TreatmentCourseSchema = SchemaFactory.createForClass(TreatmentCourse);