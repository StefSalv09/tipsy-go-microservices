import { NestFactory } from '@nestjs/core';
import { BooksAppModule } from './books-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ENV } from 'apps/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BooksAppModule,
    {
      transport: Transport.TCP,
      options: {
        port: ENV.BOOKS_PORT,
        // host: ENV.HOST
      }
    }
  );
  app.listen();
}
bootstrap();
