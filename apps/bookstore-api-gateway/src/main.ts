import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';
import { ENV } from 'apps/config';
import { transports, format } from 'winston';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);
  console.log('app :>> ', 'hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
  await app.listen(ENV.PORT ?? 3000);
}
bootstrap();