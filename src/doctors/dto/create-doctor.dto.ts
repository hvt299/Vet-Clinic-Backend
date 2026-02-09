import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsOptional, IsBoolean } from 'class-validator';

export class CreateDoctorDto {
    @ApiProperty({ example: 'Nguyen Van A', description: 'Tên bác sĩ' })
    @IsNotEmpty({ message: 'Tên không được để trống' })
    @IsString()
    name: string;

    @ApiProperty({ example: '0901234567', description: 'Số điện thoại duy nhất' })
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @ApiProperty({ example: '012345678910', required: false })
    @IsOptional()
    @IsString()
    identityCard?: string;

    @ApiProperty({ enum: ['MALE', 'FEMALE', 'UNKNOWN'], example: 'MALE' })
    @IsOptional()
    @IsEnum(['MALE', 'FEMALE', 'UNKNOWN'])
    gender?: string;

    @ApiProperty({ example: '123 Đường ABC, Hà Nội', required: false })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiProperty({ example: 'Chuyên khoa ngoại', required: false })
    @IsOptional()
    @IsString()
    note?: string;

    @ApiProperty({ example: true, description: 'Trạng thái hoạt động', required: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @ApiProperty({ example: 'https://example.com/avatar.jpg', required: false })
    @IsOptional()
    @IsString()
    avatar?: string;
}