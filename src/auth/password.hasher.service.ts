import { Injectable } from '@nestjs/common';
import * as bCrypt from 'bcryptjs';

@Injectable()
export class PasswordHasherService {
  async hashPassword(password: string): Promise<any> {
    return await bCrypt.hash(password, 10);
  }

  async comparePasswords(plainText: string, encryptedPassword: string): Promise<boolean> {
    return await bCrypt.compare(plainText, encryptedPassword);
  }
}
