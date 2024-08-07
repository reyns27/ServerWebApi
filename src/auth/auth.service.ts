import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { AuthResponse } from 'src/common/utils/AuthResponse';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtTokenService: JwtService,
      ) { }
      
    async loginWithCredentials(user: AuthDto) {
        const { email, password } = user;

        try {
          const findUser = await this.userService.getUser(email);
          if (!findUser) return new HttpException('USER_NOT_FOUND', HttpStatus.FOUND);
      
          const CheckPassowrd = await compare(password, findUser.password);
          if (!CheckPassowrd)
            return new HttpException('PASSWORD_INCORRECT', HttpStatus.UNAUTHORIZED);
      
          const payload = {
            id: findUser.Id,
            name: findUser.userName,
          };
      
          const Token = this.jwtTokenService.sign(payload);
      
      
          return new AuthResponse({ ...findUser, password: "****************" },Token);
        } catch (error) {
          return new AuthResponse(error,null);
        }
       
      }
}
