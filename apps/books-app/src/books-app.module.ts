import { Module } from '@nestjs/common';
import { BooksAppController } from './books-app.controller';
import { BooksAppService } from './books-app.service';

@Module({
  imports: [],
  controllers: [BooksAppController],
  providers: [BooksAppService],
})
export class BooksAppModule { }
