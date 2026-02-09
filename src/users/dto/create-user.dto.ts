import { IsNotEmpty, IsString, IsEnum, IsOptional, IsBoolean, Matches, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'nguyenvana', description: 'Tên đăng nhập duy nhất' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: 'Pass123@', description: 'Mật khẩu mạnh' })
    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { 
        message: 'Mật khẩu quá yếu (cần chữ hoa, thường, số & ký tự đặc biệt)' 
    })
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