import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePetDto {
    @ApiProperty({ example: '65f2a...', description: 'ID của Khách hàng (Chủ sở hữu)' })
    @IsNotEmpty()
    @IsMongoId({ message: 'ID khách hàng không hợp lệ' })
    customerId: string;

    @ApiProperty({ example: 'Milu', description: 'Tên thú cưng' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 'Chó', description: 'Loài (Chó, Mèo...)' })
    @IsNotEmpty()
    @IsString()
    species: string;

    @ApiProperty({ example: 'Poodle', required: false })
    @IsOptional()
    @IsString()
    breed?: string;

    @ApiProperty({ enum: ['MALE', 'FEMALE', 'UNKNOWN'], example: 'MALE' })
    @IsOptional()
    @IsEnum(['MALE', 'FEMALE', 'UNKNOWN'])
    gender?: string;

    @ApiProperty({ example: '2023-01-01', description: 'Ngày sinh (ISO 8601)' })
    @IsOptional()
    @IsDateString({}, { message: 'Ngày sinh phải đúng định dạng YYYY-MM-DD' })
    dob?: string;

    @ApiProperty({ example: 5.5, description: 'Cân nặng (kg)' })
    @IsOptional()
    @IsNumber()
    weight?: number;

    @ApiProperty({ example: false, description: 'Đã triệt sản chưa?' })
    @IsOptional()
    @IsBoolean()
    sterilization?: boolean;

    @ApiProperty({ example: 'Lông màu vàng, đuôi ngắn', required: false })
    @IsOptional()
    @IsString()
    characteristic?: string;

    @ApiProperty({ example: 'Dị ứng Paracetamol', required: false })
    @IsOptional()
    @IsString()
    drugAllergy?: string;
}