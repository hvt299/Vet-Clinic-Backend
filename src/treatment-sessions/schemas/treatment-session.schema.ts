import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { TreatmentCourse } from '../../treatment-courses/schemas/treatment-course.schema';
import { Doctor } from '../../doctors/schemas/doctor.schema';

export type TreatmentSessionDocument = HydratedDocument<TreatmentSession>;

@Schema({ timestamps: true })
export class TreatmentSession {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TreatmentCourse', required: true })
    treatmentCourseId: TreatmentCourse;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Doctor', required: true })
    doctorId: Doctor;

    @Prop({ required: true, default: Date.now })
    examinedAt: Date;

    @Prop()
    temperature: number;

    @Prop()
    weight: number;

    @Prop()
    pulseRate: number;

    @Prop()
    respiratoryRate: number;

    @Prop()
    overallNote: string;
}

export const TreatmentSessionSchema = SchemaFactory.createForClass(TreatmentSession);