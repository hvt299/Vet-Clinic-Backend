import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TreatmentStatus } from '../schemas/treatment-course.schema';

export class CreateTreatmentCourseDto {
    @ApiProperty({ example: '65f1...', description: 'ID Khách hàng' })
    @IsNotEmpty({ message: 'ID Khách hàng không được để trống' })
    @IsMongoId({ message: 'ID Khách hàng không hợp lệ' })
    customerId: string;

    @ApiProperty({ example: '65f1...', description: 'ID Thú cưng' })
    @IsNotEmpty({ message: 'ID Thú cưng không được để trống' })
    @IsMongoId({ message: 'ID Thú cưng không hợp lệ' })
    petId: string;

    @ApiProperty({ example: 'Viêm phổi cấp', description: 'Chẩn đoán sơ bộ' })
    @IsNotEmpty({ message: 'Chẩn đoán sơ bộ không được để trống' })
    @IsString()
    diagnosisSummary: string;

    @ApiProperty({ example: '2024-02-10T00:00:00.000Z', description: 'Ngày bắt đầu' })
    @IsOptional()
    @IsDateString()
    startDate?: string;

    @ApiProperty({ example: '2024-02-20T00:00:00.000Z', description: 'Ngày kết thúc (Dự kiến hoặc thực tế)', required: false })
    @IsOptional()
    @IsDateString()
    endDate?: string;

    @ApiProperty({ enum: TreatmentStatus, default: TreatmentStatus.ONGOING })
    @IsOptional()
    @IsEnum(TreatmentStatus)
    status?: TreatmentStatus;
}