import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './models/user/user.module';
import { HashService } from './common/services/hash/hash.service';
import { AuthModule } from './models/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.l1zps.mongodb.net/minisdb?retryWrites=true&w=majority'),
   AuthModule,
   UserModule,
  
],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
