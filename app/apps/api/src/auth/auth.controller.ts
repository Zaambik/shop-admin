import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { GetAdmin } from './decorator/user.decorator';

@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) {}

   @Post('register')
   register(
      @GetAdmin() state: boolean,
      @Body() dto: AuthDto
      ) {
      return state && this.authService.register(dto);
   }

   @HttpCode(HttpStatus.OK)
   @Post('login')
   login(@Body() dto: AuthDto) {
      return this.authService.login(dto);
   }
}
