import { NestFactory } from '@nestjs/core';
import { EnduserModule } from './enduser.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ENV } from 'apps/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EnduserModule,
    {
      transport: Transport.TCP,
      options: {
        port: ENV.END_USER_PORT,
        host: '0.0.0.0',
      }
    }
  );
  await app.listen();
}
bootstrap();
