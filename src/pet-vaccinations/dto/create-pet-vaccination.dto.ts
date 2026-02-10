import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsDateString, IsMongoId } from 'class-validator';

export class CreatePetVaccinationDto {
    @ApiProperty({ example: '65f1a...', description: 'ID Vắc xin' })
    @IsNotEmpty({ message: 'Vắc xin không được để trống' })
    @IsMongoId({ message: 'ID Vắc xin không hợp lệ' })
    vaccineId: string;

    @ApiProperty({ example: '65f1a...', description: 'ID Khách hàng' })
    @IsNotEmpty({ message: 'Khách hàng không được để trống' })
    @IsMongoId({ message: 'ID Khách hàng không hợp lệ' })
    customerId: string;

    @ApiProperty({ example: '65f1a...', description: 'ID Thú cưng' })
    @IsNotEmpty({ message: 'Thú cưng không được để trống' })
    @IsMongoId({ message: 'ID Thú cưng không hợp lệ' })
    petId: string;

    @ApiProperty({ example: '65f1a...', description: 'ID Bác sĩ' })
    @IsNotEmpty({ message: 'Bác sĩ không được để trống' })
    @IsMongoId({ message: 'ID Bác sĩ không hợp lệ' })
    doctorId: string;

    @ApiProperty({ example: '2023-10-25', description: 'Ngày tiêm' })
    @IsNotEmpty({ message: 'Ngày tiêm không được để trống' })
    @IsDateString({}, { message: 'Ngày tiêm phải đúng định dạng ngày tháng' })
    vaccinationDate: string;

    @ApiProperty({ example: '2024-10-25', description: 'Ngày tái chủng', required: false })
    @IsOptional()
    @IsDateString({}, { message: 'Ngày tái chủng phải đúng định dạng ngày tháng' })
    nextVaccinationDate?: string;

    @ApiProperty({
        enum: ['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'MISSED'],
        example: 'SCHEDULED',
        default: 'SCHEDULED'
    })
    @IsOptional()
    @IsEnum(['SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'MISSED'])
    status?: string;

    @ApiProperty({ example: 'Sức khỏe tốt sau tiêm', required: false })
    @IsOptional()
    @IsString()
    note?: string;
}