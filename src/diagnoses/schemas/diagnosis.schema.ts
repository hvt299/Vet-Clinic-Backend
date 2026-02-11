import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { TreatmentSession } from '../../treatment-sessions/schemas/treatment-session.schema';

export type DiagnosisDocument = HydratedDocument<Diagnosis>;

export enum DiagnosisType {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
}

@Schema({ timestamps: true })
export class Diagnosis {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TreatmentSession', required: true })
    treatmentSessionId: TreatmentSession;

    @Prop({ required: true })
    name: string;

    @Prop({ type: String, enum: DiagnosisType, default: DiagnosisType.PRIMARY })
    type: DiagnosisType;

    @Prop()
    clinicalTest: string;

    @Prop()
    note: string;
}

export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);