import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({ example: 'admin', description: 'Tên đăng nhập' })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({ example: '123456', description: 'Mật khẩu' })
    @IsNotEmpty()
    @IsString()
    password: string;
}