import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './customer/client.module';
import { CompanyModule } from './company/company.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MailerModule } from '@nestjs-modules/mailer';
import { MorganModule } from 'nest-morgan';


@Module({
  imports: [
    MailerModule.forRoot({
      transport:{
        host:'live.smtp.mailtrap.io',
        port: 587,
        secure:true,
        auth:{
          user:'api',
          pass:'d8c1ed3bc9ab4124a1a4fa977204d294'
        }
      }
    }),
    ServeStaticModule.forRoot({rootPath:join(__dirname,'../','client/dist')}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      //ssl:true,
      //host: 'dpg-cr3iiraj1k6c73dnoqo0-a.oregon-postgres.render.com',
      host:'presmatodbserver',
      port: 5432,
      //username: 'master',
      username:'root',
      //password: 'ZpfzCewIc74bBOeGZjYxlHiYLlcCJVv7',
      password:'prestamo.master.api**',
      //database: 'masterdb_2y6l',
      database:'prestamodb',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      autoLoadEntities:true,
      synchronize: true
    }),
    UserModule,
    RolModule,
    AuthModule,
    ClientModule,
    CompanyModule,
    MorganModule
  ]
})
export class AppModule {}