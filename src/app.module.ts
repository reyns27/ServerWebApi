import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './customer/client.module';
import { CompanyModule } from './company/company.module';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath:join(__dirname,'../','client/dist')}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      ssl:true,
      host: 'dpg-cr3iiraj1k6c73dnoqo0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'master',
      password: 'ZpfzCewIc74bBOeGZjYxlHiYLlcCJVv7',
      database: 'masterdb_2y6l',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      autoLoadEntities:true,
      synchronize: true
    }),
    UserModule,
    RolModule,
    AuthModule,
    ClientModule,
    CompanyModule
  ]
})
export class AppModule {}