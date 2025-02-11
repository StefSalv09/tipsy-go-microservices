import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto } from '@app/contracts/books/book.dto';
import { BOOKS_PATTERN } from '@app/contracts/books/books.pattern';


@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {
    console.log('BooksController From The App');
  }

  @MessagePattern(BOOKS_PATTERN.CREATE)
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern(BOOKS_PATTERN.FINDALL)
  async findAll() {
    return await this.booksService.findAll();
  }

  @MessagePattern(BOOKS_PATTERN.FINDONE)
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern(BOOKS_PATTERN.UPDATE)
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern(BOOKS_PATTERN.REMOVE)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
