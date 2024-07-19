import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ssl:true,
      host: 'dpg-cqd5iuhu0jms73e9amf0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'master',
      password: 'Hy9lIQsbbshlFVzAqpDHoywg4ibNlWpy',
      database: 'masterdb_amez',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      autoLoadEntities:true,
      synchronize: true,
    }),
    UserModule,
    RolModule,
    AuthModule,
    ClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}