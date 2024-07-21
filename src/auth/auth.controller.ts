import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller()
export class AuthController {
    constructor(private authServices:AuthService){}

    @ApiTags('auth')
    @Post()
    async login(@Body() authDto:AuthDto){
       return await this.authServices.loginWithCredentials(authDto);
    }
}