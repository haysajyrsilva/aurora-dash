import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { // This is the entry point that bootstraps your entire application
  const app = await NestFactory.create(AppModule); // Creates a NestJS application instance
  await app.listen(process.env.PORT ?? 3000); // Starts the server on port 3000
}
bootstrap();
