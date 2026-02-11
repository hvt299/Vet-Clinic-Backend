import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CustomerDocument, Customer } from '../customers/schemas/customer.schema';
import { PetDocument, Pet } from '../pets/schemas/pet.schema';
import { DoctorDocument, Doctor } from '../doctors/schemas/doctor.schema';
import { MedicineDocument, Medicine } from '../medicines/schemas/medicine.schema';
import { TreatmentCourseDocument, TreatmentCourse } from '../treatment-courses/schemas/treatment-course.schema';
import { PetVaccinationDocument, PetVaccination } from '../pet-vaccinations/schemas/pet-vaccination.schema';
import { TreatmentSessionDocument, TreatmentSession } from '../treatment-sessions/schemas/treatment-session.schema';
import { DiagnosisDocument, Diagnosis } from '../diagnoses/schemas/diagnosis.schema';

@Injectable()
export class StatisticsService {
    constructor(
        @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
        @InjectModel(Pet.name) private petModel: Model<PetDocument>,
        @InjectModel(Doctor.name) private doctorModel: Model<DoctorDocument>,
        @InjectModel(Medicine.name) private medicineModel: Model<MedicineDocument>,
        @InjectModel(TreatmentCourse.name) private treatmentCourseModel: Model<TreatmentCourseDocument>,
        @InjectModel(PetVaccination.name) private vaccinationModel: Model<PetVaccinationDocument>,
        @InjectModel(TreatmentSession.name) private sessionModel: Model<TreatmentSessionDocument>,
        @InjectModel(Diagnosis.name) private diagnosisModel: Model<DiagnosisDocument>,
    ) { }

    async getGeneralStats() {
        const [totalCustomers, totalPets, totalDoctors, totalMedicines] = await Promise.all([
            this.customerModel.countDocuments(),
            this.petModel.countDocuments(),
            this.doctorModel.countDocuments(),
            this.medicineModel.countDocuments(),
        ]);

        return {
            totalCustomers,
            totalPets,
            totalDoctors,
            totalMedicines,
        };
    }

    async getTodayStats() {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const vaccinationsToday = await this.vaccinationModel.countDocuments({
            vaccinationDate: { $gte: startOfDay, $lte: endOfDay }
        });

        const activeTreatments = await this.treatmentCourseModel.countDocuments({
            status: 'ONGOING'
        });

        const sessionsToday = await this.sessionModel.countDocuments({
            examinedAt: { $gte: startOfDay, $lte: endOfDay }
        });

        return {
            vaccinationsToday,
            activeTreatments,
            sessionsToday
        };
    }

    async getSixMonthTrend() {
        const months: Date[] = [];
        const today = new Date();

        for (let i = 5; i >= 0; i--) {
            const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
            months.push(d);
        }

        const chartData = await Promise.all(months.map(async (date) => {
            const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);

            const treatments = await this.treatmentCourseModel.countDocuments({
                startDate: { $gte: startOfMonth, $lte: endOfMonth }
            });

            const vaccinations = await this.vaccinationModel.countDocuments({
                vaccinationDate: { $gte: startOfMonth, $lte: endOfMonth }
            });

            return {
                name: `T${date.getMonth() + 1}`,
                treatments,
                vaccinations
            };
        }));

        return chartData;
    }

    async getRecentTreatments() {
        return this.treatmentCourseModel
            .find({ status: 'ONGOING' })
            .sort({ startDate: -1 })
            .limit(5)
            .populate('petId', 'name species')
            .populate('customerId', 'name phoneNumber')
            .exec();
    }

    async getTopDiagnoses() {
        return this.diagnosisModel.aggregate([
            {
                $group: {
                    _id: '$name',
                    count: { $sum: 1 },
                },
            },
            { $sort: { count: -1 } },
            { $limit: 5 },
        ]);
    }
}