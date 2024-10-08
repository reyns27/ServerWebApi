import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptorGlobalResponseApi } from './common/interceptors/transformInterceptorGlobal';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Server Web Api')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .addTag('rol')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin:"*"
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptorGlobalResponseApi());
  app.useGlobalFilters(new AllExceptionsFilter());
  const PORT = 3000;
  //add
  await app.listen(PORT, "0.0.0.0");
}
bootstrap();