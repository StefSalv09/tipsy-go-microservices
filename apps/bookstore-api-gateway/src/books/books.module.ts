import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ENV } from 'apps/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKS_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 6001,
          // host: ENV.HOST
        }
      }
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {
  constructor() {
    console.log('BooksModule From the Gateway');
  }
}
