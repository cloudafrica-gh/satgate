import { HttpModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB_URI } from './constants';
import { SecurityModule } from './security/security.module';
import { MazzumaModule } from './mazzuma/mazzuma.module';
import { MerchantsController } from './merchants/merchants.controller';
import { GetUserMiddleware } from './middleware/getuser.middleware';
import { MerchantsModule } from './merchants/merchants.module';
import { AuthModule } from './auth/auth.module';
import { WtcaccraModule } from './wtcaccra/wtcaccra.module';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    SecurityModule,
    MongooseModule.forRoot(process.env.MONGODB_URI || MONGODB_URI),
    MerchantsModule,
    MazzumaModule,
    WtcaccraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetUserMiddleware).forRoutes(MerchantsController);
  }
}
