import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Critical for React to talk to Nest
  await app.listen(3000);
}
bootstrap();
