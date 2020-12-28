import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<em>SA Technologies Backend server started successfully {--}</em>`;
  }
}
