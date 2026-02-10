import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTreatmentSessionDto {
    @ApiProperty({ example: '65f1...', description: 'ID Đợt điều trị' })
    @IsNotEmpty({ message: 'ID Đợt điều trị không được để trống' })
    @IsMongoId({ message: 'ID Đợt điều trị không hợp lệ' })
    treatmentCourseId: string;

    @ApiProperty({ example: '65f1...', description: 'ID Bác sĩ khám' })
    @IsNotEmpty({ message: 'ID Bác sĩ không được để trống' })
    @IsMongoId({ message: 'ID Bác sĩ không hợp lệ' })
    doctorId: string;

    @ApiProperty({ example: '2024-02-10T08:30:00.000Z', description: 'Thời gian khám' })
    @IsNotEmpty({ message: 'Thời gian khám không được để trống' })
    @IsDateString()
    examinedAt: string;

    @ApiProperty({ example: 38.5, description: 'Nhiệt độ (C)', required: false })
    @IsOptional()
    @IsNumber()
    temperature?: number;

    @ApiProperty({ example: 5.2, description: 'Cân nặng (kg)', required: false })
    @IsOptional()
    @IsNumber()
    weight?: number;

    @ApiProperty({ example: 120, description: 'Nhịp tim (bpm)', required: false })
    @IsOptional()
    @IsNumber()
    pulseRate?: number;

    @ApiProperty({ example: 30, description: 'Nhịp thở (rpm)', required: false })
    @IsOptional()
    @IsNumber()
    respiratoryRate?: number;

    @ApiProperty({ example: 'Thú cưng mệt mỏi, bỏ ăn', description: 'Ghi chú chung', required: false })
    @IsOptional()
    @IsString()
    overallNote?: string;
}