import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('Backend API for Nguyen Tien Phat Portfolio')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
      "access-token",
    )
    .build();


  const document = SwaggerModule.createDocument(
    app,
    config,
    {
      extraModels: [],
    },
  );


  SwaggerModule.setup(
    'api/docs',
    app,
    document,
  );

  app.enableCors({
    origin: [
      'http://localhost:3001',
      'http://localhost:3000',
      'https://portfolio-eight-olive-14.vercel.app',
    ],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
