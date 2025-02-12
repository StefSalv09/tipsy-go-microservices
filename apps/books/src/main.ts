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
        port: 6001,
        // host: ENV.HOST
      }
    }
  );
  app.listen();
}
bootstrap();
