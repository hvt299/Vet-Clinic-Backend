import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMedicineDto {
    @ApiProperty({ example: 'Paracetamol 500mg', description: 'Tên thuốc' })
    @IsNotEmpty({ message: 'Tên thuốc không được để trống' })
    @IsString()
    name: string;

    @ApiProperty({ enum: ['PO', 'IM', 'IV', 'SC'], example: 'MALE', description: 'Đường dùng' })
    @IsNotEmpty({ message: 'Đường dùng không được để trống' })
    @IsEnum(['PO', 'IM', 'IV', 'SC'], { message: 'Đường dùng không hợp lệ (PO, IM, IV, SC)' })
    route: string;

    @ApiProperty({ example: 'Thuốc hạ sốt, giảm đau', required: false })
    @IsOptional()
    @IsString()
    description?: string;
}