import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
    @ApiProperty({ example: 'Nguyen Van A', description: 'Tên khách hàng' })
    @IsNotEmpty({ message: 'Tên không được để trống' })
    @IsString()
    name: string;

    @ApiProperty({ enum: ['MALE', 'FEMALE', 'UNKNOWN'], example: 'MALE' })
    @IsOptional()
    @IsEnum(['MALE', 'FEMALE', 'UNKNOWN'])
    gender?: string;

    @ApiProperty({ example: '0901234567', description: 'Số điện thoại duy nhất' })
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @ApiProperty({ example: '012345678910', required: false })
    @IsOptional()
    @IsString()
    identityCard?: string;

    @ApiProperty({ example: '123 Đường ABC, Hà Nội', required: false })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiProperty({ example: 'Khách VIP, khó tính', required: false })
    @IsOptional()
    @IsString()
    note?: string;
}