import { AuthService } from './../auth/auth.service';
import { LocalStrategy } from './../../common/strategies/local.strategy';
import { JwtStrategy } from './../../common/strategies/jwt.strategy';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { User, UserSchema } from './schema/user.schema';
import { HashService } from 'src/common/services/hash/hash.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '24h' },
      }),
],
    controllers: [UserController],
    providers: [UserService, HashService, AuthService, JwtStrategy, LocalStrategy]
})
export class UserModule {}
