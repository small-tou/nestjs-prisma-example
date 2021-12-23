import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { AllExceptionFilter } from './interceptor/error.filter';
import { AuthGuard } from './interceptor/auth.guard';
import { ConfigService } from '@nestjs/config';
import { ENodeEnv, NestConfig } from './config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  if (NestConfig.nodeEnv !== ENodeEnv.production) {
    const config = new DocumentBuilder()
      .setTitle('api')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addBearerAuth({
        description: `Please enter token`,
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      })
      .addServer('../')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }

  app.useGlobalGuards(new AuthGuard(configService));
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(NestConfig.port);
}
bootstrap();
