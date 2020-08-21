import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



function swaggerConfig(app) {
  const options = new DocumentBuilder()
  .setTitle('Farmers API')
  .setDescription('This is the API documentation for a challenge')
  .setVersion('1.0')
  .addTag('Farmers')
  .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  swaggerConfig(app);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();