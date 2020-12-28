import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { SecurityService } from './security.service';
import { Observable } from 'rxjs';
import { SecurityDto } from './dto/security.dto';
import { SecurityInterface } from './interface/security.interface';

@Controller('api/')
export class SecurityController {
  private logger = new Logger('SecurityController');

  constructor(private readonly authService: SecurityService) {}

  @Post('security/login')
  public async login(@Body() userData: SecurityDto): Promise<SecurityDto> {
    return await this.authService.login(userData);
  }

  @Post('security/signup')
  public async signUp(@Body() userData: SecurityInterface): Promise<any> {
    this.logger.debug(`Security Controller: ${userData}`);
    return await this.authService.signUp(userData);
  }

  @Get('security/profile/:userId')
  public async profile(@Param('userId') userId: string): Promise<any> {
    return await this.authService.userProfile(userId);
  }
}
