import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Pet } from '../../pets/schemas/pet.schema';
import { Customer } from '../../customers/schemas/customer.schema';
import { Vaccine } from '../../vaccines/schemas/vaccine.schema';
import { Doctor } from '../../doctors/schemas/doctor.schema';

export type PetVaccinationDocument = HydratedDocument<PetVaccination>;

@Schema({ timestamps: true })
export class PetVaccination {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Vaccine', required: true })
    vaccineId: Vaccine;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Customer', required: true })
    customerId: Customer;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Pet', required: true })
    petId: Pet;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Doctor', required: true })
    doctorId: Doctor;

    @Prop({ required: true })
    vaccinationDate: Date;

    @Prop()
    nextVaccinationDate: Date;

    @Prop({
        type: String,
        enum: ['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'MISSED'],
        default: 'SCHEDULED'
    })
    status: string;

    @Prop()
    note: string;
}

export const PetVaccinationSchema = SchemaFactory.createForClass(PetVaccination);