import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE)
    .setDescription(process.env.SWAGGER_DESC)
    .setVersion(process.env.SWAGGER_VERSION)
    .build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/api/v2/', app, doc);

  await app.listen(3000);
}
bootstrap();
