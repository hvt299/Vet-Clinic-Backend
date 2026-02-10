import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateVaccineDto {
    @ApiProperty({ example: 'Rabies Vaccine (Dại)', description: 'Tên vắc-xin' })
    @IsNotEmpty({ message: 'Tên vắc-xin không được để trống' })
    @IsString()
    name: string;

    @ApiProperty({ example: 'Tiêm nhắc lại hàng năm', required: false })
    @IsOptional()
    @IsString()
    description?: string;
}