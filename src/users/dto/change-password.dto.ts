import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, Matches } from 'class-validator';

export class ChangePasswordDto {
    @ApiProperty({
        description: 'Mật khẩu cũ để xác thực quyền sở hữu',
        example: 'OldPass123!'
    })
    @IsNotEmpty({ message: 'Mật khẩu cũ không được để trống' })
    oldPassword: string;

    @ApiProperty({
        description: 'Mật khẩu mới (Tối thiểu 8 ký tự, bao gồm chữ hoa, thường, số và ký tự đặc biệt)',
        example: 'NewPass123@'
    })
    @IsNotEmpty({ message: 'Mật khẩu mới không được để trống' })
    @MinLength(8, { message: 'Mật khẩu mới phải có ít nhất 8 ký tự' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Mật khẩu mới quá yếu (cần chữ hoa, thường, số & ký tự đặc biệt)'
    })
    newPassword: string;
}