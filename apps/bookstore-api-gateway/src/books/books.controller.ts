import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBooksDto, UpdateBooksDto } from './books.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @MessagePattern('books.create')
  create(@Payload() createBookDto: CreateBooksDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern('findAll')
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern('findOne')
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern('update')
  update(@Payload() updateBookDto: UpdateBooksDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern('delete')
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
