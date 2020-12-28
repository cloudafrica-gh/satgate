import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DefaultUtilityService {
  private logger = new Logger('DefaultUtilityService');

  public generateRandomMerchantKeys(): any {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const date1 = new Date();
    const day = (date1.getDate() < 10 ? '0' : '') + date1.getDate();
    const month =
      (date1.getMonth() + 1 < 10 ? '0' : '') + (date1.getMonth() + 1);
    const year = date1.getFullYear().toString().substr(2, 2);
    const customDate = '' + month + day + year;
    for (let i = 0; i < 24; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    const transId = text + customDate;
    this.logger.log('generated MerchantKey ++++ ' + transId);
    return transId;
  }

  public generateMerchantSecret(): any {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-0123456789';
    const date2 = new Date();
    const day = (date2.getDate() < 10 ? '0' : '') + date2.getDate();
    const month =
      (date2.getMonth() + 1 < 10 ? '0' : '') + (date2.getMonth() + 1);
    const year = date2.getFullYear().toString().substr(2, 2);
    const customDate = '' + month + day + year;
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    const transId = text + customDate;
    this.logger.log('generated MerchantSecret --- ' + transId);
    return transId;
  }
}
