import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { TreatmentSession } from '../../treatment-sessions/schemas/treatment-session.schema';
import { Medicine } from '../../medicines/schemas/medicine.schema';

export type PrescriptionDocument = HydratedDocument<Prescription>;

export enum MedicineRoute {
    PO = 'PO',
    IM = 'IM',
    IV = 'IV',
    SC = 'SC',
}

export enum PrescriptionStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
}

@Schema({ timestamps: true })
export class Prescription {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TreatmentSession', required: true })
    treatmentSessionId: TreatmentSession;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Medicine', required: true })
    medicineId: Medicine;

    @Prop({ type: String, enum: MedicineRoute, required: true })
    route: MedicineRoute;

    @Prop({ required: true })
    dosage: number;

    @Prop({ required: true, enum: ['ml', 'mg', 'mg/kg', 'g', 'viên', 'giọt', '%'] })
    unit: string;

    @Prop({ required: true })
    frequency: string;

    @Prop({ type: String, enum: PrescriptionStatus, default: PrescriptionStatus.IN_PROGRESS })
    status: PrescriptionStatus;

    @Prop()
    note: string;
}

export const PrescriptionSchema = SchemaFactory.createForClass(Prescription);