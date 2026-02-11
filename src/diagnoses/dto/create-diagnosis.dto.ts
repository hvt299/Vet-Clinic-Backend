import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DiagnosisType } from '../schemas/diagnosis.schema';

export class CreateDiagnosisDto {
    @ApiProperty({ example: '65f1...', description: 'ID Phiên khám' })
    @IsNotEmpty()
    @IsMongoId()
    treatmentSessionId: string;

    @ApiProperty({ example: 'Viêm phổi do vi khuẩn', description: 'Tên bệnh' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ enum: DiagnosisType, default: DiagnosisType.PRIMARY })
    @IsNotEmpty()
    @IsEnum(DiagnosisType)
    type: DiagnosisType;

    @ApiProperty({ example: 'Bạch cầu tăng cao, X-quang phổi mờ', description: 'Kết quả xét nghiệm' })
    @IsOptional()
    @IsString()
    clinicalTest?: string;

    @ApiProperty({ example: 'Cần theo dõi thêm nhịp thở', required: false })
    @IsOptional()
    @IsString()
    note?: string;
}