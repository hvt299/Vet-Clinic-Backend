import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { MedicineRoute, PrescriptionStatus } from '../schemas/prescription.schema';

export class CreatePrescriptionDto {
    @ApiProperty({ example: '65f1...', description: 'ID Phiên khám' })
    @IsNotEmpty()
    @IsMongoId()
    treatmentSessionId: string;

    @ApiProperty({ example: '65f1...', description: 'ID Thuốc' })
    @IsNotEmpty()
    @IsMongoId()
    medicineId: string;

    @ApiProperty({ enum: MedicineRoute, example: MedicineRoute.PO, description: 'Đường dùng' })
    @IsNotEmpty()
    @IsEnum(MedicineRoute)
    route: MedicineRoute;

    @ApiProperty({ example: 5.5, description: 'Liều lượng' })
    @IsNotEmpty()
    @IsNumber()
    dosage: number;

    @ApiProperty({ example: 'ml', description: 'Đơn vị: ml, mg, mg/kg, g, viên, giọt, %' })
    @IsNotEmpty()
    @IsString()
    unit: string;

    @ApiProperty({ example: 'Sáng 1 lần, Chiều 1 lần', description: 'Tần suất' })
    @IsNotEmpty()
    @IsString()
    frequency: string;

    @ApiProperty({ enum: PrescriptionStatus, default: PrescriptionStatus.IN_PROGRESS })
    @IsOptional()
    @IsEnum(PrescriptionStatus)
    status?: PrescriptionStatus;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    note?: string;
}