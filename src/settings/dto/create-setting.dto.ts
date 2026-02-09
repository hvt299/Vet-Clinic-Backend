import { IsString, IsOptional, IsArray, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSettingDto {
    @ApiProperty({ example: 'Phòng khám Thú Y', description: 'Tên phòng khám' })
    @IsString()
    @IsOptional()
    clinicName?: string;

    @ApiProperty({ example: 'https://logo-url.com/img.png', description: 'Logo URL' })
    @IsString()
    @IsOptional()
    logo?: string;

    @ApiProperty({ example: 'Nguyễn Văn A', description: 'Tên người đại diện' })
    @IsString()
    @IsOptional()
    representativeName?: string;

    @ApiProperty({ example: 'contact@minmin.com', description: 'Email liên hệ' })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({ example: ['0905123456', '0912345678'], description: 'Danh sách SĐT' })
    @IsArray()
    @IsOptional()
    phoneNumbers?: string[];

    @ApiProperty({ example: ['123 Đường A, Đà Nẵng', '456 Đường B, Huế'], description: 'Danh sách địa chỉ' })
    @IsArray()
    @IsOptional()
    addresses?: string[];
}