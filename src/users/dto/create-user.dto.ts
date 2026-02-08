import { IsNotEmpty, IsString, IsEnum, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'nguyenvana', description: 'Tên đăng nhập duy nhất' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: '123456', description: 'Mật khẩu (sẽ được mã hóa)' })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: 'Nguyen Van A', description: 'Họ và tên đầy đủ' })
    @IsNotEmpty()
    @IsString()
    fullName: string;

    @ApiProperty({ example: 'https://example.com/avatar.jpg', required: false })
    @IsOptional()
    @IsString()
    avatar?: string;

    @ApiProperty({ enum: ['ADMIN', 'STAFF'], default: 'STAFF' })
    @IsEnum(['ADMIN', 'STAFF'])
    role: string;

    @ApiProperty({ example: true, description: 'Trạng thái hoạt động', required: false })
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}